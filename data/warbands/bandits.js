/* Hochland Bandits (grade 1b). Source: Nemesis Crown Supplement (grade 1b). See data/README.md for the fields. */
registerWarband("bandits", {
  "name": "Hochland Bandits",
  "source": "Nemesis Crown Supplement (grade 1b)",
  "tags": ["human","mercenary","bandits"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Pistol":20,"Duelling pistol":30},
  "gear": ["Hammer","Axe","Sword","Spear","Double-handed weapon","Throwing Axe","Light armour","Shield","Helmet","Pistol","Duelling pistol"],
  "grade": "1b",
  "units": [
    {"id":"prince","n":"Bandit Prince","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","strength","speed","bandit-special"],"note":"Leader. Bandits may hire the same hired swords as human mercenaries. Only heroes may buy blackpowder weapons."},
    {"id":"footpad","n":"Footpad","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Throwing Axe","Light armour","Shield","Helmet"],"skills":["combat","shooting","speed","bandit-special"],"note":"Concealment: harder to see and charge."},
    {"id":"duelist","n":"Duelist","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":12,"gear":["Rapier","Main Gauche","Sword","Spear","Pistol","Duelling pistol","Shield","Buckler"],"costs":{"Buckler":10},"skills":["combat","shooting","speed","bandit-special"],"note":"Swordmaster: parries on a tie. May use any weapon the warband can get."},
    {"id":"huckster","n":"Huckster","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":2,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":40,"max":1,"startXp":8,"gear":["Spear","Sling"],"skills":["combat","academic","bandit-special"],"note":"Convincing Manner and Slick Operator (2D6 gc between games)."},
    {"id":"thug","n":"Thug","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Throwing Axe","Light armour","Shield","Helmet"]},
    {"id":"looter","n":"Looter","race":"human","stats":{"M":4,"WS":2,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":25,"max":4,"gear":["Spear","Sling"],"note":"Looting the Dead: may recover a dead warrior's equipment on a 4+."},
    {"id":"blackheart","n":"Blackheart","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":2,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Throwing Axe","Light armour","Shield","Helmet"],"note":"Hardened: immune to fear and all alone tests."},
    {"id":"poacher","n":"Poacher","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":2,"gear":["Spear","Short Bow","Bow","Long bow","Crossbow","Helmet"],"note":"Trailblazers: warband re-rolls one exploration die per Poacher."},
    {"id":"gutterscum","n":"Gutterscum","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":10,"gear":["Spear","Sling"],"noXp":true,"note":"Utterly Inept: gain no experience."}
  ]
});
