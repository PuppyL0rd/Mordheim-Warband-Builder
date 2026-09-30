/* Gunnery School of Nuln (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("gunnery", {
  "name": "Gunnery School of Nuln",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["human","good","gunnery"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Pistol":10,"Double-barrelled pistol":20,"Duelling pistol":20,"Handgun":25,"Blunderbuss":20,"Hochland Long Rifle":100},
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Halberd","Morning star","Double-handed weapon","Pistol","Double-barrelled pistol","Duelling pistol","Double-barrelled duelling pistol","Handgun","Double-barrelled handgun","Light armour","Heavy armour","Shield","Buckler","Helmet","Superior Black Powder"],
  "grade": "1b",
  "units": [
    {"id":"officer","n":"Senior Gunnery Officer","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader within 12 inches. Has the Hunter skill. The school never uses non-blackpowder missile weapons."},
    {"id":"instructor","n":"Instructor","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":12,"gear":["Mace","Hammer","Axe","Sword","Spear","Halberd","Morning star","Double-handed weapon","Pistol","Double-barrelled pistol","Duelling pistol","Double-barrelled duelling pistol","Handgun","Double-barrelled handgun","Repeater Pistol","Blunderbuss","Hochland Long Rifle","Repeater Handgun","Hand-held Mortar","Pigeon Bombs","Light armour","Heavy armour","Shield","Buckler","Helmet","Superior Black Powder"],"skills":["shooting","academic","speed"],"note":"Expert Weaponsmith: pistols shoot 3 inches further, other blackpowder weapons 6 inches."},
    {"id":"student","n":"Senior Student","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":8,"skills":["combat","shooting","strength","speed"]},
    {"id":"underclass","n":"Underclassman","race":"human","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":20,"max":2,"skills":["combat","shooting","speed"]},
    {"id":"sonsguns","n":"Son of the Guns","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":7,"gear":["Mace","Hammer","Axe","Sword","Pistol","Double-barrelled pistol","Repeater Pistol","Blunderbuss","Handgun","Double-barrelled handgun","Hochland Long Rifle","Repeater Handgun","Hand-held Mortar","Pigeon Bombs","Light armour","Shield","Helmet","Superior Black Powder"],"note":"Quick Reload: has the Hunter skill."},
    {"id":"pistolier","n":"Pistolier","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"note":"Crack Shot: re-rolls missed pistol attacks in the first round of combat."}
  ]
});
