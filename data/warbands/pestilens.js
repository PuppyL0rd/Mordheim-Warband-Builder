/* Skaven of Clan Pestilens (grade 1b). Source: Town Cryer 29 (grade 1b). See data/README.md for the fields. */
registerWarband("pestilens", {
  "name": "Skaven of Clan Pestilens",
  "source": "Town Cryer 29 (grade 1b)",
  "tags": ["skaven","evil","pestilens"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Club","Sword","Spear","Halberd","Flail","Disease Dagger","Censer","Sling","Shield","Helmet","Light armour"],
  "grade": "1b",
  "units": [
    {"id":"priest","n":"Plague Priest","race":"skaven","stats":{"M":5,"WS":4,"BS":4,"S":4,"T":4,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed","pestilens-special"],"note":"Leader."},
    {"id":"sorcerer","n":"Pestilens Sorcerer","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"hero","c":45,"max":1,"startXp":8,"skills":["academic","speed","pestilens-special"],"spells":["horned-rat"],"note":"Spellcaster using the Magic of the Horned Rat."},
    {"id":"monk","n":"Plague Monk","race":"skaven","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":5,"A":1,"Ld":6},"kind":"hero","c":45,"max":2,"startXp":8,"skills":["combat","shooting","strength","speed","pestilens-special"]},
    {"id":"initiate","n":"Monk Initiate","race":"skaven","stats":{"M":5,"WS":2,"BS":3,"S":2,"T":2,"W":1,"I":4,"A":1,"Ld":4},"kind":"hero","c":20,"max":2,"skills":["combat","shooting","speed","pestilens-special"]},
    {"id":"novice","n":"Plague Novice","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":20,"gear":["Club","Sword","Spear","Sling","Light armour","Shield","Helmet"]},
    {"id":"giantrat","n":"Giant Rat","race":"skaven","stats":{"M":6,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":15,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."},
    {"id":"ratogre","n":"Rat Ogre","race":"skaven","stats":{"M":6,"WS":3,"BS":3,"S":5,"T":5,"W":3,"I":4,"A":3,"Ld":4},"kind":"henchman","c":210,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear. Stupid unless a Skaven hero is within 6 inches."}
  ]
});
