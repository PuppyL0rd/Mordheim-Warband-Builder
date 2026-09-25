/* Order of the Mare (grade 2a). Source: Fredrik Edman (grade 2a). See data/README.md for the fields. */
registerWarband("orderofmare", {
  "name": "Order of the Mare",
  "source": "Fredrik Edman (grade 2a)",
  "tags": ["human","good","mercenary","orderofmare"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "costs": {"Barding":30},
  "gear": ["Mace","Axe","Sword","Double-handed weapon","Flail","Morning star","Shield","Helmet","Light armour","Heavy armour","Barding","Warhorse","Lance","Spear","Halberd","Bow","Long bow","Horse"],
  "grade": "2a",
  "units": [
    {"id":"paragon","n":"Paragon","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":60,"max":1,"req":true,"startXp":20,"costs":{"Warhorse":40},"gear":["Mace","Axe","Sword","Double-handed weapon","Flail","Morning star","Shield","Helmet","Light armour","Heavy armour","Barding","Warhorse"],"skills":["combat","academic","strength","speed"],"note":"Leader. Knight's virtue: never breaks from combat or tests all alone. May not use a Lance. Warhorse at half price at recruitment."},
    {"id":"dame","n":"Dame of the Mare","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":8},"kind":"hero","c":55,"max":1,"req":true,"startXp":8,"sv":5,"gear":["Mace","Sword","Morning star"],"skills":["combat","academic","strength","speed"],"spells":["blessings-of-mare"],"note":"Wears ancient armour that never comes off: a 5+ unmodifiable save (not against magic) that does not stop casting. Starts with one Blessing of the Mare."},
    {"id":"gallant","n":"Gallant","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":35,"max":1,"startXp":8,"costs":{"Warhorse":40},"gear":["Mace","Axe","Sword","Double-handed weapon","Flail","Morning star","Shield","Helmet","Light armour","Heavy armour","Barding","Warhorse","Lance"],"skills":["combat","strength","speed"],"note":"Knight's virtue. Warhorse at half price at recruitment."},
    {"id":"esquiress","n":"Esquiress","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"hero","c":15,"max":2,"gear":["Mace","Axe","Sword","Spear","Bow","Long bow","Shield","Helmet","Light armour","Horse"],"skills":["combat","shooting","speed"]},
    {"id":"pilgrim","n":"Pilgrim","race":"human","stats":{"M":4,"WS":2,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":25,"gear":["Mace","Axe","Sword","Spear","Halberd","Double-handed weapon","Flail","Morning star","Bow","Shield","Helmet","Light armour"],"note":"Hates all enemies. A peasant who can never become a hero."},
    {"id":"bowman","n":"Bowman","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":6},"kind":"henchman","c":20,"max":7,"gear":["Mace","Axe","Sword","Bow","Long bow","Shield","Helmet","Light armour"]},
    {"id":"redeemed","n":"Redeemed Knight","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"gear":["Mace","Axe","Sword","Double-handed weapon","Flail","Morning star","Shield","Helmet","Light armour","Heavy armour","Barding","Warhorse","Lance"],"note":"Knight's virtue."},
    {"id":"filly","n":"Companion Filly","race":"animal","stats":{"M":8,"WS":4,"BS":0,"S":3,"T":3,"W":1,"I":4,"A":2,"Ld":5},"kind":"henchman","c":45,"max":1,"sv":5,"gear":[],"noXp":true,"note":"An animal with a 5+ unmodifiable save (not against magic). Gains no experience."}
  ]
});
