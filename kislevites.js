/* Kislevites (grade 1a). Source: Town Cryer 16, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("kislevites", {
  "name": "Kislevites",
  "source": "Town Cryer 16, revised in Mordheim Annual 2002",
  "tags": ["human","good","mercenary","kislevites"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Throwing knives","Short Bow","Bow","Crossbow","Pistol","Duelling pistol","Light armour","Heavy armour","Shield","Buckler","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"captain","n":"Druzhina Captain","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"note":"Leader. Inheritance: may buy one heirloom item at half price. Kislevites never ally with Chaos warbands."},
    {"id":"esaul","n":"Esaul","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Throwing knives","Short Bow","Bow","Crossbow","Pistol","Duelling pistol"],"skills":["combat","shooting","speed"]},
    {"id":"beartamer","n":"Bear Tamer","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"gear":["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Throwing knives","Short Bow","Bow","Crossbow","Pistol","Duelling pistol"],"skills":["combat","strength","speed"],"note":"Needed to field the Trained Bear."},
    {"id":"youth","n":"Youth","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"gear":["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Throwing knives","Short Bow","Bow","Crossbow","Pistol","Duelling pistol"],"skills":["combat","strength","speed"]},
    {"id":"warrior","n":"Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"cossack","n":"Cossack","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"note":"Hates all Chaos warbands."},
    {"id":"streltsi","n":"Streltsi","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":3,"gear":["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Bow","Crossbow","Pistol","Duelling pistol","Handgun","Light armour","Shield","Helmet"],"note":"Gun-Rest: +1 to hit with a handgun when using a halberd as a rest and not moving."},
    {"id":"bear","n":"Trained Bear","race":"animal","needs":"beartamer","stats":{"M":6,"WS":3,"BS":0,"S":5,"T":5,"W":2,"I":2,"A":2,"Ld":6},"kind":"henchman","c":125,"max":1,"gear":[],"noXp":true,"large":true,"note":"Fear. Stupid unless the Bear Tamer is within 6 inches. Cannot fight without a Bear Tamer."}
  ]
});
