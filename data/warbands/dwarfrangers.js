/* Dwarf Rangers (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("dwarfrangers", {
  "name": "Dwarf Rangers",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["dwarf","good","dwarfrangers"],
  "noRaces": ["elf","highelf","woodelf","darkelf"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Dwarf Axe","Double-handed weapon","Spear","Halberd","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon","Gromril Spear","Gromril Halberd","Pistol","Light armour","Heavy armour","Gromril armour","Shield","Helmet"],
  "grade": "1b",
  "units": [
    {"id":"runesmith","n":"Runesmith","race":"dwarf","stats":{"M":3,"WS":5,"BS":4,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":10},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","ranger-special"],"spells":["dwarf-runes"],"note":"Leader. Knows one minor rune and inscribes it on one item before each game. Dwarfs cannot learn Arcane Lore."},
    {"id":"apprentice","n":"Apprentice Runesmith","race":"dwarf","stats":{"M":3,"WS":3,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":8},"kind":"hero","c":40,"max":1,"gear":["Mace","Hammer","Axe","Sword","Dwarf Axe","Double-handed weapon","Spear","Halberd"],"skills":["combat","academic","strength","ranger-special"],"note":"Lets the Runesmith inscribe two items per game."},
    {"id":"trollslayer","n":"Dwarf Troll Slayer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":2,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Dwarf Axe","Double-handed weapon","Spear","Halberd","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon","Gromril Spear","Gromril Halberd"],"skills":["combat","strength","ranger-special","slayer-special"],"note":"No armour or missile weapons. Immune to psychology."},
    {"id":"longbeard","n":"Dwarf Longbeard","race":"dwarf","stats":{"M":3,"WS":5,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":9},"kind":"henchman","c":50,"max":5,"note":"Stubborn: may re-roll failed Leadership tests."},
    {"id":"clansman","n":"Dwarf Clansman","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40},
    {"id":"crossbowman","n":"Dwarf Crossbowman","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":5,"gear":["Mace","Hammer","Axe","Sword","Crossbow","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"beardling","n":"Beardling","race":"dwarf","stats":{"M":3,"WS":3,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":8},"kind":"henchman","c":25}
  ]
});
