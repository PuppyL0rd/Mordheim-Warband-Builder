/* Masters of Horror (grade 2a). Source: Sylvania supplement (grade 2a). See data/README.md for the fields. */
registerWarband("horror", {
  "name": "Masters of Horror",
  "source": "Sylvania supplement (grade 2a)",
  "tags": ["undead","evil","mastersofhorror"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Bow","Short Bow","Light armour","Shield","Helmet","Chainsaw Sword","Electric Trident","Repeater Pistol"],
  "grade": "2a",
  "units": [
    {"id":"scientist","n":"Mad Scientist","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["academic","speed","horror-special"],"note":"Leader. Immune to psychology. Masters of Horror hire the same swords as Undead warbands."},
    {"id":"thrall","n":"Thrall","race":"human","stats":{"M":5,"WS":3,"BS":3,"S":4,"T":4,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":70,"max":1,"startXp":8,"skills":["combat","strength","speed","horror-special"],"note":"A lesser Vampire: fear, immune to psychology and poison, No Pain."},
    {"id":"wolfman","n":"Wolfman","race":"wolfman","stats":{"M":6,"WS":3,"BS":3,"S":4,"T":3,"W":2,"I":2,"A":2,"Ld":7},"kind":"hero","c":65,"max":1,"startXp":8,"gear":[],"skills":["combat","strength","speed","horror-special"],"note":"Cannot bear equipment."},
    {"id":"hunchback","n":"Hunchback","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":2,"skills":["combat","strength","speed","horror-special"]},
    {"id":"zombie","n":"Zombie","race":"undead","stats":{"M":4,"WS":2,"BS":0,"S":3,"T":4,"W":1,"I":1,"A":1,"Ld":5},"kind":"henchman","c":20,"gear":[],"noXp":true,"note":"Fear, cannot run, no equipment. Cannot be promoted."},
    {"id":"bitten","n":"The Bitten","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"henchman","c":40,"max":3,"gear":["Mace","Axe","Sword","Spear","Shield"],"note":"Transform: roll a D6 each turn; on a 6 gains frenzy and sprint, on a 1 suffers stupidity."},
    {"id":"construct","n":"Flesh Construct","race":"undead","stats":{"M":4,"WS":3,"BS":0,"S":4,"T":5,"W":2,"I":2,"A":2,"Ld":6},"kind":"henchman","c":80,"max":1,"gear":[],"note":"Fear, cannot run, No Pain. Gains experience only on a Leadership test. Repair costs D6x5 gc after a bad injury."}
  ]
});
