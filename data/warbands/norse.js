/* Norse Explorers (grade 1b). Source: Town Cryer 13 (Lustria) and Border Town Burning. See data/README.md for the fields. */
registerWarband("norse", {
  "name": "Norse Explorers",
  "source": "Town Cryer 13 (Lustria) and Border Town Burning",
  "tags": ["human","norse","marauders"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Hammer","Axe","Sword","Double-handed weapon","Flail","Throwing knives","Shield","Helmet","Light armour"],
  "grade": "1b",
  "units": [
    {"id":"jarl","n":"Jarl","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":2,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","strength","speed","norse-special"],"note":"Leader."},
    {"id":"berserker","n":"Berserker","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":50,"max":2,"startXp":11,"gear":["Hammer","Axe","Sword","Double-handed weapon","Flail","Throwing knives"],"skills":["combat","strength","norse-special"],"note":"Frenzy. Never wears armour."},
    {"id":"wulfen","n":"Wulfen","race":"wulfen","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":4,"W":2,"I":4,"A":2,"Ld":7},"kind":"hero","c":90,"max":1,"startXp":11,"gear":[],"skills":["combat","strength","speed","norse-special"],"note":"Fear. Immune to psychology. Cannot lead. No weapons or armour."},
    {"id":"bondsman","n":"Bondsman","race":"human","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"skills":["combat","strength","speed","norse-special"]},
    {"id":"marauder","n":"Marauder","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Throwing knives","Shield","Helmet","Light armour"]},
    {"id":"hunter","n":"Hunter","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Javelins","Bow","Shield","Helmet"]},
    {"id":"wolf","n":"Wolf","race":"animal","stats":{"M":9,"WS":3,"BS":0,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"needs":"wulfen","gear":[],"noXp":true,"note":"Cannot be used without a Wulfen."}
  ]
});
