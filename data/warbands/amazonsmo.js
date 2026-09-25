/* Amazons (Mordheim) (grade 1b). Source: Town Cryer 23 (grade 1b). See data/README.md for the fields. */
registerWarband("amazonsmo", {
  "name": "Amazons (Mordheim)",
  "source": "Town Cryer 23 (grade 1b)",
  "tags": ["amazons","good"],
  "hireNone": true,
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Sling":5,"Sunstaff":50},
  "gear": ["Club","Sword","Spear","Claw of the Old Ones","Sunstaff","Sun Gauntlet","Buckler","Helmet","Amulet of the Moon","Healing Herbs"],
  "grade": "1b",
  "units": [
    {"id":"priestess","n":"Priestess","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","strength","speed"],"spells":["amazon-rituals"],"note":"Leader and wizard using Amazon Rituals. Amazons may only hire Amazon hired swords."},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","shooting","speed"]},
    {"id":"totem","n":"Totem Warrior","race":"human","stats":{"M":4,"WS":4,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":30,"max":2,"startXp":8,"skills":["combat","strength","speed"],"note":"Subject to frenzy."},
    {"id":"amazon","n":"Amazon Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Club","Sword","Spear","Sling","Bow","Buckler","Helmet"]},
    {"id":"scout","n":"Scout","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":3,"gear":["Club","Sword","Spear","Sling","Javelins","Bow","Buckler","Helmet"],"note":"Stealthy: deploys twice as far and may start hiding."}
  ]
});
