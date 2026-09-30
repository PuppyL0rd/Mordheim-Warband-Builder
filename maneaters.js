/* Maneaters (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("maneaters", {
  "name": "Maneaters",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["ogres","maneaters"],
  "hireOnly": ["h-ogre"],
  "hireRaces": ["halfling"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Cleaver","Ogre club","Sword","Spear","Morning star","Double-handed weapon","Iron fist","Cathayan longsword","Hand-held Mortar","Helmet","Light armour","Heavy armour"],
  "opts": {
    "gnoblars": {"n":"Claimed Gnoblars (up to two kinds)","list":[{"n":"Gnoblar Fighter","c":15,"d":"A claimed Gnoblar fighter."},{"n":"Lookout-Gnoblar","c":20,"d":"The Ogre gains the Dodge skill."},{"n":"Luck-Gnoblar","c":25,"d":"Once per battle the Ogre may re-roll one die."},{"n":"Sword-Gnoblar","c":30,"d":"An extra Strength 2 attack in close combat."}]}
  },
  "grade": "1c",
  "units": [
    {"id":"captain","n":"Captain","race":"ogre","stats":{"M":6,"WS":4,"BS":3,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":8},"kind":"hero","c":145,"max":1,"req":true,"large":true,"startXp":20,"skills":["combat","strength","ogre-special"],"opts":"gnoblars","note":"Leader. Ogres cause fear, count as two models when selling loot, need twice the experience per advance, and never fight with daggers. Maneaters may hire only Halflings and the Ogre Bodyguard."},
    {"id":"guide","n":"Mountain Guide","race":"ogre","stats":{"M":6,"WS":4,"BS":3,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":8},"kind":"hero","c":145,"max":1,"large":true,"startXp":8,"gear":["Cleaver","Ogre club","Sword","Spear","Double-handed weapon","Harpoon crossbow","Helmet","Light armour"],"skills":["combat","strength","ogre-special"],"note":"Ranger: rolls two exploration dice and picks one. Loner: immune to all alone tests, never leads, claims no Gnoblars."},
    {"id":"youngblood","n":"Youngblood","race":"ogre","stats":{"M":6,"WS":2,"BS":2,"S":3,"T":4,"W":2,"I":2,"A":1,"Ld":6},"kind":"hero","c":45,"max":3,"skills":["combat","strength","ogre-special"],"opts":"gnoblars","note":"Causes no fear and is not a large target."},
    {"id":"bull","n":"Bull","race":"ogre","stats":{"M":6,"WS":3,"BS":2,"S":4,"T":4,"W":3,"I":2,"A":3,"Ld":7},"kind":"henchman","c":140,"max":2,"large":true,"opts":"gnoblars","note":"Bull Charge: one +1 to-hit attack that knocks the target down."},
    {"id":"halfgrown","n":"Half-grown","race":"ogre","stats":{"M":6,"WS":3,"BS":2,"S":4,"T":4,"W":2,"I":2,"A":2,"Ld":7},"kind":"henchman","c":85,"opts":"gnoblars"},
    {"id":"sabretusk","n":"Sabretusk","race":"animal","stats":{"M":8,"WS":4,"BS":0,"S":4,"T":4,"W":2,"I":4,"A":3,"Ld":4},"kind":"henchman","c":125,"max":2,"needs":"guide","gear":[],"noXp":true,"note":"Fear. Uses the Guide's Leadership within 6 inches. Feral Instinct: must pass a Leadership test each turn or the opponent moves it."}
  ]
});
