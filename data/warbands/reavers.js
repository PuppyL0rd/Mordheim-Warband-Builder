/* Lustrian Reavers (grade 1c). Source: Facebook 2024, Tuomas Pirinen (grade 1c). See data/README.md for the fields. */
registerWarband("reavers", {
  "name": "Lustrian Reavers",
  "source": "Facebook 2024, Tuomas Pirinen (grade 1c)",
  "tags": ["human","reavers"],
  "hireOnly": ["h-ogre","h-slayer","h-tilean","h-biggame"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 10,
  "maxHeroes": 5,
  "costs": {"Misericordia":10,"Javelins":10,"Blowpipe":15,"Lance":40,"Shield":10,"Buckler":10,"Dark Venom":30},
  "gear": ["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound"],
  "opts": {
    "slayer": {"n":"Saurus Slayer trophies","list":[{"n":"Lizardmen Skin Cloak","c":10,"d":"A 6+ ward save that is never modified."},{"n":"Skull Mask","c":15,"d":"Causes fear."},{"n":"Lizardman Sword","c":30,"d":"Upgrades a sword: +1 to wound (poison)."},{"n":"Trophy Slann Holy Headdress","c":35,"d":"+2 to armour saves."}]},
    "shadow": {"n":"Jungle Shadow training","list":[{"n":"Wizard","c":30,"d":"Uses Lesser Magic with one random spell; drops the light armour."}]},
    "hawk": {"n":"Beastmaster extras","list":[{"n":"Tilean Hunting Hawk","c":30,"d":"Attacks within 12 inches at the Beastmaster's side; not a separate model."}]}
  },
  "grade": "1c",
  "units": [
    {"id":"conqueror","n":"Conqueror","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":4,"W":2,"I":3,"A":2,"Ld":7},"kind":"hero","c":150,"max":1,"startXp":24,"sv":4,"gear":["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound"],"skills":["combat","strength"],"note":"Starts with Masterwork Heavy Armour (4+ save, -1 Movement), a Bec de Corbin and a helmet, included in the price. Survivor: cannot be taken out of action while standing; the first Dead result becomes Multiple Injuries."},
    {"id":"slayer","n":"Saurus Slayer","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":2,"Ld":8},"kind":"hero","c":135,"max":1,"startXp":20,"sv":5,"gear":["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound"],"skills":["combat","strength","speed"],"opts":"slayer","note":"Starts with heavy armour, a misericordia, two swords and a helmet. Duellist: re-rolls misses in round one against a lone opponent."},
    {"id":"beastmaster","n":"Reaver Beastmaster","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":90,"max":1,"startXp":20,"sv":5,"gear":["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound"],"skills":["shooting","strength","speed"],"opts":"hawk","note":"Starts with heavy armour, a spear and a sword. War beasts count toward the warband size."},
    {"id":"shadow","n":"Jungle Shadow","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":90,"max":1,"startXp":20,"sv":6,"gear":["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound"],"skills":["shooting","academic","speed"],"opts":"shadow","note":"Starts with javelins, light armour and two daggers. Silent Hunter, Surprise Attack, Canopy Walker."},
    {"id":"trapmaster","n":"Trapmaster","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":140,"max":1,"startXp":17,"sv":5,"gear":["Sword","Mace","Misericordia","Double-handed weapon","Lance","Javelins","Throwing knives","Blowpipe","Pistol","Light armour","Shield","Helmet","Buckler","Rope & Hook","Crimson shade","Dark Venom","Net","Warhorse","Warhound","Trap"],"skills":["combat","shooting","academic"],"note":"Starts with heavy armour, a sword, a Tilean hunting rifle (long rifle), firepots and a leaf coat. Deadeye. Starts with one trap; buy up to five more."},
    {"id":"prospect","n":"Prospect","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"gear":["Sword","Hammer","Spear","Short Bow","Light armour","Shield","Helmet"],"note":"Promotion only: re-roll The Lad's Got Talent."},
    {"id":"warhound","n":"Estalian Warhound","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":25,"max":2,"needs":"beastmaster","sv":5,"gear":[],"noXp":true,"note":"War beast: uses the Beastmaster's Leadership within 6 inches."},
    {"id":"monkey","n":"Barbary Monkey","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":3,"T":3,"W":1,"I":5,"A":2,"Ld":6},"kind":"henchman","c":40,"max":1,"needs":"beastmaster","gear":[],"noXp":true,"note":"War beast. Nimble, and a 5+ ward save."}
  ]
});
