/* Grave Robbers (grade 2a). Source: Angelic Gobbo, Sylvania (grade 2a). See data/README.md for the fields. */
registerWarband("graverobbers", {
  "name": "Grave Robbers",
  "source": "Angelic Gobbo, Sylvania (grade 2a)",
  "tags": ["human","graverobbers"],
  "noHire": ["h-bounty","h-roadwarden"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Club","Axe","Sword","Halberd","Double-handed weapon","Pry Bar","Short Bow","Bow","Crossbow","Light armour","Heavy armour","Shield","Buckler","Helmet","Hooded Lantern & Rig","Surgeon's Journal","Finger Pendant","Spear"],
  "grade": "2a",
  "units": [
    {"id":"graver","n":"Graver","race":"human","stats":{"M":4,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"gear":["Club","Axe","Sword","Halberd","Double-handed weapon","Pry Bar","Short Bow","Bow","Crossbow","Light armour","Heavy armour","Shield","Buckler","Helmet","Hooded Lantern & Rig","Surgeon's Journal","Finger Pendant"],"skills":["combat","shooting","strength","speed","graver-special"],"note":"Leader. Hates the Undead. Grave Goods: +1 gc for each enemy taken out of action when exploring."},
    {"id":"robber","n":"Grave Robber","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":2,"startXp":4,"gear":["Club","Axe","Sword","Halberd","Double-handed weapon","Pry Bar","Short Bow","Bow","Crossbow","Light armour","Heavy armour","Shield","Buckler","Helmet","Hooded Lantern & Rig","Surgeon's Journal","Finger Pendant"],"skills":["combat","shooting","strength","speed","graver-special"]},
    {"id":"medic","n":"Junior Medic","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":40,"max":1,"startXp":2,"gear":["Club","Axe","Sword","Halberd","Double-handed weapon","Pry Bar","Short Bow","Bow","Crossbow","Light armour","Heavy armour","Shield","Buckler","Helmet","Hooded Lantern & Rig","Surgeon's Journal","Finger Pendant"],"skills":["academic","speed","graver-special"],"note":"Sawbones: re-rolls one friendly hero's serious injury."},
    {"id":"lookout","n":"Lookout","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":15,"max":2,"gear":["Club","Axe","Sword","Halberd","Double-handed weapon","Pry Bar","Short Bow","Bow","Crossbow","Light armour","Heavy armour","Shield","Buckler","Helmet","Hooded Lantern & Rig","Surgeon's Journal","Finger Pendant"],"skills":["shooting","speed","graver-special"]},
    {"id":"thug","n":"Thug","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"gear":["Club","Axe","Sword","Spear","Halberd","Short Bow","Bow","Light armour","Shield"]}
  ]
});
