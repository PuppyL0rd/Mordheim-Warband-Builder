/* Lizardmen (grade 1b). Source: Town Cryer 11 (Lustria). See data/README.md for the fields. */
registerWarband("lizardmen", {
  "name": "Lizardmen",
  "source": "Town Cryer 11 (Lustria)",
  "tags": ["lizardmen"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "costs": {"Light armour":50,"Javelins":10,"Dark Venom":20},
  "gear": ["Stone Axe","Axe","Sword","Spear","Short Bow","Bolas","Javelins","Throwing knives","Blowpipe","Shield","Buckler"],
  "opts": {
    "marks": {"n":"Sacred markings (one only)","list":[{"n":"Oversized Jaws","c":40,"d":"Saurus only: bite attack at +1 Strength."},{"n":"Poison Glands","c":40,"d":"Skink only: poisonous bite attacks."},{"n":"Mark of the Old Ones","c":50,"d":"Once per battle turn a failed roll into a success."}]}
  },
  "grade": "1b",
  "units": [
    {"id":"priest","n":"Skink Priest","race":"skink","stats":{"M":6,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"sv":6,"gear":["Stone Axe","Axe","Sword","Spear","Short Bow","Bolas","Javelins","Throwing knives","Blowpipe","Shield","Buckler","Bone Helmet"],"skills":["academic","speed","lizard-special"],"spells":["lizardmen-magic"],"opts":"marks","note":"Leader and wizard. Cold blooded: rolls 3D6 and keeps the lowest two for psychology and rout tests. Armour adds +1 to the natural save (apply by hand)."},
    {"id":"totem","n":"Saurus Totem Warrior","race":"saurus","stats":{"M":4,"WS":4,"BS":0,"S":4,"T":4,"W":1,"I":2,"A":2,"Ld":8},"kind":"hero","c":60,"max":1,"startXp":11,"sv":5,"gear":["Stone Axe","Axe","Sword","Spear","Halberd","Double-handed weapon","Shield","Bone Helmet","Light armour"],"skills":["combat","strength","lizard-special"],"opts":"marks","note":"Bite attack always strikes last. Never uses missile weapons."},
    {"id":"crest","n":"Skink Great Crest","race":"skink","stats":{"M":6,"WS":3,"BS":3,"S":3,"T":2,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":30,"max":2,"startXp":8,"sv":6,"skills":["shooting","speed","lizard-special"],"opts":"marks"},
    {"id":"skink","n":"Skink Brave","race":"skink","stats":{"M":6,"WS":2,"BS":3,"S":3,"T":2,"W":1,"I":4,"A":1,"Ld":6},"kind":"henchman","c":20,"sv":6,"gear":["Stone Axe","Axe","Spear","Short Bow","Bolas","Javelins","Throwing knives","Blowpipe","Shield","Buckler"]},
    {"id":"saurus","n":"Saurus Brave","race":"saurus","stats":{"M":4,"WS":3,"BS":0,"S":4,"T":4,"W":1,"I":1,"A":2,"Ld":7},"kind":"henchman","c":40,"max":4,"maxPer":{"of":["skink"],"mult":1},"sv":5,"gear":["Stone Axe","Axe","Sword","Spear","Halberd","Double-handed weapon","Shield","Bone Helmet","Light armour"],"note":"Never more Saurus than Skinks."},
    {"id":"kroxigor","n":"Kroxigor","race":"kroxigor","stats":{"M":6,"WS":3,"BS":0,"S":5,"T":4,"W":3,"I":1,"A":3,"Ld":8},"kind":"henchman","c":200,"max":1,"large":true,"sv":4,"gear":[],"noXp":true,"note":"Armed with a halberd. Fear. Gains no experience."}
  ]
});
