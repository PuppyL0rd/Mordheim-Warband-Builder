/* Cult of the Possessed (grade core). Source: Mordheim Rulebook (core). See data/README.md for the fields. */
registerWarband("possessed", {
  "name": "Cult of the Possessed",
  "source": "Mordheim Rulebook (core)",
  "tags": ["chaos","evil","possessed"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Double-handed weapon","Spear","Bow","Short Bow","Light armour","Heavy armour","Shield","Helmet"],
  "costs": {"Bow":15,"Short Bow":10},
  "opts": {
    "mutations": {"n":"Mutations","dbl":true,"list":[{"n":"Daemon Soul","c":20,"d":"4+ save against spells and prayers."},{"n":"Great Claw","c":50,"d":"Extra attack with +1 Strength; that arm carries no weapon."},{"n":"Cloven Hoofs","c":40,"d":"+1 Movement."},{"n":"Tentacle","c":35,"d":"Can grapple to reduce an enemy's attacks by 1."},{"n":"Blackblood","c":30,"d":"Adjacent models take a S3 hit when he loses a wound."},{"n":"Spines","c":35,"d":"Adjacent models take a S1 hit each combat phase."},{"n":"Scorpion Tail","c":40,"d":"Extra S5 poisoned attack."},{"n":"Extra Arm","c":40,"d":"An extra one-handed weapon (+1 attack) or a shield."},{"n":"Hideous","c":40,"d":"Causes fear."}]}
  },
  "grade": "core",
  "units": [
    {"id":"magister","n":"Magister","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","academic","speed"],"spells":["chaos-rituals"],"note":"Leader. Starts with one random Chaos Ritual and may learn a spell instead of a skill."},
    {"id":"possessed","n":"Possessed","race":"possessed","stats":{"M":5,"WS":4,"BS":0,"S":4,"T":4,"W":2,"I":4,"A":2,"Ld":7},"kind":"hero","c":90,"max":2,"startXp":8,"gear":[],"skills":["combat","strength","speed"],"opts":"mutations","note":"Causes fear. Never uses weapons or armour. Mutations are bought at recruitment only."},
    {"id":"mutant","n":"Mutant","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":2,"skills":["combat","speed"],"opts":"mutations","note":"Must start with at least one mutation."},
    {"id":"darksoul","n":"Darksoul","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":35,"max":5,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Flail","Light armour","Heavy armour","Shield","Helmet"],"note":"Crazed: automatically passes Leadership tests."},
    {"id":"gor","n":"Beastman Gor","race":"beastman","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":4,"W":2,"I":3,"A":1,"Ld":7},"kind":"henchman","c":45,"max":3,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Flail","Light armour","Heavy armour","Shield","Helmet"]},
    {"id":"brethren","n":"Brethren","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25}
  ]
});
