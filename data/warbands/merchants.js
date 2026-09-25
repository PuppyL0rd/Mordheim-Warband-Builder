/* Merchant Caravans (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("merchants", {
  "name": "Merchant Caravans",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["human","mercenary","merchantcaravans"],
  "gold": 600,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Pike":10,"Warhorse":40},
  "gear": ["Hammer","Sword","Rapier","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak","Axe","Pike","Halberd","Crossbow","Club","Double-handed weapon","Dragon Sword","Warhorse"],
  "grade": "1c",
  "units": [
    {"id":"merchant","n":"Merchant","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":50,"max":1,"req":true,"startXp":20,"gear":["Hammer","Sword","Rapier","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak"],"skills":["shooting","academic","merchant-special"],"note":"Leader. Starting gold is 600. Trade: may sell a stored rare item instead of searching. Merchant Caravans hire the same swords as Mercenaries."},
    {"id":"apprentice","n":"Apprentice","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":1,"gear":["Hammer","Sword","Rapier","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak"],"skills":["combat","shooting","academic","speed"],"note":"Becomes the leader if no other model can."},
    {"id":"vanguard","n":"Knights Vanguard","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Hammer","Sword","Rapier","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak","Club","Double-handed weapon","Dragon Sword","Warhorse"],"skills":["combat","strength","speed"],"note":"Lightning Reflexes; rides warhorses; a hireling who can never lead."},
    {"id":"magician","n":"Magician","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":40,"max":1,"startXp":8,"gear":["Hammer","Sword","Rapier","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Helmet","Cathayan silk cloak"],"skills":["academic","speed"],"spells":["lesser-magic"],"note":"Wizard using Lesser Magic; cannot cast in armour. A hireling who can never lead."},
    {"id":"sellsword","n":"Sell-sword","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Hammer","Axe","Sword","Pike","Halberd","Crossbow","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"marksman","n":"Marksman","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":5,"gear":["Hammer","Axe","Sword","Crossbow","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"blackguard","n":"Blackguard","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":3,"gear":["Club","Sword","Double-handed weapon","Dragon Sword","Light armour","Heavy armour","Shield","Helmet"],"note":"Strongman: double-handed weapons do not strike last. Can never become a hero."},
    {"id":"wagon","n":"Trade Wagon","race":"cart","kind":"henchman","c":180,"max":1,"req":true,"noCount":true,"noXp":true,"gear":[],"note":"Every caravan must have one. Cost includes two draft horses; one warrior must drive it. Stores all equipment and treasure."}
  ]
});
