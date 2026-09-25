/* Bretonnian Chapel Guard (grade 1c). Source: Fan made from the web (grade 1c). See data/README.md for the fields. */
registerWarband("chapelguard", {
  "name": "Bretonnian Chapel Guard",
  "source": "Fan made from the web (grade 1c)",
  "tags": ["human","good","chapelguard","bretonnians"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Barding":30,"Holy relic":25},
  "gear": ["Mace","Spear","Sword","Broadsword","Double-handed weapon","Morning star","Flail","Lance","Light armour","Heavy armour","Shield","Kite Shield","Helmet","Barding","Warhorse","Lucky Charm"],
  "grade": "1c",
  "units": [
    {"id":"knight","n":"Questing Knight","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":75,"max":1,"req":true,"startXp":20,"gear":["Mace","Spear","Sword","Broadsword","Double-handed weapon","Morning star","Flail","Light armour","Heavy armour","Shield","Kite Shield","Helmet","Barding","Warhorse","Lucky Charm"],"skills":["combat","academic","strength","speed","knightly-special"],"note":"Leader. Never uses missile weapons, poison or spells. Lord's Boon: one Warhorse, light or heavy armour at half price (apply by hand). Virtue of Purity: never breaks from combat."},
    {"id":"damsel","n":"Damsel","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":4,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":12,"gear":["Hammer","Axe","Shortsword","Spear","Horse"],"skills":["academic","speed"],"spells":["ladys-prayers"],"note":"Starts with one Lady's Prayer."},
    {"id":"errant","n":"Knight Errant","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":3,"startXp":8,"gear":["Mace","Spear","Sword","Broadsword","Double-handed weapon","Morning star","Flail","Lance","Light armour","Heavy armour","Shield","Kite Shield","Barding","Warhorse","Lucky Charm"],"skills":["combat","strength","speed","knightly-special"],"note":"Vain: never wears a helmet. Impetuous: must charge a standing enemy in range. Lord's Boon applies."},
    {"id":"squire","n":"Squire","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5,"gear":["Mace","Axe","Shortsword","Sword","Spear","Halberd","Double-handed weapon","Hammer","Bow","Long bow","Light armour","Shield","Helmet","Buckler","Horse"],"note":"May be promoted to a Knight Errant."},
    {"id":"pilgrim","n":"Battle Pilgrim","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":30,"max":5,"gear":["Mace","Axe","Shortsword","Sword","Spear","Halberd","Double-handed weapon","Light armour","Shield","Helmet","Buckler","Holy relic"],"note":"Hates all enemies; stubborn (re-rolls failed Leadership tests). A Holy Relic makes a pilgrim frenzied. Can never become a hero."},
    {"id":"bowman","n":"Bowman","race":"human","stats":{"M":4,"WS":2,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":4},"kind":"henchman","c":15,"max":7,"gear":["Hammer","Axe","Shortsword","Spear","Bow","Long bow","Light armour","Helmet"],"note":"Low caste: can never become a hero."}
  ]
});
