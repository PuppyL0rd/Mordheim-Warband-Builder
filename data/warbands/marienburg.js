/* Marienburg Mercenaries (grade core). Source: Mordheim core rulebook. See data/README.md for the fields. */
registerWarband("marienburg", {
  "name": "Marienburg Mercenaries",
  "source": "Mordheim core rulebook",
  "tags": ["human","mercenary","good","marienburg"],
  "gear": ["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Crossbow","Pistol","Duelling pistol","Bow","Light armour","Heavy armour","Shield","Buckler","Helmet"],
  "gold": 600,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "grade": "core",
  "units": [
    {"id":"captain","n":"Captain","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"]},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","speed"]},
    {"id":"youngblood","n":"Youngblood","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"skills":["combat","shooting","speed"]},
    {"id":"warrior","n":"Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Mace","Hammer","Axe","Sword","Crossbow","Pistol","Bow","Long bow","Blunderbuss","Handgun","Hunting Rifle","Light armour","Shield","Helmet"],"note":""},
    {"id":"swordsman","n":"Swordsman","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5}
  ]
});
