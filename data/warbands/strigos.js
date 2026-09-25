/* Survivors of Strigos (grade 2a). Source: Brahm Tazoul, Sylvania (grade 2a). See data/README.md for the fields. */
registerWarband("strigos", {
  "name": "Survivors of Strigos",
  "source": "Brahm Tazoul, Sylvania (grade 2a)",
  "tags": ["undead","evil","strigos"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Spear","Halberd","Chest Talon","Double-handed weapon","Throwing knives","Bow","Short Bow","Light armour","Heavy armour","Shield","Helmet","Black Gold Wristbands","Ring of Strigos","Unholy Relic","Cursed Book"],
  "grade": "2a",
  "units": [
    {"id":"strigoi","n":"Strigoi Vampire","race":"vampire","stats":{"M":6,"WS":4,"BS":4,"S":4,"T":4,"W":2,"I":6,"A":2,"Ld":8},"kind":"hero","c":115,"max":1,"req":true,"startXp":20,"gear":[],"skills":["combat","strength","speed","strigoi-special"],"spells":["dark-arts-strigos"],"note":"Leader. Fights unarmed. Fear, immune to psychology and poison, No Pain. Hates other vampire bloodlines. The warband survives his death."},
    {"id":"seer","n":"Seer","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":12,"gear":["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Throwing knives","Bow","Short Bow","Light armour","Heavy armour","Shield","Helmet","Black Gold Wristbands","Ring of Strigos","Unholy Relic","Cursed Book"],"skills":["academic","speed","strigany-special"],"spells":["charms-hexes"],"note":"Wizard using Charms & Hexes. Seeker: shifts one exploration die by 1."},
    {"id":"domnu","n":"Domnu","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":30,"max":3,"startXp":4,"gear":["Mace","Axe","Sword","Spear","Halberd","Chest Talon","Double-handed weapon","Throwing knives","Bow","Short Bow","Light armour","Heavy armour","Shield","Helmet","Black Gold Wristbands","Ring of Strigos","Unholy Relic","Cursed Book"],"skills":["combat","strength","strigany-special"],"note":"5+ save against magic."},
    {"id":"strigany","n":"Strigany","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5,"gear":["Mace","Axe","Sword","Spear","Throwing knives","Light armour","Shield"]},
    {"id":"ghoul","n":"Ghoul","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":4,"W":1,"I":3,"A":2,"Ld":5},"kind":"henchman","c":40,"gear":[],"note":"Causes fear; no equipment."},
    {"id":"bat","n":"Giant Bat","race":"animal","stats":{"M":6,"WS":3,"BS":0,"S":3,"T":3,"W":2,"I":3,"A":1,"Ld":6},"kind":"henchman","c":40,"max":2,"large":true,"gear":[],"noXp":true,"note":"Flies; needs no line of sight to charge."}
  ]
});
