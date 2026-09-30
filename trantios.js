/* Tileans: Trantios (grade 1b). Source: Town Cryer 14 (Lustria, Cities of Gold). See data/README.md for the fields. */
registerWarband("trantios", {
  "name": "Tileans: Trantios",
  "source": "Town Cryer 14 (Lustria, Cities of Gold)",
  "tags": ["human","good","tileans","trantios"],
  "gold": 600,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Halberd","Pike","Morning star","Double-handed weapon","Rapier","Crossbow","Pistol","Duelling pistol","Bow","Light armour","Shield","Buckler","Helmet"],
  "grade": "1b",
  "units": [
    {"id":"captain","n":"Captain","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":2,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader. Trantios start with an extra 100 gc (600 gc)."},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","speed"]},
    {"id":"youngblood","n":"Youngblood","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"skills":["combat","shooting","strength"]},
    {"id":"warrior","n":"Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Mace","Hammer","Axe","Sword","Crossbow","Pistol","Duelling pistol","Long bow","Handgun","Hunting Rifle","Light armour","Helmet"],"note":""},
    {"id":"duellist","n":"Duellist","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"note":"Cloak & Dagger: counts as using a buckler in close combat."}
  ]
});
