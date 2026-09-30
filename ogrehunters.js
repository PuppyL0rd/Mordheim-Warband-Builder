/* Ogre Hunting Party (grade 2a). Source: Styrofoam King and Catferret v1.3 (grade 2a). See data/README.md for the fields. */
registerWarband("ogrehunters", {
  "name": "Ogre Hunting Party",
  "source": "Styrofoam King and Catferret v1.3 (grade 2a)",
  "tags": ["ogres","gnoblars","greenskin","ogrehunters"],
  "hireOnly": ["h-hobgoblin","h-ninjagnoblar"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Cleaver","Ogre club","Sword","Spear","Double-handed weapon","Harpoon crossbow","Light armour","Helmet","Club","Sharp Stuff","Shield","Rope & Hook","Throwing knives","Sling","Pigback Mount"],
  "grade": "2a",
  "units": [
    {"id":"hunter","n":"Ogre Hunter","race":"ogrehunter","stats":{"M":6,"WS":4,"BS":3,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":8},"kind":"hero","c":145,"max":1,"req":true,"large":true,"startXp":20,"gear":["Cleaver","Ogre club","Sword","Spear","Double-handed weapon","Harpoon crossbow","Light armour","Helmet"],"skills":["combat","strength","ogrehunt-special"],"note":"Leader. Fear, large target, half-rate experience, never wears heavy armour. Lazy: leaves searching to Gnoblar heroes. Central Figure: if he goes out of action the warband is at rout level. If he dies the best Gnoblar leads."},
    {"id":"trapper","n":"Trapper","race":"gnoblar","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":30,"max":3,"startXp":8,"gear":["Club","Cleaver","Sword","Spear","Double-handed weapon","Sharp Stuff","Throwing knives","Light armour","Shield","Helmet","Rope & Hook","Pigback Mount"],"skills":["combat","shooting","speed","ogrehunt-special"],"note":"Veteran Tracker: starts with one of Infiltration, Set Traps, Netter or Scent Hound. Gnoblars bicker."},
    {"id":"baiter","n":"Sabre-Baiter","race":"gnoblar","stats":{"M":4,"WS":2,"BS":3,"S":2,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"hero","c":20,"max":1,"gear":["Club","Cleaver","Sword","Spear","Double-handed weapon","Sharp Stuff","Throwing knives","Light armour","Shield","Helmet","Rope & Hook","Pigback Mount"],"skills":["combat","speed","ogrehunt-special"],"note":"Bait: moves away from a charger."},
    {"id":"fighter","n":"Gnoblar Fighter","race":"gnoblar","stats":{"M":4,"WS":2,"BS":3,"S":2,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15,"gear":["Club","Cleaver","Sword","Spear","Double-handed weapon","Sharp Stuff","Light armour","Shield","Helmet","Rope & Hook"],"note":"Bicker: on a 1 each turn does nothing but insult."},
    {"id":"flinger","n":"Flinger","race":"gnoblar","stats":{"M":4,"WS":2,"BS":3,"S":2,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":20,"max":7,"gear":["Club","Cleaver","Sword","Spear","Double-handed weapon","Sharp Stuff","Sling","Light armour","Shield","Helmet","Rope & Hook"],"note":"Scrap Slinger: throws three pieces of Sharp Stuff per turn. Bickers."},
    {"id":"cub","n":"Sabretusk Cub","race":"animal","stats":{"M":6,"WS":3,"BS":0,"S":4,"T":4,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":50,"max":3,"sv":5,"gear":[],"noXp":true,"note":"Fear. Untamed: may bolt on a 1. Two attacks on the charge. 5+ natural save."}
  ]
});
