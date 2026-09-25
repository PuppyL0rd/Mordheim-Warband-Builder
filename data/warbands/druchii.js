/* Druchii (grade 2a). Source: Druchii.net (grade 2a). See data/README.md for the fields. */
registerWarband("druchii", {
  "name": "Druchii",
  "source": "Druchii.net (grade 2a)",
  "tags": ["darkelf","elf","evil","druchii"],
  "hireOnly": ["h-pit","h-ogre","h-warlock","h-assassin","h-tilean","h-highwayman","h-witch","h-emissary","h-humanscout","h-prospector","h-deassassin","h-pathfinder","h-nomad","h-thief"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Repeater Crossbow":20,"Sea Dragon Cloak":30},
  "gear": ["Axe","Sword","Draich","Halberd","Spear","Beastlash","Repeater Crossbow","Crossbow pistol","Throwing knives","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak","Dark Venom","Black Lotus","Bow"],
  "grade": "2a",
  "units": [
    {"id":"noble","n":"Noble","race":"darkelf","stats":{"M":5,"WS":5,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":9},"kind":"hero","c":75,"max":1,"req":true,"startXp":20,"gear":["Axe","Sword","Draich","Halberd","Spear","Repeater Crossbow","Crossbow pistol","Throwing knives","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak","Dark Venom"],"skills":["combat","shooting","academic","speed","druchii-special"],"note":"Leader. Dark Elves hate High Elves, never use blackpowder, and gain +1 shard when searching."},
    {"id":"lordling","n":"Lordling","race":"darkelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Axe","Sword","Draich","Halberd","Spear","Repeater Crossbow","Crossbow pistol","Throwing knives","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak","Dark Venom"],"skills":["combat","shooting","speed","druchii-special"]},
    {"id":"sorceress","n":"Sorceress","race":"darkelf","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"hero","c":45,"max":1,"startXp":8,"gear":["Axe","Sword","Draich","Halberd","Spear","Repeater Crossbow","Crossbow pistol","Throwing knives","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak","Dark Venom"],"skills":["academic","speed","druchii-special"],"spells":["dark-elf-magic"],"note":"Wizard using Dark Magic; cannot cast in armour."},
    {"id":"beastmaster","n":"Beastmaster","race":"darkelf","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"hero","c":40,"max":1,"startXp":8,"gear":["Axe","Sword","Draich","Halberd","Spear","Beastlash","Repeater Crossbow","Crossbow pistol","Throwing knives","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak","Dark Venom"],"skills":["combat","speed","druchii-special"],"note":"May be accompanied by up to three Slavehounds."},
    {"id":"corsair","n":"Corsair","race":"darkelf","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":35,"gear":["Axe","Sword","Halberd","Spear","Repeater Crossbow","Helmet","Light armour","Shield","Buckler","Sea Dragon Cloak"]},
    {"id":"shade","n":"Shade","race":"darkelf","stats":{"M":5,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":35,"max":5,"gear":["Axe","Sword","Repeater Crossbow","Bow","Throwing knives","Helmet","Light armour"],"note":"Natural Stealth: enemies halve Initiative to detect a hidden Shade."},
    {"id":"witchelf","n":"Witch Elf","race":"darkelf","stats":{"M":5,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":45,"max":3,"costs":{"Black Lotus":5},"gear":["Axe","Sword","Halberd","Spear","Helmet","Light armour","Black Lotus"],"note":"Frenzy. Black Lotus costs 5 gc and only Witch Elves may use it."},
    {"id":"slavehound","n":"Slavehound","race":"animal","stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":25,"max":3,"needs":"beastmaster","maxPer":{"of":["beastmaster"],"mult":3},"gear":[],"noXp":true,"note":"Animal. Uses the Beastmaster's Leadership; cannot fight without him."}
  ]
});
