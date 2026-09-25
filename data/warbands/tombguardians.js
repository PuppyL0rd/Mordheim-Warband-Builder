/* Tomb Guardians (grade 1b). Source: Town Cryer 18 (Khemri). See data/README.md for the fields. */
registerWarband("tombguardians", {
  "name": "Tomb Guardians",
  "source": "Town Cryer 18 (Khemri)",
  "tags": ["undead","tombguardians"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Mace","Axe","Sword","Halberd","Spear","Morning star","Double-handed weapon","Flail","Bow","Shield","Light armour"],
  "grade": "1b",
  "units": [
    {"id":"lord","n":"Tomb Lord","race":"undead","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":5,"W":3,"I":3,"A":2,"Ld":8},"kind":"hero","c":150,"max":1,"req":true,"startXp":20,"gear":["Mace","Axe","Sword","Halberd","Spear","Morning star","Double-handed weapon","Flail","Bow","Nehekharan Javelin","Asp Arrows","Shield","Light armour"],"skills":["combat","shooting","strength"],"note":"Leader. Undead: causes fear, immune to psychology and poison, cannot run, No Pain. Flammable: double wounds from fire. Home Ground: roll one extra exploration die."},
    {"id":"liche","n":"Liche Priest","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":55,"max":1,"startXp":8,"gear":["Mace","Staff","Axe","Sword","Morning star","Serpent Staff"],"skills":["academic"],"spells":["mortuary-scrolls"],"note":"Wizard using the Mortuary Cult scrolls. Never wears armour. Undead."},
    {"id":"acolyte","n":"Acolyte","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":20,"max":2,"gear":["Mace","Staff","Axe","Sword","Morning star"],"skills":["combat","academic"],"note":"Undead."},
    {"id":"skeleton","n":"Skeleton Warrior","race":"undead","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":2,"A":1,"Ld":5},"kind":"henchman","c":20,"noXp":true,"gear":["Mace","Axe","Sword","Halberd","Spear","Morning star","Double-handed weapon","Flail","Bow","Shield","Light armour"],"note":"Undead. Gains no experience."},
    {"id":"tombguard","n":"Tomb Guard","race":"undead","stats":{"M":4,"WS":3,"BS":2,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":30,"max":2,"gear":["Mace","Axe","Sword","Halberd","Spear","Morning star","Double-handed weapon","Flail","Bow","Shield","Light armour"],"note":"Undead. The rules are unclear whether they gain experience."},
    {"id":"scorpion","n":"Tomb Scorpion","race":"animal","stats":{"M":5,"WS":2,"BS":0,"S":2,"T":2,"W":1,"I":4,"A":1,"Ld":4},"kind":"henchman","c":15,"max":3,"gear":[],"noXp":true,"note":"Living animal. Poisoned sting."},
    {"id":"chariot","n":"Skeleton Chariot","race":"undead","kind":"henchman","c":200,"max":1,"gear":[],"noXp":true,"note":"Cost is 200 gc plus 10D6 gc. Pulled by two Skeleton Steeds and driven by a warband member with Drive Chariot."}
  ]
});
