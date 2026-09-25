/* Wood Elves of Athel Loren (grade 2a). Source: Grade 2a (Athel Loren). See data/README.md for the fields. */
registerWarband("woodelves", {
  "name": "Wood Elves of Athel Loren",
  "source": "Grade 2a (Athel Loren)",
  "tags": ["woodelf","elf","good","woodelves"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Sword","Double-handed weapon","Spear","Bow","Long bow","Elf Bow","Light armour","Shield","Ithilmar armour","Elven Cloak","Elven Wine","Hunting arrows","Club","Axe"],
  "grade": "2a",
  "units": [
    {"id":"huntmaster","n":"Hunt Master","race":"woodelf","stats":{"M":5,"WS":4,"BS":5,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":9},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"gear":["Sword","Double-handed weapon","Spear","Bow","Long bow","Elf Bow","Light armour","Shield","Ithilmar armour","Elven Cloak","Elven Wine","Hunting arrows"],"skills":["combat","shooting","academic","speed","woodelf-special"],"note":"Leader. All Wood Elves hate Dark Elves and spot hidden enemies from twice as far. May hire any sword that is not evil or chaotic."},
    {"id":"waywatcher","n":"Waywatcher","race":"woodelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":40,"max":2,"startXp":12,"gear":["Sword","Double-handed weapon","Spear","Bow","Long bow","Elf Bow","Light armour","Shield","Ithilmar armour","Elven Cloak","Elven Wine","Hunting arrows"],"skills":["combat","shooting","speed","woodelf-special"],"note":"Sniper: may shoot while hiding. Camouflage: an extra Initiative test to spot him."},
    {"id":"mage","n":"Forest Mage","race":"woodelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":55,"max":1,"startXp":12,"gear":["Sword","Double-handed weapon","Spear","Bow","Long bow","Elf Bow","Light armour","Shield","Ithilmar armour","Elven Cloak","Elven Wine","Hunting arrows"],"skills":["shooting","academic","speed","woodelf-special"],"spells":["woodland-incantations"],"note":"Wizard using Woodland Incantations."},
    {"id":"scout","n":"Deepwood Scout","race":"woodelf","stats":{"M":5,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"henchman","c":35,"gear":["Club","Axe","Sword","Bow","Long bow","Elf Bow","Light armour","Elven Cloak","Elven Wine","Hunting arrows"],"note":"Crossfire: +1 injury when several scouts shoot the same target."},
    {"id":"gladeguard","n":"Glade Guard","race":"woodelf","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":7},"kind":"henchman","c":30,"gear":["Club","Axe","Sword","Bow","Long bow","Elf Bow","Light armour","Elven Cloak","Elven Wine","Hunting arrows"]}
  ]
});
