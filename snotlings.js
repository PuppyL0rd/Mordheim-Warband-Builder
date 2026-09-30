/* Snotling Warband (grade 2a). Source: Roberts and Seidman-Joria (site lists it as 2b). See data/README.md for the fields. */
registerWarband("snotlings", {
  "name": "Snotling Warband",
  "source": "Roberts and Seidman-Joria (site lists it as 2b)",
  "tags": ["snotlings","greenskin"],
  "hireNone": true,
  "gold": 500,
  "minModels": 3,
  "maxModels": 30,
  "maxHeroes": 6,
  "costs": {"Short Bow":10},
  "gear": ["Club","Axe","Sword","Double-handed weapon","Short Bow","Pebble","Slingshot","Light armour","Shield","Helmet","Crossbow","Blunderbuss","Pistol"],
  "grade": "2a",
  "units": [
    {"id":"goblin","n":"Bullied Goblin","race":"snotgoblin","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"hero","c":35,"max":1,"req":true,"startXp":20,"gear":["Club","Axe","Sword","Double-handed weapon","Short Bow","Pebble","Slingshot","Light armour","Shield","Helmet"],"skills":["combat","shooting","speed","snotling-special"],"note":"Leader; not a Snotling. Mob Rule: +1 Leadership per two Snotlings within 6 inches. Snotling warbands cannot hire swords. Their rating and income count as half."},
    {"id":"bigsnotz","n":"Snotling BigSnotz","race":"snotling","stats":{"M":4,"WS":2,"BS":2,"S":2,"T":2,"W":1,"I":3,"A":1,"Ld":5},"kind":"hero","c":15,"max":2,"startXp":8,"gear":["Club","Axe","Sword","Double-handed weapon","Short Bow","Pebble","Slingshot","Light armour","Shield","Helmet"],"skills":["combat","speed","snotling-special"],"note":"Dodgy 6+ save, -1 to be hit by missiles, easily hurt."},
    {"id":"scout","n":"Snotling Scout","race":"snotling","stats":{"M":5,"WS":1,"BS":2,"S":1,"T":1,"W":1,"I":5,"A":1,"Ld":4},"kind":"hero","c":20,"max":2,"startXp":4,"gear":["Club","Axe","Sword","Double-handed weapon","Pebble","Slingshot","Shield","Helmet"],"skills":["shooting","speed","snotling-special"],"note":"Infiltrates 8 inches away and may always run."},
    {"id":"shaman","n":"Snotling Shaman","race":"snotling","stats":{"M":4,"WS":1,"BS":1,"S":1,"T":1,"W":1,"I":4,"A":1,"Ld":5},"kind":"hero","c":30,"max":1,"startXp":4,"gear":["Club","Axe","Sword","Double-handed weapon","Pebble","Slingshot","Shield","Helmet"],"skills":["speed","snotling-special"],"spells":["snotling-waaagh"],"note":"Wizard. 'Eadache!: after each casting a 1-2 hits him and everyone touching him with a S5 hit."},
    {"id":"shoota","n":"Snotling Shoota Team","race":"snotling","stats":{"M":4,"WS":2,"BS":3,"S":1,"T":1,"W":2,"I":3,"A":2,"Ld":4},"kind":"henchman","c":25,"max":5,"gear":["Club","Pebble","Slingshot","Crossbow","Blunderbuss","Pistol"],"note":"Counts as one model. Only one non-pebble missile weapon; knocked back D6 inches when it fires."},
    {"id":"mob","n":"Snotling Mob","race":"snotling","stats":{"M":4,"WS":2,"BS":2,"S":2,"T":2,"W":3,"I":3,"A":3,"Ld":5},"kind":"henchman","c":40,"max":3,"gear":["Club","Axe","Double-handed weapon","Pebble","Slingshot"],"note":"Counts as one model. Immune to psychology near another mob. Never gains The Lad's Got Talent."},
    {"id":"wheelo","n":"Snotling Wheelo","race":"snotling","mLabel":"1D6","stats":{"M":3,"WS":2,"BS":2,"S":4,"T":3,"W":2,"I":5,"A":2,"Ld":6},"kind":"henchman","c":100,"max":1,"gear":[],"note":"A crewed barrel: moves 1D6 in a straight line (2D6 running), impact hits of D3 Strength 4. Uses the hero advance table."},
    {"id":"runt","n":"Runt","race":"snotling","stats":{"M":4,"WS":1,"BS":1,"S":1,"T":1,"W":1,"I":4,"A":1,"Ld":3},"kind":"henchman","c":5,"gear":["Club","Axe","Sword","Double-handed weapon","Pebble","Slingshot"],"note":"Uses one one-handed weapon and no armour. -2 to be hit by missiles."}
  ]
});
