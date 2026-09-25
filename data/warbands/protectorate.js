/* Protectorate of Sigmar (grade 2a). Source: Legends of Darkness 3 (grade 2a). See data/README.md for the fields. */
registerWarband("protectorate", {
  "name": "Protectorate of Sigmar",
  "source": "Legends of Darkness 3 (grade 2a)",
  "tags": ["human","good","witchhunter","protectorate"],
  "gold": 500,
  "minModels": 3,
  "maxModels": 15,
  "maxHeroes": 6,
  "gear": ["Hammer","Axe","Sword","Spear","Double-handed weapon","Sigmarite warhammer","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet","Shield of Sigmar","Holy Water","Blessed Bolts","Holy relic"],
  "grade": "2a",
  "units": [
    {"id":"priest","n":"Warrior Priest","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":8},"kind":"hero","c":80,"max":1,"req":true,"startXp":20,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Sigmarite warhammer","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet","Shield of Sigmar","Holy Water","Blessed Bolts","Holy relic"],"skills":["combat","academic","strength","speed","protectorate-special"],"spells":["prayers-sigmar"],"note":"Leader. Starts with one random Prayer of Sigmar. If he falls the Acolyte with most experience takes over. Hires swords as Witch Hunters do."},
    {"id":"templar","n":"Templar","race":"human","stats":{"M":4,"WS":4,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":2,"startXp":12,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Sigmarite warhammer","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet","Shield of Sigmar","Holy Water","Blessed Bolts","Holy relic"],"skills":["combat","strength","speed","protectorate-special"],"note":"Zealous: hates all chaotic warbands."},
    {"id":"acolyte","n":"Acolyte","race":"human","stats":{"M":4,"WS":3,"BS":2,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":25,"max":2,"startXp":2,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Sigmarite warhammer","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet","Shield of Sigmar","Holy Water","Blessed Bolts","Holy relic"],"skills":["combat","academic","strength","speed","protectorate-special"]},
    {"id":"huntsman","n":"Huntsman","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"hero","c":45,"max":1,"startXp":8,"gear":["Sword","Long bow","Blessed Bolts"],"skills":["combat","shooting","protectorate-special"],"note":"Takes the place of one Templar. Beastmaster: animals use his Leadership."},
    {"id":"archer","n":"Archer","race":"human","stats":{"M":4,"WS":3,"BS":4,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":35,"max":5,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet"]},
    {"id":"crusader","n":"Crusader","race":"human","stats":{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7},"kind":"henchman","c":25,"max":5,"gear":["Hammer","Axe","Sword","Spear","Double-handed weapon","Crossbow","Pistol","Long bow","Light armour","Heavy armour","Shield","Buckler","Helmet"]},
    {"id":"hound","n":"Hound","race":"animal","stats":{"M":6,"WS":4,"BS":0,"S":4,"T":3,"W":1,"I":4,"A":1,"Ld":6},"kind":"henchman","c":15,"max":5,"gear":[],"noXp":true,"note":"Animal. Devoted: may re-roll failed Leadership tests near the Warrior Priest."}
  ]
});
