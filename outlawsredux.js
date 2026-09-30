/* Outlaws of Stirwood Forest (Redux) (grade 2a). Source: Redux by Jon Davis (grade 2a). See data/README.md for the fields. */
registerWarband("outlawsredux", {
  "name": "Outlaws of Stirwood Forest (Redux)",
  "source": "Redux by Jon Davis (grade 2a)",
  "tags": ["human","outlaws"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Forest Cloak":45,"Hunting arrows":30},
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Long bow","Light armour","Helmet","Shield","Hunting arrows","Forest Cloak"],
  "grade": "2a",
  "units": [
    {"id":"leader","n":"Bandit Leader","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader. Outlaws carry exactly one bow each and never crossbows.","gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Long bow","Light armour","Helmet","Shield","Hunting arrows","Forest Cloak"]},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","strength"],"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Long bow","Light armour","Helmet","Shield","Hunting arrows","Forest Cloak"]},
    {"id":"cleric","n":"Cleric","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"skills":["academic","speed"],"spells":["prayers-sigmar"],"note":"Takes the place of a Champion or Petty Thief. Knows one Prayer of Sigmar; may wear armour; no Sorcery or Arcane Lore.","gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Long bow","Light armour","Helmet","Shield","Hunting arrows","Forest Cloak"]},
    {"id":"thief","n":"Petty Thief","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":20,"max":2,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Long bow","Light armour","Helmet","Shield","Hunting arrows","Forest Cloak"],"skills":["combat","shooting"]},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Light armour","Helmet","Shield"]},
    {"id":"outlaw","n":"Outlaw","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Short Bow","Light armour","Helmet","Shield"]}
  ]
});
