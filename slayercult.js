/* Dwarf Slayer Cult (grade 2a). Source: Dave Joria, from Dwarf Treasure Hunters (grade 2a). See data/README.md for the fields. */
registerWarband("slayercult", {
  "name": "Dwarf Slayer Cult",
  "source": "Dave Joria, from Dwarf Treasure Hunters (grade 2a)",
  "tags": ["dwarf","slayers","good"],
  "noRaces": ["elf","highelf","woodelf","darkelf"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Dwarf Axe","Sword","Double-handed weapon","Throwing Axe","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon"],
  "grade": "2a",
  "units": [
    {"id":"giantslayer","n":"Giant Slayer","race":"dwarf","stats":{"M":3,"WS":5,"BS":4,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":9},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","dwslayer-special"],"note":"Leader. Slayers are immune to psychology, may never wear armour and can reroll one Death result after a battle."},
    {"id":"doomseeker","n":"Doomseeker","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":55,"max":2,"startXp":8,"gear":["Mace","Hammer","Axe","Dwarf Axe","Sword","Double-handed weapon","Flail","Whirling Blades","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon"],"skills":["combat","strength","dwslayer-special"],"note":"Slayer. Missile weapons are not allowed."},
    {"id":"rememberer","n":"Rememberer","race":"dwarf","stats":{"M":3,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":8},"kind":"hero","c":40,"max":1,"startXp":0,"gear":["Mace","Hammer","Axe","Dwarf Axe","Sword","Spear","Double-handed weapon","Throwing Axe","Pistol","Crossbow","Light armour","Helmet","Shield","Buckler","Gromril Mace","Gromril Hammer","Gromril Axe","Gromril Sword","Gromril Dwarf Axe","Gromril Double-handed weapon"],"skills":["combat","shooting","academic","dwslayer-special"],"note":"Not a Slayer; never leads. Record of Valor earns an extra exploration die when a Slayer falls near him."},
    {"id":"trollslayer","n":"Troll Slayer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"note":"Slayer. Rite of Trollslaying can promote him to a hero."},
    {"id":"axehurler","n":"Axe Hurler","race":"dwarf","stats":{"M":3,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":5,"note":"Strong Arm: thrown weapons reach further by his Strength. Skittish: no Deathwish until promoted."},
    {"id":"stubbles","n":"Stubbles","race":"dwarf","stats":{"M":3,"WS":3,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":8},"kind":"henchman","c":25,"note":"New Slayers: not immune to psychology until promoted, when they must learn Deathwish."}
  ]
});
