/* Pirates (grade 1b). Source: Town Cryer 9 (grade 1b). See data/README.md for the fields. */
registerWarband("pirates", {
  "name": "Pirates",
  "source": "Town Cryer 9 (grade 1b)",
  "tags": ["human","mercenary","pirates"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Duelling pistol":30},
  "gear": ["Hammer","Mace","Axe","Boat Hook","Cat O' Nine Tails","Sword","Double-handed weapon","Belaying Pin","Crossbow","Pistol","Duelling pistol","Buckler","Toughened Leathers","Helmet","Light armour","Hook Hand","Peg Leg","Hardtack Biscuits","Spy Glass","Compass","Jolly Roger","Treasure Map","Parrot"],
  "grade": "1b",
  "units": [
    {"id":"captain","n":"Pirate Captain","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed","pirate-special"],"note":"Leader. Pirates hire as human mercenaries do (+20 gc upkeep if both Dwarfs and Elves are aboard). May press captured heroes into the crew."},
    {"id":"mate","n":"Ship's Mate","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","strength","pirate-special"]},
    {"id":"cabinboy","n":"Cabin Boy","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"skills":["combat","shooting","speed","pirate-special"]},
    {"id":"crew","n":"Crew","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Hammer","Mace","Axe","Boat Hook","Sword","Double-handed weapon","Belaying Pin","Crossbow","Pistol","Duelling pistol","Buckler","Toughened Leathers","Helmet","Light armour","Hook Hand","Peg Leg","Hardtack Biscuits"]},
    {"id":"gunner","n":"Gunner","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Hammer","Mace","Axe","Sword","Pistol","Blunderbuss","Duelling pistol","Handgun","Swivel Gun","Toughened Leathers","Helmet","Light armour","Ball Shot","Chain Shot","Grape Shot"],"note":"A Swivel Gun gunner always fights as an individual (one Swivel Gun per warband)."},
    {"id":"boatswain","n":"Boatswain","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":32,"max":5,"gear":["Hammer","Mace","Axe","Boat Hook","Sword","Double-handed weapon","Belaying Pin","Crossbow","Pistol","Duelling pistol","Buckler","Toughened Leathers","Helmet","Light armour"],"note":"Starts with a Rope & Hook and re-rolls failed Initiative tests for climbing and jumping."},
    {"id":"swabbie","n":"Swabbie","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":0,"max":5,"maxPer":{"of":["crew"],"mult":1},"noXp":true,"gear":["Hammer","Mace","Axe","Boat Hook","Sword","Double-handed weapon","Belaying Pin","Bow","Buckler","Toughened Leathers"],"note":"Not hired: recruited from captives (two free in one-off games). Never more Swabbies than Crew. Gains no experience."}
  ]
});
