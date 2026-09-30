/* Skaven of Clan Moulder (grade 2a). Source: Grade 2a (Clan Moulder). See data/README.md for the fields. */
registerWarband("moulder", {
  "name": "Skaven of Clan Moulder",
  "source": "Grade 2a (Clan Moulder)",
  "tags": ["skaven","evil","moulder"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "gear": ["Mace","Club","Sword","Halberd","Flail","Spear","Beastwhip","Thingcatcher","Sling","Warplock pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Wolf Rat Mount"],
  "opts": {
    "mutation": {"n":"Mutation","dbl":false,"list":[{"n":"Daemon Soul","c":20,"d":"4+ save against spells and prayers."},{"n":"Great Claw","c":50,"d":"Extra attack with +1 Strength; that arm carries no weapon."},{"n":"Cloven Hoofs","c":40,"d":"+1 Movement."},{"n":"Tentacle","c":35,"d":"Can grapple to reduce an enemy's attacks by 1."},{"n":"Blackblood","c":30,"d":"Adjacent models take a S3 hit when he loses a wound."},{"n":"Spines","c":35,"d":"Adjacent models take a S1 hit each combat phase."},{"n":"Scorpion Tail","c":40,"d":"Extra S5 poisoned attack."},{"n":"Extra Arm","c":40,"d":"An extra one-handed weapon (+1 attack) or a shield."},{"n":"Hideous","c":40,"d":"Causes fear."}]}
  },
  "grade": "2a",
  "units": [
    {"id":"packmaster","n":"Packmaster","race":"skaven","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":7},"kind":"hero","c":75,"max":1,"req":true,"startXp":20,"gear":["Mace","Club","Sword","Halberd","Flail","Spear","Beastwhip","Thingcatcher","Sling","Warplock pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Wolf Rat Mount"],"skills":["combat","shooting","academic","strength","speed","moulder-special"],"note":"Leader. Goads beasts within 6 inches at the start of the turn (Giant Rat 6, Wolf Rat 8, Rat Ogre 10). Starts with Ride Wolf Rat and a Beast Handling skill."},
    {"id":"stormvermin","n":"Stormvermin","race":"skaven","stats":{"M":5,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"hero","c":40,"max":2,"startXp":8,"gear":["Mace","Club","Sword","Halberd","Flail","Spear","Sling","Warplock pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Wolf Rat Mount"],"skills":["combat","strength","speed","moulder-special"]},
    {"id":"apprentice","n":"Apprentice","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"hero","c":25,"max":2,"startXp":4,"gear":["Mace","Club","Sword","Halberd","Flail","Spear","Beastwhip","Thingcatcher","Sling","Warplock pistol","Light armour","Heavy armour","Shield","Buckler","Helmet","Wolf Rat Mount"],"skills":["combat","academic","speed","moulder-special"],"note":"Novice Handler: goads with a Beastwhip or a Thingcatcher, not both. Takes over if the Packmaster dies."},
    {"id":"clanrat","n":"Clanrat","race":"skaven","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":5},"kind":"henchman","c":20,"max":5,"gear":["Club","Sword","Spear","Sling","Light armour","Shield","Helmet"]},
    {"id":"giantrat","n":"Giant Rat","race":"skaven","stats":{"M":6,"WS":2,"BS":0,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":15,"gear":[],"noXp":true,"note":"Animal: no weapons, armour or experience."},
    {"id":"wolfrat","n":"Wolf Rat","race":"skaven","stats":{"M":9,"WS":3,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":30,"max":3,"gear":[],"noXp":true,"note":"Poisoned Attack: Strength 4 with no armour save modifier."},
    {"id":"ratogre","n":"Rat Ogre","race":"skaven","stats":{"M":6,"WS":3,"BS":3,"S":5,"T":5,"W":3,"I":4,"A":3,"Ld":4},"kind":"henchman","c":200,"max":2,"large":true,"gear":[],"noXp":true,"opts":"mutation","note":"Fear; stupid unless a Moulder hero is within 6 inches. Each must buy a mutation. Bought one at a time, never as a group."}
  ]
});
