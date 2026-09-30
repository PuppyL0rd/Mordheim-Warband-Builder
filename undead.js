/* The Undead (grade core). Source: Mordheim Rulebook (core). See data/README.md for the fields. */
registerWarband("undead", {
  "name": "The Undead",
  "source": "Mordheim Rulebook (core)",
  "tags": ["undead","evil"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Halberd","Bow","Short Bow","Light armour","Heavy armour","Shield","Helmet"],
  "costs": {"Short Bow":5},
  "grade": "core",
  "units": [
    {"id":"vampire","n":"Vampire","race":"vampire","stats":{"M":6,"WS":4,"BS":4,"S":4,"T":4,"W":2,"I":5,"A":2,"Ld":8},"kind":"hero","c":110,"max":1,"req":true,"startXp":20,"skills":["combat","academic","strength","speed"],"note":"Leader. Causes fear. Immune to psychology and poison. No Pain."},
    {"id":"necromancer","n":"Necromancer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"skills":["academic","speed"],"spells":["necromancy"],"note":"Wizard using Necromancy."},
    {"id":"dreg","n":"Dreg","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":20,"max":3,"skills":["combat","strength"]},
    {"id":"ghoul","n":"Ghoul","race":"ghoul","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":4,"W":1,"I":3,"A":2,"Ld":5},"kind":"henchman","c":40,"gear":[],"note":"Causes fear. Carries no equipment."},
    {"id":"direwolf","n":"Dire Wolf","race":"undead","stats":{"M":9,"WS":3,"BS":0,"S":4,"T":3,"W":1,"I":2,"A":1,"Ld":4},"kind":"henchman","c":50,"max":5,"gear":[],"noXp":true,"note":"2 attacks on the charge. Cannot run. Fear. Gains no experience."},
    {"id":"zombie","n":"Zombie","race":"undead","stats":{"M":4,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":1,"A":1,"Ld":5},"kind":"henchman","c":15,"gear":[],"noXp":true,"note":"Fear. Cannot run. Gains no experience."}
  ]
});
