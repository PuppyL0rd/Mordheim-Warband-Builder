/* Skaven of Clan Eshin (grade core). Source: Mordheim Rulebook (core). See data/README.md for the fields. */
registerWarband("skaven", {
  "name": "Skaven of Clan Eshin",
  "source": "Mordheim Rulebook (core)",
  "tags": ["skaven","evil"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Sword","Flail","Spear","Halberd","Weeping Blades","Fighting Claws","Sling","Throwing stars","Blowpipe","Warplock pistol","Light armour","Buckler","Helmet"],
  "grade": "core",
  "units": [
    {"id":"adept","n":"Assassin Adept","race":"skaven","stats":{"M":6,"WS":4,"BS":4,"S":4,"T":3,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed","skaven-special"],"note":"Leader. Perfect Killer: extra -1 modifier to enemy armour saves."},
    {"id":"blackskaven","n":"Black Skaven","race":"skaven","stats":{"M":6,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":5,"A":1,"Ld":6},"kind":"hero","c":40,"max":2,"startXp":8,"skills":["combat","shooting","strength","speed","skaven-special"]},
    {"id":"sorcerer","n":"Eshin Sorcerer","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"hero","c":45,"max":1,"startXp":8,"skills":["academic","speed","skaven-special"],"spells":["horned-rat"],"note":"Starts with one random Magic of the Horned Rat spell."},
    {"id":"nightrunner","n":"Night Runner","race":"skaven","stats":{"M":6,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"hero","c":20,"max":2,"gear":["Club","Sword","Spear","Sling","Light armour","Shield","Helmet"],"skills":["combat","shooting","skaven-special"]},
    {"id":"verminkin","n":"Verminkin","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":20,"gear":["Club","Sword","Spear","Sling","Light armour","Shield","Helmet"]},
    {"id":"giantrat","n":"Giant Rat","race":"skaven","stats":{"M":6,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":15,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."},
    {"id":"skratogre","n":"Rat Ogre","race":"skaven","stats":{"M":6,"WS":3,"BS":3,"S":5,"T":5,"W":3,"I":4,"A":3,"Ld":4},"kind":"henchman","c":210,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear. Stupid unless a Skaven hero is within 6 inches. Gains no experience."}
  ]
});
