/* Witch Hunters (grade core). Source: Mordheim Rulebook (core). See data/README.md for the fields. */
registerWarband("witchhunters", {
  "name": "Witch Hunters",
  "source": "Mordheim Rulebook (core)",
  "tags": ["human","good","witchhunter"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Crossbow","Pistol","Crossbow pistol","Light armour","Heavy armour","Shield","Buckler","Helmet"],
  "grade": "core",
  "units": [
    {"id":"captain","n":"Witch Hunter Captain","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader. Hates all spellcasters."},
    {"id":"witchhunter","n":"Witch Hunter","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":3,"startXp":8,"skills":["combat","shooting","academic","speed"],"note":"Hates all spellcasters."},
    {"id":"priest","n":"Warrior-Priest","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":40,"max":1,"startXp":12,"skills":["combat","academic","strength"],"spells":["prayers-sigmar"],"note":"Starts with one random Prayer of Sigmar and may learn a prayer instead of a skill."},
    {"id":"flagellant","n":"Flagellant","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":10},"kind":"henchman","c":40,"max":5,"gear":["Flail","Morning star","Double-handed weapon"],"note":"Fanatical: passes all Leadership tests. Never a warband leader; never uses missile weapons."},
    {"id":"zealot","n":"Zealot","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":20,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Bow","Short Bow","Light armour","Shield","Helmet"]},
    {"id":"warhound","n":"War Hound","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."}
  ]
});
