/* Horned Hunters (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("hornedhunters", {
  "name": "Horned Hunters",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["human","hornedhunters"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Spear":5,"Hunting arrows":20},
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Long bow","Toughened Leathers","Light armour","Shield","Hunting arrows","Blessed Stag Hide","Trip Wire"],
  "grade": "1b",
  "units": [
    {"id":"hunter","n":"Horned Hunter","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","strength","speed","hunter-special"],"note":"Leader. Woodcraft: the warband ignores difficult terrain. Hates Bandits and Outlaws."},
    {"id":"priest","n":"Priest of Taal","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":12,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Long bow"],"skills":["combat","academic","strength","speed","hunter-special"],"spells":["prayers-taal"],"note":"Uses the Prayers of Taal. Never wears heavy armour."},
    {"id":"initiate","n":"Initiate","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":3,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Long bow"],"skills":["combat","shooting","strength","speed","hunter-special"],"note":"Infiltrator. Never wears armour. Hates Bandits and Outlaws."},
    {"id":"drunken","n":"Drunken Gang","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":5,"gear":["Mace","Hammer","Axe","Sword","Spear","Bow","Toughened Leathers","Shield"],"note":"Drunk: passes all Leadership tests."},
    {"id":"zealot","n":"Zealot","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":20,"gear":["Mace","Hammer","Axe","Sword","Spear","Bow"],"note":"Never wears armour."},
    {"id":"warhound","n":"Warhound","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."}
  ]
});
