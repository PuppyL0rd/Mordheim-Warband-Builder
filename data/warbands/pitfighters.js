/* Pit Fighters (grade 1b). Source: Town Cryer #21 (grade 1b), via mordheimer.net. See data/README.md for the fields. */
registerWarband("pitfighters", {
  "name": "Pit Fighters",
  "source": "Town Cryer #21 (grade 1b), via mordheimer.net",
  "tags": ["pitfighters"],
  "hireAll": true,
  "noHire": ["h-elf"],
  "gear": [],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "sets": {"fighter":{"n":"Fighting styles","list":[{"n":"Orc Style","c":20,"includes":["Helmet","Dagger","Axe","Shield"]},{"n":"Undead Style","c":35,"includes":["Helmet","Dagger","Spiked Gauntlet","Sword"]},{"n":"Empire Style","c":45,"includes":["Helmet","Dagger","Double-handed weapon","Light armour"]},{"n":"Chaos Style","c":50,"includes":["Helmet","Dagger","Flail","Shield","Light armour"]}]},"pursuer":{"n":"Pursuer styles","list":[{"n":"Skink Style (Trident, Net)","c":25,"includes":["Helmet","Dagger","Trident","Net"]},{"n":"Skink Style (Trident, Buckler)","c":25,"includes":["Helmet","Dagger","Trident","Buckler"]},{"n":"Skink Style (Javelins, Net)","c":25,"includes":["Helmet","Dagger","Javelins","Net"]},{"n":"Skink Style (Javelins, Buckler)","c":25,"includes":["Helmet","Dagger","Javelins","Buckler"]},{"n":"Witch Elf Style (2 Swords)","c":30,"includes":["Helmet","Dagger","Sword","Sword"]},{"n":"Witch Elf Style (Spear, Net)","c":30,"includes":["Helmet","Dagger","Spear","Net"]}]}},
  "grade": "1b",
  "units": [
    {"id":"pitking","n":"Pit King","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":4,"A":2,"Ld":8},"kind":"hero","c":80,"max":1,"req":true,"startXp":20,"sets":"fighter","gear":[],"skills":["combat","strength","speed","pit-special"],"note":"Leader. Has the Pit Fighter skill. Models near him may use his Leadership."},
    {"id":"trollslayer","n":"Dwarf Troll Slayer","race":"dwarf","stats":{"M":3,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":9},"kind":"hero","c":50,"max":1,"startXp":8,"gear":["Mace","Hammer","Axe","Dwarf Axe","Sword","Flail","Spiked Gauntlet"],"skills":["combat","strength","pit-special","slayer-special"],"note":"No missile weapons or armour. Immune to psychology. Leaves the warband if an Elven hired sword is hired."},
    {"id":"veteran","n":"Pit Veteran","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"sets":"fighter","gear":[],"skills":["combat","strength","speed","pit-special"],"note":"Has the Pit Fighter skill."},
    {"id":"pitfighter","n":"Pit Fighter","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"sets":"fighter","gear":[],"note":"Has the Pit Fighter skill. A group can mix fighting styles."},
    {"id":"pursuer","n":"Pursuer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"sets":"pursuer","gear":[],"note":"Has the Pit Fighter skill. May try to evade a charge with an Initiative test."},
    {"id":"ogrefighter","n":"Ogre Pit Fighter","race":"ogre","stats":{"M":6,"WS":3,"BS":2,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":7},"kind":"henchman","c":165,"max":1,"large":true,"gear":["Mace","Hammer","Axe","Sword","Flail","Spiked Gauntlet","Light armour","Helmet"],"note":"Large. Causes fear. Gains advances at half the normal rate."}
  ]
});
