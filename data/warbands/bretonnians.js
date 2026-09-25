/* Bretonnian Knights (grade 1b). Source: Town Cryer 8 (grade 1b). See data/README.md for the fields. */
registerWarband("bretonnians", {
  "name": "Bretonnian Knights",
  "source": "Town Cryer 8 (grade 1b)",
  "tags": ["human","good","bretonnians"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Double-handed weapon","Morning star","Lance","Light armour","Heavy armour","Shield","Helmet","Bretonnian Barding","Warhorse"],
  "grade": "1b",
  "units": [
    {"id":"knight","n":"Questing Knight","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":80,"max":1,"req":true,"startXp":20,"skills":["combat","strength","speed","knight-virtues"],"note":"Leader. Never tests for being all alone. The Lady of the Lake's blessing curses enemy blackpowder fire."},
    {"id":"errant","n":"Knight Errant","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":50,"max":2,"startXp":8,"skills":["combat","speed","knight-virtues"],"note":"Never tests for being all alone. May only ride a warhorse if the Questing Knight does."},
    {"id":"squire","n":"Squire","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":3,"maxPer":{"of":["knight","errant"],"mult":1},"gear":["Hammer","Axe","Sword","Spear","Bow","Long bow","Shield","Buckler","Helmet","Light armour","Horse"],"skills":["combat","strength"],"note":"Never more Squires than Knights."},
    {"id":"manatarms","n":"Man-at-Arms","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":8,"gear":["Hammer","Axe","Sword","Spear","Halberd","Double-handed weapon","Shield","Helmet","Light armour"]},
    {"id":"bowman","n":"Bowman","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":20,"gear":["Axe","Sword","Bow","Long bow","Helmet","Light armour"]}
  ]
});
