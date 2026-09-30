/* Carnival of Chaos (grade 1a). Source: Empire in Flames (grade 1a). See data/README.md for the fields. */
registerWarband("carnival", {
  "name": "Carnival of Chaos",
  "source": "Empire in Flames (grade 1a)",
  "tags": ["chaos","evil","carnival"],
  "hireNone": true,
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Morning star","Double-handed weapon","Spear","Halberd","Short Bow","Bow","Pistol","Light armour","Heavy armour","Shield","Helmet"],
  "costs": {"Short Bow":10,"Bow":15},
  "opts": {
    "blessings": {"n":"Blessings of Nurgle","dbl":true,"list":[{"n":"Stream of Corruption","c":25,"d":"Ranged spew: range 6 inches, S3, no armour saves."},{"n":"Nurgle's Rot","c":50,"d":"Immune to poison; victims wounded by a 6 can contract the Rot."},{"n":"Cloud of Flies","c":25,"d":"Close combat opponents are at -1 to hit."},{"n":"Bloated Foulness","c":40,"fx":{"W":1,"T":1,"M":-1},"d":"+1 Wound, +1 Toughness, -1 Movement."},{"n":"Mark of Nurgle","c":35,"fx":{"W":1},"d":"+1 Wound and immune to poison."},{"n":"Hideous","c":40,"d":"Causes fear."}]}
  },
  "grade": "1a",
  "units": [
    {"id":"master","n":"Carnival Master","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"spells":["nurgle-rituals"],"note":"Leader. Wizard using Nurgle Rituals. The Carnival can never hire hired swords."},
    {"id":"brute","n":"Brute","race":"human","stats":{"M":4,"WS":4,"BS":0,"S":4,"T":4,"W":1,"I":2,"A":2,"Ld":7},"kind":"hero","c":60,"max":2,"startXp":8,"startSkills":["Strongman"],"gear":["Double-handed weapon","Flail"],"costs":{"Flail":10},"skills":["combat","strength","speed"],"note":"Starts with the Strongman skill."},
    {"id":"tainted","n":"Tainted One","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":2,"skills":["combat","speed"],"opts":"blessings","note":"Must start with at least one Blessing of Nurgle."},
    {"id":"plaguebearer","n":"Plague Bearer","race":"daemon","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":4,"W":1,"I":4,"A":2,"Ld":10},"kind":"henchman","c":50,"max":2,"gear":[],"noXp":true,"sv":5,"note":"Daemon: fear, immune to psychology and poison, 5+ daemonic save, banished on 1-3 when taken out of action."},
    {"id":"nurgling","n":"Nurgling","race":"daemon","stats":{"M":4,"WS":3,"BS":0,"S":3,"T":2,"W":1,"I":3,"A":1,"Ld":10},"kind":"henchman","c":15,"gear":[],"noXp":true,"sv":5,"note":"Any number may be summoned. Daemonic, 5+ save, banished on 1-3."},
    {"id":"brethren","n":"Brethren","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"plaguecart","n":"Plague Cart","race":"cart","bonusModels":2,"kind":"henchman","c":120,"max":1,"gear":[],"noXp":true,"note":"Adds +2 to the maximum warband size (applied automatically). Its Guardian is bonded to the cart and gains no experience."}
  ]
});
