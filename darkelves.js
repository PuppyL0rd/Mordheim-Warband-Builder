/* Dark Elves (grade 1b). Source: Town Cryer 12 (Lustria). See data/README.md for the fields. */
registerWarband("darkelves", {
  "name": "Dark Elves",
  "source": "Town Cryer 12 (Lustria)",
  "tags": ["darkelf","elf","evil"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 12,
  "maxHeroes": 6,
  "gear": ["Axe","Sword","Spear","Halberd","Double-handed weapon","Dark Elf Blade (upgrade)","Repeater Crossbow","Crossbow pistol","Buckler","Shield","Helmet","Light armour","Dark Venom","Sea Dragon Cloak"],
  "grade": "1b",
  "units": [
    {"id":"highborn","n":"High Born","race":"darkelf","stats":{"M":5,"WS":5,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":9},"kind":"hero","c":70,"max":1,"req":true,"startXp":20,"skills":["combat","shooting","academic","speed","darkelf-special"],"note":"Leader. Dark Elves hate High Elves, never use blackpowder weapons, and spot hidden enemies from twice as far."},
    {"id":"beastmaster","n":"Beastmaster","race":"darkelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":45,"max":1,"startXp":8,"gear":["Axe","Sword","Spear","Halberd","Double-handed weapon","Beastlash","Dark Elf Blade (upgrade)","Repeater Crossbow","Crossbow pistol","Buckler","Shield","Helmet","Light armour","Dark Venom","Sea Dragon Cloak"],"skills":["combat","speed","darkelf-special"],"note":"May be accompanied by up to two Cold One Beasthounds."},
    {"id":"fellblade","n":"Fellblade","race":"darkelf","stats":{"M":5,"WS":5,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":40,"max":2,"startXp":12,"gear":["Axe","Sword","Spear","Halberd","Double-handed weapon","Dark Elf Blade (upgrade)","Buckler","Shield","Helmet","Light armour","Dark Venom","Sea Dragon Cloak"],"skills":["combat","speed","darkelf-special"],"note":"Melee specialist: never uses missile weapons."},
    {"id":"sorceress","n":"Dark Elf Sorceress","race":"darkelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"hero","c":55,"max":1,"startXp":12,"skills":["academic","speed","darkelf-special"],"spells":["dark-elf-magic"],"note":"Wizard using Dark Elf Magic. Cannot cast while wearing armour."},
    {"id":"corsair","n":"Corsair","race":"darkelf","stats":{"M":5,"WS":4,"BS":4,"S":3,"T":3,"W":1,"I":6,"A":1,"Ld":8},"kind":"henchman","c":35,"gear":["Axe","Sword","Spear","Halberd","Double-handed weapon","Dark Elf Blade (upgrade)","Repeater Crossbow","Crossbow pistol","Buckler","Shield","Helmet","Light armour","Sea Dragon Cloak"]},
    {"id":"shade","n":"Shade","race":"darkelf","stats":{"M":5,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":5,"A":1,"Ld":8},"kind":"henchman","c":30,"max":5,"gear":["Axe","Sword","Repeater Crossbow","Helmet","Light armour"],"note":"Natural Stealth: enemies are at -1 Initiative to spot him when hiding."},
    {"id":"beasthound","n":"Cold One Beasthound","race":"animal","stats":{"M":6,"WS":3,"BS":0,"S":4,"T":4,"W":1,"I":1,"A":1,"Ld":4},"kind":"henchman","c":30,"needs":"beastmaster","maxPer":{"of":["beastmaster"],"mult":2},"gear":[],"noXp":true,"sv":6,"note":"Fear. 6+ scaly skin save. Leaves if the Beastmaster dies."}
  ]
});
