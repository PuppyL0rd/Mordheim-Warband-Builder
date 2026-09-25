/* RACES: racial maximum profiles, used to warn when a stat goes over its limit and to show a race name.
   Races that are not listed here still work; they just have no maximum. */
const RACES = {
  "human": {"n":"Human","max":{"M":4,"WS":6,"BS":6,"S":4,"T":4,"W":3,"I":6,"A":4,"Ld":9}},
  "elf": {"n":"Elf","max":{"M":5,"WS":7,"BS":7,"S":4,"T":4,"W":3,"I":9,"A":4,"Ld":10}},
  "dwarf": {"n":"Dwarf","max":{"M":3,"WS":7,"BS":6,"S":4,"T":5,"W":3,"I":5,"A":4,"Ld":10}},
  "halfling": {"n":"Halfling","max":{"M":4,"WS":5,"BS":6,"S":3,"T":3,"W":3,"I":9,"A":4,"Ld":10}},
  "ogre": {"n":"Ogre","max":{"M":6,"WS":5,"BS":5,"S":5,"T":5,"W":5,"I":4,"A":4,"Ld":9}},
  "darkelf": {"n":"Dark Elf","max":{"M":5,"WS":7,"BS":7,"S":4,"T":3,"W":3,"I":9,"A":4,"Ld":10}},
  "wolfman": {"n":"Wolfman","max":{"M":6,"WS":4,"BS":3,"S":5,"T":4,"W":3,"I":7,"A":4,"Ld":8}},
  "necrarch": {"n":"Necrarch Vampire","max":{"M":6,"WS":4,"BS":4,"S":6,"T":6,"W":4,"I":9,"A":3,"Ld":10}},
  "ogrehunter": {"n":"Ogre","max":{"M":6,"WS":6,"BS":4,"S":5,"T":5,"W":5,"I":4,"A":5,"Ld":9}},
  "gnoblar": {"n":"Gnoblar","max":{"M":4,"WS":5,"BS":6,"S":3,"T":4,"W":3,"I":6,"A":4,"Ld":7}},
  "snotling": {"n":"Snotling","max":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":2,"I":9,"A":4,"Ld":6}},
  "snotgoblin": {"n":"Bullied Goblin","max":{"M":4,"WS":5,"BS":6,"S":4,"T":4,"W":3,"I":6,"A":4,"Ld":7}}
};
/* Display names for races that come from hired swords. */
const RACE_NAMES = {"orc":"Orc","skink":"Skink","ratogre":"Rat Ogre","darkelf":"Dark Elf","highelf":"High Elf","woodelf":"Wood Elf","hobgoblin":"Hobgoblin","goblin":"Goblin","gnoblar":"Gnoblar","ungor":"Ungor","daemon":"Daemon","construct":"Construct","centaur":"Chaos Centaur","vampire":"Vampire","skaven":"Skaven","djinn":"Djinn","chaos":"Chaos champion","undead":"Undead"};
