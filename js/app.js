/* Game data (warbands, equipment, skills, spells, races, hired swords) is loaded from the data/ folder by js/loader.js before this file runs. */
const EQ_ITEMS = Object.entries(EQUIPMENT).flatMap(([k,g]) => g.list.map(e => ({...e,cat:k})));
const P9 = s => { const k = ["M","WS","BS","S","T","W","I","A","Ld"], v = s.split(" ").map(Number); return Object.fromEntries(k.map((x,i)=>[x,v[i]])); };
const HIRED = HIRED_RAW.map(h => ({kind:"hired", ...h, stats:P9(h.st), skills:(h.sk||"").split(" ").filter(Boolean)}));
HIRED.forEach(h => { if(!RACES[h.race]) RACES[h.race] = {n:RACE_NAMES[h.race]||h.race, max:{}}; });

const KEY = "mordheim-warband-v1";
const OPEN = new Set(); /* which collapsible sections are open, so re-rendering keeps them open */
const $ = id => document.getElementById(id);
let S = { type:"reikland", name:"", gold:WARBANDS.reikland.gold, units:[] };

function load(){
  try { const raw = localStorage.getItem(KEY); if(raw){ const d = JSON.parse(raw); if(WARBANDS[d.type]){ S = d; S.units = S.units.filter(u=>def(u)).map(norm); } } } catch(e){}
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }

const wb = () => WARBANDS[S.type];
const def = u => wb().units.find(d => d.id === u.typeId) || (S.custom||[]).find(d => d.id === u.typeId) || HIRED.find(d => d.id === u.typeId);
const isHired = u => def(u).kind === "hired";
const warriors = () => S.units.filter(u=>!isHired(u) && !def(u).noCount).reduce((s,u)=>s+u.qty,0);
const heroCount = () => S.units.filter(u=>def(u).kind==="hero").length;
const allowedGear = d => { const ok = d.gear || wb().gear; return EQ_ITEMS.filter(e => ok.includes(e.n) || ok.includes(e.cat)); };
const nm = x => typeof x==="string" ? x : x.n;
const ds = x => typeof x==="string" ? "" : (x.d||"");
const stp = (attrs,v,min,max,lbl) => `<span class="stp"><button type="button" data-step="-1" aria-label="Decrease ${esc(lbl)}" ${v<=min?"disabled":""}>−</button><input type="number" ${attrs} min="${min}" ${max!=null?`max="${max}"`:""} value="${v}" aria-label="${esc(lbl)}"><button type="button" data-step="1" aria-label="Increase ${esc(lbl)}" ${max!=null&&v>=max?"disabled":""}>+</button></span>`;
const descr = t => t ? `<span class="dsc">${esc(t)}</span>` : "";
const norm = u => ({xp:0,skills:[],spells:[],other:"",adv:{},styles:{},opts:[],inj:[],miss:0,lvl:0,...u});
const raceName = d => (RACES[d.race] && RACES[d.race].n) || d.race || "";
const SKILL_ITEMS = Object.values(SKILLS).flatMap(g => g.list).filter(x => typeof x !== "string");
const STAT_KEYS = ["M","WS","BS","S","T","W","I","A","Ld"];
const fxTag = e => { const p = [];
  if(e.fx) Object.entries(e.fx).forEach(([k,v])=>p.push(k+" "+(v>0?"+":"")+v));
  if(e.cap) Object.entries(e.cap).forEach(([k,v])=>p.push("max "+k+" +"+v));
  if(e.sv!=null) p.push("Sv "+e.sv+"+");
  if(e.svMin!=null) p.push("Sv "+e.svMin+"+ alone, +"+(e.svBonus||0)+" with armour"); else if(e.svBonus) p.push("Sv +"+e.svBonus);
  return p.length ? `<span class="fx">${esc(p.join(", "))}</span>` : ""; };
function calcSv(items){
  let base = null, min = null, bonus = 0;
  items.forEach(e=>{ if(e.sv!=null) base = base==null ? e.sv : Math.min(base,e.sv);
    if(e.svMin!=null) min = min==null ? e.svMin : Math.min(min,e.svMin); bonus += e.svBonus||0; });
  if(base==null) return min;
  return Math.max(2, base - bonus);
}
function statCalc(u){
  const d = def(u); if(!d.stats) return null;
  const base = [...u.gear.map(n=>EQ_ITEMS.find(e=>e.n===n)), ...u.skills.map(n=>SKILL_ITEMS.find(e=>e.n===n)), ...(u.opts||[]).map(n=>optGroup(u)&&optGroup(u).list.find(e=>e.n===n)), ...kitItemsOf(u).map(n=>EQ_ITEMS.find(e=>e.n===n)), ...kitChosen(u).filter(o=>o.sv!=null).map(o=>({sv:o.sv})), ...(u.inj||[]).filter(x=>x.fx).map(x=>({fx:x.fx})), ...(d.sv!=null ? [{sv:d.sv}] : [])].filter(Boolean);
  const g = styleGroup(u), used = g ? g.list.filter(e=>(u.styles||{})[e.n]) : [];
  const items = [...base, ...(used.length===1 ? styleItems(used[0]) : [])];
  const race = RACES[d.race] || {n:d.race||"",max:{}};
  const rows = {};
  STAT_KEYS.forEach(k=>{
    const base = d.stats[k]||0, adv = (u.adv&&u.adv[k])||0;
    const mod = items.reduce((t,e)=>t+((e.fx&&e.fx[k])||0),0);
    const cap = race.max[k]==null ? null : race.max[k] + items.reduce((t,e)=>t+((e.cap&&e.cap[k])||0),0);
    rows[k] = {base,adv,mod,total:base+adv+mod,cap};
  });
  return {rows, sv:calcSv(items), svs:used.length>1 ? used.map(e=>({n:e.n,sv:calcSv([...base,...styleItems(e)])})) : null, race};
}
function statsBox(u,i,d){
  const c = statCalc(u); if(!c) return "";
  const canAdv = d.kind!=="henchman" && !d.noXp;
  const cls = r => r.cap==null ? "" : r.total>r.cap ? "over" : r.total>=r.cap ? "max" : "";
  const row = (label,fn,extra="") => `<tr><td>${label}</td>${STAT_KEYS.map(k=>`<td class="${cls(c.rows[k])&&label==="Total"?cls(c.rows[k]):""}">${fn(k,c.rows[k])}</td>`).join("")}<td>${extra}</td></tr>`;
  const atMax = STAT_KEYS.filter(k=>cls(c.rows[k])==="max"||cls(c.rows[k])==="over");
  const key = i+":stats";
  return `<details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>Stats and save (${esc(c.race.n)})${atMax.length?" - at max: "+atMax.join(", "):""}</summary>
    <div class="statwrap"><table class="stt"><tr><th></th>${STAT_KEYS.map(k=>`<th>${k}</th>`).join("")}<th>Sv</th></tr>
    ${row("Base",(k,r)=>k==="M"&&d.mLabel?d.mLabel:r.base)}
    ${canAdv ? row("Advances",(k,r)=>{ const room = r.cap==null ? 99 : Math.max(0,r.cap-r.base-r.mod);
      return stp(`data-i="${i}" data-adv="${k}"`,r.adv,0,Math.max(r.adv,room),k+" advance"); }) : ""}
    ${row("Gear and skills",(k,r)=>r.mod ? (r.mod>0?"+":"")+r.mod : "")}
    ${row("Total",(k,r)=>`<b>${k==="M"&&d.mLabel?d.mLabel:r.total}</b>${r.cap!=null&&r.total>r.cap?" over":r.cap!=null&&r.total>=r.cap?" max":""}`,`<b>${c.sv?c.sv+"+":"-"}</b>`)}
    ${row("Race max",(k,r)=>r.cap==null?"":r.cap)}
    </table></div>${c.svs?`<p class="tag">Save by style: ${c.svs.map(x=>esc(x.n)+" "+(x.sv?x.sv+"+":"none")).join(", ")}</p>`:""}</details>`;
}
const kitSelects = (u,i) => kitGroups(def(u)).map((g,k)=>`<label class="kitsel">${esc(g.n)} <select data-kit="${esc(g.n)}" data-i="${i}" aria-label="${esc(g.n)} for ${esc(unitName(u))}">${g.list.map(o=>`<option value="${esc(o.n)}" ${kitChosen(u)[k]===o?"selected":""}>${esc(o.n)}</option>`).join("")}</select></label>`).join(" ");
const hiredCount = () => S.units.filter(isHired).length;
const canHire = d => {
  const w = wb(), ids = [S.type, ...(w.tags||[])];
  if((d.excl||[]).some(x=>count(x)>0) || HIRED.some(h=>count(h.id)>0 && (h.excl||[]).includes(d.id))) return false;
  if(w.hireNone) return false;
  if((w.noHire||[]).includes(d.id)) return false;
  if(w.hireOnly) return w.hireOnly.includes(d.id) || (w.hireRaces||[]).includes(d.race);
  if(w.noRaces && w.noRaces.includes(d.race)) return false;
  if(w.hireExplicit){ const ex = w.hireTags || ids; return !!d.only && d.only.some(x=>ex.includes(x)) && !(d.not||[]).some(x=>ids.includes(x)); }
  if(w.hireAll && !String(d.g).startsWith("dp")) return !(w.noHire||[]).includes(d.id);
  return (!d.only || d.only.some(x=>ids.includes(x))) && !(d.not||[]).some(x=>ids.includes(x));
};
const priceOf = (u,n) => { const d = def(u), o = (d.costs && d.costs[n]) ?? (wb().costs && wb().costs[n]); return o!=null ? o : (EQ_ITEMS.find(e=>e.n===n)?.c||0); };
const gearCost = u => u.gear.reduce((s,g)=> s + priceOf(u,g), 0);
const optGroup = u => def(u).opts && wb().opts && wb().opts[def(u).opts];
const optCost = u => { const g = optGroup(u); if(!g) return 0;
  const cs = (u.opts||[]).map(n=>(g.list.find(e=>e.n===n)||{c:0}).c); return cs.length ? cs[0] + (g.dbl ? 2 : 1) * cs.slice(1).reduce((a,b)=>a+b,0) : 0; };
const styleGroup = u => def(u).sets && wb().sets && wb().sets[def(u).sets];
const styleItems = e => (e.includes||[]).map(n=>EQ_ITEMS.find(x=>x.n===n)).filter(Boolean);
const styleCost = u => { const g = styleGroup(u); return g ? g.list.reduce((t,e)=>t+e.c*((u.styles||{})[e.n]||0),0) : 0; };
const unitCost = u => (def(u).c + gearCost(u)) * u.qty + styleCost(u) + optCost(u);
function trimStyles(u){ let used = Object.values(u.styles||{}).reduce((a,b)=>a+b,0);
  for(const k of Object.keys(u.styles||{}).reverse()){ if(used<=u.qty) break;
    const cut = Math.min(u.styles[k], used-u.qty); u.styles[k] -= cut; used -= cut; if(!u.styles[k]) delete u.styles[k]; } }
/* Hired swords with a choice of kit (kitOptions in data/hired-swords.js): the pick is stored in u.kitPick, {group name: option name}. The first option is the default. */
const kitGroups = d => d.kitOptions || [];
const kitChosen = u => kitGroups(def(u)).map(g => g.list.find(o=>o.n===(u.kitPick||{})[g.n]) || g.list[0]);
const kitText = u => { const d = def(u); return kitGroups(d).length ? [...kitChosen(u).map(o=>o.txt!=null ? o.txt : o.n), d.kitBase].filter(Boolean).join(", ") : (d.kit||""); };
const kitItemsOf = u => [...(def(u).kitItems||[]), ...kitChosen(u).flatMap(o=>o.kitItems||[])];
const kitRating = u => kitChosen(u).reduce((t,o)=>t+(o.rt||0),0);
/* A short weapon/armour profile line for a hired sword's kit, built from real equipment.js items where the kit could be matched to one. */
const kitProfile = u => { const c = {}; kitItemsOf(u).forEach(n=>c[n]=(c[n]||0)+1);
  return Object.entries(c).map(([n,k])=>{ const e = EQ_ITEMS.find(x=>x.n===n); if(!e) return "";
    const w = wpnLine(e); if(!w && e.cat!=="armour") return ""; return `<span class="chip">${esc(n)}${k>1?" x"+k:""} ${w}</span>`; }).filter(Boolean).join(" "); };
const unitRating = u => (def(u).rt || (def(u).large ? 20 : 5)) * u.qty + kitRating(u) + (def(u).noXp ? 0 : (u.xp||0)); /* 5 per model, 20 per large creature, plus experience */
const count = id => S.units.filter(u=>u.typeId===id).reduce((s,u)=>s+u.qty,0);

function setsBox(u,i,d){
  const g = styleGroup(u); if(!g) return "";
  const used = Object.values(u.styles||{}).reduce((t,x)=>t+x,0), key = i+":sets";
  return `<details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>${g.n} (${used}/${u.qty} equipped)</summary><div class="gear">${g.list.map(e=>{
    const n = (u.styles||{})[e.n]||0, sv = calcSv(styleItems(e));
    return `<div class="gl">${stp(`data-i="${i}" data-style="${esc(e.n)}"`,n,0,n+(u.qty-used),e.n)}${esc(e.n)} <span class="tag">${e.c} gc</span><span class="tag">${esc(e.includes.join(", "))}</span>${sv?`<span class="fx">Sv ${sv}+</span>`:""}</div>`;
  }).join("")}</div></details>`;
}
function optsBox(u,i,d){
  const g = optGroup(u); if(!g) return "";
  const key = i+":opts";
  return `<details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>${g.n} (${(u.opts||[]).length}, ${optCost(u)} gc)</summary><div class="gear">${g.list.map(e=>`<label title="${esc(e.d||"")}"><input type="checkbox" data-i="${i}" data-opt="${esc(e.n)}" ${(u.opts||[]).includes(e.n)?"checked":""}>${esc(e.n)} <span class="tag">${e.c}</span>${descr(e.d)}</label>`).join("")}</div></details>`;
}
function extras(u,i,d){
  const box = (g,kind) => `<details data-k="${i}:${kind}:${g.n}" ${OPEN.has(i+":"+kind+":"+g.n)?"open":""}><summary>${g.n} ${kind} (${u[kind].filter(x=>g.list.map(nm).includes(x)).length})</summary><div class="gear">${g.list.length ? g.list.map(x=>`<label title="${esc(ds(x))}"><input type="checkbox" data-i="${i}" data-pick="${kind}" data-v="${esc(nm(x))}" ${u[kind].includes(nm(x))?"checked":""}>${esc(nm(x))}${fxTag(x)}${descr(ds(x))}</label>`).join("") : `<span class="tag">Nothing listed yet. Add entries in the data block, or use the box below.</span>`}</div></details>`;
  return `<div class="row" style="margin-top:10px">
    ${d.noXp ? "" : `<div class="fld">${d.kind==="henchman"?"Group experience":"Experience"} ${stp(`data-i="${i}" data-f="xp"`,u.xp,0,null,"experience")}</div>`}
    <label style="flex:1;min-width:200px">Other skills, spells or notes <input data-i="${i}" data-f="other" value="${esc(u.other||"")}" placeholder="Anything not in the lists"></label></div>
    ${(d.skills||[]).map(k=>SKILLS[k]).filter(Boolean).map(g=>box(g,"skills")).join("")}${(d.spells||[]).map(k=>SPELLS[k]).filter(Boolean).map(g=>box(g,"spells")).join("")}`;
}
const wpnLine = e => { const parts=[]; if(e.rng!=null) parts.push(e.rng+"\""); if(e.str){ parts.push("S "+(/^[+-]/.test(e.str)?"user"+e.str:e.str)); } else if(e.str===""&&(e.cat==="melee"||EQ_ITEMS.find(x=>x.n===e.n&&x.cat==="melee"))) parts.push("S user");
  if(e.noSave) parts.push("no save"); else if(e.ap) parts.push("save "+e.ap);
  return parts.length ? `<span class="wpn">${parts.join(" · ")}</span>` : ""; };
function gearBox(u,i,d){
  const ok = allowedGear(d);
  return Object.entries(EQUIPMENT).map(([k,g])=>{
    const items = ok.filter(e=>e.cat===k); if(!items.length) return "";
    const have = items.reduce((t,e)=>t+u.gear.filter(x=>x===e.n).length,0);
    return `<details data-k="${i}:gear:${k}" ${OPEN.has(i+":gear:"+k)?"open":""}><summary>${g.n} (${have})</summary><div class="gear">${items.map(e=>{
      const n = u.gear.filter(x=>x===e.n).length, multi = (e.max||1)>1;
      const ctl = multi ? stp(`data-i="${i}" data-gq="${esc(e.n)}"`,n,0,e.max,e.n) : `<input type="checkbox" data-i="${i}" data-g="${esc(e.n)}" ${n?"checked":""}>`;
      const tag = multi ? 'div class="gl"' : "label", end = multi ? "div" : "label";
      return `<${tag} title="${esc([e.d,e.wd].filter(Boolean).join(" "))}">${ctl}${e.n} <span class="tag">${priceOf(u,e.n)}${multi?" each, up to "+e.max:""}</span>${wpnLine(e)}${fxTag(e)}${descr(e.wd||e.d)}</${end}>`;
    }).join("")}</div></details>`;
  }).join("");
}
function gearList(u){ const c = {}; u.gear.forEach(x=>c[x]=(c[x]||0)+1);
  const g = styleGroup(u);
  Object.entries(u.styles||{}).forEach(([n,k])=>{ const e = g && g.list.find(x=>x.n===n); c[n+(e?" ("+e.includes.join(", ")+")":"")] = k; });
  (u.opts||[]).forEach(n=>c[n]=1);
  return Object.entries(c).map(([n,k])=>k>1 ? n+" x"+k : n).join(", "); }
const unitCap = d => { let cap = d.max==null ? Infinity : d.max;
  if(d.maxPer) cap = Math.min(cap, d.maxPer.of.reduce((t,id)=>t+count(id),0) * d.maxPer.mult);
  return cap; };
const maxNow = () => wb().maxModels + S.units.reduce((t,u)=>t + ((def(u).bonusModels||0)*u.qty), 0);
const ruleText = u => [...u.skills, ...(u.spells||[]), u.other||"", def(u).note||""].filter(Boolean).join("; ");
let WBQ = "";
const wbMatches = (k,v) => { const q = WBQ.trim().toLowerCase(); if(!q) return true;
  const hay = (v.name+" "+(v.source||"")+" "+v.grade+" "+k+" "+(v.tags||[]).join(" ")+" "+v.units.map(u=>u.n).join(" ")).toLowerCase();
  return q.split(/\s+/).every(w=>hay.includes(w)); };
function fillTypes(){
  const all = Object.entries(WARBANDS), found = all.filter(([k,v])=>wbMatches(k,v));
  $("type").innerHTML = WB_GRADES.map(([g,label])=>{ const items = all.filter(([k,v])=>v.grade===g && (k===S.type || wbMatches(k,v)));
    return items.length ? `<optgroup label="${label}">${items.map(([k,v])=>`<option value="${k}" ${k===S.type?"selected":""}>${v.name}</option>`).join("")}</optgroup>` : ""; }).join("");
  $("wbhint").textContent = WBQ.trim() ? (found.length ? found.length+" match"+(found.length>1?"es":"")+". Press Enter to open the first." : "No warband matches.") : all.length+" warbands available";
}
async function switchWarband(k){
  if(!WARBANDS[k] || k===S.type) return;
  if(S.units.length && !(await uiConfirm("Switching warbands clears the current roster. Continue?"))){ render(); return; }
  S = {type:k,name:S.name,gold:WARBANDS[k].gold,units:[]}; OPEN.clear(); WBQ = ""; render();
}
function canAdd(d){
  const w = wb();
  if(d.kind==="hired") return canHire(d) && count(d.id) < 1;
  return count(d.id) < unitCap(d) && (!d.needs || count(d.needs)>0) && (d.noCount || warriors() < maxNow()) && (d.kind!=="hero" || heroCount() < w.maxHeroes);
}
function qtyCap(i){
  const u = S.units[i], d = def(u), rest = S.units.filter((x,j)=>j!==i);
  const cap = unitCap(d), typeLeft = cap===Infinity ? Infinity : cap - rest.filter(x=>x.typeId===d.id).reduce((s,x)=>s+x.qty,0);
  const roomLeft = d.noCount ? Infinity : maxNow() - rest.filter(x=>!isHired(x) && !def(x).noCount).reduce((s,x)=>s+x.qty,0);
  return Math.max(1, Math.min(typeLeft, roomLeft));
}
function render(){
  syncView();
  save();
  const w = wb();
  $("sheet").innerHTML = sheetHTML();
  fillTypes();
  $("name").value = S.name; $("gold").value = S.gold;

  const spent = S.units.reduce((s,u)=>s+unitCost(u),0);
  const models = warriors(), heroes = heroCount(), hired = hiredCount(), xpTotal = S.units.reduce((t,u)=>t+(u.xp||0),0);
  $("source").textContent = "Source: " + w.source;
  const left = S.gold - spent + (S.adj||0);
  $("totals").innerHTML = `
    <div class="stat"><b class="${left<0?"bad":"ok"}">${left}</b><span>gold crowns left</span></div>
    <div class="stat"><b>${spent}</b><span>gold crowns spent</span></div>
    <div class="stat"><b class="${models>maxNow()?"bad":""}">${models}/${maxNow()}</b><span>warriors</span></div>
    <div class="stat"><b class="${heroes>w.maxHeroes?"bad":""}">${heroes}/${w.maxHeroes}</b><span>heroes</span></div>
    <div class="stat"><b>${hired}</b><span>hired swords</span></div>
    <div class="stat"><b>${S.units.filter(isHired).reduce((t,u)=>t+(def(u).up||0),0)}</b><span>upkeep per battle</span></div>
    <div class="stat"><b>${S.units.reduce((t,u)=>t+unitRating(u),0)}</b><span>warband rating (5 per model, 20 per large creature, plus experience)</span></div>`;

  const warns = [];
  if(left<0) warns.push(`Over budget by ${-left} gold crowns.`);
  if(w.minModels && S.units.length && models<w.minModels) warns.push(`Warband needs at least ${w.minModels} models.`);
  if(models>maxNow()) warns.push(`Warband has more than ${maxNow()} models.`);
  if(heroes>w.maxHeroes) warns.push(`Warband has more than ${w.maxHeroes} heroes.`);
  HIRED.forEach(d=>{ if(count(d.id)>1) warns.push(`Only one ${d.n} allowed.`); if(count(d.id)>0 && !canHire(d)) warns.push(`${w.name} cannot hire a ${d.n}.`); });
  w.units.forEach(d=>{
    if(d.req && count(d.id)<1) warns.push(`Warband needs a ${d.n}.`);
    if(d.min && count(d.id)<d.min) warns.push(`Warband needs at least ${d.min} ${d.n}s.`);
    if(unitCap(d)!==Infinity && count(d.id)>unitCap(d)) warns.push(`Too many ${d.n}s (limit ${unitCap(d)}).`);
    if(d.needs && count(d.id)>0 && count(d.needs)<1) warns.push(`${d.n} needs a ${(w.units.find(x=>x.id===d.needs)||{}).n}.`);
  });
  S.units.forEach(u=>{ const c = statCalc(u); if(!c) return;
    STAT_KEYS.forEach(k=>{ const r = c.rows[k]; if(r.cap!=null && r.total>r.cap) warns.push(`${u.label||def(u).n}: ${k} is ${r.total}, above the maximum of ${r.cap}.`); }); });
  $("warnings").innerHTML = warns.map(t=>`<p class="warn">${t}</p>`).join("");

  const btn = d => `<button data-add="${d.id}" ${canAdd(d)?"":`disabled title="${d.kind==="hired"&&!canHire(d)?"This warband cannot hire this sword":"Limit reached"}"`}>Add ${d.n} (${raceName(d)?raceName(d)+", ":""}${d.c} gc) ${d.kind==="hired"||unitCap(d)!==Infinity ? count(d.id)+"/"+(d.kind==="hired"?1:unitCap(d)) : "x"+count(d.id)}</button>`;
  $("add").innerHTML = w.units.map(btn).join("") + (()=>{ const okList = HIRED.filter(d=>canHire(d)||count(d.id)>0);
    return `<p class="tag">Hired swords and special characters this warband can hire (${okList.length} of ${HIRED.length})</p>` + HIRED_GRADES.map(([g,label])=>{
      const items = okList.filter(d=>d.g===g); if(!items.length) return ""; const key = "add:"+g;
      return `<details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>${label} (${items.length})</summary>${items.map(btn).join("")}</details>`; }).join(""); })();

  $("roster").innerHTML = S.units.length ? S.units.map((u,i)=>{
    const d = def(u);
    return `<section class="unit">
      <header>
        <div class="row">
          <label>${d.n} name <input data-i="${i}" data-f="label" value="${esc(u.label||"")}" placeholder="Optional"></label>
          ${d.kind==="henchman" ? `<div class="fld">Group size ${stp(`data-i="${i}" data-f="qty"`,u.qty,1,qtyCap(i),"group size")}</div>` : ""}
        </div>
        <div><b>${unitCost(u)} gc</b> <span class="tag">${d.kind==="hired"?"hired sword"+(raceName(d)?", "+raceName(d):""):d.kind}${u.qty>1?`, ${u.qty} models`:""}, rating ${unitRating(u)}</span>
          <button class="noprint" data-del="${i}" aria-label="Remove ${d.n}">Remove</button></div>
      </header>
      ${d.kind==="hired" ? `${kitGroups(d).length?`<div class="row">${kitSelects(u,i)}</div>`:""}<p class="tag">Kit: ${esc(kitText(u))}</p>${kitProfile(u)?`<p>${kitProfile(u)}</p>`:""}<p class="tag">Hire ${d.c} gc, upkeep ${d.up||0} gc. ${d.noXp?"Gains no experience. ":""}Source: ${esc(d.src)}</p>` : gearBox(u,i,d)+setsBox(u,i,d)+optsBox(u,i,d)}
      ${d.note?`<p class="tag">${esc(d.note)}</p>`:""}
      ${statsBox(u,i,d)}
      ${extras(u,i,d)}
    </section>`;
  }).join("") : `<p class="tag">No units yet. Add a leader to get started.</p>`;
  renderCamp();
}

/* ===== Print roster: follows the freebooters.org sheets. Page 1 heroes, then henchmen, then hired swords. ===== */
const SPELL_ITEMS = Object.values(SPELLS).flatMap(g => g.list).filter(x => typeof x !== "string");
function sheetHTML(){
  const w = wb();
  const heroes = S.units.filter(u=>def(u).kind==="hero");
  const hench = S.units.filter(u=>def(u).kind==="henchman");
  const hired = S.units.filter(isHired);
  const own = S.units.filter(u=>!isHired(u));
  const isDP = u => String(def(u).id).startsWith("d-");
  const left = S.gold - S.units.reduce((t,u)=>t+unitCost(u),0) + (S.adj||0);
  const largeN = own.filter(u=>def(u).large).reduce((t,u)=>t+u.qty,0);
  const memberN = own.filter(u=>!def(u).large).reduce((t,u)=>t+u.qty,0);
  const xpTotal = own.reduce((t,u)=>t+(def(u).noXp?0:(u.xp||0)),0);
  const hiredR = hired.filter(u=>!isDP(u)).reduce((t,u)=>t+unitRating(u),0), dpR = hired.filter(isDP).reduce((t,u)=>t+unitRating(u),0);
  const rating = S.units.reduce((t,u)=>t+unitRating(u),0);
  const CORE = ["combat","shooting","academic","strength","speed"];
  const injText = u => [...(u.inj||[]).map(x=>x.n+(x.fx?" ("+Object.entries(x.fx).map(([k,v])=>k+" "+v).join(", ")+")":"")), u.miss>0?"Misses "+u.miss+" game"+(u.miss>1?"s":""):""].filter(Boolean).join("; ");
  const ruleList = u => [...u.skills,...(u.spells||[]),u.other||""].filter(Boolean).join(", ");
  const fit = t => `<div class="fit">${t==null?"":esc(t)}</div>`;
  const nmSp = t => `<span${t&&t.length>22?' class="sm"':""}>${t?esc(t):""}</span>`;
  const boxes = (from,count,xp,marks) => Array.from({length:count},(_,i)=>{ const n = from+i; return `<i class="bx${n<=xp?" on":""}${marks.includes(n)?" adv":""}"></i>`; }).join("");
  const lbls = (count,step) => Array.from({length:count},(_,i)=>`<b>${(i+1)%step===0?i+1:""}</b>`).join("");
  const stTable = u => { const c = u && statCalc(u), d = u && def(u);
    const vals = c ? [...STAT_KEYS.map(k=>k==="M"&&d.mLabel ? d.mLabel : c.rows[k].total), c.sv ? c.sv+"+" : ""] : Array(10).fill("");
    const maxes = c ? [...STAT_KEYS.map(k=>c.rows[k].cap==null ? "" : c.rows[k].cap), ""] : Array(10).fill("");
    return `<table class="st"><tr>${[...STAT_KEYS,"Sv"].map(x=>`<th>${x}</th>`).join("")}</tr><tr class="v">${vals.map(x=>`<td>${x}</td>`).join("")}</tr><tr class="mx">${maxes.map((x,i)=>`<td${i===9?' class="blk"':""}>${x}</td>`).join("")}</tr></table>`; };
  const ck = (label,on) => `<span class="ck${on?" on":""}"></span>${label}`;
  const heroBlk = u => { const d = u && def(u), ks = (d && d.skills) || [], xp = u ? (u.xp||0) : 0;
    const cats = [["Combat","combat"],["Shooting","shooting"],["Academic","academic"],["Strength","strength"],["Speed","speed"]].map(([l,k])=>ck(l,!!u&&ks.includes(k))).join(" ")+" "+ck("Special",!!u&&ks.some(k=>!CORE.includes(k)));
    return `<div class="hb"><div class="l"><div class="nm">Name: <span>${u?esc(u.label):""}</span></div><div class="ty">Type: ${nmSp(u&&d.n)}</div><div class="cats">${cats}</div>${stTable(u)}
      <div class="ft"><em class="hero">HERO</em><i>▲ Racial Maximums ▲</i><b>Experience ▶</b></div></div>
      <div class="r"><div class="eq"><b class="lb">Equipment:</b>${fit(u?gearList(u):"")}</div><div class="sk"><b class="lb">Skills &amp; Spells:</b>${fit(u?ruleList(u):"")}</div>
      <div class="inj"><b class="lb">Injuries:</b>${fit(u?injText(u):"")}</div>
      <div class="xp"><div class="xgs"><div class="xl">${lbls(30,5)}</div>${[0,1,2].map(r=>`<div class="xg">${boxes(r*30+1,30,xp,HERO_XP)}</div>`).join("")}</div><div class="xt"><b>Total<br>Experience</b><span>${u?xp:""}</span></div></div></div></div>`; };
  const groupXp = (u) => { const xp = u ? (u.xp||0) : 0; return `<div class="xr"><div class="xgs"><b class="lb">Experience</b><div class="xl">${lbls(14,5).replace(/<b>10<\/b>/,"<b>10</b>")}</div><div class="xg h">${boxes(1,14,xp,HENCH_XP)}</div></div><div class="gx"><b>Group Experience:</b> <span>${u&&!def(u).noXp?xp:""}</span></div></div>`; };
  const henBlk = u => { const d = u && def(u);
    return `<div class="nb"><div class="l"><div class="nm">Name: <span>${u?esc(u.label):""}</span></div><div class="ty2"><span>Type: ${nmSp(u&&d.n)}</span><span>Number: <span>${u?u.qty:""}</span></span></div>${stTable(u)}</div>
      <div class="r2"><div class="eq"><b class="lb">Equipment:</b>${fit(u?gearList(u):"")}</div><div class="sk"><b class="lb">Special Rules &amp; Skills:</b>${fit(u?ruleList(u):"")}</div>${groupXp(u)}</div></div>`; };
  const hireBlk = u => { const d = u && def(u), xp = u ? (u.xp||0) : 0;
    return `<div class="pb"><div class="l"><div class="nm"><span>Name: <span>${u?esc(u.label):""}</span></span><em class="hs">Hired Sword</em></div><div class="ty2"><span>Type: ${nmSp(u&&d.n)}</span><span>Number: <span>${u?u.qty:""}</span></span></div>${stTable(u)}</div>
      <div class="sk"><b class="lb">Skills &amp; Special Rules:</b>${fit(u?[d.note||"",ruleList(u),injText(u)].filter(Boolean).join(" "):"")}</div>
      <div class="eq2"><b class="lb">Equipment:</b>${fit(u?(gearList(u)||kitText(u)):"")}<div class="xr2"><div class="xgs"><div class="xl">${lbls(14,5)}</div><div class="xg h">${boxes(1,14,xp,HENCH_XP)}</div></div><div class="gx"><b>Group Experience</b> <span>${u&&!d.noXp?xp:""}</span></div></div></div></div>`; };
  /* Notes: special rules and options first, then the effects of the weapons carried and of the skills and spells known, at the bottom */
  const wpnText = e => { const p = []; if(e.rng!=null) p.push(e.rng+"\" range"); if(e.str) p.push("Strength "+(/^[+-]/.test(e.str)?"user "+e.str:e.str)); else if(e.cat==="melee") p.push("Strength as user");
    if(e.noSave) p.push("no armour save"); else if(e.ap) p.push("save "+(e.ap>0?"+":"")+e.ap); return p.join(", "); };
  const notesFor = units => { const seen = new Set(), general = [], weapons = [], skills = [];
    units.forEach(u=>{ const d = def(u);
      if(d.note && !seen.has("n"+d.id)){ seen.add("n"+d.id); general.push(`<b>${esc(d.n)}:</b> ${esc(d.note)}`); }
      const og = optGroup(u); (u.opts||[]).forEach(k=>{ const o = og && og.list.find(x=>x.n===k); if(o && o.d && !seen.has("o"+k)){ seen.add("o"+k); general.push(`<b>${esc(k)}:</b> ${esc(o.d)}`); } });
      (u.inj||[]).forEach(x=>{ if(x.note && !seen.has("i"+x.n)){ seen.add("i"+x.n); general.push(`<b>${esc(x.n)}:</b> ${esc(x.note)}`); } });
      [...u.gear, ...(isHired(u) ? kitItemsOf(u) : [])].forEach(n=>{ const e = EQ_ITEMS.find(x=>x.n===n);
        if(e && (e.cat==="melee"||e.cat==="ranged"||e.wd) && !seen.has("w"+n) && (wpnText(e)||e.wd)){ seen.add("w"+n); weapons.push(`<b>${esc(n)}</b>${wpnText(e)?" ("+esc(wpnText(e))+")":""}${e.wd?": "+esc(e.wd):""}`); } });
      [...u.skills,...(u.spells||[])].forEach(k=>{ const g = SKILL_ITEMS.find(x=>x.n===k) || SPELL_ITEMS.find(x=>x.n===k);
        const fxt = g && g.fx ? Object.entries(g.fx).map(([st,v])=>(v>0?"+":"")+v+" "+st).join(", ") : "";
        if(g && (g.d||fxt) && !seen.has("s"+k)){ seen.add("s"+k); skills.push(`<b>${esc(k)}:</b> ${esc(g.d||"")}${g.d&&fxt?" ":""}${fxt?"("+esc(fxt)+")":""}`); } }); });
    const blk = (title,list) => list.length ? `${title?`<p class="nh">${title}</p>`:""}${list.map(x=>`<p>${x}</p>`).join("")}` : "";
    const top = general.length ? `<div class="cols">${blk("",general)}</div>` : "";
    const bottom = weapons.length||skills.length ? `<div class="eff"><div>${blk("Weapon effects",weapons)}</div><div>${blk("Skill and spell effects",skills)}</div></div>` : "";
    return top+bottom; };
  const notesBox = html => `<div class="notes"><div class="nt">Notes (Skill Descriptions, Spell Descriptions, etc.):</div>${html||""}</div>`;
  const chunk = (a,n) => { const o = []; for(let i=0;i<a.length;i+=n) o.push(a.slice(i,i+n)); return o.length ? o : [[]]; };
  const pad = (a,n) => Array.from({length:n},(_,i)=>a[i]);
  const foot = `<div class="sh-foot">Roster layout after the freebooters.org sheets (v1.6 standard and v2.1). Made with the Mordheim Warband Builder.</div>`;
  const val = (l,v) => `<div class="fl"><span>${l}</span><span class="v">${v==null?"":esc(v)}</span></div>`;
  const header = `<div class="hdr"><div class="top"><div class="hn"><em class="logo">MORDHEIM</em><b>Warband Name:</b> <span>${esc(S.name||"")}</span></div><div class="ht"><b>Warband Type:</b> <span>${esc(w.name)}</span></div></div>
    <div class="low"><div class="tr"><b class="ctr">Treasury</b>${val("Gold Crowns:",left)}${val("Treasure:","")}</div>
    <div class="wr"><b class="ctr">Warband Rating</b>${val("Grand Total Experience:",xpTotal)}${val("Members ("+memberN+") x 5:",memberN*5)}${val("Large Creatures ("+largeN+") x 20:",largeN*20)}${val("Hired Swords:",hiredR||"")}${val("Dramatis Personae: +",dpR||"")}<div class="rt">${val("Rating:",rating)}</div></div>
    <div class="se"><b class="ctr">Stored Equipment</b><div class="fit big"></div></div></div></div>`;
  const heroPages = chunk(heroes,6).map((g,i)=>`<div class="sh-pg">${i===0?header:""}${pad(g,6).map(heroBlk).join("")}${foot}</div>`);
  const henPages = chunk(hench,7).map((g,i,all)=>`<div class="sh-pg">${pad(g,7).map(henBlk).join("")}${i===all.length-1?`<div class="htx"><em></em><b>Henchmen Total Experience:</b><span>${hench.reduce((t,u)=>t+(def(u).noXp?0:(u.xp||0)),0)||""}</span></div>`:""}${notesBox(i===0?notesFor([...heroes,...hench]):"")}${foot}</div>`);
  const hirePages = chunk(hired,7).map((g,i)=>`<div class="sh-pg p3"><div class="vb"><div class="vt"><span>Warband Type:</span> ${esc(w.name)}</div><div class="vt"><span>Warband Name:</span> ${esc(S.name||"")}</div></div><div class="pbs">${pad(g,7).map(hireBlk).join("")}</div>${notesBox(i===0?notesFor(hired):"")}${foot}</div>`);
  return heroPages.join("")+henPages.join("")+hirePages.join("");
}
/* Shrinks text that would overflow its box on the printed sheet, so nothing is cut off. */
function fitSheet(){
  const s = $("sheet"); if(!s || !s.querySelectorAll) return;
  const old = s.style.cssText; s.style.cssText = "display:block;position:absolute;left:-10000px;top:0;width:7.9in;visibility:hidden";
  s.querySelectorAll(".fit").forEach(el=>{ let fs = el.classList.contains("big") ? 7 : 6.5; el.style.fontSize = fs+"pt";
    while(el.scrollHeight > el.clientHeight+1 && fs > 4){ fs -= .25; el.style.fontSize = fs+"pt"; } });
  s.style.cssText = old;
}
window.addEventListener("beforeprint", fitSheet);

function esc(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

document.addEventListener("click", e=>{
  const t = e.target;
  if(t.dataset.add && canAdd(wb().units.concat(HIRED).find(d=>d.id===t.dataset.add))){ S.units.push(norm({typeId:t.dataset.add,label:"",qty:1,gear:[],xp:(wb().units.find(x=>x.id===t.dataset.add)||{}).startXp||0,skills:[...((wb().units.find(x=>x.id===t.dataset.add)||{}).startSkills||[])]})); render(); }
  if(t.dataset.del){ S.units.splice(+t.dataset.del,1); OPEN.clear(); render(); }
  if(t.dataset.step){ const inp = t.parentElement.querySelector("input");
    const min = inp.min!=="" ? +inp.min : -Infinity, max = inp.max!=="" ? +inp.max : Infinity;
    inp.value = Math.min(max, Math.max(min, (+inp.value||0) + +t.dataset.step));
    inp.dispatchEvent(new Event("change",{bubbles:true})); }
});
document.addEventListener("change", e=>{
  const t = e.target;
  if(t.id==="type"){ switchWarband(t.value); return; }
  else if(t.id==="name"){ S.name = t.value; }
  else if(t.id==="gold"){ S.gold = Math.max(0, +t.value||0); }
  else if(t.dataset.kit!=null){ const u = S.units[+t.dataset.i]; u.kitPick = {...(u.kitPick||{}), [t.dataset.kit]:t.value}; }
  else if(t.dataset.g){ const u = S.units[+t.dataset.i]; const g = t.dataset.g;
    u.gear = t.checked ? [...u.gear,g] : u.gear.filter(x=>x!==g); }
  else if(t.dataset.adv){ const u = S.units[+t.dataset.i], k = t.dataset.adv, r = statCalc(u).rows[k];
    const room = r.cap==null ? 99 : Math.max(0, r.cap-r.base-r.mod);
    u.adv = {...u.adv, [k]: Math.max(0, Math.min(room, +t.value||0))}; }
  else if(t.dataset.opt){ const u = S.units[+t.dataset.i], n = t.dataset.opt;
    u.opts = t.checked ? [...(u.opts||[]), n] : (u.opts||[]).filter(x=>x!==n); }
  else if(t.dataset.style){ const u = S.units[+t.dataset.i], n = t.dataset.style;
    const used = Object.entries(u.styles||{}).filter(([k])=>k!==n).reduce((a,[,v])=>a+v,0);
    const k = Math.max(0, Math.min(+t.value||0, u.qty-used)); u.styles = {...(u.styles||{}), [n]:k}; if(!k) delete u.styles[n]; }
  else if(t.dataset.gq){ const u = S.units[+t.dataset.i], n = t.dataset.gq, cap = EQ_ITEMS.find(e=>e.n===n)?.max||1, k = Math.max(0,Math.min(cap,+t.value||0));
    u.gear = u.gear.filter(x=>x!==n).concat(Array(k).fill(n)); }
  else if(t.dataset.pick){ const u = S.units[+t.dataset.i], k = t.dataset.pick, v = t.dataset.v;
    u[k] = t.checked ? [...u[k],v] : u[k].filter(x=>x!==v); }
  else if(t.dataset.f==="xp"){ S.units[+t.dataset.i].xp = Math.max(0, +t.value||0); }
  else if(t.dataset.f==="other"){ S.units[+t.dataset.i].other = t.value; }
  else if(t.dataset.f==="qty"){ const u = S.units[+t.dataset.i]; u.qty = Math.min(qtyCap(+t.dataset.i), Math.max(1, +t.value||1)); trimStyles(u); }
  else if(t.dataset.f==="label"){ S.units[+t.dataset.i].label = t.value; }
  else return;
  render();
});

document.addEventListener("input", e=>{ if(e.target.id==="wbsearch"){ WBQ = e.target.value; fillTypes(); } });
document.addEventListener("keydown", e=>{ if(e.target.id==="wbsearch" && e.key==="Enter"){
  const first = Object.entries(WARBANDS).find(([k,v])=>wbMatches(k,v)); if(first){ e.preventDefault(); e.target.value = ""; switchWarband(first[0]); if(first[0]===S.type){ WBQ = ""; fillTypes(); } } } });
document.addEventListener("toggle", e=>{ const k = e.target.dataset && e.target.dataset.k;
  if(k){ if(e.target.open) OPEN.add(k); else OPEN.delete(k); } }, true);

$("export").onclick = ()=>{
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:"application/json"}));
  a.download = (S.name||"warband").replace(/\W+/g,"-").toLowerCase()+".json"; a.click();
};
$("import").onchange = e=>{
  const f = e.target.files[0]; if(!f) return;
  f.text().then(txt=>{
    try { const d = JSON.parse(txt);
      if(!WARBANDS[d.type] || !Array.isArray(d.units)) throw 0;
      S = d; S.units = S.units.filter(u=>def(u)).map(norm); render();
    } catch(err){ uiAlert("That file isn't a warband roster this tool can read."); }
  });
};
$("print").onclick = ()=>{ fitSheet(); window.print(); };
$("clear").onclick = async ()=>{ if(await uiConfirm("Remove every unit from this roster?")){ S.units=[]; OPEN.clear(); render(); } };

/* ===== Campaign view: level ups, recruitment, wounds ===== */
/* Experience needed for each advance. Check these against your rulebook and edit here if your campaign differs. */
const HERO_XP = [2,4,6,8,11,14,17,20,24,28,32,36,41,46,51,56,62,68,74,80,87,94,101,108,116,124,132,140,149,158,167,176,186,196,206,216,227,238,249,260];
const HENCH_XP = [2,5,9,14];
/* Serious injuries a hero can pick after a battle. fx changes stats for good, miss is games missed, note is written on the card. */
const INJURIES = [
  {n:"Leg Wound",fx:{M:-1},d:"Permanent -1 Movement."},
  {n:"Arm Wound: light",miss:1,d:"Misses the next game."},
  {n:"Arm Wound: arm lost",note:"Lost an arm: one one-handed weapon only.",d:"Can only use a single one-handed weapon."},
  {n:"Madness: stupidity",note:"Subject to stupidity.",d:"Roll 1-3 on the madness table."},
  {n:"Madness: frenzy",note:"Subject to frenzy.",d:"Roll 4-6 on the madness table."},
  {n:"Smashed Leg: cannot run",note:"May not run (may still charge).",d:"Roll of 1."},
  {n:"Smashed Leg: light",miss:1,d:"Misses the next game."},
  {n:"Chest Wound",fx:{T:-1},d:"Permanent -1 Toughness."},
  {n:"Blinded in One Eye",fx:{BS:-1},note:"Retires if blinded in the other eye.",d:"Permanent -1 Ballistic Skill."},
  {n:"Old Battle Wound",note:"Roll a D6 before each battle: on a 1 he cannot play.",d:"Roll before every battle."},
  {n:"Nervous Condition",fx:{I:-1},d:"Permanent -1 Initiative."},
  {n:"Hand Injury",fx:{WS:-1},d:"Permanent -1 Weapon Skill."},
  {n:"Deep Wound",ask:"How many games does he miss (D3)?",d:"Misses D3 games."},
  {n:"Robbed",clear:true,d:"Loses all weapons and equipment."},
  {n:"Bitter Enmity",askNote:"Who does he hate now?",d:"Hates the warrior, leader or warband that took him out."},
  {n:"Captured",note:"Captured: ransom or rescue him.",d:"Held by the enemy."},
  {n:"Hardened",note:"Immune to fear.",d:"Immune to fear from now on."},
  {n:"Horrible Scars",note:"Causes fear.",d:"Causes fear from now on."},
  {n:"Survived Against the Odds",xp:1,d:"Gains 1 experience."},
  {n:"Other injury (note)",askNote:"Describe the injury or effect",d:"Free text."},
  {n:"Dead",dead:true,d:"Remove him from the roster."}
];
const xpTable = d => d.kind==="henchman" ? HENCH_XP : HERO_XP;
const canLevel = d => !d.noXp && d.kind!=="hired" && !!d.stats;
/* Starting experience does not earn advances: only experience gained after the warrior joined counts. */
const startXpOf = u => u.xp0!=null ? u.xp0 : (def(u).startXp||0);
const advEarned = u => { const d = def(u); if(!canLevel(d)) return 0; const t = xpTable(d);
  return Math.max(0, t.filter(x=>x<=(u.xp||0)).length - t.filter(x=>x<=startXpOf(u)).length); };
const advPending = u => Math.max(0, advEarned(u) - (u.lvl||0));
const nextAdvAt = u => { const d = def(u); return canLevel(d) ? (xpTable(d).find(x=>x>(u.xp||0)) || null) : null; };
const treasury = () => S.gold - S.units.reduce((t,u)=>t+unitCost(u),0) + (S.adj||0);
const unitName = u => (u.label ? u.label+" ("+def(u).n+")" : def(u).n);
function clog(t){ S.log = [{t, g:S.games||0}, ...(S.log||[])].slice(0,120); }
function newUnit(d){ return norm({typeId:d.id,label:"",qty:1,gear:[],xp:d.startXp||0,skills:[...(d.startSkills||[])]}); }

function advOptions(u){
  const d = def(u), c = statCalc(u);
  const stats = STAT_KEYS.map(k=>{ const r = c.rows[k], room = r.cap==null ? 99 : r.cap - r.total;
    const dis = room<=0 || (d.kind==="henchman" && ((u.adv&&u.adv[k])||0)>=1);
    return `<option value="stat:${k}" ${dis?"disabled":""}>+1 ${k} (now ${r.total}${r.cap!=null?", max "+r.cap:""}${dis?", not allowed":""})</option>`; }).join("");
  const pick = (keys,kind,label) => (keys||[]).map(k=>SKILLS[k]||SPELLS[k]).filter(Boolean).map(g=>{
    const opts = g.list.filter(x=>!(u[kind]||[]).includes(nm(x))).map(x=>`<option value="${kind==="skills"?"skill":"spell"}:${esc(nm(x))}">${esc(nm(x))}</option>`).join("");
    return opts ? `<optgroup label="${esc(label+": "+g.n)}">${opts}</optgroup>` : ""; }).join("");
  return `<optgroup label="Characteristic">${stats}</optgroup>${pick(d.skills,"skills","Skill")}${pick(d.spells,"spells","Spell")}${d.kind==="henchman" ? `<optgroup label="The Lad's Got Talent"><option value="promote" ${heroCount()>=wb().maxHeroes?"disabled":""}>Promote one model to a hero${heroCount()>=wb().maxHeroes?" (hero limit reached)":""}</option></optgroup>` : ""}<optgroup label="Other"><option value="other">Something else (note)</option></optgroup>`;
}

/* Buying and selling equipment on the Campaign tab. Gear is per model, so a group's purchase is paid for by every model in it. */
function equipPanel(u,i){
  const d = def(u), ok = allowedGear(d), owned = {}; u.gear.forEach(n=>owned[n]=(owned[n]||0)+1);
  const chips = Object.entries(owned).map(([n,k])=>{ const p = priceOf(u,n);
    return `<span class="chip">${esc(n)}${k>1?" x"+k:""}<button type="button" data-act="sell" data-i="${i}" data-n="${esc(n)}" aria-label="Remove ${esc(n)}" title="Sell or drop">×</button></span>`; }).join("");
  const cats = Object.entries(EQUIPMENT).map(([k,g])=>{
    const items = ok.filter(e=>e.cat===k && (owned[e.n]||0) < (e.max||1)); if(!items.length) return "";
    return `<optgroup label="${esc(g.n)}">${items.map(e=>{ const p = priceOf(u,e.n)*u.qty;
      return `<option value="${esc(e.n)}">${esc(e.n)} - ${priceOf(u,e.n)} gc${u.qty>1?" each ("+p+" gc for the group)":""}</option>`; }).join("")}</optgroup>`; }).join("");
  const key = "camp:"+i+":eq";
  return `<details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>Equipment (${u.gear.length})</summary>
    ${chips ? `<p>${chips}</p>` : `<p class="tag">No equipment yet.</p>`}
    ${cats ? `<div class="row noprint"><select id="buy-${i}" aria-label="Item to buy for ${esc(unitName(u))}">${cats}</select><button type="button" data-act="buy" data-i="${i}">Buy</button></div>
      ${u.qty>1?`<p class="tag">Every model in the group carries it, so the cost is per model times ${u.qty}.</p>`:""}` : ""}
  </details>`;
}
function campCard(u,i){
  const d = def(u), c = statCalc(u), pend = advPending(u), nxt = nextAdvAt(u), hen = d.kind==="henchman", hired = d.kind==="hired";
  const tbl = c ? `<div class="statwrap"><table class="stt"><tr>${STAT_KEYS.map(k=>`<th>${k}</th>`).join("")}<th>Sv</th></tr><tr>${STAT_KEYS.map(k=>{ const r = c.rows[k];
    return `<td class="${r.total>r.base?"up":r.total<r.base?"down":""}"><b>${k==="M"&&d.mLabel?d.mLabel:r.total}</b></td>`; }).join("")}<td><b>${c.sv?c.sv+"+":"-"}</b></td></tr></table></div>` : "";
  const chips = (u.inj||[]).map((x,k)=>`<span class="chip" title="${esc(x.note||"")}">${esc(x.n)}${x.fx?" ("+Object.entries(x.fx).map(([s,v])=>s+" "+v).join(", ")+")":""}<button type="button" data-act="injdel" data-i="${i}" data-k="${k}" aria-label="Remove ${esc(x.n)}">×</button></span>`).join("");
  const key = "camp:"+i+":inj";
  const injSel = hen ? `<button type="button" data-act="lose" data-i="${i}">A model dies</button> <button type="button" data-act="inj" data-i="${i}" data-v="miss">Miss next game</button>`
    : `<select id="inj-${i}" aria-label="Serious injury for ${esc(unitName(u))}">${INJURIES.map(x=>`<option value="${esc(x.n)}">${esc(x.n)}${x.d?" - "+esc(x.d):""}</option>`).join("")}</select> <button type="button" data-act="inj" data-i="${i}">Apply injury</button>`;
  return `<section class="unit${pend?" pend":""}">
    <header><div><b>${esc(unitName(u))}</b> <span class="tag">${hired?"hired sword":d.kind}${u.qty>1?", "+u.qty+" models":""}${raceName(d)?", "+esc(raceName(d)):""}</span>
      ${u.miss>0?`<span class="badge bad">Misses ${u.miss} game${u.miss>1?"s":""}</span><button type="button" data-act="missdec" data-i="${i}" class="noprint">Back in</button>`:""}</div>
      <div class="tag">rating ${unitRating(u)}</div></header>
    ${tbl}
    ${hired ? `${kitGroups(d).length?`<div class="row noprint">${kitSelects(u,i)}</div>`:""}<p class="tag">Kit: ${esc(kitText(u))}</p>${kitProfile(u)?`<p>${kitProfile(u)}</p>`:""}<p class="tag">Upkeep ${d.up||0} gc.</p>` : `<p class="tag"><b>Equipment:</b> ${esc(gearList(u)||"none")}</p>`}
    ${u.skills.length||(u.spells||[]).length ? `<p class="tag"><b>Skills and spells:</b> ${esc([...u.skills,...(u.spells||[])].join(", "))}</p>` : ""}
    ${u.other ? `<p class="tag"><b>Notes:</b> ${esc(u.other)}</p>` : ""}
    ${chips ? `<p>${chips}</p>` : ""}
    ${canLevel(d) ? `<div class="row" style="margin-top:8px"><div class="fld">${hen?"Group experience":"Experience"} ${stp(`data-i="${i}" data-f="xp"`,u.xp||0,0,null,"experience")}</div>
      <button type="button" data-act="xp" data-i="${i}">+1 XP</button>
      <span class="tag">${nxt?"Next advance at "+nxt+" XP.":"No more advances on the table."} Advances taken: ${Math.max(0,u.lvl||0)}.</span></div>` : ""}
    ${pend ? `<div class="row advp"><b>${pend} advance${pend>1?"s":""} ready.</b> Roll on the advance table, then pick the result:
      <select id="adv-${i}" aria-label="Advance for ${esc(unitName(u))}">${advOptions(u)}</select>
      <button type="button" class="primary" data-act="adv" data-i="${i}">Apply advance</button></div>` : ""}
    ${hired ? "" : equipPanel(u,i)}
    <details data-k="${key}" ${OPEN.has(key)?"open":""}><summary>Wounds and losses</summary><div class="row" style="margin-top:8px">${injSel}
      <button type="button" data-act="dead" data-i="${i}">Remove from roster</button></div></details>
    <label style="margin-top:8px">Campaign notes <input data-cnote="${i}" value="${esc(u.cnote||"")}" placeholder="Anything to remember"></label>
  </section>`;
}

function renderCamp(){
  const el = $("campView"); if(!el || el.hidden) return;
  const w = wb(), cash = treasury(), rating = S.units.reduce((t,u)=>t+unitRating(u),0);
  const upkeep = S.units.filter(isHired).reduce((t,u)=>t+(def(u).up||0),0);
  const pend = S.units.reduce((t,u)=>t+advPending(u),0), out = S.units.filter(u=>u.miss>0).length;
  const order = k => { const idx = []; S.units.forEach((u,i)=>{ if(def(u).kind===k) idx.push(i); }); return idx; };
  const sec = (title,idx) => idx.length ? `<h2>${title}</h2>${idx.map(i=>campCard(S.units[i],i)).join("")}` : "";
  const btn = d => { const n = count(d.id), cap = d.kind==="hired" ? 1 : unitCap(d); const hen = d.kind==="henchman" && n>0;
    return `<button type="button" data-act="recruit" data-id="${d.id}" ${canAdd(d)?"":"disabled"} title="${d.kind==="hired"&&!canHire(d)?"This warband cannot hire this sword":"Limit reached"}">${hen?"Add one":"Recruit"} ${esc(d.n)} (${d.c} gc) ${cap!==Infinity?n+"/"+cap:"x"+n}</button>`; };
  const okHired = HIRED.filter(d=>canHire(d)&&count(d.id)===0);
  const log = (S.log||[]).slice(0,30);
  el.innerHTML = `
    <div class="row noprint" style="justify-content:space-between"><div><h2 style="margin:8px 0 0">${esc(S.name||"Unnamed warband")}</h2><span class="tag">${esc(w.name)}</span></div>
      <div class="row"><button type="button" data-act="game">Game played (missed games tick down)</button><button type="button" data-act="print">Print roster</button><button type="button" data-act="export">Export JSON</button></div></div>
    <div class="totals">
      <div class="stat"><b class="${cash<0?"bad":"ok"}">${cash}</b><span>gold crowns in the treasury</span></div>
      <div class="stat"><b>${S.games||0}</b><span>games played</span></div>
      <div class="stat"><b>${rating}</b><span>warband rating</span></div>
      <div class="stat"><b>${upkeep}</b><span>hired sword upkeep per battle</span></div>
      <div class="stat"><b class="${pend?"ok":""}">${pend}</b><span>advances ready</span></div>
      <div class="stat"><b class="${out?"bad":""}">${out}</b><span>warriors missing games</span></div></div>
    <h2>Treasury</h2>
    <div class="row noprint"><label>Amount <input id="cgold" type="number" min="0" step="5" value="0"></label>
      <label style="flex:1;min-width:180px">What for <input id="cwhy" placeholder="Wyrdstone sale, upkeep, gear..."></label>
      <button type="button" data-act="gold" data-s="1">Add gold</button><button type="button" data-act="gold" data-s="-1">Spend gold</button>
      ${upkeep?`<button type="button" data-act="upkeep">Pay upkeep (${upkeep} gc)</button>`:""}</div>
    ${sec("Heroes",order("hero"))}${sec("Henchmen",order("henchman"))}${sec("Hired swords",order("hired"))}
    <h2>Recruitment</h2>
    <p class="tag">A new hero or group joins with no equipment. A henchman added to an existing group takes that group's equipment, and its cost. Buy more gear on the Build tab; it comes out of the same treasury.</p>
    <div class="add">${w.units.map(btn).join("")}</div>
    <details data-k="camp:hired" ${OPEN.has("camp:hired")?"open":""}><summary>Hired swords available (${okHired.length})</summary><div class="add">${okHired.map(btn).join("")}</div></details>
    <details data-k="camp:log" ${OPEN.has("camp:log")?"open":""}><summary>History (${(S.log||[]).length})</summary>${log.length?`<ul class="clog">${log.map(x=>`<li><span class="tag">Game ${x.g}</span> ${esc(x.t)}</li>`).join("")}</ul>`:`<p class="tag">Nothing recorded yet.</p>`}</details>`;
}

/* In-page dialogs. The browser's confirm/prompt/alert are blocked in some embedded viewers, so the tool never uses them. */
function uiDialog(msg,opt){ opt = opt||{};
  return new Promise(res=>{
    const ov = document.createElement("div"); ov.className = "ovl";
    ov.innerHTML = `<div class="dlg" role="dialog" aria-modal="true"><p>${esc(msg).replace(/\n/g,"<br>")}</p>${opt.input?`<input class="dlgin" value="${esc(opt.def||"")}">`:""}<div class="row"><button type="button" class="primary" data-d="ok">${opt.ok||"OK"}</button>${opt.noCancel?"":`<button type="button" data-d="no">${opt.cancel||"Cancel"}</button>`}</div></div>`;
    document.body.appendChild(ov);
    const inp = ov.querySelector("input"), okb = ov.querySelector("[data-d=ok]");
    const done = v => { ov.remove(); res(v); };
    ov.addEventListener("click", e=>{ const b = e.target.closest("[data-d]"); if(b) done(b.dataset.d==="ok" ? (opt.input ? inp.value : true) : (opt.input ? null : false)); });
    ov.addEventListener("keydown", e=>{ if(e.key==="Escape") done(opt.input ? null : false); else if(e.key==="Enter" && opt.input){ e.preventDefault(); done(inp.value); } });
    (inp||okb).focus(); });
}
function uiChoice(msg,choices){
  return new Promise(res=>{
    const ov = document.createElement("div"); ov.className = "ovl";
    ov.innerHTML = `<div class="dlg" role="dialog" aria-modal="true"><p>${esc(msg).replace(/\n/g,"<br>")}</p><div class="row" style="justify-content:flex-end">${choices.map(c=>`<button type="button" ${c.primary?'class="primary"':""} data-c="${esc(c.key)}">${esc(c.label)}</button>`).join("")}<button type="button" data-c="">Cancel</button></div></div>`;
    document.body.appendChild(ov);
    const done = v => { ov.remove(); res(v); };
    ov.addEventListener("click", e=>{ const b = e.target.closest("[data-c]"); if(b) done(b.dataset.c || null); });
    ov.addEventListener("keydown", e=>{ if(e.key==="Escape") done(null); });
    const first = ov.querySelector("button"); if(first) first.focus(); });
}
function uiConfirm(m){ return uiDialog(m); }
function uiPrompt(m,d){ return uiDialog(m,{input:true,def:d}); }
function uiAlert(m){ return uiDialog(m,{noCancel:true}).then(()=>{}); }
/* Promotion form: name, up to two skill lists as checkboxes, and the immediate advance option. */
function promoDialog(d){
  return new Promise(res=>{
    const ov = document.createElement("div"); ov.className = "ovl";
    ov.innerHTML = `<div class="dlg" role="dialog" aria-modal="true"><p><b>The Lad's Got Talent</b><br>Promote one ${esc(d.n)} to a hero.</p>
      <label>Name (optional) <input class="dlgin" data-f="name" placeholder="Name the new hero"></label>
      <fieldset class="dlgset"><legend>Skill lists he can learn from (pick up to two)</legend>${CORE_LISTS.map(k=>`<label class="chk"><input type="checkbox" data-l="${k}"> ${esc(SKILLS[k]?SKILLS[k].n:k)}</label>`).join("")}</fieldset>
      <label class="chk"><input type="checkbox" data-f="now" checked> He gets an immediate hero advance</label>
      <div class="row"><button type="button" class="primary" data-d="ok" disabled>Promote</button><button type="button" data-d="no">Cancel</button></div></div>`;
    document.body.appendChild(ov);
    const boxes = [...ov.querySelectorAll("[data-l]")], okb = ov.querySelector("[data-d=ok]");
    const sync = () => { const n = boxes.filter(x=>x.checked).length; okb.disabled = n<1; boxes.forEach(x=>{ if(!x.checked) x.disabled = n>=2; }); };
    boxes.forEach(x=>x.addEventListener("change",sync));
    const done = v => { ov.remove(); res(v); };
    ov.addEventListener("click", e=>{ const b = e.target.closest("[data-d]"); if(!b) return;
      if(b.dataset.d==="ok"){ if(okb.disabled) return; done({name:ov.querySelector("[data-f=name]").value.trim(), lists:boxes.filter(x=>x.checked).map(x=>x.dataset.l), now:ov.querySelector("[data-f=now]").checked}); }
      else done(null); });
    ov.addEventListener("keydown", e=>{ if(e.key==="Escape") done(null); });
    ov.querySelector("[data-f=name]").focus(); });
}
const CORE_LISTS = ["combat","shooting","academic","strength","speed"];
/* The Lad's Got Talent: one model leaves the henchman group and becomes a hero of his own. Cost stays the same, so the treasury is unchanged. */
async function promoteHench(i){
  const g = S.units[i], d = g && def(g);
  if(!d || d.kind!=="henchman" || d.noXp) return false;
  if(heroCount() >= wb().maxHeroes){ await uiAlert("The warband already has "+wb().maxHeroes+" heroes. Take a normal henchman advance instead."); return false; }
  const form = await promoDialog(d); if(!form) return false;
  const nameIn = form.name, lists = form.lists, now = form.now;
  const id = "promo-"+Date.now().toString(36)+Math.floor(Math.random()*1000);
  const hd = {...d, id, kind:"hero", n:d.n+" (hero)", skills:lists, spells:[], startXp:0,
    note:"Promoted from "+d.n+" by The Lad's Got Talent. Cannot lead the warband.", stats:{...d.stats}};
  ["max","min","maxPer","needs","req","bonusModels","noCount"].forEach(k=>delete hd[k]);
  S.custom = [...(S.custom||[]), hd];
  const hero = norm({typeId:id,label:nameIn||"",qty:1,gear:[...g.gear],xp:g.xp||0,skills:[...g.skills],spells:[],adv:{...(g.adv||{})},opts:[...(g.opts||[])],inj:[],other:g.other||"",cnote:g.cnote||""});
  hero.xp0 = hero.xp;
  hero.lvl = now ? -1 : 0;
  if(g.qty>1){ g.qty--; S.units.splice(i+1,0,hero); } else { S.units[i] = hero; }
  clog((nameIn?nameIn+" (":"A ")+d.n+(nameIn?")":"")+" becomes a hero with the "+lists.join(" and ")+" skill lists"+(now?", with an immediate advance":"")+".");
  return true;
}

async function campAct(act,i,arg){
  const u = S.units[i], d = u && def(u);
  if(act==="xp"){ u.xp = (u.xp||0)+1; clog(unitName(u)+" gains 1 experience ("+u.xp+")."); }
  else if(act==="adv"){ if(!u || advPending(u)<1 || !arg) return;
    const [kind,val] = [arg.split(":")[0], arg.slice(arg.indexOf(":")+1)];
    if(kind==="stat"){ u.adv = {...(u.adv||{}), [val]:((u.adv&&u.adv[val])||0)+1}; clog(unitName(u)+" advances: +1 "+val+(d.kind==="henchman"?" (whole group)":"")+"."); }
    else if(kind==="skill"){ u.skills = [...u.skills,val]; clog(unitName(u)+" learns the skill "+val+"."); }
    else if(kind==="spell"){ u.spells = [...(u.spells||[]),val]; clog(unitName(u)+" learns the spell "+val+"."); }
    else if(kind==="promote"){ if(!(await promoteHench(i))) return; }
    else { const t = await uiPrompt("Describe the advance"); if(!t) return; u.other = (u.other?u.other+"; ":"")+t; clog(unitName(u)+" advances: "+t+"."); }
    u.lvl = (u.lvl||0)+1; }
  else if(act==="inj"){
    if(arg==="miss"){ u.miss = (u.miss||0)+1; clog(unitName(u)+" misses the next game."); }
    else { const x = INJURIES.find(e=>e.n===arg); if(!x) return;
      if(x.dead){ if(!(await uiConfirm(unitName(u)+" is dead? This removes them and their equipment from the roster."))) return; clog(unitName(u)+" dies."); S.units.splice(i,1); render(); return; }
      if(x.ask){ const n = parseInt(await uiPrompt(x.ask,"1"),10); if(!(n>0)) return; u.miss = (u.miss||0)+n; clog(unitName(u)+": "+x.n+", misses "+n+" game"+(n>1?"s":"")+"."); }
      else { let note = x.note; if(x.askNote){ const t = await uiPrompt(x.askNote); if(!t) return; note = t; }
        if(x.clear){ u.gear = []; u.styles = {}; clog(unitName(u)+" is robbed and loses all equipment."); }
        if(x.xp){ u.xp = (u.xp||0)+x.xp; }
        if(x.miss){ u.miss = (u.miss||0)+x.miss; }
        if(x.fx||note) u.inj = [...(u.inj||[]), {n:x.askNote?x.n+": "+note:x.n, fx:x.fx, note:note}];
        clog(unitName(u)+": "+x.n+(x.askNote&&note?" ("+note+")":"")+"."); } } }
  else if(act==="injdel"){ const k = +arg, x = (u.inj||[])[k]; if(!x) return; u.inj = u.inj.filter((_,n)=>n!==k); clog(unitName(u)+": "+x.n+" removed."); }
  else if(act==="missdec"){ u.miss = Math.max(0,(u.miss||0)-1); }
  else if(act==="lose"){ if(u.qty>1){ u.qty--; clog("A model from "+unitName(u)+" dies."); } else { if(!(await uiConfirm("That was the last model in the group. Remove the group?"))) return; clog(unitName(u)+" wiped out."); S.units.splice(i,1); } }
  else if(act==="buy"){ if(!u || !arg || d.kind==="hired") return;
    const item = allowedGear(d).find(e=>e.n===arg); if(!item) return;
    if(u.gear.filter(x=>x===arg).length >= (item.max||1)) return;
    const cost = priceOf(u,arg)*u.qty;
    if(treasury()<cost && !(await uiConfirm("The treasury has "+treasury()+" gc and this costs "+cost+". Buy anyway?"))) return;
    u.gear = [...u.gear, arg]; clog(unitName(u)+" buys "+arg+" ("+cost+" gc"+(u.qty>1?" for the group":"")+")."); OPEN.add("camp:"+i+":eq"); }
  else if(act==="sell"){ if(!u || !arg) return;
    const price = priceOf(u,arg)*u.qty, half = Math.floor(price/2);
    const pick = await uiChoice("What happens to the "+arg+" carried by "+unitName(u)+"?", [
      {key:"undo",label:"Undo the purchase (refund "+price+" gc)"},{key:"sell",label:"Sell it ("+half+" gc)",primary:true},{key:"drop",label:"Drop it (no refund)"}]);
    if(!pick) return;
    const k = u.gear.indexOf(arg); if(k<0) return; u.gear = u.gear.filter((_,n)=>n!==k);
    if(pick==="sell"){ S.adj = (S.adj||0) - (price-half); clog(unitName(u)+" sells "+arg+" for "+half+" gc."); }
    else if(pick==="drop"){ S.adj = (S.adj||0) - price; clog(unitName(u)+" drops "+arg+"."); }
    else clog(unitName(u)+": purchase of "+arg+" undone (refunded "+price+" gc)."); OPEN.add("camp:"+i+":eq"); }
  else if(act==="dead"){ if(!(await uiConfirm("Remove "+unitName(u)+" from the roster, with their equipment?"))) return; clog(unitName(u)+" leaves the warband."); S.units.splice(i,1); }
  else if(act==="recruit"){ const rd = wb().units.concat(HIRED).find(x=>x.id===arg); if(!rd || !canAdd(rd)) return;
    if(treasury()<rd.c && !(await uiConfirm("The treasury has "+treasury()+" gc and this costs "+rd.c+". Recruit anyway?"))) return;
    const idx = S.units.findIndex(x=>x.typeId===rd.id);
    if(rd.kind==="henchman" && idx>=0 && S.units[idx].qty<qtyCap(idx)){ S.units[idx].qty++; }
    else S.units.push(newUnit(rd));
    clog("Recruited "+rd.n+" ("+rd.c+" gc)."); }
  else if(act==="game"){ S.games = (S.games||0)+1; S.units.forEach(x=>{ if(x.miss>0) x.miss--; }); clog("Game "+S.games+" played."); }
  else if(act==="upkeep"){ const up = S.units.filter(isHired).reduce((t,x)=>t+(def(x).up||0),0); S.adj = (S.adj||0)-up; clog("Paid "+up+" gc hired sword upkeep."); }
  else return;
  render();
}
function campGold(sign){ const amt = Math.max(0,+$("cgold").value||0); if(!amt) return; const why = $("cwhy").value.trim();
  S.adj = (S.adj||0) + sign*amt; clog((sign>0?"Gained ":"Spent ")+amt+" gc"+(why?": "+why:"")+"."); render(); }
function syncView(){ const c = S.mode==="camp"; $("buildView").hidden = c; $("campView").hidden = !c;
  $("tabBuild").classList.toggle("on",!c); $("tabCamp").classList.toggle("on",c); }
function setMode(m){ S.mode = m==="camp" ? "camp" : "build"; render(); }
$("tabBuild").onclick = ()=>setMode("build");
$("tabCamp").onclick = ()=>setMode("camp");
$("campView").addEventListener("click", e=>{ const b = e.target.closest("[data-act]"); if(!b) return; const act = b.dataset.act, i = +b.dataset.i;
  if(act==="print"){ fitSheet(); window.print(); return; }
  if(act==="export"){ $("export").click(); return; }
  if(act==="gold"){ campGold(+b.dataset.s); return; }
  if(act==="adv"){ campAct("adv",i,($("adv-"+i)||{}).value); return; }
  if(act==="inj" && !b.dataset.v){ campAct("inj",i,($("inj-"+i)||{}).value); return; }
  if(act==="inj"){ campAct("inj",i,b.dataset.v); return; }
  if(act==="injdel"){ campAct("injdel",i,b.dataset.k); return; }
  if(act==="recruit"){ campAct("recruit",0,b.dataset.id); return; }
  if(act==="buy"){ campAct("buy",i,($("buy-"+i)||{}).value); return; }
  if(act==="sell"){ campAct("sell",i,b.dataset.n); return; }
  campAct(act,i); });
$("campView").addEventListener("change", e=>{ const t = e.target;
  if(t.dataset.cnote!=null){ S.units[+t.dataset.cnote].cnote = t.value; save(); } });


/* ===== Data check: warns about typos and missing references in the data files ===== */
function dataProblems(){
  const bad = [], gradeIds = WB_GRADES.map(g=>g[0]), hGrades = HIRED_GRADES.map(g=>g[0]);
  const itemNames = new Set(EQ_ITEMS.map(e=>e.n)), cats = new Set(Object.keys(EQUIPMENT));
  const okGear = n => itemNames.has(n) || cats.has(n);
  const statKeys = ["M","WS","BS","S","T","W","I","A","Ld"];
  for(const [id,w] of Object.entries(WARBANDS)){
    const at = 'Warband "'+id+'"';
    if(!w.name) bad.push(at+" has no name.");
    if(!gradeIds.includes(w.grade)) bad.push(at+': grade "'+w.grade+'" is not listed in data/grades.js.');
    if(!Array.isArray(w.units) || !w.units.length){ bad.push(at+" has no units."); continue; }
    (w.gear||[]).forEach(n=>{ if(!okGear(n)) bad.push(at+': unknown item "'+n+'" in gear.'); });
    const ids = new Set(w.units.map(u=>u.id));
    if(ids.size!==w.units.length) bad.push(at+": two units share the same id.");
    w.units.forEach(u=>{ const ut = at+', unit "'+(u.id||"?")+'"';
      if(!u.id || !u.n) bad.push(at+": a unit is missing its id or name (n).");
      if(!["hero","henchman"].includes(u.kind)) bad.push(ut+': kind must be "hero" or "henchman".');
      if(typeof u.c!=="number") bad.push(ut+": cost (c) must be a number.");
      if(u.stats && statKeys.some(k=>typeof u.stats[k]!=="number")) bad.push(ut+": stats must have all of "+statKeys.join(", ")+".");
      (u.gear||[]).forEach(n=>{ if(!okGear(n)) bad.push(ut+': unknown item "'+n+'" in gear.'); });
      (u.skills||[]).forEach(k=>{ if(!SKILLS[k]) bad.push(ut+': unknown skill list "'+k+'".'); });
      (u.spells||[]).forEach(k=>{ if(!SPELLS[k]) bad.push(ut+': unknown spell list "'+k+'".'); });
      if(u.opts && !(w.opts && w.opts[u.opts])) bad.push(ut+': opts group "'+u.opts+'" is not defined in the warband opts.');
      if(u.needs && !ids.has(u.needs)) bad.push(ut+': needs "'+u.needs+'", which is not a unit in this warband.');
      (u.maxPer ? u.maxPer.of : []).forEach(x=>{ if(!ids.has(x)) bad.push(ut+': maxPer refers to "'+x+'", which is not a unit in this warband.'); }); });
    (w.hireOnly||[]).concat(w.noHire||[]).forEach(x=>{ if(!HIRED.some(h=>h.id===x)) bad.push(at+': hireOnly/noHire names "'+x+'", which is not a hired sword id.'); });
  }
  const hid = new Set();
  HIRED.forEach(h=>{ const at = 'Hired sword "'+h.id+'"';
    if(hid.has(h.id)) bad.push(at+": duplicate id."); hid.add(h.id);
    if(!hGrades.includes(h.g)) bad.push(at+': grade "'+h.g+'" is not listed in HIRED_GRADES.');
    if(!h.st || h.st.split(" ").length!==9 || h.st.split(" ").some(x=>isNaN(+x))) bad.push(at+': st must be nine numbers, e.g. "4 3 3 3 3 1 3 1 7".');
    (h.skills||[]).forEach(k=>{ if(!SKILLS[k]) bad.push(at+': unknown skill list "'+k+'".'); });
    (h.spells||[]).forEach(k=>{ if(!SPELLS[k]) bad.push(at+': unknown spell list "'+k+'".'); });
    (h.kitItems||[]).forEach(x=>{ if(!itemNames.has(x)) bad.push(at+': kitItems names unknown item "'+x+'".'); });
    (h.kitOptions||[]).forEach(g=>{ if(!g.n || !Array.isArray(g.list) || !g.list.length) bad.push(at+": each kitOptions group needs a name (n) and a list of options.");
      (g.list||[]).forEach(o=>{ if(!o.n) bad.push(at+": a kit option is missing its name (n)."); (o.kitItems||[]).forEach(x=>{ if(!itemNames.has(x)) bad.push(at+': kit option "'+o.n+'" names unknown item "'+x+'".'); }); }); }); });
  return bad;
}
function showDataProblems(){
  const bad = dataProblems(); if(!bad.length) return;
  const el = document.createElement("details"); el.className = "datawarn noprint"; el.open = true;
  el.innerHTML = "<summary><b>"+bad.length+" problem"+(bad.length>1?"s":"")+" found in the data files</b></summary><ul>"+bad.slice(0,60).map(x=>"<li>"+esc(x)+"</li>").join("")+(bad.length>60?"<li>...and "+(bad.length-60)+" more</li>":"")+"</ul>";
  const main = document.querySelector("main"); if(main) main.insertBefore(el, main.firstChild);
}

load(); render(); showDataProblems();
