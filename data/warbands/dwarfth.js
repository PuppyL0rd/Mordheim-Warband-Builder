/* Dwarf Treasure Hunters (grade 1a). Source: Town Cryer 4, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("dwarfth", {
  "name": "Dwarf Treasure Hunters",
  "source": "Town Cryer 4, revised in Mordheim Annual 2002",
  "tags": ["dwarf","good","dwarftreasurehunters"],
  "noRaces": ["elf","highelf","woodelf","darkelf"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Dwarf Axe","Double-handed weapon","Spear","Halberd","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon","Gromril Spear","Gromril Halberd","Pistol","Light armour","Heavy armour","Gromril armour","Shield","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"noble","n":"Dwarf Noble","race":"dwarf","stats":{"M":3,"WS":5,"BS":4,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","strength","dwarf-special"],"note":"Leader. Dwarfs are hard to kill, ignore armour movement penalties and hate Orcs and Goblins. +1 wyrdstone found."},
    {"id":"engineer","n":"Dwarf Engineer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":1,"startXp":10,"gear":["Mace","Hammer","Axe","Sword","Pistol","Crossbow","Handgun","Light armour","Heavy armour","Shield","Helmet"],"skills":["combat","shooting","dwarf-special"],"note":"Expert Weaponsmith: warband pistols shoot 3 inches further, crossbows and handguns 6 inches."},
    {"id":"trollslayer","n":"Dwarf Troll Slayer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":2,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Dwarf Axe","Double-handed weapon","Spear","Halberd","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon","Gromril Spear","Gromril Halberd"],"skills":["combat","strength","dwarf-special","slayer-special"],"note":"No armour or missile weapons. Immune to psychology."},
    {"id":"clansman","n":"Dwarf Clansman","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40},
    {"id":"thunderer","n":"Dwarf Thunderer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":5,"gear":["Mace","Hammer","Axe","Sword","Pistol","Crossbow","Handgun","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"beardling","n":"Beardling","race":"dwarf","stats":{"M":3,"WS":3,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":8},"kind":"henchman","c":25}
  ]
});
