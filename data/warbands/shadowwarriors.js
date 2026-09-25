/* Shadow Warriors (grade 1b). Source: Town Cryer 10, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("shadowwarriors", {
  "name": "Shadow Warriors",
  "source": "Town Cryer 10, revised in Mordheim Annual 2002",
  "tags": ["highelf","elf","good","shadowwarriors"],
  "noHire": ["h-assassin","h-deassassin"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Sword","Spear","Double-handed weapon","Bow","Long bow","Elf Bow","Light armour","Shield","Helmet","Ithilmar armour","Elven Cloak","Standard of Nagarythe","War Horn of Nagarythe","Elven Wine"],
  "grade": "1b",
  "units": [
    {"id":"master","n":"Shadow Master","race":"highelf","stats":{"M":5,"WS":5,"BS":5,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":9},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","speed","shadow-special"],"note":"Leader. Hates Dark Elves; spots hidden enemies from twice as far. Never uses poison. May hire anyone not evil or chaotic (no Assassins)."},
    {"id":"walker","n":"Shadow Walker","race":"highelf","stats":{"M":5,"WS":5,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":45,"max":3,"startXp":12,"skills":["combat","shooting","speed","shadow-special"]},
    {"id":"weaver","n":"Shadow Weaver","race":"highelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":55,"max":1,"startXp":12,"gear":["Sword","Spear","Double-handed weapon","Bow","Long bow","Elf Bow","Light armour","Shield","Helmet","Ithilmar armour","Elven Cloak","Elven Runestones"],"skills":["combat","academic","speed","shadow-special"],"spells":["shadow-magic"],"note":"Wizard using Shadow Magic. Cannot cast while wearing armour."},
    {"id":"warrior","n":"Shadow Warrior","race":"highelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"henchman","c":35,"gear":["Sword","Spear","Double-handed weapon","Bow","Long bow","Elf Bow","Light armour","Shield","Helmet","Elven Cloak"]},
    {"id":"novice","n":"Shadow Novice","race":"highelf","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Sword","Spear","Double-handed weapon","Bow","Long bow","Elf Bow","Light armour","Shield","Helmet","Elven Cloak"]}
  ]
});
