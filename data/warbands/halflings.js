/* Halflings (grade 2a). Source: Grade 2a (Halfling warband). See data/README.md for the fields. */
registerWarband("halflings", {
  "name": "Halflings",
  "source": "Grade 2a (Halfling warband)",
  "tags": ["halfling","mercenary","good","halflings"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 20,
  "maxHeroes": 6,
  "costs": {"Cooking Pot Helmet":10},
  "gear": ["Double-handed weapon","Spear","Short Bow","Bow","Light armour","Buckler","Hunting arrows","Tenderiser","Cleaver","Sword","Cooking Pot Helmet","Hammer","Axe","Crossbow pistol","Pistol","Throwing knives","Rope & Hook","Lock Picks","Long bow","Helmet"],
  "grade": "2a",
  "units": [
    {"id":"elder","n":"Halfling Elder","race":"halfling","stats":{"M":4,"WS":3,"BS":5,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":9},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"gear":["Double-handed weapon","Spear","Short Bow","Bow","Light armour","Buckler","Hunting arrows"],"skills":["combat","shooting","academic","speed","halfling-special"],"note":"Leader. Halflings may hire the same swords as human mercenaries and may never use long bows, handguns or blunderbusses."},
    {"id":"cook","n":"Halfling Cook","race":"halfling","stats":{"M":4,"WS":4,"BS":2,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":35,"max":1,"startXp":8,"gear":["Tenderiser","Cleaver","Sword","Double-handed weapon","Spear","Short Bow","Bow","Light armour","Buckler","Cooking Pot Helmet"],"skills":["strength","speed","halfling-special"],"note":"Master Chef: on a 5+ the warband counts as one size smaller when selling."},
    {"id":"thief","n":"Halfling Thief","race":"halfling","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":2,"W":1,"I":5,"A":1,"Ld":8},"kind":"hero","c":30,"max":1,"startXp":8,"costs":{"Pistol":25},"gear":["Hammer","Axe","Sword","Crossbow pistol","Pistol","Throwing knives","Light armour","Buckler","Rope & Hook","Lock Picks"],"skills":["combat","shooting","speed","halfling-special"],"note":"Infiltrator; picks locks on an Initiative test; Cutpurse: +1 treasure."},
    {"id":"youth","n":"Halfling Youth","race":"halfling","stats":{"M":4,"WS":2,"BS":3,"S":2,"T":2,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":10,"max":2,"gear":["Double-handed weapon","Spear","Short Bow","Bow","Light armour","Buckler"],"skills":["shooting","speed","halfling-special"]},
    {"id":"scout","n":"Halfling Scout","race":"halfling","stats":{"M":4,"WS":2,"BS":4,"S":2,"T":2,"W":1,"I":4,"A":1,"Ld":8},"kind":"henchman","c":20,"max":7,"gear":["Short Bow","Bow","Light armour","Buckler","Hunting arrows"]},
    {"id":"warrior","n":"Halfling Warrior","race":"halfling","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"henchman","c":25,"max":5,"gear":["Double-handed weapon","Spear","Short Bow","Light armour","Buckler"]},
    {"id":"piggy","n":"Piggy","race":"animal","stats":{"M":5,"WS":4,"BS":0,"S":3,"T":4,"W":1,"I":3,"A":1,"Ld":4},"kind":"henchman","c":20,"max":4,"gear":[],"noXp":true,"note":"Animal: no weapons or experience."},
    {"id":"ogre","n":"Village Ogre","race":"ogre","stats":{"M":6,"WS":3,"BS":2,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":7},"kind":"henchman","c":140,"max":1,"large":true,"gear":["Hammer","Axe","Sword","Double-handed weapon","Long bow","Light armour","Helmet"],"note":"Fear, large target, experience at half rate, combat and strength skills only. Ogre Bodyguards will not join or stay once a Village Ogre is bought."}
  ]
});
