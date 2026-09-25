/* Nipponese Expedition (grade 2a). Source: Krakatoa, SoCal Mordheim v2.2 (grade 2a). See data/README.md for the fields. */
registerWarband("nippon", {
  "name": "Nipponese Expedition",
  "source": "Krakatoa, SoCal Mordheim v2.2 (grade 2a)",
  "tags": ["human","mercenary","good","nippon"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "costs": {"Lock Picks":15},
  "gear": ["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Short Bow","Bow","Crossbow","Handgun","Light armour","Heavy armour","Helmet","Sashimono","Cathayan longsword","Pistol","Horo","Barding","Horse","Warhorse","Kusarigama","Fighting Claws","Sai","Throwing stars","Blowpipe","Caltrops","Flash Powder","Lock Picks","Rope & Hook","Trip Wire"],
  "grade": "2a",
  "units": [
    {"id":"hatamoto","n":"Hatamoto","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"gear":["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Short Bow","Bow","Crossbow","Handgun","Light armour","Heavy armour","Helmet","Sashimono","Cathayan longsword","Pistol","Horo","Barding","Horse","Warhorse"],"skills":["combat","shooting","academic","strength","speed","nippon-special"],"note":"Leader; can ride. The warband may rout after one fewer casualty than normal."},
    {"id":"mage","n":"Vim-To Mage","race":"human","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":8,"gear":[],"skills":["academic","speed","nippon-special"],"spells":["elemental-magic"],"note":"Vow of Poverty: only a staff (club) and a dagger. Wizard casting Vim-Toist (Arabian Elemental) Magic."},
    {"id":"shinobi","n":"Shinobi","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":70,"max":1,"startXp":15,"gear":["Sword","Katana","Spear","Kusarigama","Fighting Claws","Sai","Throwing stars","Blowpipe","Short Bow","Bow","Crossbow","Caltrops","Flash Powder","Lock Picks","Rope & Hook","Trip Wire"],"skills":["combat","shooting","speed","nippon-special"],"note":"Infiltration. A loner who never leads."},
    {"id":"retainer","n":"Retainer","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":2,"startXp":8,"gear":["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Short Bow","Bow","Crossbow","Handgun","Light armour","Heavy armour","Helmet","Sashimono","Cathayan longsword","Pistol","Horo","Barding","Horse","Warhorse"],"skills":["combat","shooting","speed","nippon-special"],"note":"Can ride."},
    {"id":"ashigaru","n":"Ashigaru","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":20,"gear":["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Short Bow","Bow","Crossbow","Handgun","Light armour","Heavy armour","Helmet","Sashimono"],"note":"Wall of Steel: a two-handed spear may parry."},
    {"id":"onnabushi","n":"Onnabushi","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":2,"gear":["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Short Bow","Bow","Crossbow","Handgun","Light armour","Heavy armour","Helmet","Sashimono"],"note":"Causes fear inside buildings or ruins."},
    {"id":"monk","n":"Warrior Monk","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"henchman","c":30,"max":3,"gear":["Sword","Katana","Double-handed weapon","Spear","Halberd","Kanabo","Bow","Light armour","Sashimono"]}
  ]
});
