/* Beastmen Raiders (grade 1a). Source: Empire in Flames (grade 1a). See data/README.md for the fields. */
registerWarband("beastmen", {
  "name": "Beastmen Raiders",
  "source": "Empire in Flames (grade 1a)",
  "tags": ["beastmen","chaos","evil"],
  "hireExplicit": true,
  "hireTags": ["beastmen"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Battle Axe","Sword","Halberd","Double-handed weapon","Light armour","Heavy armour","Shield","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"chieftain","n":"Beastmen Chieftain","race":"beastman","stats":{"M":5,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":65,"max":1,"req":true,"startXp":20,"skills":["combat","strength","speed","beastmen-special"],"note":"Leader. Beastmen never hire hired swords unless the sword says so."},
    {"id":"shaman","n":"Beastmen Shaman","race":"beastman","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":45,"max":1,"startXp":11,"gear":["Mace","Hammer","Battle Axe","Sword","Halberd","Double-handed weapon"],"skills":["combat","speed","beastmen-special"],"spells":["chaos-rituals"],"note":"Wizard using Chaos Rituals. Never wears armour."},
    {"id":"bestigor","n":"Bestigor","race":"beastman","stats":{"M":5,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":8,"skills":["combat","strength","beastmen-special"]},
    {"id":"centigor","n":"Centigor","race":"centaur","stats":{"M":8,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":2,"A":1,"Ld":7},"kind":"hero","c":80,"max":1,"startXp":8,"skills":["combat","strength","beastmen-special"],"note":"Second attack is a trample. Drunken: stupid on a 1, frenzied on a 6 each turn."},
    {"id":"ungor","n":"Ungor","race":"ungor","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":25,"gear":["Mace","Hammer","Battle Axe","Spear","Shield"],"note":"Can never become a hero."},
    {"id":"gor","n":"Gor","race":"beastman","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":35,"max":5},
    {"id":"chaoshound","n":"Warhound of Chaos","race":"animal","stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."},
    {"id":"minotaur","n":"Minotaur","race":"minotaur","stats":{"M":6,"WS":4,"BS":3,"S":4,"T":4,"W":3,"I":4,"A":3,"Ld":8},"kind":"henchman","c":200,"max":1,"large":true,"note":"Fear. Bloodgreed. Large target. May never become a hero."}
  ]
});
