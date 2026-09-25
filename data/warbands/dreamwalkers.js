/* Dreamwalkers, Cult of Morr (grade 2a). Source: Mordheim Facebook Group (grade 2a). See data/README.md for the fields. */
registerWarband("dreamwalkers", {
  "name": "Dreamwalkers, Cult of Morr",
  "source": "Mordheim Facebook Group (grade 2a)",
  "tags": ["human","good","mercenary","witchhunter","sisters","dreamwalkers"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Rapier","Main Gauche","Crossbow","Bow","Short Bow","Pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Halberd","Warhorse","Scythe"],
  "grade": "2a",
  "units": [
    {"id":"dreamer","n":"Dreamer","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"startXp":20,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Crossbow","Bow","Short Bow","Pistol","Light armour","Heavy armour","Shield","Buckler","Helmet"],"skills":["combat","shooting","academic","strength","speed","dreamwalker-special"],"note":"Leader if hired. The Priest must roll 4+ on a D6 to certify him; otherwise the Priest leads. Guiding Dream: roll a D6 each battle for a vision. Heroes hate the Undead."},
    {"id":"priest","n":"Priest of Morr","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":9},"kind":"hero","c":35,"max":1,"req":true,"startXp":8,"gear":["Scythe"],"skills":["academic","speed","dreamwalker-special"],"spells":["funerary-rites"],"note":"Leads the warband without a Dreamer. Never wears armour; dagger and scythe only; performs Funerary Rites; unaffected by all alone."},
    {"id":"blackguard","n":"Black Guard of Morr","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":55,"max":2,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Crossbow","Bow","Short Bow","Pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Warhorse"],"skills":["combat","shooting","speed","dreamwalker-special"],"note":"Silent Guardian: no armour movement penalty."},
    {"id":"andanti","n":"The Andanti","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":6,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Rapier","Main Gauche","Crossbow","Bow","Short Bow","Pistol","Light armour","Heavy armour","Shield","Buckler","Helmet"],"skills":["combat","shooting","strength","dreamwalker-special"],"note":"Estalian Technique: parries by rolling under his Weapon Skill. +1 to hit Vampires."},
    {"id":"deathshead","n":"Death's Head of Ostermark","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":40,"max":5,"gear":["Sword","Halberd","Crossbow","Bow","Short Bow","Light armour","Shield","Helmet","Buckler"],"note":"Expert Halberdier: halberd in one hand with a shield."},
    {"id":"worshipper","n":"Morr Worshipper","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Mace","Hammer","Axe","Sword","Spear","Bow","Short Bow","Light armour","Shield","Helmet","Buckler"]}
  ]
});
