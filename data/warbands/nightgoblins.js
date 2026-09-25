/* Night Goblins (grade 1c). Source: Mordheimer's Information Centre, Terry Maltman (grade 1c). See data/README.md for the fields. */
registerWarband("nightgoblins", {
  "name": "Night Goblins",
  "source": "Mordheimer's Information Centre, Terry Maltman (grade 1c)",
  "tags": ["goblins","orcs","greenskin","evil","nightgoblins"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Club","Sword","Spear","Short Bow","Shield","Helmet","Light armour"],
  "grade": "1c",
  "units": [
    {"id":"bigboss","n":"Big Boss","race":"goblin","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"req":true,"startXp":17,"skills":["combat","shooting","strength","speed","nightgoblin-special"],"note":"Leader. Animosity: roll a D6 for the goblins at the start of each turn; on a 1 they squabble and do nothing. Night Goblins hate Dwarfs."},
    {"id":"shaman","n":"Shaman","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":50,"max":1,"startXp":10,"skills":["shooting","academic","speed"],"spells":["waaagh"],"note":"Wizard using Waaagh! Magic."},
    {"id":"boss","n":"Boss","race":"goblin","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":25,"max":4,"startXp":6,"skills":["combat","shooting","speed","nightgoblin-special"]},
    {"id":"goblin","n":"Night Goblin","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15},
    {"id":"fanatic","n":"Fanatic","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":20,"max":2,"noXp":true,"gear":["Double-handed weapon","Ball & Chain","Poison Daggers","Mad Cap Mushrooms"],"note":"Addict: needs Mad Cap Mushrooms each game. Frenzied, strikes first, immune to animosity. Never gains experience."},
    {"id":"squig","n":"Cave Squig","race":"squig","mLabel":"2D6","stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"maxPer":{"of":["goblin"],"mult":1},"gear":[],"noXp":true,"note":"Must stay within 6 inches of a Night Goblin or goes wild. Never runs or declares charges."},
    {"id":"troll","n":"Troll","race":"troll","stats":{"M":6,"WS":3,"BS":1,"S":5,"T":4,"W":3,"I":1,"A":3,"Ld":4},"kind":"henchman","c":200,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear, stupidity, regenerates on 4+, vomit attack. Upkeep 15 gc after each game."},
    {"id":"snotlings","n":"Snotling Mob (5)","race":"snotling","stats":{"M":4,"WS":2,"BS":2,"S":2,"T":2,"W":1,"I":3,"A":1,"Ld":4},"kind":"henchman","c":50,"max":1,"gear":[],"noXp":true,"note":"Five Snotlings counted as one model. Replacements cost 10 gc each. 6+ dodge against shooting."}
  ]
});
