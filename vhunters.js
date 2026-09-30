/* Vampire Hunters of Sylvania (grade 2a). Source: Legends of Darkness 5, Tom Bell (grade 2a). See data/README.md for the fields. */
registerWarband("vhunters", {
  "name": "Vampire Hunters of Sylvania",
  "source": "Legends of Darkness 5, Tom Bell (grade 2a)",
  "tags": ["human","mercenary","good","vampirehunters"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Scythe":10,"Silver-tip Stake":10,"Crossbow pistol":15},
  "gear": ["Hammer","Axe","Sword","Scythe","Silver-tip Stake","Double-handed weapon","Crossbow","Pistol","Crossbow pistol","Light armour","Shield","Helmet","Blessed water","Blessed Bolts","Holy relic","Throat Guard","Mace","Spear"],
  "grade": "2a",
  "units": [
    {"id":"hunter","n":"Vampire Hunter","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"gear":["Hammer","Axe","Sword","Scythe","Silver-tip Stake","Double-handed weapon","Crossbow","Pistol","Crossbow pistol","Light armour","Shield","Helmet","Blessed water","Blessed Bolts","Holy relic","Throat Guard"],"skills":["combat","shooting","academic","strength","speed","vh-special"],"note":"Leader. Hates Vampires and must move toward one he can see unless he can shoot. Hires the same swords as human mercenaries."},
    {"id":"priest","n":"Priest of Morr","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":9},"kind":"hero","c":35,"max":1,"startXp":12,"gear":["Scythe"],"skills":["academic","speed","vh-special"],"spells":["funerary-rites"],"note":"Dagger and scythe only; never wears armour; unaffected by all alone. Performs Funerary Rites."},
    {"id":"slayer","n":"Slayer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":25,"max":3,"startXp":8,"gear":["Hammer","Axe","Sword","Scythe","Silver-tip Stake","Double-handed weapon","Crossbow","Pistol","Crossbow pistol","Light armour","Shield","Helmet","Blessed water","Blessed Bolts","Holy relic","Throat Guard"],"skills":["combat","shooting","strength","speed","vh-special"],"note":"Hates Vampires."},
    {"id":"villager","n":"Villager","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":20,"gear":["Mace","Axe","Sword","Spear"]},
    {"id":"pilgrim","n":"Pilgrim","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":10},"kind":"henchman","c":40,"max":4,"gear":["Mace","Silver-tip Stake"],"note":"Fanatical: passes all Leadership tests. Uses only maces, hammers and silver-tip stakes. Never leads."},
    {"id":"wolfhound","n":"Wolfhound","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":15,"max":4,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."}
  ]
});
