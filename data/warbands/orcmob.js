/* Orc Mob (grade 1a). Source: Town Cryer 6, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("orcmob", {
  "name": "Orc Mob",
  "source": "Town Cryer 6, revised in Mordheim Annual 2002",
  "tags": ["orcs","greenskin","evil"],
  "hireOnly": ["h-pit","h-ogre","h-warlock"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Club","Battle Axe","Sword","Spear","Halberd","Double-handed weapon","Morning star","Bow","Crossbow","Light armour","Shield","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"boss","n":"Orc Boss","race":"orc","stats":{"M":4,"WS":4,"BS":4,"S":4,"T":4,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":80,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","strength","speed","orc-special"],"note":"Leader. Orcs may only hire Pit Fighters, Ogre Bodyguards or Warlocks."},
    {"id":"shaman","n":"Orc Shaman","race":"orc","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":10,"gear":["Club","Battle Axe","Sword","Spear","Halberd","Double-handed weapon","Morning star","Bow","Crossbow"],"skills":["strength","orc-special"],"spells":["waaagh"],"note":"Wizard using Waaagh! Magic. Never wears armour."},
    {"id":"bigun","n":"Orc Big 'Un","race":"orc","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":2,"startXp":15,"skills":["combat","shooting","strength","orc-special"]},
    {"id":"boy","n":"Orc Boy","race":"orc","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":4,"W":1,"I":2,"A":1,"Ld":7},"kind":"henchman","c":25,"note":"Animosity: at the start of your turn roll a D6 for each Orc or Goblin henchman; on a 1 roll again on the animosity table (1 charge a mate, 2-5 hurl insults, 6 rush the enemy)."},
    {"id":"goblin","n":"Goblin Warrior","race":"goblin","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15,"maxPer":{"of":["boss","shaman","bigun","boy"],"mult":2},"gear":["Club","Sword","Spear","Ball & Chain","Short Bow","Shield","Helmet","Squig Prodder","Mad Cap Mushrooms"],"note":"Max two Goblins per Orc (enforced). Animosity: at the start of your turn roll a D6 for each Orc or Goblin henchman; on a 1 roll again on the animosity table. Counts as half a model for rout tests. Subject to animosity."},
    {"id":"squig","n":"Cave Squig","race":"squig","mLabel":"2D6","maxPer":{"of":["goblin"],"mult":1},"stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Moves 2D6 inches. Must stay within 6 inches of a Goblin; never more Squigs than Goblins (enforced)."},
    {"id":"troll","n":"Troll","race":"troll","stats":{"M":6,"WS":3,"BS":1,"S":5,"T":4,"W":3,"I":1,"A":3,"Ld":4},"kind":"henchman","c":200,"max":1,"large":true,"gear":[],"noXp":true,"note":"Fear, stupidity, regenerates on 4+. Upkeep 15 gc after each game."}
  ]
});
