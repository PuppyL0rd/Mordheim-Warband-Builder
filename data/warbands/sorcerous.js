/* Sorcerous Society (grade 2a). Source: Legends of Darkness 4 (grade 2a). See data/README.md for the fields. */
registerWarband("sorcerous", {
  "name": "Sorcerous Society",
  "source": "Legends of Darkness 4 (grade 2a)",
  "tags": ["human","mercenary","good","sorcerous"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Halberd":15},
  "gear": ["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet","Familiar"],
  "grade": "2a",
  "units": [
    {"id":"magus","n":"Magus","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":75,"max":1,"req":true,"startXp":20,"gear":["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet","Familiar"],"skills":["academic","speed"],"spells":["lesser-magic","elemental-water","elemental-fire","elemental-earth","elemental-air"],"note":"Leader and wizard: two random spells from one Elemental list or Lesser Magic. A natural double 1 on a casting roll means a Magical Failure. The society hires no wizard hired swords except the High Elf Mage. The site lists heavy armour at 20 gc, which looks like a typo."},
    {"id":"companion","n":"Companion","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet","Familiar"],"skills":["combat","shooting","strength"],"note":"Never leads. Body Guard: takes missile fire and intercepts charges aimed at a wizard within 2 inches."},
    {"id":"mage","n":"Mage","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"gear":["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet","Familiar"],"skills":["academic","speed"],"spells":["lesser-magic","elemental-water","elemental-fire","elemental-earth","elemental-air"],"note":"Wizard with one random spell. May never know more spells than the Magus."},
    {"id":"untrained","n":"Untrained","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5,"gear":["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet"],"note":"A promotion makes him a Wizard."},
    {"id":"grunt","n":"Grunt","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Hammer","Axe","Sword","Wizard's Staff","Spear","Halberd","Double-handed weapon","Bow","Crossbow","Pistol","Handgun","Light armour","Heavy armour","Shield","Buckler","Helmet"]}
  ]
});
