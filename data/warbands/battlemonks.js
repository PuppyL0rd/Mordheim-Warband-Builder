/* Battle Monks of Cathay (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("battlemonks", {
  "name": "Battle Monks of Cathay",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["human","battlemonks"],
  "hireExplicit": true,
  "hireTags": ["battlemonks"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Horse":30},
  "gear": ["Spear","Sword","Dragon Sword","Cathayan longsword","Duelling pistol","Handgun","Bow","Crossbow","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak","Horse"],
  "grade": "1c",
  "units": [
    {"id":"emissary","n":"Emissary","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["shooting","academic","speed","monk-special"],"note":"Leader. May only pick the Warmonger special skill. If he dies you must hire a new Emissary before buying anything else. The warband may not hire outsiders."},
    {"id":"officer","n":"Officer","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":12,"gear":["Spear","Sword","Dragon Sword","Cathayan longsword","Duelling pistol","Handgun","Bow","Crossbow","Light armour","Heavy armour","Shield","Helmet"],"skills":["combat","shooting","strength","speed"]},
    {"id":"dragonmonk","n":"Dragon Monk","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":55,"max":3,"startXp":15,"gear":["Axe","Spear","Sword","Quarter staff","Dragon Sword","Chain sticks","Fish-hook shot","Throwing stars"],"skills":["combat","academic","strength","speed","monk-special"],"note":"Never wears armour or uses poison. Fights unarmed with +1 Attack and criticals on 5-6 (Art of Silent Death)."},
    {"id":"soldier","n":"Soldier","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Spear","Sword","Dragon Sword","Cathayan longsword","Duelling pistol","Handgun","Bow","Crossbow","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"warriormonk","n":"Warrior Monk","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"gear":["Axe","Spear","Sword","Quarter staff","Dragon Sword","Chain sticks","Fish-hook shot","Throwing stars"],"note":"Never wears armour. Fights unarmed with +1 Attack."},
    {"id":"peasant","n":"Raging Peasant","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":10,"max":5,"gear":[],"noXp":true,"note":"Fights unarmed. Wounds mean out of action. +1 Ld per nearby peasant."}
  ]
});
