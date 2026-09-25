/* Mootlanders (grade 1b). Source: Citadel Journal 36 (grade 1b). See data/README.md for the fields. */
registerWarband("mootlanders", {
  "name": "Mootlanders",
  "source": "Citadel Journal 36 (grade 1b)",
  "tags": ["halfling","good","mootlanders"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Spear","Sword","Mace","Bow","Short Bow","Sling","Light armour","Shield","Cooking Pot Helmet"],
  "grade": "1b",
  "units": [
    {"id":"elder","n":"Moot Elder","race":"halfling","stats":{"M":4,"WS":3,"BS":5,"S":2,"T":2,"W":1,"I":6,"A":1,"Ld":9},"kind":"hero","c":55,"max":1,"req":true,"startXp":20,"gear":["Spear","Sword","Mace","Bow","Short Bow","Sling","Light armour","Shield","Cooking Pot Helmet","Pistol"],"skills":["combat","shooting","academic","speed"],"note":"Leader. Halflings are stunned on an injury roll of 2."},
    {"id":"chef","n":"Master Chef","race":"halfling","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":2,"W":1,"I":5,"A":1,"Ld":9},"kind":"hero","c":35,"max":1,"startXp":8,"gear":["Kitchen Knife","Cleaver","Ladle","Tenderiser","Cooking Pot Helmet"],"skills":["combat","shooting","strength","speed"],"note":"Inspired Cooking: Halflings within 6 inches may re-roll failed hits once per turn."},
    {"id":"thief","n":"Halfling Thief","race":"halfling","stats":{"M":4,"WS":3,"BS":4,"S":2,"T":2,"W":1,"I":5,"A":1,"Ld":9},"kind":"hero","c":25,"max":3,"skills":["shooting","academic","speed"],"note":"Sneaky: -1 to be hit by missiles."},
    {"id":"warrior","n":"Halfling Warrior","race":"halfling","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":2,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":15},
    {"id":"scout","n":"Halfling Scout","race":"halfling","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":2,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":20,"max":5,"note":"Keen Eyesight: spots hidden enemies from twice their Initiative."}
  ]
});
