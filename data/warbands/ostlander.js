/* Ostlander Mercenaries (grade 1a). Source: Town Cryer 11, revised in Mordheim Annual 2002. See data/README.md for the fields. */
registerWarband("ostlander", {
  "name": "Ostlander Mercenaries",
  "source": "Town Cryer 11, revised in Mordheim Annual 2002",
  "tags": ["human","mercenary","good","ostlanders"],
  "hireOnly": ["h-ogre"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Pistol","Light armour","Heavy armour","Shield","Helmet"],
  "grade": "1a",
  "units": [
    {"id":"elder","n":"Elder","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","strength","speed","ostlander-special"],"note":"Leader. Ostlanders can never hire mercenaries except Ogres."},
    {"id":"bloodbrother","n":"Blood-brother","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":2,"startXp":12,"skills":["combat","strength","ostlander-special"]},
    {"id":"priesttaal","n":"Priest of Taal","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":12,"gear":["Mace","Hammer","Axe","Sword","Spear","Double-handed weapon","Bow","Pistol","Light armour","Shield","Helmet"],"skills":["combat","academic","strength","speed","ostlander-special"],"spells":["prayers-taal"],"note":"Uses the Prayers of Taal. Never wears heavy armour."},
    {"id":"kin","n":"Kin","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25},
    {"id":"jaeger","n":"Jaeger","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":7,"gear":["Axe","Sword","Spear","Pistol","Double-barrelled pistol","Bow","Blunderbuss","Handgun","Hunting Rifle","Double-barrelled hunting rifle","Light armour","Shield","Helmet"]},
    {"id":"ruffian","n":"Ruffian","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":10},"kind":"henchman","c":25,"max":5,"gear":["Mace","Hammer","Axe","Sword","Double-handed weapon","Light armour"],"note":"Drunk: passes all Leadership tests. Never a leader; never uses missile weapons."},
    {"id":"ogre","n":"Ogre","race":"ogre","stats":{"M":6,"WS":3,"BS":2,"S":4,"T":4,"W":3,"I":3,"A":2,"Ld":10},"kind":"henchman","c":160,"max":1,"large":true,"gear":["Club","Axe","Sword","Double-handed weapon","Light armour"],"costs":{"Double-handed weapon":10},"note":"Fear. Large target. Gains advances at half rate."}
  ]
});
