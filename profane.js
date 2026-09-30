/* Court of the Profane Pleasures (grade 1c). Source: Tuomas Pirinen (grade 1c, draft). See data/README.md for the fields. */
registerWarband("profane", {
  "name": "Court of the Profane Pleasures",
  "source": "Tuomas Pirinen (grade 1c, draft)",
  "tags": ["chaos","evil","slaanesh","profane"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Bow":15,"Short Bow":10},
  "gear": ["Sword","Mace","Hedonist Whip","Slaaneshi Man-Catcher","Double-handed weapon","Bow","Pistol","Hochland Long Rifle","Crossbow pistol","Light armour","Shield","Buckler","Helmet","Crimson shade"],
  "opts": {
    "mutations": {"n":"Mutation (one only)","list":[{"n":"Extra Arm","c":40,"d":"An extra one-handed weapon (+1 attack) or a shield."},{"n":"Tentacle","c":35,"d":"Can grapple to reduce an enemy's attacks."},{"n":"Great Claw","c":50,"d":"Extra attack with +1 Strength."}]}
  },
  "grade": "1c",
  "units": [
    {"id":"whipmaster","n":"Slaaneshi Whipmaster","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"startXp":8,"skills":[],"opts":"mutations","note":"Draft warband: no skill table is published yet. Agony and Ecstasy, Pain and Pleasure. Only the Whipmaster may use the Slaaneshi Man-Catcher."},
    {"id":"danseuse","n":"Slaaneshi Danseuse","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":70,"max":1,"startXp":8,"gear":["Sword","Mace","Hedonist Whip","Double-handed weapon","Bow","Pistol","Hochland Long Rifle","Crossbow pistol","Crimson shade"],"skills":[],"opts":"mutations","note":"Never wears armour. Strange Allure: enemies must pass Leadership to attack her."},
    {"id":"fleshmerchant","n":"Slaaneshi Flesh Merchant","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":65,"max":1,"startXp":8,"skills":[],"opts":"mutations","note":"Pound of Flesh: a Wretch may take a wound for him. Captives become Wretches for free."},
    {"id":"obscene","n":"Slaaneshi Priest of Obscene","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":50,"max":1,"startXp":6,"skills":[],"spells":["chaos-rituals"],"opts":"mutations","note":"Wizard using Chaos Rituals. Flesh Reserve: a Wretch can be sacrificed to re-roll a spell."},
    {"id":"devout","n":"Slaaneshi Devout","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":65,"max":1,"startXp":8,"skills":[],"opts":"mutations","note":"Fluctuating form each turn: male (+1 WS, S, A, T) or female (+1 BS, +2 I, +2 Ld, +2 M). Immune to psychology."},
    {"id":"hound","n":"Slaaneshi Chaos Hound","race":"animal","stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":3},"kind":"henchman","c":15,"max":3,"gear":[],"noXp":true,"note":"Animal: no equipment or experience."},
    {"id":"beastman","n":"Slaaneshi Beastman","race":"beastman","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":4,"A":1,"Ld":6},"kind":"henchman","c":35,"max":3},
    {"id":"wretch","n":"Slaaneshi Wretch","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":10,"gear":["Mace","Sword","Spear","Short Bow","Shield","Buckler"],"note":"Can never become a hero. Immune to psychology within 6 inches of a hero."},
    {"id":"cultist","n":"Cultist","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5}
  ]
});
