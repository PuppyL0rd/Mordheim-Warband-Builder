/* Template for a new warband. Copy this file to data/warbands/<id>.js, edit it, and add "<id>" to WARBAND_FILES in data/manifest.js.
   This file is not loaded by the tool. See data/README.md for every field. */
registerWarband("myid", {
  "name": "My Warband",
  "source": "Where the rules came from",
  "tags": ["human","mercenary"],
  "gear": ["Sword","Spear","Bow","Light armour","Shield","Helmet"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "grade": "1a",
  "units": [
    {"id":"leader","n":"Leader","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader."},
    {"id":"warrior","n":"Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25}
  ]
});
