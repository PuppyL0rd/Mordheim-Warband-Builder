/* Forest Goblins (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("forestgoblins", {
  "name": "Forest Goblins",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["goblins","orcs","greenskin","evil","forestgoblins"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "costs": {"Spear":5},
  "gear": ["Axe","Sword","Double-handed weapon","Spear","Halberd","Boss Pole","Blowpipe","Short Bow","Light armour","Shield"],
  "grade": "1b",
  "units": [
    {"id":"chieftain","n":"Chieftain","race":"goblin","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":50,"max":1,"req":true,"startXp":17,"skills":["combat","shooting","academic","speed"],"note":"Leader. May ride a Giant Spider or the Gigantic Spider."},
    {"id":"brave","n":"Brave","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":20,"max":4,"startXp":6,"skills":["combat","shooting","speed"],"note":"Subject to animosity; may remove it instead of taking a skill."},
    {"id":"shaman","n":"Shaman","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"hero","c":20,"max":1,"startXp":6,"skills":["academic","speed"],"spells":["forest-goblin-magic"],"note":"Wizard with one random Forest Goblin spell."},
    {"id":"goblin","n":"Forest Goblin","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":15,"gear":["Sword","Spear","Blowpipe","Throwing Weapons","Bow","Shield"],"note":"Animosity: roll a D6 for each Goblin henchman at the start of your turn; on a 1 roll on the animosity table."},
    {"id":"redtoof","n":"Red Toof Goblin","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":25,"max":5,"gear":["Sword","Spear","Blowpipe","Throwing Weapons","Bow","Shield"],"note":"Frenzied berserkers. Subject to animosity unless they start the turn within charge range of an enemy."},
    {"id":"slugga","n":"Slugga","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":20,"max":5,"gear":["Sword","Spear","Blowpipe","Throwing Weapons","Bow","Shield"],"note":"May throw thrown weapons up to three times. Subject to animosity."},
    {"id":"spider","n":"Gigantic Spider","race":"spider","stats":{"M":6,"WS":3,"BS":0,"S":5,"T":5,"W":3,"I":4,"A":2,"Ld":4},"kind":"henchman","c":200,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear. Poisonous. Stupid unless ridden by the Chieftain."}
  ]
});
