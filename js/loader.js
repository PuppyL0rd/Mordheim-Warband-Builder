/* Loads the data files and then the app, in order.
   The data files are plain JavaScript, so this works when you open index.html from a folder and on GitHub Pages. */
const WARBANDS = {};
function registerWarband(id, w){ WARBANDS[id] = w; }
function showLoadError(msg){
  let box = document.getElementById("loaderr");
  if(!box){ box = document.createElement("div"); box.id = "loaderr"; box.setAttribute("role","alert");
    box.style.cssText = "background:#5a1d1d;color:#fff;padding:12px 16px;margin:12px;border-radius:6px;font:14px/1.4 system-ui,sans-serif";
    box.innerHTML = "<b>The tool could not load its data.</b> Check the file named below for a typo (a missing comma or bracket is the usual cause).<ul></ul>";
    document.body.insertBefore(box, document.body.firstChild); }
  const li = document.createElement("li"); li.textContent = msg; box.querySelector("ul").appendChild(li);
}
window.addEventListener("error", e => { if(e.filename && /\/(data|js)\//.test(e.filename)) showLoadError((e.message||"Error")+" in "+e.filename.split("/").slice(-2).join("/")+" line "+e.lineno); });
(function(){
  const files = [...DATA_FILES.map(f=>"data/"+f+".js"), ...WARBAND_FILES.map(id=>"data/warbands/"+id+".js"), "js/app.js"];
  files.forEach(src => { const s = document.createElement("script"); s.src = src; s.async = false;
    s.onerror = () => showLoadError("Could not load "+src+". Check the file exists and its name matches manifest.js."); document.body.appendChild(s); });
})();
