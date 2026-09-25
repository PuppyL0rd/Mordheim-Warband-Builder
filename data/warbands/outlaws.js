/* Outlaws of Stirwood Forest (grade 1b). Source: Town Cryer 29 (grade 1b). See data/README.md for the fields. */
registerWarband("outlaws", {
  "name": "Outlaws of Stirwood Forest",
  "source": "Town Cryer 29 (grade 1b)",
  "tags": ["human","outlaws"],
  "noHire": ["h-bounty","h-wolfpriest","h-norse","h-deassassin"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Hunting arrows":30},
  "gear": ["Staff","Club","Mace","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Long bow","Shield","Helmet","Light armour","Hunting arrows","Forest Cloak"],
  "grade": "1b",
  "units": [
    {"id":"leader","n":"Bandit Leader","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader. Outlaws carry exactly one bow each and never crossbows. Bounty Hunters, Wolf Priests, Norse Shamans and Dark Elf Assassins won't join them."},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","strength"]},
    {"id":"cleric","n":"Cleric","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"skills":["academic"],"spells":["prayers-sigmar"],"note":"Takes the place of a Champion or Petty Thief. Knows one Prayer of Sigmar; may wear armour; no Sorcery or Arcane Lore."},
    {"id":"thief","n":"Petty Thief","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":20,"max":2,"gear":["Staff","Club","Mace","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Shield","Helmet"],"skills":["combat","shooting","speed"]},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Staff","Club","Mace","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Long bow","Shield","Helmet","Light armour","Hunting arrows"]},
    {"id":"outlaw","n":"Outlaw","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Staff","Club","Mace","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Shield","Helmet"]}
  ]
});
