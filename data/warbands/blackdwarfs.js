/* Black Dwarfs (Chaos Dwarfs) (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("blackdwarfs", {
  "name": "Black Dwarfs (Chaos Dwarfs)",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["chaosdwarfs","chaos","evil"],
  "noRaces": ["elf","highelf","woodelf","darkelf"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Pistol","Blunderbuss","Handgun","Shield","Helmet","Light armour","Heavy armour"],
  "grade": "1c",
  "units": [
    {"id":"sorcerer","n":"Sorcerer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Pistol","Blunderbuss","Handgun","Mechanical Suit"],"skills":["combat","academic","strength","chaosdwarf-special"],"spells":["rituals-hashut"],"note":"Leader and wizard using the Rituals of Hashut; starts with two rituals, one of them the Sacrificial Ritual. Chaos Dwarfs are hard to kill, ignore armour movement penalties, and may never hire Elves."},
    {"id":"bullcentaur","n":"Bull Centaur","race":"dwarf","stats":{"M":8,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":2,"Ld":9},"kind":"hero","c":100,"max":1,"large":true,"startXp":10,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Shield","Helmet","Light armour","Heavy armour"],"skills":["combat","strength"],"note":"Large target. Never uses missile weapons."},
    {"id":"gaoler","n":"Gaoler","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":2,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Steel whip","Double-handed weapon","Man-catcher","Pistol","Blunderbuss","Handgun","Shield","Helmet","Light armour","Heavy armour"],"skills":["combat","shooting","strength","chaosdwarf-special"],"note":"Causes fear in humans."},
    {"id":"informer","n":"Informer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":15,"gear":["Mace","Axe","Spear","Sling","Bow","Shield","Helmet","Light armour"],"note":"Not a Dwarf. Can never become a hero."},
    {"id":"chaosdwarf","n":"Chaos Dwarf","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":5}
  ]
});
