/* Averlander Mercenaries (grade 1a). Source: Town Cryer 10, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("averlander", {
  "name": "Averlander Mercenaries",
  "source": "Town Cryer 10, revised in Mordheim Annual 2002",
  "tags": ["human","mercenary","good","averlanders"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Halberd","Morning star","Double-handed weapon","Pistol","Duelling pistol","Crossbow","Bow","Light armour","Heavy armour","Shield","Buckler","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"captain","n":"Captain","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader."},
    {"id":"sergeant","n":"Sergeant","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"skills":["combat","strength","speed"]},
    {"id":"bergjaeger","n":"Bergjaeger","race":"human","stats":{"M":4,"WS":2,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":4,"gear":["Mace","Hammer","Axe","Sword","Bow","Long bow","Light armour","Buckler","Helmet","Hunting arrows"],"skills":["shooting","speed"],"note":"Set Traps: places a trap marker that hits the first model to come near it (S4 on a 3+)."},
    {"id":"youngblood","n":"Youngblood","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":1,"skills":["combat","shooting","speed"]},
    {"id":"mountainguard","n":"Mountainguard","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Mace","Hammer","Axe","Sword","Crossbow","Pistol","Bow","Long bow","Blunderbuss","Handgun","Hunting Rifle","Light armour","Buckler","Helmet"]},
    {"id":"halflingscout","n":"Halfling Scout","race":"halfling","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":2,"W":1,"I":4,"A":1,"Ld":8},"kind":"henchman","c":20,"max":3,"gear":["Mace","Hammer","Axe","Sword","Bow","Light armour","Buckler","Helmet"],"note":"If promoted to a hero, cannot choose Strength skills."}
  ]
});
