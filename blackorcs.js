/* Black Orcs (grade 1b). Source: Nemesis Crown (grade 1b). See data/README.md for the fields. */
registerWarband("blackorcs", {
  "name": "Black Orcs",
  "source": "Nemesis Crown (grade 1b)",
  "tags": ["orcs","greenskin","evil","blackorcs"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Axe","Sword","Choppa","Spear","Double-handed weapon","Bow","Crossbow","Buckler","Shield","Helmet","Light armour","Heavy armour"],
  "opts": {
    "blood": {"n":"Black Orc blood","list":[{"n":"Black Orc Blood","c":10,"d":"Allows the Proven Warrior skill, making him a full Black Orc."}]}
  },
  "grade": "1b",
  "units": [
    {"id":"boss","n":"Black Orc Boss","race":"orc","stats":{"M":4,"WS":4,"BS":4,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":90,"max":1,"req":true,"startXp":20,"sv":6,"skills":["combat","shooting","strength","speed","blackorc-special"],"note":"Leader. Natural 6+ save that combines with armour. Oi Behave!: can slap a misbehaving henchman."},
    {"id":"blackorc","n":"Black Orc","race":"orc","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":60,"max":2,"startXp":8,"sv":6,"skills":["combat","shooting","strength","speed","blackorc-special"],"note":"Natural 6+ save that combines with armour."},
    {"id":"younun","n":"Young'un","race":"orc","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":6},"kind":"hero","c":25,"max":2,"gear":["Axe","Sword","Choppa","Spear","Bow","Shield","Helmet","Light armour"],"skills":["combat","shooting","blackorc-special"],"opts":"blood"},
    {"id":"boy","n":"Orc Boy","race":"orc","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":6},"kind":"henchman","c":25,"gear":["Axe","Sword","Choppa","Spear","Double-handed weapon","Bow","Shield","Helmet","Light armour"],"note":"Animosity: roll a D6 for each Orc henchman at the start of your turn; on a 1 roll on the animosity table."},
    {"id":"shoota","n":"Orc Shoota","race":"orc","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":6},"kind":"henchman","c":25,"maxPer":{"of":["boy"],"mult":1},"gear":["Axe","Sword","Choppa","Spear","Bow","Crossbow","Shield","Helmet","Light armour"],"note":"Never more Shootaz than Boyz. Subject to animosity."},
    {"id":"nutta","n":"Orc Nutta","race":"orc","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":5},"kind":"henchman","c":40,"max":4,"gear":["Axe","Sword","Choppa","Spear","Double-handed weapon"],"note":"Crazy: passes Leadership tests, no Academic skills. Savage: must charge or run at the nearest enemy, +1 Attack. No armour or missiles."},
    {"id":"troll","n":"Troll","race":"troll","stats":{"M":6,"WS":3,"BS":1,"S":5,"T":4,"W":3,"I":1,"A":3,"Ld":4},"kind":"henchman","c":200,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear, stupidity, regenerates on 4+. Upkeep 20 gc after each game."}
  ]
});
