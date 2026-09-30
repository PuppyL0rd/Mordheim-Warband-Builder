/* Imperial Outriders (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("outriders", {
  "name": "Imperial Outriders",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["human","good","outriders"],
  "hireOnly": ["h-freelancer","h-roadwarden"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Lance":40,"Ithilmar armour":90,"Gromril armour":150},
  "gear": ["Hammer","Axe","Sword","Spear","Morning star","Lance","Buckler","Shield","Helmet","Light armour","Heavy armour","Barding","Ithilmar armour","Gromril armour"],
  "opts": {
    "mount": {"n":"Mount","list":[{"n":"Warhorse upgrade","c":40,"d":"Upgrades the included riding horse to a warhorse."}]}
  },
  "grade": "1b",
  "units": [
    {"id":"knight","n":"Knight","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"opts":"mount","note":"Leader. Comes with a riding horse. Outriders may only hire the Freelancer and Roadwarden."},
    {"id":"outrider","n":"Outrider","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":65,"max":2,"startXp":8,"gear":["Hammer","Axe","Sword","Spear","Morning star","Lance","Buckler","Shield","Helmet","Light armour","Heavy armour","Barding","Ithilmar armour","Gromril armour","Pistol","Handgun","Blunderbuss","Hochland Long Rifle"],"skills":["combat","shooting","strength"],"opts":"mount","note":"Comes with a riding horse."},
    {"id":"scout","n":"Scout","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":45,"max":2,"gear":["Hammer","Axe","Sword","Spear","Morning star","Lance","Buckler","Shield","Helmet","Light armour","Heavy armour","Barding","Ithilmar armour","Gromril armour","Throwing knives"],"skills":["combat","shooting","speed"],"note":"Comes with a riding horse."},
    {"id":"chasseur","n":"Chasseur","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":55,"max":5,"gear":["Hammer","Axe","Sword","Spear","Morning star","Lance","Buckler","Shield","Helmet","Light armour","Heavy armour","Barding","Ithilmar armour","Gromril armour","Pistol","Handgun","Blunderbuss","Hochland Long Rifle"],"note":"Comes with a riding horse."},
    {"id":"hussar","n":"Hussar","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":60,"max":5,"opts":"mount","note":"Comes with a riding horse. Combat Riding."},
    {"id":"groom","n":"Groom","race":"human","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":50,"max":2,"gear":["Hammer","Axe","Sword","Spear","Morning star","Lance","Buckler","Shield","Helmet","Light armour","Heavy armour","Barding","Ithilmar armour","Gromril armour","Throwing knives"],"note":"Comes with a riding horse and Animal Handling."}
  ]
});
