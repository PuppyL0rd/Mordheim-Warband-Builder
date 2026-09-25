/* Sisters of Sigmar (grade core). Source: Mordheim Rulebook (core). See data/README.md for the fields. */
registerWarband("sisters", {
  "name": "Sisters of Sigmar",
  "source": "Mordheim Rulebook (core)",
  "tags": ["human","good","sisters"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Sigmarite warhammer","Flail","Steel whip","Double-handed weapon","Sling","Light armour","Heavy armour","Shield","Buckler","Helmet"],
  "grade": "core",
  "units": [
    {"id":"matriarch","n":"Sigmarite Matriarch","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"gear":["Mace","Hammer","Sigmarite warhammer","Flail","Steel whip","Double-handed weapon","Sling","Light armour","Heavy armour","Shield","Buckler","Helmet","Holy tome","Blessed water","Holy relic"],"skills":["combat","academic","strength","speed","sigmar-special"],"spells":["prayers-sigmar"],"note":"Leader. Starts with one random Prayer of Sigmar; may learn a prayer instead of a skill."},
    {"id":"augur","n":"Augur","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":1,"gear":["Mace","Hammer","Sigmarite warhammer","Flail","Steel whip","Double-handed weapon","Sling"],"skills":["academic","speed","sigmar-special"],"note":"Never wears armour. Blessed Sight: re-rolls failed tests and to-hit rolls."},
    {"id":"superior","n":"Sister Superior","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":3,"startXp":8,"gear":["Mace","Hammer","Sigmarite warhammer","Flail","Steel whip","Double-handed weapon","Sling","Light armour","Heavy armour","Shield","Buckler","Helmet","Holy tome","Blessed water","Holy relic"],"skills":["combat","academic","strength","speed","sigmar-special"],"note":"May carry two Sigmarite warhammers."},
    {"id":"sister","n":"Sigmarite Sister","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"novice","n":"Novice","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":15,"max":10}
  ]
});
