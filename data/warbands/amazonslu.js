/* Amazons (Lustria) (grade 1b). Source: Town Cryer 15 (Lustria). See data/README.md for the fields. */
registerWarband("amazonslu", {
  "name": "Amazons (Lustria)",
  "source": "Town Cryer 15 (Lustria)",
  "tags": ["amazons","good"],
  "hireNone": true,
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Sling":5},
  "gear": ["Club","Sword","Spear","Double-handed weapon","Starblade","Starsword","Bow","Sunstaff","Buckler","Helmet","Enchanted Skins","Amulet of the Moon","Healing Herbs"],
  "grade": "1b",
  "units": [
    {"id":"priestess","n":"Serpent Priestess","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","academic","speed","amazon-special"],"spells":["amazon-rituals"],"note":"Leader. Wizard using Amazon Rituals. Amazons may only hire Amazon hired swords."},
    {"id":"eagle","n":"Eagle Warrior","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":8,"skills":["combat","strength","speed","amazon-special"]},
    {"id":"piranha","n":"Piranha Warrior","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":30,"max":2,"startXp":8,"gear":["Club","Sword","Spear","Double-handed weapon","Starblade","Starsword","Bow","Sunstaff","Buckler","Helmet","Enchanted Skins","Amulet of the Moon","Healing Herbs","Conch Shell Horn"],"skills":["combat","shooting","speed","amazon-special"]},
    {"id":"amazon","n":"Amazon Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Club","Sword","Spear","Sling","Bow","Sunstaff","Buckler","Helmet","Enchanted Skins"]},
    {"id":"jaguar","n":"Jaguar Warrior","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":3,"gear":["Club","Sword","Spear","Sling","Bolas","Javelins","Bow","Sunstaff","Helmet","Enchanted Skins"],"note":"One with the Jungle: moves through jungle terrain without penalty."}
  ]
});
