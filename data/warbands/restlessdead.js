/* The Restless Dead (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("restlessdead", {
  "name": "The Restless Dead",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["undead","evil","restlessdead"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Halberd","Double-handed weapon","Short Bow","Bow","Shield","Buckler","Helmet","Light armour","Heavy armour"],
  "grade": "1c",
  "units": [
    {"id":"liche","n":"Liche","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":2,"T":2,"W":4,"I":4,"A":1,"Ld":8},"kind":"hero","c":125,"max":1,"req":true,"startXp":20,"gear":["Shield","Buckler","Helmet","Light armour","Heavy armour"],"skills":["academic","restless-special"],"spells":["necromancy-restless"],"note":"Leader and wizard; starts with two Necromancy spells. Uses no non-magical weapons; may cast in armour. Fear, immune to psychology and poison, No Pain. Eternal: may trade Wounds to ignore serious injuries."},
    {"id":"necromancer","n":"Necromancer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":8,"skills":["academic","speed","restless-special"],"spells":["necromancy-restless"],"note":"Apprentice: only knows spells his Liche knows. Gofer: rolls 3D6 keeping the best two when searching."},
    {"id":"graveguard","n":"Grave Guard","race":"undead","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":6},"kind":"hero","c":35,"max":3,"startXp":6,"skills":["combat","strength"],"note":"Wight Blades: a natural 6 to hit always wounds. Fear, immune to psychology and poison, cannot run, cannot search for rare items."},
    {"id":"zombie","n":"Zombie","race":"undead","stats":{"M":4,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":1,"A":1,"Ld":5},"kind":"henchman","c":15,"gear":[],"noXp":true,"note":"Fear, cannot run, no weapons or armour."},
    {"id":"skeleton","n":"Skeleton","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":5},"kind":"henchman","c":20,"max":8,"noXp":true,"note":"Fear, cannot run. Gains no experience."},
    {"id":"wight","n":"Wight","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":6},"kind":"henchman","c":30,"max":3,"note":"Fear, cannot run. May gain experience; a promoted Wight takes Combat and Strength skills and Wight Blades."},
    {"id":"scarecrow","n":"Scarecrow","race":"undead","stats":{"M":5,"WS":3,"BS":0,"S":3,"T":3,"W":1,"I":3,"A":2,"Ld":10},"kind":"henchman","c":65,"max":2,"maxPer":{"of":["liche","necromancer"],"mult":1},"gear":[],"noXp":true,"note":"Toughness 6 against shooting and missile magic. Flammable (double fire damage). Controlled by the Liche or Necromancer, one each."}
  ]
});
