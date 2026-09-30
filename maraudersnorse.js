/* Marauders of Chaos: Norse (grade 1c). Source: Border Town Burning (grade 1c). See data/README.md for the fields. */
registerWarband("maraudersnorse", {
  "name": "Marauders of Chaos: Norse",
  "source": "Border Town Burning (grade 1c)",
  "tags": ["human","chaos","evil","marauders"],
  "hireOnly": ["h-pit","h-ogre","h-norse","h-assassin","h-warlock","h-witch"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Hammer","Axe","Sword","Halberd","Morning star","Double-handed weapon","Flail","Barbed Whip","Great Axe","Spear","Throwing knives","Shield","Helmet","Light armour","Heavy armour"],
  "opts": {
    "marks": {"n":"Mark of the Dark Gods","list":[{"n":"Mark of Chaos Undivided","c":0,"d":"Leader: allies re-roll failed Leadership; the Seer may lead 0-3 Gors and uses Chaos Rituals."},{"n":"Mark of Tchar the Eagle","c":0,"d":"Leader learns a Tchar ritual; a Seer starts with two Tchar Rituals."},{"n":"Mark of Arkhar the Dog","c":0,"d":"Leader is frenzied; a Seer becomes a Bloodfather who casts no spells."},{"n":"Mark of Onogal the Crow","c":0,"d":"Leader gains +1 Toughness and an injury re-roll; a Seer uses Onogal Rituals."},{"n":"Mark of Shornaal the Serpent","c":0,"d":"Enemies must pass a Leadership test to attack the leader; a Seer uses Shornaal Rituals."}]}
  },
  "grade": "1c",
  "units": [
    {"id":"chieftain","n":"Marauder Chieftain","race":"human","stats":{"M":4,"WS":5,"BS":3,"S":4,"T":4,"W":1,"I":5,"A":1,"Ld":8},"kind":"hero","c":95,"max":1,"req":true,"startXp":20,"gear":["Hammer","Axe","Sword","Halberd","Morning star","Double-handed weapon","Flail","Barbed Whip","Great Axe","Shield","Helmet","Light armour","Heavy armour"],"skills":["combat","strength","speed","marauder-special"],"opts":"marks","note":"Leader. Eye of the Gods: roll 2D6 after each battle; 12+ (13+ Norse, 10+ with Tattooed Body) earns a Mark of Chaos or turns him into a Chaos Spawn. Choose the Mark once he has earned it. Norse: +1 to rarity rolls when searching."},
    {"id":"seer","n":"Seer","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":45,"max":1,"startXp":8,"gear":["Hammer","Axe","Sword","Halberd","Morning star","Double-handed weapon","Flail","Barbed Whip"],"skills":["combat","academic","marauder-special"],"spells":["chaos-rituals","tchar-rituals","onogal-rituals","shornaal-rituals"],"opts":"marks","note":"Wizard. His Mark decides the list: Chaos Undivided uses Chaos Rituals, Tchar the Tchar Rituals, Onogal the Onogal Rituals, Shornaal the Shornaal Rituals, and Arkhar makes him a Bloodfather who casts nothing."},
    {"id":"champion","n":"Champion","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":8,"gear":["Hammer","Axe","Sword","Halberd","Morning star","Double-handed weapon","Flail","Barbed Whip","Great Axe","Shield","Helmet","Light armour","Heavy armour"],"skills":["combat","strength","marauder-special"]},
    {"id":"condemned","n":"Condemned","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":55,"max":1,"startXp":8,"gear":[],"skills":["strength","speed","marauder-special"],"note":"Weapon Skill, Strength and Toughness are each a D6 and Attacks a D3, rolled every turn until set. Causes fear. Uses no equipment until all variable attributes are set."},
    {"id":"marauder","n":"Chaos Marauder","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"henchman","c":35,"gear":["Hammer","Axe","Sword","Spear","Morning star","Flail","Throwing knives","Shield","Helmet","Light armour"]},
    {"id":"warhound","n":"Warhound of Chaos","race":"animal","stats":{"M":7,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":3,"A":1,"Ld":5},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Animal: no equipment or experience."},
    {"id":"spawn","n":"Spawn of Chaos","race":"chaosspawn","mLabel":"2D6","stats":{"M":2,"WS":3,"BS":0,"S":4,"T":5,"W":3,"I":2,"A":2,"Ld":10},"kind":"henchman","c":180,"max":1,"large":true,"gear":[],"noXp":true,"note":"Attacks are D6+1 each round. Fear; large target; moves 2D6 inches straight ahead; passes all Leadership tests."}
  ]
});
