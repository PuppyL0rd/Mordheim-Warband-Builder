/* The Sons of Hashut (grade 1c). Source: GW Troll Magazine (Spain) (grade 1c). See data/README.md for the fields. */
registerWarband("sonsofhashut", {
  "name": "The Sons of Hashut",
  "source": "GW Troll Magazine (Spain) (grade 1c)",
  "tags": ["chaosdwarfs","chaos","evil"],
  "noRaces": ["elf","highelf","woodelf","darkelf"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 14,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Obsidian weapon","Pistol","Light armour","Heavy armour","Shield","Helmet"],
  "grade": "1c",
  "units": [
    {"id":"sorcerer","n":"Apprentice Sorcerer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":9},"kind":"hero","c":85,"max":1,"req":true,"startXp":20,"skills":["combat","academic","hashut-special"],"spells":["chaos-dwarf-magic"],"note":"Leader and wizard; cannot cast in armour. Chaos Dwarfs and Bull Centaurs are hard to kill, ignore armour movement penalties and never free captives."},
    {"id":"bullcentaur","n":"Bull Centaur","race":"dwarf","stats":{"M":7,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":2,"Ld":9},"kind":"hero","c":75,"max":1,"large":true,"startXp":12,"skills":["combat","strength","hashut-special"],"note":"Large target."},
    {"id":"champion","n":"Chaos Dwarf Champion","race":"dwarf","stats":{"M":3,"WS":5,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":2,"startXp":8,"skills":["combat","shooting","strength","hashut-special"]},
    {"id":"warrior","n":"Chaos Dwarf Warrior","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":6},
    {"id":"blunderbuss","n":"Blunderbuss Chaos Dwarf","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"henchman","c":40,"max":3,"gear":["Hammer","Axe","Sword","Chaos Dwarf Blunderbuss","Pistol","Light armour","Heavy armour","Helmet"],"note":"Starts with a Chaos Dwarf Blunderbuss (40 gc); buy it below to cost it."},
    {"id":"hobgoblin","n":"Hobgoblin","race":"hobgoblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":15,"min":4,"gear":["Axe","Sword","Hobgoblin Poisoned Daggers","Short Bow","Bow","Light armour","Shield"],"note":"At least four required. Count as half a model for rout tests. A serious injury roll of 1-3 means they desert. Can never become heroes."}
  ]
});
