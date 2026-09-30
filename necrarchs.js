/* Necrarchs, the Soul Stealers (grade 2a). Source: Legends of Darkness 1 (grade 2a). See data/README.md for the fields. */
registerWarband("necrarchs", {
  "name": "Necrarchs, the Soul Stealers",
  "source": "Legends of Darkness 1 (grade 2a)",
  "tags": ["undead","evil","necrarchs"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Bow","Short Bow","Light armour","Shield","Helmet","Staff of Damnation","Unholy Relic","Damned Book"],
  "grade": "2a",
  "units": [
    {"id":"necrarch","n":"Necrarch Vampire","race":"necrarch","stats":{"M":6,"WS":3,"BS":3,"S":4,"T":4,"W":2,"I":6,"A":1,"Ld":8},"kind":"hero","c":110,"max":1,"req":true,"startXp":20,"gear":["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Bow","Short Bow","Light armour","Shield","Helmet","Staff of Damnation","Unholy Relic","Damned Book"],"skills":["academic","strength","speed","necrarch-special"],"spells":["scrolls-of-nagash"],"note":"Leader and wizard with one random Scrolls of Nagash spell. Fear, immune to psychology and poison, No Pain. If he dies the Thrall leads."},
    {"id":"thrall","n":"Thrall","race":"necrarch","stats":{"M":5,"WS":3,"BS":3,"S":4,"T":4,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":60,"max":1,"startXp":8,"gear":["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Bow","Short Bow","Light armour","Shield","Helmet","Unholy Relic","Damned Book"],"skills":["academic","strength","speed","necrarch-special"],"note":"A lesser Vampire: fear, immune to psychology and poison, No Pain."},
    {"id":"acolyte","n":"Acolyte","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":3,"gear":["Mace","Axe","Sword","Spear","Bow","Shield"],"skills":["academic","speed"],"note":"Vassal: the Necrarch can cast through him."},
    {"id":"skeleton","n":"Skeletal Warrior","race":"undead","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":20,"max":5,"noXp":true,"gear":["Mace","Axe","Sword","Spear","Bow","Shield"],"note":"Fear, cannot run, No Pain, no experience."},
    {"id":"zombie","n":"Zombie","race":"undead","stats":{"M":4,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":1,"A":1,"Ld":5},"kind":"henchman","c":15,"noXp":true,"gear":[],"note":"Fear, cannot run, no equipment."},
    {"id":"abomination","n":"Abomination","race":"undead","stats":{"M":4,"WS":3,"BS":0,"S":4,"T":5,"W":3,"I":2,"A":3,"Ld":5},"kind":"henchman","c":190,"max":1,"large":true,"noXp":true,"gear":[],"note":"Fear, large target, powered by a wyrdstone shard, cannot be destroyed by injury rolls of 1-2."},
    {"id":"waif","n":"Waif","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":20,"max":5,"gear":["Mace","Axe","Sword","Spear","Bow","Shield"]}
  ]
});
