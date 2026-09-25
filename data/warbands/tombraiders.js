/* Arabian Tomb Raiders (grade 1b). Source: Town Cryer 20 (Khemri). See data/README.md for the fields. */
registerWarband("tombraiders", {
  "name": "Arabian Tomb Raiders",
  "source": "Town Cryer 20 (Khemri)",
  "tags": ["human","good","tombraiders"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Light armour":50},
  "gear": ["Mace","Sword","Spear","Flail","Double-handed weapon","Short Bow","Bow","Tufenk","Handgun","Shield","Buckler","Helmet","Light armour"],
  "grade": "1b",
  "units": [
    {"id":"sheikh","n":"Sheikh","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed","tombraider-special"],"note":"Leader. Nomad heroes hate the Undead."},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":2,"startXp":8,"skills":["combat","strength","speed","tombraider-special"]},
    {"id":"mystic","n":"Nomadic Mystic","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":8,"skills":["academic","speed","tombraider-special"],"spells":["elemental-magic"],"note":"Wizard using Arabian Elemental Magic; starts with one random spell."},
    {"id":"bedouin","n":"Bedouin","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":2,"note":"Desert Trader: +1 to the trading search (once)."},
    {"id":"warrior","n":"Nomad Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"slave","n":"Slave","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":15,"max":5,"gear":["Club","Katar","Sword","Spear","Shield"],"note":"If a slave rolls the lad's got talent it is executed."}
  ]
});
