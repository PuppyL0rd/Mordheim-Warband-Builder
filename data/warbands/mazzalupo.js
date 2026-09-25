/* Mazzalupo (grade 2a). Source: Mordheim Italia v3.5 (grade 2a). See data/README.md for the fields. */
registerWarband("mazzalupo", {
  "name": "Mazzalupo",
  "source": "Mordheim Italia v3.5 (grade 2a)",
  "tags": ["human","mercenary","good","mazzalupo"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Morning star","Double-handed weapon","Halberd","Spear","Lance","Light armour","Heavy armour","Shield","Buckler","Helmet","Horse","Crossbow","Bow","Short Bow","Sling","Bearcloak"],
  "grade": "2a",
  "units": [
    {"id":"knight","n":"Wandering Knight","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"gear":["Mace","Axe","Sword","Morning star","Double-handed weapon","Halberd","Spear","Lance","Light armour","Heavy armour","Shield","Buckler","Helmet","Horse"],"skills":["combat","strength","speed"],"spells":["mazzalupo-commands"],"note":"Leader. Knows one Command at creation; commands work like spells but he is not a wizard."},
    {"id":"finances","n":"Master of Finances","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":1,"startXp":0,"gear":["Mace","Axe","Sword","Spear","Crossbow","Bow","Short Bow","Sling","Light armour","Heavy armour","Shield","Buckler","Helmet"],"skills":["shooting","academic"],"note":"Corruption: pay 5 gc to make an attacker re-roll a hit. Has the Haggle skill."},
    {"id":"noble","n":"Fallen Noble","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":2,"startXp":8,"gear":["Mace","Axe","Sword","Morning star","Double-handed weapon","Halberd","Spear","Lance","Light armour","Heavy armour","Shield","Buckler","Helmet","Horse"],"skills":["combat","academic","strength","speed"],"note":"Indolent: cannot be commanded. Ye give way: may challenge a hero to yield. May only ride if the Knight does."},
    {"id":"squire","n":"Squire","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":20,"max":1,"startXp":0,"gear":["Mace","Axe","Sword","Spear","Crossbow","Bow","Short Bow","Sling","Light armour","Heavy armour","Shield","Buckler","Helmet"],"skills":["combat","shooting","speed"],"note":"Petty thief: on a 5+ steals a wyrdstone shard after a game."},
    {"id":"sheepherder","n":"Sheepherder","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":2,"gear":["Mace","Axe","Sword","Morning star","Double-handed weapon","Spear","Crossbow","Short Bow","Sling","Light armour","Shield","Helmet","Bearcloak"]},
    {"id":"churl","n":"Churl","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"henchman","c":20,"gear":["Mace","Axe","Sword","Morning star","Double-handed weapon","Spear","Crossbow","Short Bow","Sling","Light armour","Shield","Helmet"]},
    {"id":"blacksheep","n":"Black Sheep","race":"animal","stats":{"M":6,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":10,"max":5,"gear":[],"noXp":true,"note":"Stupid unless a Sheepherder is within 6 inches. Ignored when picking the closest target."}
  ]
});
