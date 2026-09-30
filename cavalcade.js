/* The Cursed Cavalcade (grade 1c). Source: Tuomas Pirinen (grade 1c). See data/README.md for the fields. */
registerWarband("cavalcade", {
  "name": "The Cursed Cavalcade",
  "source": "Tuomas Pirinen (grade 1c)",
  "tags": ["human","chaos","evil","cavalcade"],
  "hireNone": true,
  "gold": 500,
  "minModels": 3,
  "maxModels": 13,
  "maxHeroes": 6,
  "costs": {"Superior Black Powder":30,"Nightmare":95},
  "gear": ["Misericordia","Sword","Hammer","Double-handed weapon","Boar Spear","Lance","Long bow","Duelling pistol","Hunting Rifle","Blunderbuss","Light armour","Heavy armour","Shield","Buckler","Helmet","Cathayan Quilted Silk Armour","Superior Black Powder","Nightmare","Bird of Prey","Banner of the Noble House"],
  "opts": {
    "masks": {"n":"Cursed mask (one only)","list":[{"n":"Sun King Mask","c":0,"d":"Aristocrat only; cannot be knocked down or stunned. Free at recruitment, 70 gc later."},{"n":"Silver Death Mask","c":0,"d":"Re-roll a serious injury. Free at recruitment, 50 gc later."},{"n":"Fish Head Mask","c":0,"d":"Regains or gains a wound when taking an enemy out of action. Free at recruitment, 60 gc later."},{"n":"Faceless Mask","c":0,"d":"Once per game stops an interception. Free at recruitment, 30 gc later."},{"n":"Evil Jester Mask","c":0,"d":"Random stupidity, hatred or frenzy each battle. Free at recruitment, 70 gc later."}]},
    "scholar": {"n":"Scholar training","list":[{"n":"Magical Adept","c":10,"d":"Wizard using Lesser Magic with one random spell."},{"n":"Chronicler","c":10,"d":"Rolls an extra exploration die and keeps the better."},{"n":"Plague Doctor Mask","c":0,"d":"Once per game a growing cloud of black death. Free at recruitment, 45 gc later."}]},
    "cymbals": {"n":"Fighting Ape gear","list":[{"n":"Cymbals","c":15,"d":"Enemies within 6 inches suffer -1 BS and -1 Ld."}]}
  },
  "grade": "1c",
  "units": [
    {"id":"aristocrat","n":"Aristocrat","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","speed","cavalcade-special"],"opts":"masks","note":"Leader. Evil warband; can hire only the Crow Master. Rides a Nightmare. Captured enemies go to the Throne of Worms."},
    {"id":"companion","n":"Companion","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Misericordia","Sword","Hammer","Double-handed weapon","Lance","Long bow","Duelling pistol","Hunting Rifle","Blunderbuss","Light armour","Heavy armour","Shield","Buckler","Helmet","Superior Black Powder","Banner of the Noble House"],"skills":["combat","shooting","strength","speed","cavalcade-special"],"opts":"masks","note":"Expert Swordsman."},
    {"id":"scholar","n":"Twisted Scholar","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":1,"startXp":4,"gear":["Misericordia","Sword","Hammer","Double-handed weapon","Lance","Long bow","Duelling pistol","Hunting Rifle","Blunderbuss","Light armour","Heavy armour","Shield","Buckler","Helmet","Superior Black Powder"],"skills":["academic","cavalcade-special"],"opts":"scholar","note":"Choose Magical Adept (Wizard using Lesser Magic) or Chronicler, not both."},
    {"id":"piper","n":"Cursed Piper","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":40,"max":1,"startXp":6,"gear":["Misericordia","Sword","Hammer","Lance","Duelling pistol","Hunting Rifle","Blunderbuss","Light armour","Heavy armour","Shield","Buckler","Helmet","Superior Black Powder"],"skills":["academic","cavalcade-special"],"opts":"masks","note":"Danse Macabre: forces an enemy within 6 inches to dance. Plays with one hand: no off-hand weapon, two-handed weapon, brace of pistols, bows or crossbows."},
    {"id":"thrall","n":"Thrall","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":25,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Crossbow","Light armour","Shield","Helmet"],"note":"At most three crossbows in the warband."},
    {"id":"captured","n":"Captured Thrall","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":0,"max":5,"noCount":true,"noXp":true,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Short Bow","Bow","Crossbow","Light armour","Shield","Helmet"],"note":"Won from captives, not bought. Does not count toward the model limit (up to 18 with five). Cannot be dismissed."},
    {"id":"bear","n":"Great Bear","race":"animal","stats":{"M":5,"WS":3,"BS":0,"S":5,"T":5,"W":2,"I":3,"A":2,"Ld":6},"kind":"henchman","c":140,"max":1,"large":true,"gear":[],"noXp":true,"note":"Gains an extra Attack once wounded. Large target."},
    {"id":"beast","n":"Wild Beast","race":"animal","stats":{"M":6,"WS":3,"BS":0,"S":4,"T":4,"W":1,"I":5,"A":2,"Ld":5},"kind":"henchman","c":45,"max":2,"gear":[],"noXp":true,"note":"+1 Attack on the charge."},
    {"id":"ape","n":"Fighting Ape","race":"animal","stats":{"M":6,"WS":3,"BS":0,"S":4,"T":4,"W":1,"I":5,"A":2,"Ld":5},"kind":"henchman","c":95,"max":1,"gear":[],"noXp":true,"opts":"cymbals","note":"Has Scale Sheer Surfaces, Acrobat and Dodge; may dive from 10 inches."}
  ]
});
