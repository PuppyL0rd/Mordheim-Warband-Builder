/* SPELLS: spell, prayer and ritual lists. A unit lists the keys it may use in spells:[...].
   Each entry is {n:name, d:description}. Put the difficulty in the description. */
const SPELLS = {
  "lesser-magic": {"n":"Lesser Magic","list":[
    {"n":"Fires of U'Zhul","d":"Difficulty 7. Fireball, range 18 inches, one Strength 4 hit."},
    {"n":"Flight of Zimmeran","d":"Difficulty 7. The wizard moves up to 12 inches, even into combat (counts as charging)."},
    {"n":"Dread of Aramar","d":"Difficulty 7. One model within 12 inches must pass Leadership or flee."},
    {"n":"Silver Arrows of Arha","d":"Difficulty 7. Summons D6+2 arrows, range 24 inches, S3 each. Not usable in combat."},
    {"n":"Luck of Shemtek","d":"Difficulty 6. Re-roll all failed dice until his next turn."},
    {"n":"Sword of Rezhebel","d":"Difficulty 8. Flaming sword: +1 Attack, +2 Strength, +2 WS. Leadership test each turn to keep it."}
  ]},
  "tchar-rituals": {"n":"Tchar Rituals","list":[
    {"n":"Tchar's Blessing","d":"Automatic, once, before the game. He casts nothing that battle and gains D3 experience if not taken out of action."},
    {"n":"Dispel Magic","d":"Difficulty 7. Ends all currently active spells."},
    {"n":"Foresight","d":"Difficulty 10, once, before the game. A random hero of a chosen warband misses the next game (spellcasters immune)."},
    {"n":"Wrath of the Great Eagle","d":"Difficulty 9. An enemy within 12 inches is hit at Strength equal to the experience difference (max 10)."},
    {"n":"Tchar's Reward","d":"Difficulty 8. +1 to one stat per 10 experience until the end of his next shooting phase."},
    {"n":"Slave to Chaos","d":"Difficulty 9. 12 inch S2 hit; a death becomes a Horror of Tzeentch under his control."}
  ]},
  "onogal-rituals": {"n":"Onogal Rituals","list":[
    {"n":"Touch of Onogal","d":"Difficulty 10. A close combat opponent taken out of action rolls injuries at once; a death becomes a Plague Bearer under his control."},
    {"n":"Buboes","d":"Difficulty 7. A model within 8 inches passes Toughness or loses a wound, no save."},
    {"n":"Stench of Nurgle","d":"Difficulty 8. Enemies within 6 inches pass Toughness or lose an Attack."},
    {"n":"Pestilence","d":"Difficulty 10. Enemies within 12 inches take a S3 hit, no save."},
    {"n":"Scabrous Hide","d":"Difficulty 8. A 2+ armour save until his next shooting phase."},
    {"n":"Nurgle's Rot","d":"Difficulty 9. Enemies in contact test Toughness or contract Nurgle's Rot."}
  ]},
  "shornaal-rituals": {"n":"Shornaal Rituals","list":[
    {"n":"Delicious Suffering","d":"Difficulty 8. Everyone within 3 inches except the Seer passes Leadership or is knocked down."},
    {"n":"Dance of the Serpent","d":"Difficulty 8. Enemies not immune to psychology are -1 to hit him in close combat until his next shooting phase."},
    {"n":"Endless Torment","d":"Difficulty 9. An enemy within 8 inches rolls injuries at -1 after each Recovery phase; the Seer can do nothing else."},
    {"n":"Mystify","d":"Difficulty 8. An enemy within 8 inches drops to Initiative 1 and always strikes last until it passes Leadership."},
    {"n":"A Thousand Voices","d":"Difficulty 8. An enemy within 12 inches loses D3+1 Leadership until it passes a Leadership test."},
    {"n":"Shornaal's Temptation","d":"Difficulty 7. An enemy within 8 inches that fails Leadership comes under the Seer's control."}
  ]},
  "chaos-rituals": {"n":"Chaos Rituals","list":[
    {"n":"Vision of Torment","d":"Difficulty 10. The closest enemy within 6 inches is stunned, or knocked down if it cannot be stunned."},
    {"n":"Eye of God","d":"Difficulty 7, once per battle. A model within 6 inches rolls: 1 out of action, 2-5 +1 to a characteristic, 6 +1 to all."},
    {"n":"Dark Blood","d":"Difficulty 8. 8 inch range: D3 Strength 5 hits; the caster rolls on the injury table (out of action counts as stunned)."},
    {"n":"Lure of Chaos","d":"Difficulty 9. Contest Leadership against the closest enemy within 12 inches to take control of it."},
    {"n":"Wings of Darkness","d":"Difficulty 7. The caster moves up to 12 inches and may charge."},
    {"n":"Word of Pain","d":"Difficulty 7. Every model within 3 inches, friend or foe, takes a S3 hit with no save."}
  ]},
  "dark-arts-strigos": {"n":"Dark Arts (Strigoi)","list":[
    {"n":"Fires of Strigos","d":"Difficulty 7. A Strength 4 fireball at 18 inches."},
    {"n":"Winged Flight","d":"Difficulty 9. Flies up to 18 inches and may charge."},
    {"n":"Lifestealer","d":"Difficulty 10. Drains a wound from a model within 6 inches."}
  ]},
  "woodland-incantations": {"n":"Woodland Incantations","list":[
    {"n":"Song of Thorns","d":"Difficulty 8. 2D6 Strength 1 hits at 8 inches."},
    {"n":"Murmuring of the Wind","d":"Difficulty 7. The caster moves up to 12 inches."},
    {"n":"The Rain Song","d":"Difficulty 9. Non-Wood Elves within 6 inches are -1 to hit and -1 Initiative."},
    {"n":"Lyrics of Feral Infatuation","d":"Difficulty 8. Animals must pass Leadership to attack."},
    {"n":"Song of the Sun","d":"Difficulty 6. The target is -1 Movement and may take a S4 hit."},
    {"n":"Eagle's Cry","d":"Difficulty 8. Wood Elves within 6 inches gain +1 to hit."}
  ]},
  "elemental-water": {"n":"Elemental Lore of Water","list":[
    {"n":"Geyser","d":"Difficulty 9. S4 hit at 10 inches; the target is blown 2 inches."},
    {"n":"Portent of Amul","d":"Difficulty 6. The warband re-rolls 1s in close combat."},
    {"n":"Premonition","d":"Difficulty 8. +1 Leadership and re-roll rout tests while he stands."},
    {"n":"Frostbolts","d":"Difficulty 8. 16 inch missile: D3 S3 hits."},
    {"n":"Blindness of the Depths","d":"Difficulty 7. The target is blinded unless it passes Initiative."},
    {"n":"Lifespring","d":"Difficulty 8. A nearby ally regains a wound and recovers."}
  ]},
  "elemental-fire": {"n":"Elemental Lore of Fire","list":[
    {"n":"Jorun's Blast of Brimstone","d":"Difficulty 9. A S3 blast on a small area."},
    {"n":"Tazoul's Burning Skull","d":"Difficulty 9. S5 hit at 8 inches that can jump to others."},
    {"n":"Hades Heat","d":"Difficulty 6. Models in a 3 inch area are -1 WS and -1 S."},
    {"n":"Shield of Flame","d":"Difficulty 8. 4+ save in combat, 5+ against missiles."},
    {"n":"U'Zhuls Inferno","d":"Difficulty 9. A 12 inch line of S2 hits; the target takes S4."},
    {"n":"Flesh of the Forge","d":"Difficulty 6. Enemies are -1 to hit him in close combat."}
  ]},
  "elemental-earth": {"n":"Elemental Lore of Earth","list":[
    {"n":"Flesh of Clay","d":"Difficulty 8. Double Toughness, half Movement and Initiative."},
    {"n":"Healing Might","d":"Difficulty 9. Nearby allies stand up; adjacent allies regain wounds."},
    {"n":"Curse of Thorns","d":"Difficulty 6. The target is immobilised until it passes a Toughness test."},
    {"n":"Jozun's Decay","d":"Difficulty 9. The target loses Toughness each turn it fails Leadership."},
    {"n":"The Hunter's Spear","d":"Difficulty 8. +2 Strength and an extra attack."},
    {"n":"Shifting Sands","d":"Difficulty 8. The target is knocked down unless it passes Initiative."}
  ]},
  "elemental-air": {"n":"Elemental Lore of Air","list":[
    {"n":"Winter's Gale","d":"Difficulty 10. A 5 inch blast of S4 hits."},
    {"n":"Crow's Feast","d":"Difficulty 9. 24 inch missile: D6 S3 hits."},
    {"n":"Dust Dervish","d":"Difficulty 9. D3 elementals each deal D6 S1 hits."},
    {"n":"Howler Wind","d":"Difficulty 8. Missile fire at him and allies is -2 BS."},
    {"n":"Celestial Shield","d":"Difficulty 8. 4+ save against missiles, 5+ against spells."},
    {"n":"Shade Mount","d":"Difficulty 8. Flies up to 12 inches."}
  ]},
  "snotling-waaagh": {"n":"Snotling Waaagh! Magic","list":[
    {"n":"Morks' Blessing","d":"Difficulty 6. The blessed hero wounds his killer on a 4+."},
    {"n":"'We Can Fly!'","d":"Difficulty 7. The Shaman and D6 nearby models leap 12 inches toward the enemy."},
    {"n":"Foot of Gork!","d":"Difficulty 9. Crushes a random enemy and everything within 3 inches."},
    {"n":"Pebbles of Doom","d":"Difficulty 6. A hero gains D6 magical pebbles."},
    {"n":"Pointy Stick of Death","d":"Difficulty 7. +2 WS, +1 Strength and strikes first."},
    {"n":"Blessing of the Shrimp","d":"Difficulty 6. +1 WS, T and Ld and shares his Leadership."}
  ]},
  "blessings-of-mare": {"n":"Blessings of the Mare","list":[
    {"n":"Unnerving Gaze","d":"Difficulty 7. Attacks against the Dame are at -1; enemies in contact strike last."},
    {"n":"Phantom Hoof","d":"Difficulty 9. A Strength 5 hit with concussion within 6 inches."},
    {"n":"Dame's Inspiration","d":"Difficulty 7. +1 to hit and +1 Strength; retest each turn."},
    {"n":"Thirst for Valour","d":"Difficulty 8. An ally within 12 inches becomes frenzied."},
    {"n":"Aura of Dauntlessness","d":"Difficulty 10. Special saves improve by 1; the rest of the warband gets a 6+ save."},
    {"n":"The Dame's Charger","d":"Difficulty 8. She rides a spectral steed that causes fear."}
  ]},
  "scrolls-of-nagash": {"n":"Dreaded Scrolls of Nagash","list":[
    {"n":"Soulcage","d":"Difficulty 9. Wounds on a model within 6 inches are transferred to another model."},
    {"n":"Black Breath","d":"Difficulty 8. Two S4 hits on the first model in an 8 inch path and S3 hits nearby."},
    {"n":"Servants Eternal","d":"Automatic, once, before the game: D3 Zombies join for the battle."},
    {"n":"Fear of the Ages","d":"Difficulty 9. Enemies within 4 inches take a S3 hit with no save."},
    {"n":"Wall of Despair","d":"Difficulty 6. The caster is immune to spells and prayers."},
    {"n":"Claws of Nagash","d":"Difficulty 10. +1 WS and frenzy."}
  ]},
  "mazzalupo-commands": {"n":"Mazzalupo Commands","list":[
    {"n":"Raise our insignia!","d":"Difficulty 6. The Squire raises the colours; the warband re-rolls Leadership tests."},
    {"n":"Move, ye miscreant!","d":"Difficulty 6. One warrior within 6 inches moves again."},
    {"n":"Follow me, mine pugnacious ones!","d":"Difficulty 8. Allies within 4 inches get +1 to hit."},
    {"n":"Be on guard, my brave ones!","d":"Difficulty 7. A warrior in combat may move away."},
    {"n":"Pay them no heed!","d":"Difficulty 6. A model may target any enemy."},
    {"n":"Art thou ready to die fighting?","d":"Difficulty 8. Allies within 4 inches go out of action only on a 6."}
  ]},
  "necromancy-restless": {"n":"Necromancy (Restless Dead)","list":[
    {"n":"Spell of Awakening","d":"Automatic. Raises a slain enemy hero as a Zombie henchman group."},
    {"n":"Lifestealer","d":"Difficulty 10. Wounds a model within 6 inches with no save; the caster gains a wound (a Liche only restores lost wounds)."},
    {"n":"Reanimation","d":"Difficulty 5. Returns a Zombie taken out of action, or restores a wound to a Grave Guard or Wight."},
    {"n":"Spell of Doom","d":"Difficulty 9. An enemy within 12 inches rolls under its Strength or rolls on the injury chart."},
    {"n":"Call of Vanhel","d":"Difficulty 6. A Zombie, Skeleton, Wight or Grave Guard within 6 inches moves again and may charge."},
    {"n":"Deathly Visage","d":"Difficulty 6. Necromancers only: causes fear and is immune to it."},
    {"n":"Living Horror","d":"Difficulty 8. Liche only: D6+3 against an enemy's Leadership wounds it with no save and may freeze it."}
  ]},
  "chaos-dwarf-magic": {"n":"Chaos Dwarf Magic","list":[
    {"n":"Spectre of Hashut","d":"Difficulty 9. The closest enemy within 10 inches is automatically stunned."},
    {"n":"Stone Statue","d":"Difficulty 9. An enemy within 12 inches can do nothing for two turns and is hit automatically."},
    {"n":"Fireball","d":"Difficulty 7. A 16 inch Strength 4 automatic hit."},
    {"n":"Vanish","d":"Difficulty 7. The sorcerer moves up to 6 inches and may enter or leave combat freely."},
    {"n":"Eruption","d":"Difficulty 8. Every model within 4 inches takes a S4 hit; the sorcerer loses 1 Toughness and cannot cast more this turn."},
    {"n":"Eye of Hashut","d":"Difficulty 6, once per battle. A friend within 12 inches rolls: 1 out of action, 2-5 +1 to a characteristic, 6 +1 to all (Hobgoblins -1)."}
  ]},
  "rituals-hashut": {"n":"Rituals of Hashut","list":[
    {"n":"Sacrificial Ritual","d":"Difficulty 10. Needs an Engine of Chaos: sacrifices a captive (more lower the difficulty) and earns the Sorcerer D3 experience."},
    {"n":"Spirit of Hashut","d":"Difficulty 9. An 18 inch line: every model crossed takes a S4 hit."},
    {"n":"Bellow of Doom","d":"Difficulty 8. Models in contact test Leadership or break from combat and run."},
    {"n":"Fumes of Azgorh","d":"Difficulty 7. 8 inch range: models in the path are hit on 4+ by S4, no armour save."},
    {"n":"Flickering Hide","d":"Difficulty 10. Negates a wound on a 4+ and burns attackers with S3 hits."},
    {"n":"Lava Flow","d":"Difficulty 7. The Sorcerer moves 12 inches, even into combat."},
    {"n":"Earthquake","d":"Difficulty 9. Models within 3 inches pass Initiative or take D3 Strength 4 hits."}
  ]},
  "ladys-prayers": {"n":"Lady's Prayers","list":[
    {"n":"Lady's Favors","d":"Automatic. All your heroes count as having Lucky Charms (ignore the first hit on 4+, or re-roll a failed charm save)."},
    {"n":"Blessed Protection","d":"Difficulty 8. The Damsel and Bretonnians within 6 inches get an unmodified 4+ ward save against spells and prayers."},
    {"n":"Swiftstride","d":"Difficulty 7. A hero or henchman within 12 inches that charged gets +1 to hit and an extra D6 inch move."},
    {"n":"Lady's Scorn","d":"Difficulty 5. Anyone shooting at the Damsel must first pass Leadership; lasts to the end of the game."},
    {"n":"Elixir of Life","d":"Difficulty 7. One model within 4 inches is restored to full wounds; nearby stunned or knocked-down allies stand up."},
    {"n":"Guiding Vision","d":"Difficulty 6. A friendly warrior within 8 inches re-rolls one die and adds or subtracts 1."}
  ]},
  "mortuary-scrolls": {"n":"Mortuary Cult Scrolls","list":[
    {"n":"Menkare's Scroll of Urgency","d":"Difficulty 6. A Skeleton within 6 inches moves again and may charge."},
    {"n":"Horrebe's Curse of the Mummy","d":"Difficulty 8. An enemy touching a Mummy within 18 inches is -1 to hit, to wound and on saves."},
    {"n":"Tawosret's Scroll of Tomb Dust","d":"Difficulty 7. A living model within 12 inches is knocked down."},
    {"n":"Neferre's Scroll of Quaking Horror","d":"Difficulty 7. A model within 12 inches passes Leadership or flees 2D6 inches."},
    {"n":"Merneptah's Scroll of the Scarab Song","d":"Difficulty 7. 2D6 Strength 1 hits on a model within 8 inches, which is then out of the fight for a turn."},
    {"n":"Djedre's Summonation of the Vengeful Dead","d":"Difficulty 5. Returns a Skeleton taken out of action within 6 inches."}
  ]},
  "shadow-magic": {"n":"Shadow Magic","list":[
    {"n":"Pool of Shadow","d":"Difficulty 7. The mage and allies within 6 inches may hide and count as in cover until his next turn."},
    {"n":"The Living Shadows","d":"Difficulty 7. An enemy within 12 inches and within 2 inches of a wall takes a S4 hit, no armour save."},
    {"n":"Wings of Night","d":"Difficulty 6. From within 2 inches of a wall, moves up to 12 inches to another wall and may charge."},
    {"n":"Cloak of Darkness","d":"Difficulty 7. He cannot be attacked until he attacks an enemy."},
    {"n":"Shadowbind","d":"Difficulty 9. An enemy within 24 inches and 2 inches of a wall cannot move unless it passes a Strength test."},
    {"n":"Shield of Shadow","d":"Difficulty 7. A 5+ armour save that ignores Strength modifiers for himself or an ally within 12 inches."}
  ]},
  "lizardmen-magic": {"n":"Lizardmen Magic","list":[
    {"n":"Chotec's Wrath","d":"Difficulty 8. A lightning bolt hits the closest enemy within 10 inches at Strength 5 (+1 Strength and +1 injury against armoured targets)."},
    {"n":"Sotec's Blessing","d":"Difficulty 7. A random blessing on one model within 6 inches: +1 BS or to hit, +1 Toughness, or +1 Movement and Initiative."},
    {"n":"Huanchi's Stealth","d":"Difficulty 7. Skinks within 6 inches in cover may hide even after running or shooting."},
    {"n":"The Old Ones' Protection","d":"Difficulty 6. The Priest and Lizardmen within 4 inches get a 4+ save against spells."},
    {"n":"Tinci's Rage","d":"Difficulty 8. One Lizardman gains frenzy and +1 Strength; needs a Leadership test each turn to keep."},
    {"n":"Itzl's Speed","d":"Difficulty 7. A Lizardman within 6 inches sprints an extra 4 inches (not a charge)."}
  ]},
  "amazon-rituals": {"n":"Amazon Rituals","list":[
    {"n":"Singing Wind","d":"Difficulty 8. A model within 10 inches cannot move, shoot or cast until the Amazon turn and goes last in combat."},
    {"n":"Serpent's Strength","d":"Difficulty 9. The Priestess and models within 8 inches get +1 Strength until the end of their next turn."},
    {"n":"Wendala's Maelstrom","d":"Difficulty 7. Enemy missile fire is -1 to hit within 18 inches until the Amazon turn."},
    {"n":"Shield of Thorns","d":"Difficulty 7. The Priestess is immune to ranged and magical attacks; first-round strikes are negated."},
    {"n":"The Living Jungle","d":"Difficulty 6. A model within 12 inches takes D6 Strength 2 hits, no armour or dodge save."},
    {"n":"Siren's Dreams","d":"Difficulty 7. Enemies within 12 inches take -1 on Leadership tests (Lizardmen and Undead immune)."}
  ]},
  "dark-elf-magic": {"n":"Dark Elf Magic","list":[
    {"n":"Doombolt","d":"Difficulty 8. Strength 5 bolt, 18 inch range, that leaps to nearby models."},
    {"n":"Word of Pain","d":"Difficulty 8. The victim re-rolls all successful attacks and cannot charge without a Leadership test."},
    {"n":"Soul Stealer","d":"Difficulty 9. A close combat hit wounds with no save and heals the caster."},
    {"n":"Black Blade of Khaine","d":"Difficulty 8. A nearby weapon gains +2 Strength and ignores armour."},
    {"n":"Deathspasm","d":"Difficulty 9. The closest enemy rolls on the injury chart; the caster is knocked down."},
    {"n":"Witch Flight","d":"Difficulty 7. The caster flies up to 12 inches."}
  ]},
  "forest-goblin-magic": {"n":"Forest Goblin Magic","list":[
    {"n":"Wind of Gork","d":"Difficulty 6. 12 inch range: the first model rolls under Toughness or takes a S2 hit and is knocked down."},
    {"n":"Gaze of Mork","d":"Difficulty 8. 12 inch range: D3 Strength 3 hits on the first model in the path."},
    {"n":"'Eadbanger","d":"Difficulty 8. 6 inch range: bolts equal to his Attacks at Strength equal to his Toughness; a 1 afterwards puts him out of action."},
    {"n":"Leap of Waaagh!","d":"Difficulty 7. He or a Goblin within 3 inches moves up to 12 inches and may charge."},
    {"n":"Idol of Gork","d":"Difficulty 8. +1 WS, +1 S and +1 A until he takes a wound."},
    {"n":"'Ere we go","d":"Difficulty 8. Friends within 6 inches treat stunned as knocked down until he takes a wound."}
  ]},
  "dwarf-runes": {"n":"Dwarf Runes","list":[
    {"n":"Rune of Stone","d":"Difficulty 8. +1 to an armour save."},
    {"n":"Rune of Sharpness","d":"Difficulty 6. A weapon gets a -1 armour save modifier."},
    {"n":"Rune of Speed","d":"Difficulty 7. Initiative doubled on the weapon."},
    {"n":"Rune of Warding","d":"Difficulty 8. 4+ save against spells targeting the wearer."},
    {"n":"Rune of Accuracy","d":"Difficulty 9. +1 to hit with the weapon."},
    {"n":"Rune of Striding","d":"Difficulty 8. +1 Movement."}
  ]},
  "prayers-taal": {"n":"Prayers of Taal","list":[
    {"n":"Stag's Leap","d":"Difficulty 7. The Priest moves up to 9 inches and charges with +1 Strength."},
    {"n":"Blessed Ale","d":"Difficulty 5. Restores a model within 2 inches to full wounds; nearby living enemies lose an Attack."},
    {"n":"Bear's Paw","d":"Difficulty 7. +2 Strength for himself or an ally within 6 inches."},
    {"n":"Earthshudder","d":"Difficulty 9. Collapses a building within 4 inches; models touching it take a S3 hit."},
    {"n":"Tanglefoot","d":"Difficulty 8. Everyone within 12 inches moves at half speed (Jaegers and Zealots excepted)."},
    {"n":"Summon Squirrels","d":"Difficulty 7. 2D6 Strength 1 hits on an enemy within 12 inches, no armour save."}
  ]},
  "nurgle-rituals": {"n":"Nurgle Rituals","list":[
    {"n":"Daemonic Vigour","d":"Difficulty 8. Plague Bearers and Nurglings within 8 inches improve their save to 4+."},
    {"n":"Buboes","d":"Difficulty 7. A model within 8 inches passes Toughness or loses a wound, no save."},
    {"n":"Stench of Nurgle","d":"Difficulty 8. Enemies within 6 inches pass Toughness or lose an Attack."},
    {"n":"Pestilence","d":"Difficulty 10. Enemies within 12 inches take a S3 hit, no save."},
    {"n":"Scabrous Hide","d":"Difficulty 8. A 2+ armour save until his next shooting phase."},
    {"n":"Nurgle's Rot","d":"Difficulty 9. Enemies in contact test Toughness or contract Nurgle's Rot."}
  ]},
  "waaagh": {"n":"Waaagh! Magic","list":[
    {"n":"Led'z go","d":"Difficulty 9. Orcs and Goblins within 4 inches strike first until the Shaman is hurt."},
    {"n":"Oi! Gerroff!","d":"Difficulty 7. Pushes an enemy within 8 inches D6 inches away; collisions cause S3 hits."},
    {"n":"Zzap!","d":"Difficulty 9. 12 inch bolt: D3 Strength 4 hits with no armour save."},
    {"n":"Fooled Ya!","d":"Difficulty 6. No enemy may charge the Shaman next turn; he may move 4 inches out of combat."},
    {"n":"Clubba","d":"Difficulty 7. A green club: +2 Strength and +1 Attack until he is wounded."},
    {"n":"Fire of Gork","d":"Difficulty 8. Two 12 inch bolts of D3 Strength 3 hits."}
  ]},
  "horned-rat": {"n":"Magic of the Horned Rat","list":[
    {"n":"Warpfire","d":"Difficulty 8. 8 inch range: D3 Strength 4 hits and a Strength 3 hit on models within 2 inches."},
    {"n":"Children of the Horned Rat","d":"Automatic, once per battle. Summons D3 Giant Rats for the battle."},
    {"n":"Gnawdoom","d":"Difficulty 7. 2D6 Strength 1 hits on a model within 8 inches."},
    {"n":"Black Fury","d":"Difficulty 8. Charges any enemy within 12 inches with 2 extra Attacks and +1 Strength."},
    {"n":"Eye of the Warp","d":"Difficulty 8. Models in contact test Leadership or take a S3 hit and flee 2D6 inches."},
    {"n":"Sorcerer's Curse","d":"Difficulty 6. The target re-rolls successful saves and hits for a turn."}
  ]},
  "prayers-sigmar": {"n":"Prayers of Sigmar","list":[
    {"n":"The Hammer of Sigmar","d":"Difficulty 7. +2 Strength in combat and hits cause double wounds."},
    {"n":"Hearts of Steel","d":"Difficulty 8. Allies within 8 inches ignore fear and all alone; warband gets +1 to rout tests."},
    {"n":"Soulfire","d":"Difficulty 9. Enemies within 4 inches take a S3 hit with no save (S5 for Undead and Possessed)."},
    {"n":"Shield of Faith","d":"Difficulty 6. The priest is immune to spells until the shield fails on a 1-2."},
    {"n":"Healing Hand","d":"Difficulty 5. Restores one model within 2 inches to full wounds and revives nearby friends."},
    {"n":"Armour of Righteousness","d":"Difficulty 9. 2+ save and causes fear until his next shooting phase."}
  ]},
  "prayers-ulric": {"n":"Prayers of Ulric","list":[
    {"n":"Snow Squall","d":"Difficulty 6. Enemies in combat with the priest are at -1 to hit."},
    {"n":"Hammerschlag","d":"Difficulty 10. One model within 6 inches takes a S4 hit with concussion."},
    {"n":"Bloodlust","d":"Difficulty 7. +2 Strength and criticals on 5-6; must be re-tested each turn."},
    {"n":"Wolf's Hunger","d":"Difficulty 7. One warband member is thrown into frenzy."},
    {"n":"Ulric's Howl","d":"Difficulty 10. Warband immune to fear and all alone; +1 to rout tests."},
    {"n":"Call of Ulric","d":"Difficulty 10. The priest turns into a wolf (M6 WS4 S4 T4 A2)."}
  ]},
  "charms-hexes": {"n":"Charms and Hexes","list":[
    {"n":"Scry","d":"Difficulty 6. One friendly hero or henchman may re-roll D3 dice and adjust results by 1."},
    {"n":"Curse","d":"Difficulty 6. An enemy within 12 inches must re-roll successful dice for two turns."},
    {"n":"Dust of the Blind","d":"Difficulty 9. An enemy within 16 inches is blinded (cannot shoot, charge or run)."},
    {"n":"Age of Stone","d":"Difficulty 8. An enemy within 12 inches has all characteristics reduced by 1 for two turns."},
    {"n":"Warrior's Bane","d":"Difficulty 7. An enemy within 18 inches cannot use weapons for two turns."},
    {"n":"Cure","d":"Difficulty 6. Friends within 6 inches heal a wound and stand up."}
  ]},
  "djedhi": {"n":"Spells of the Djed'hi","list":[
    {"n":"Divination of Shirath","d":"Difficulty 6. Re-roll failed dice until his next turn."},
    {"n":"Shimmering Shield","d":"Difficulty 7. An extra unmodified 5+ save until his next turn."},
    {"n":"Statue of Light","d":"Difficulty 7. Holds one visible enemy in place while the mage stays still; -2 WS in combat."},
    {"n":"Fleeting Shadows","d":"Difficulty 8. Ignores the first hit and shifts 2 inches."},
    {"n":"Hunter's Fury","d":"Difficulty 9. D3+1 arrows, range 36 inches, S3 each."},
    {"n":"Silent Guardian","d":"Difficulty 9. An invisible guardian (WS5, S3) defends him in combat."}
  ]},
  "norse-runes": {"n":"Norse Runes","list":[
    {"n":"Howl of the North","d":"Difficulty 9. Immune to missile fire until the winds die on a 1-2."},
    {"n":"Angvar's Fury","d":"Difficulty 7. Warriors within 8 inches get +1 to hit in combat."},
    {"n":"Elvek's Cold Spear","d":"Difficulty 7. Icicle, range 18 inches, one S4 hit."},
    {"n":"Gift of the Fates","d":"Difficulty 7. Adjust one die roll by 1."},
    {"n":"Kiss of Frost","d":"Difficulty 6. One model within 12 inches must pass Initiative or be knocked down."},
    {"n":"Bear's Might","d":"Difficulty 9. +1 Attack, +2 Strength, +2 Toughness, -2 Initiative. Once per game."}
  ]},
  "funerary-rites": {"n":"Funerary Rites","list":[
    {"n":"Morr's Protection","d":"Difficulty 6. Negates direct magical attacks from Necromancers, Magisters and Daemons."},
    {"n":"Death Holds No Fear","d":"Automatic. Fearless for the rest of the game."},
    {"n":"Sanctity of the Fallen","d":"Difficulty 7. A fallen model within 6 inches cannot be raised by a Necromancer."},
    {"n":"Hand of Morr","d":"Difficulty 9. Destroys an Undead model in base contact."},
    {"n":"Do You Know Who I Am?","d":"Difficulty 7. Stuns the closest Undead (or servant) within 6 inches."},
    {"n":"I Am Death!","d":"Difficulty 8. 6+ armour save and better WS."}
  ]},
  "elemental-magic": {"n":"Arabian Elemental Magic","list":[
    {"n":"Riding the Wind","d":"Difficulty 6. Moves the caster 12+D6 inches, ignoring terrain."},
    {"n":"Skin of Stone","d":"Difficulty 7. A friend within 6 inches gets +2 armour save but -1 Initiative."},
    {"n":"Burning Hand","d":"Difficulty 8. One S5 combat attack causing 2 wounds; may set the target on fire."},
    {"n":"Quicksand","d":"Difficulty 6. Models near a target within 6 inches must pass a Strength test or cannot move."},
    {"n":"Storm of Magic","d":"Difficulty 9. One S5 hit on a warrior within 12 inches."},
    {"n":"Blessing of the Elements","d":"Difficulty 6. Post-battle re-roll or adjust one die."}
  ]},
  "necromancy": {"n":"Necromancy","list":[
    {"n":"Lifestealer","d":"Difficulty 10. One model within 6 inches loses a wound (no save) and the caster gains one."},
    {"n":"Re-Animation","d":"Difficulty 5. A zombie that went out of action returns to the battle."},
    {"n":"Death Vision","d":"Difficulty 6. The caster causes fear for the rest of the battle."},
    {"n":"Spell of Doom","d":"Difficulty 9. An enemy within 12 inches must roll under his Strength or roll on the injury table."},
    {"n":"Call of Vanhel","d":"Difficulty 6. A zombie or dire wolf within 6 inches moves again."},
    {"n":"Spell of Awakening","d":"Automatic. Raises a slain enemy hero as a zombie after the battle."}
  ]},
  "lore-of-darkness": {"n":"Lore of Darkness","list":[
    {"n":"Bolt of Dark Light","d":"Difficulty 7. Range 12 inches, one S5 hit."},
    {"n":"Betrayal in Death","d":"Difficulty 8. Slain enemies rise once to attack their comrades."},
    {"n":"Nightmare","d":"Difficulty 7. An enemy within 18 inches takes a fear test or flees."},
    {"n":"Curse of the Dark Master","d":"Difficulty 8. One model within 24 inches is at -1 to hit."},
    {"n":"Fog of Death","d":"Difficulty 10. Fog covers the board, hitting enemies on 4+ and friends on 6+."},
    {"n":"Coils of the Serpent","d":"Difficulty 10. A target within 6 inches must pass Toughness or is taken out of action."}
  ]},
  "lore-of-light": {"n":"Lore of Light","list":[
    {"n":"Wings of Fate","d":"Difficulty 6. A flock attacks a model within 18 inches with D3 S2 hits."},
    {"n":"Light of Battle","d":"Difficulty 6. A friend within 12 inches gets an unreducible 5+ save."},
    {"n":"Gift of Life","d":"Difficulty 9. Restores a friend slain last turn to 1 wound."},
    {"n":"Blessing of Valour","d":"Difficulty 8. A friend within 24 inches gets +1 to hit in combat."},
    {"n":"Boon of Courage","d":"Difficulty 8. Friends within 12 inches are immune to psychology and all alone."},
    {"n":"Voice of Command","d":"Difficulty 9. One model within 24 inches can only defend itself next turn."}
  ]},
  "dark-magic": {"n":"Dark Magic","list":[
    {"n":"Banishment","d":"Difficulty 8. Undead nearby must pass Leadership or take a hit."},
    {"n":"Soul Render","d":"Difficulty 8. Magic missile causing D3 hits."},
    {"n":"Shade Mount","d":"Difficulty 8. Lets a hero fly up to 12 inches."},
    {"n":"Jozun's Decay","d":"Difficulty 9. Drains the target's Toughness over time."},
    {"n":"Cowl of Pain","d":"Difficulty 6. Cannot be stunned until his next magic phase."},
    {"n":"Doom and Dark","d":"Difficulty 7. Nearby models take an all alone test."}
  ]}
};
