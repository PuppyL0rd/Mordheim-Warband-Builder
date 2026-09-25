/* SKILLS: skill lists a warrior can pick from. A unit lists the keys it may use in skills:[...].
   Each entry in a list is {n:name, d:description}. A skill can also carry the optional fields
   fx (stat changes, for example {"I":1}), cap (raises a racial maximum) and sv (armour save). */
const SKILLS = {
  "combat": {"n":"Combat","list":[
    {"n":"Strike to Injure","d":"+1 to injury rolls he causes in close combat."},
    {"n":"Combat Master","d":"+1 Attack while fighting two or more enemies; never takes All Alone tests."},
    {"n":"Weapons Training","d":"May use any close combat weapon he finds, not just his warband's list."},
    {"n":"Web of Steel","d":"+1 on the critical hit table in close combat."},
    {"n":"Expert Swordsman","d":"Re-rolls missed attacks on the turn he charges with a sword or Weeping Blades."},
    {"n":"Step Aside","d":"An extra unmodified 5+ save against each wound taken in close combat."}
  ]},
  "shooting": {"n":"Shooting","list":[
    {"n":"Quick Shot","d":"Fires a bow or crossbow twice per turn (not a crossbow pistol)."},
    {"n":"Pistolier","d":"A brace of pistols may both fire in one shooting phase; a single pistol may fire the turn it was reloaded."},
    {"n":"Eagle Eyes","d":"+6 inches range on any missile weapon."},
    {"n":"Weapons Expert","d":"May use any missile weapon he finds, not just his warband's list."},
    {"n":"Nimble","d":"May move and fire with weapons that normally forbid it. Cannot be combined with Quick Shot."},
    {"n":"Trick Shooter","d":"Ignores cover modifiers when shooting."},
    {"n":"Hunter","d":"May fire a handgun or Hochland long rifle every turn."},
    {"n":"Knife-Fighter","d":"Throws up to three throwing knives or stars per shooting phase, split between targets. Cannot be combined with Quick Shot."}
  ]},
  "academic": {"n":"Academic","list":[
    {"n":"Battle Tongue","d":"Leader only: extends his leadership range by 6 inches (not Undead leaders)."},
    {"n":"Streetwise","d":"+2 when searching for rare items."},
    {"n":"Haggle","d":"Once per post-battle sequence, takes 2D6 gc off one item's price (minimum 1 gc)."},
    {"n":"Arcane Lore","d":"May learn Lesser Magic if he owns a Tome of Magic (not Witch Hunters, Sisters of Sigmar or Warrior-Priests)."},
    {"n":"Wyrdstone Hunter","d":"Re-rolls one die on the exploration chart when searching."},
    {"n":"Warrior Wizard","d":"Spellcasters only: may wear armour and still cast spells."},
    {"n":"Sorcery","d":"Spellcasters only: +1 to his casting rolls (not Sisters of Sigmar or Warrior-Priests)."}
  ]},
  "strength": {"n":"Strength","list":[
    {"n":"Mighty Blow","d":"+1 Strength in close combat (not pistols)."},
    {"n":"Pit Fighter","d":"+1 Weapon Skill and +1 Attack when fighting inside buildings or ruins."},
    {"n":"Resilient","d":"-1 Strength on hits against him in close combat (armour save modifiers are unchanged)."},
    {"n":"Fearsome","d":"Causes fear."},
    {"n":"Strongman","d":"May use a double-handed weapon without always striking last."},
    {"n":"Unstoppable Charge","d":"+1 Weapon Skill when charging."}
  ]},
  "speed": {"n":"Speed","list":[
    {"n":"Leap","d":"May leap D6 inches in addition to his normal move, once per turn, over models and low obstacles or gaps."},
    {"n":"Sprint","d":"Triples his Movement when running or charging."},
    {"n":"Acrobat","d":"Falls or jumps up to 12 inches unharmed on a passed Initiative test; re-rolls failed diving charges (still only from 6 inches)."},
    {"n":"Lightning Reflexes","d":"When charged, strikes first against the chargers; compare Initiative among them."},
    {"n":"Jump Up","d":"Ignores knocked down results on the injury chart (except from a helmet save or No Pain)."},
    {"n":"Dodge","d":"Avoids a missile hit on a D6 roll of 5+, rolled before the wound roll."},
    {"n":"Scale Sheer Surfaces","d":"Climbs up or down twice his Movement with no Initiative test."}
  ]},
  "special": {"n":"Special","list":[

  ]},
  "pit-special": {"n":"Pit Fighter special","list":[
    {"n":"Bulging Biceps","d":"Ignores the heavy weapon penalty, so strength bonuses apply every round."},
    {"n":"Force of Will","d":"May get back up after going out of action, with a falling Toughness roll each round."},
    {"n":"Arms Master","d":"Ignores the difficult to use penalty on weapons, allowing odd combinations."},
    {"n":"Body Slam","d":"Single slam attack in place of a normal charge, with bonuses to strength and to hit."},
    {"n":"Grizzled Veteran","d":"Immune to all psychology."}
  ]},
  "elf-special": {"n":"Elf Ranger special","list":[
    {"n":"Fey","d":"Hostile spells fail against him on a 4+."},
    {"n":"Luck","d":"Once per game he may re-roll any one of his own dice."}
  ]},
  "assassin-special": {"n":"Assassin special","list":[
    {"n":"Backstabber","d":"Can charge an unseen enemy and gets a bonus in the first round."},
    {"n":"Hide in Shadows","d":"Enemies must pass an Initiative test to shoot or charge him near cover."}
  ]},
  "merchant-special": {"n":"Merchant special","list":[
    {"n":"Bribery","d":"Pay 5 gc per non-hero to ignore one casualty for rout tests."},
    {"n":"Dubious Income","d":"Leadership test after battle: gain gold equal to his experience, or lose it."},
    {"n":"Wholesale","d":"Searches for D3+1 rare items."},
    {"n":"Deal Breaker","d":"+1 when selling through the Trade rule."},
    {"n":"Connected","d":"May search the black market for scrolls and artefacts."}
  ]},
  "halfling-thief-special": {"n":"Halfling Thief special","list":[
    {"n":"Wily Thief","d":"Extra treasure when he takes enemies out of action."},
    {"n":"Stealthy","d":"Can hide even after running."}
  ]},
  "kislev-special": {"n":"Kislev Ranger special","list":[
    {"n":"Animal Call","d":"Confuses enemy movement from hiding."},
    {"n":"Herb Lore","d":"Can heal a wound on nearby friends."}
  ]},
  "pathfinder-special": {"n":"Pathfinder special","list":[
    {"n":"Lookout!","d":"Once per game may cancel a trap or hazard on a 4+."},
    {"n":"This Way!","d":"Lets a friend cross impassable terrain with him."}
  ]},
  "hobgoblin-special": {"n":"Hobgoblin special","list":[
    {"n":"Spy","d":"Redeploys models after setup."},
    {"n":"Potshot","d":"May shoot his bow while running at -2."}
  ]},
  "pyro-special": {"n":"Pyromaniac special","list":[
    {"n":"Rocket Science","d":"Adjusts the fireworks roll by 1."},
    {"n":"Display Artist","d":"May detonate a rocket at will with an Initiative test."}
  ]},
  "swordsmith-special": {"n":"Swordsmith special","list":[
    {"n":"Honing","d":"Hones up to three swords for the next battle."},
    {"n":"Farrier","d":"Lowers the chance of losing horses."}
  ]},
  "hillman-special": {"n":"Cursed Hillman special","list":[
    {"n":"Control","d":"Can change into the wolf at will."},
    {"n":"Rage","d":"Bonuses to stats and an extra attack (needs Control)."}
  ]},
  "tactician-special": {"n":"Imperial Tactician special","list":[
    {"n":"Organized Search Party","d":"Re-roll one exploration die."},
    {"n":"Send False Signals","d":"Moves one enemy model after deployment."}
  ]},
  "ungor-special": {"n":"Ungor Trapper special","list":[
    {"n":"Mutant","d":"May buy one mutation."},
    {"n":"Fearless","d":"Immune to fear and being alone."},
    {"n":"Manhater","d":"Hates human warbands."}
  ]},
  "beastmen-special": {"n":"Beastmen special","list":[
    {"n":"Shaggy Hide","sv":6,"d":"A 6+ armour save that combines with other armour."},
    {"n":"Mutant","d":"May buy one mutation."},
    {"n":"Fearless","d":"Immune to fear and all alone."},
    {"n":"Horned One","d":"An extra attack at base Strength on the turn he charges."},
    {"n":"Bellowing Roar","d":"Chief only: re-roll failed rout tests."},
    {"n":"Manhater","d":"Hates human warbands."}
  ]},
  "ostlander-special": {"n":"Ostlander special","list":[
    {"n":"Bull Rush","d":"When charging, may knock an enemy down instead of attacking."},
    {"n":"Foul Odour","d":"Living enemies are at -1 to hit him; fire hits at +1 Strength."},
    {"n":"Taunt","d":"Forces an enemy to spend its next move charging him."},
    {"n":"Animal Friendship","d":"Animals never attack him; two wardogs do not count toward the limit."},
    {"n":"Blood Oath","d":"Leader only: re-roll one rout test per game."}
  ]},
  "dwarf-special": {"n":"Dwarf special","list":[
    {"n":"Master of Blades","d":"Parries on a tie; two parry weapons can parry two attacks."},
    {"n":"Extra Tough","d":"May re-roll a serious injury result once."},
    {"n":"Resource Hunter","d":"Adjusts one exploration die by 1."},
    {"n":"True Grit","d":"Injury roll of 1-3 is knocked down, 4-5 stunned."},
    {"n":"Thick Skull","d":"3+ save to avoid being stunned (2+ with a helmet)."}
  ]},
  "orc-special": {"n":"Orc special","list":[
    {"n":"'Ard 'Ead","d":"3+ save to avoid being stunned (2+ with a helmet)."},
    {"n":"Waaagh!","d":"+D3 inches to charge range."},
    {"n":"'Ere We Go!","d":"Ignores fear tests when charging."},
    {"n":"Da Cunnin' Plan","d":"Boss only: warband may re-roll failed rout tests."},
    {"n":"Well 'Ard","svBonus":1,"d":"+1 to armour saves."},
    {"n":"'Eadbasher","d":"Knocked down results he causes count as stunned."}
  ]},
  "amazon-special": {"n":"Amazon special","list":[
    {"n":"Skink Hunter","d":"Always strikes first against Skinks."},
    {"n":"Elixir of Life","d":"May re-roll one serious injury result."},
    {"n":"Mesmerising Dance","d":"Models in base contact must pass Leadership or cannot attack."},
    {"n":"Savage Fury","d":"+1 Attack when charging; immune to charms and fear."},
    {"n":"Concealment","d":"Enemies halve the range at which they spot her in jungle."}
  ]},
  "tombraider-special": {"n":"Tomb Raider special","list":[
    {"n":"Sand Worm","d":"Can hide in open ground."},
    {"n":"Hit and Run","d":"Runs and shoots at -2 instead of -1."},
    {"n":"Weather Tolerant","d":"Unaffected by weather."}
  ]},
  "blackorc-special": {"n":"Black Orc special","list":[
    {"n":"Proven Warrior","d":"Young'un with Black Orc blood and 25 XP becomes a full Black Orc."},
    {"n":"'Ard 'Ead","d":"3+ save to avoid being stunned (2+ with a helmet)."},
    {"n":"Waaagh!","d":"+D3 inches to charge range."},
    {"n":"'Ere We Go!","d":"Ignores fear tests when charging."},
    {"n":"Da Cunnin' Plan","d":"Boss only: warband may re-roll rout tests."},
    {"n":"'Eadbasher","d":"Knocked down results count as stunned."}
  ]},
  "knight-virtues": {"n":"Bretonnian virtues","list":[
    {"n":"Virtue of Purity","d":"Spells against him are dispelled on a 4+."},
    {"n":"Virtue of Valour","d":"Re-roll misses against stronger enemies."},
    {"n":"Virtue of Discipline","d":"Once per game re-roll a failed rout test."},
    {"n":"Virtue of Noble Disdain","d":"Hates enemies with shooting weapons."},
    {"n":"Virtue of Impetuous","d":"+D3 inches when charging."}
  ]},
  "darkelf-special": {"n":"Dark Elf special","list":[
    {"n":"Fury of Khaine","d":"4 inch follow-up move after taking out all opponents."},
    {"n":"Powerful Build","d":"May choose Strength skills (at most two in the warband)."},
    {"n":"Fey Quickness","d":"Avoids attacks on a 6."},
    {"n":"Infiltration","d":"Deploys after the enemy, out of sight."},
    {"n":"Master of Poisons","d":"May brew D3-1 doses of Dark Venom instead of searching."}
  ]},
  "ranger-special": {"n":"Dwarf Ranger special","list":[
    {"n":"Combat Master","d":"Parries on a tie; two parry weapons can parry two attacks."},
    {"n":"Extra Tough","d":"May re-roll a serious injury result once."},
    {"n":"Resource Hunter","d":"Adjusts one exploration die by 1."},
    {"n":"True Grit","d":"Injury roll of 1-3 is knocked down, 4-5 stunned."},
    {"n":"Thick Skull","d":"3+ save to avoid being stunned (2+ with a helmet)."}
  ]},
  "bandit-special": {"n":"Bandit special","list":[
    {"n":"Banditry","d":"Rob travellers between games instead of searching for rare items."},
    {"n":"Hide in Shadows","d":"Enemies halve Initiative to detect him."},
    {"n":"Jump Back","d":"Initiative test to break away from combat."},
    {"n":"Sniper","d":"May shoot or cast while remaining hidden (not blackpowder)."},
    {"n":"Throw Voice","d":"Hidden bandit stays undetected on a 4+."}
  ]},
  "norse-special": {"n":"Norse special","list":[
    {"n":"Barbarian Courage","d":"Never tests all alone; re-rolls fear tests."},
    {"n":"Battle Tongue","d":"Leader only: Leadership works out to 12 inches."},
    {"n":"Berserk Charge","d":"With an axe or double-handed weapon re-rolls misses when charging."},
    {"n":"Crushing Blow","d":"His attacks cannot be parried."},
    {"n":"Shield Master","d":"With a shield may also parry."}
  ]},
  "lizard-special": {"n":"Lizardmen special","list":[
    {"n":"Infiltration","d":"Skinks only: set up hidden anywhere 12 inches from the enemy."},
    {"n":"Great Hunter","d":"Skinks only: extra -1 to hit while in cover."},
    {"n":"Bellowing Battle Roar","d":"Saurus only: enemies in contact are -1 to hit in round one."},
    {"n":"Toughened Hide","d":"Saurus only: out of action only on a 6+."}
  ]},
  "pirate-special": {"n":"Pirate special","list":[
    {"n":"Sea Shanty Singer","d":"Distracts an enemy in contact: Leadership test or lose an Attack."},
    {"n":"Sea Legs","d":"Ignores fall damage on a 4+."},
    {"n":"Cutlass Master","d":"Parries on a tie with a sword when near cover."},
    {"n":"Booming Voice","d":"Captain only: lets a fleeing pirate re-roll his rally."},
    {"n":"Hardy Constitution","d":"Ignores critical hits on a 5+."},
    {"n":"Swashbuckler","d":"May break from combat with a Leadership test."}
  ]},
  "shadow-special": {"n":"Shadow Warrior special","list":[
    {"n":"Infiltration","d":"Deploys after the enemy, out of sight."},
    {"n":"See in Shadows","d":"May charge enemies he cannot see."},
    {"n":"Hide in Shadows","d":"Enemies halve Initiative to detect him."},
    {"n":"Sniper","d":"Shoots or casts while remaining hidden."},
    {"n":"Powerful Build","d":"May choose Strength skills (at most two in the warband)."},
    {"n":"Master of Runes","d":"Weavers only: runes give one warrior a re-roll of a save."}
  ]},
  "pestilens-special": {"n":"Clan Pestilens special","list":[
    {"n":"Black Hunger","d":"+1 Attack and extra movement at the cost of D3 S3 hits."},
    {"n":"Censer Bearer","d":"Frenzy; may only fight with a censer."},
    {"n":"Rotten Body","d":"Immune to poison and disease."},
    {"n":"Contagious","d":"Injured attackers must test Toughness or take a wound."},
    {"n":"Ignore Pain","d":"Stunned results count as knocked down."}
  ]},
  "hunter-special": {"n":"Horned Hunter special","list":[
    {"n":"Master Trapper","d":"Trip wire range 4 inches; traps trigger on 2+."},
    {"n":"Infiltration","d":"Deploys after the enemy, out of sight."},
    {"n":"Foul Odour","d":"Living enemies are at -1 to hit him; fire hits at +1 Strength."},
    {"n":"Animal Friendship","d":"Animals never attack him."},
    {"n":"Pathfinder","d":"One extra exploration die (one per warband)."},
    {"n":"Hide in Shadows","d":"Enemies halve Initiative to detect him."}
  ]},
  "monk-special": {"n":"Battle Monk special","list":[
    {"n":"Energy Focus","d":"Unarmed: trade Attacks for +1 Strength each."},
    {"n":"Lightning Speed","d":"Triple movement when running or charging."},
    {"n":"Leap of Faith","d":"Cannot be intercepted; escapes combat freely."},
    {"n":"Human Shield","d":"Grabs an attacker to soak a second enemy's blows."},
    {"n":"Warmonger","d":"Emissary only: D3+1 Raging Peasants join before battle."}
  ]},
  "chaosdwarf-special": {"n":"Chaos Dwarf special","list":[
    {"n":"Extra Tough","d":"May re-roll a serious injury result once."},
    {"n":"Chaos Engineer","d":"+3 when searching for Chaos armour or Obsidian weapons."},
    {"n":"Thick Skull","d":"3+ save to avoid being stunned (2+ with a helmet)."},
    {"n":"Resource Hunter","d":"Adjusts one exploration die by 1."},
    {"n":"Tyrant","d":"Leader only: re-roll failed rout tests."},
    {"n":"True Grit","d":"Injury roll of 1-3 is knocked down, 4-5 stunned."}
  ]},
  "knightly-special": {"n":"Knightly skills","list":[
    {"n":"Renowned Virtue","d":"Learn one Bretonnian virtue."},
    {"n":"Questing Vow","d":"Questing Knight only: re-roll a Leadership test against fear."},
    {"n":"Shield Bash","d":"An extra club-like attack with a shield."},
    {"n":"Bulging Muscles","d":"Keeps flail and morning star bonuses after round one."},
    {"n":"Untiring","d":"No movement penalty for armour; saves cannot drop below 5+."}
  ]},
  "cavalcade-special": {"n":"Cursed Cavalcade special","list":[
    {"n":"Noblesse Obliges","d":"Immune to fear; extra stomp attack on knocked-down enemies."},
    {"n":"Torturer","d":"Wounded enemies lose 1 Strength for the battle."},
    {"n":"Duelist","d":"Pushes a one-on-one opponent 2 inches."}
  ]},
  "ogre-special": {"n":"Ogre special","list":[
    {"n":"Master of Arms","d":"May wield a difficult-to-use weapon and a hand weapon together."},
    {"n":"Crude Belch","d":"Enemies in combat must pass Leadership or be -1 to hit."},
    {"n":"Maneater","d":"Learn one Shooting or Academic skill (not the Guide)."},
    {"n":"Bull Charge","d":"One +1 to-hit charge attack that knocks the target down."},
    {"n":"Dog of War","d":"Leader only: may hire mercenary hired swords."},
    {"n":"Bellowing Roar","d":"Leader only: re-roll the first failed rout test."}
  ]},
  "marauder-special": {"n":"Marauder special","list":[
    {"n":"Chosen of Chaos","d":"Becomes a Chaos Warrior with the Warriors of Chaos maximum profile."},
    {"n":"Tattooed Body","d":"Leader only: Eye of the Gods triggers on 10+."},
    {"n":"Sweeping Blow","d":"Extra attack after a double-handed kill. Needs Strongman."},
    {"n":"Mutant","d":"May buy one mutation (can be taken more than once)."},
    {"n":"Heart of the Warrior","d":"Leader only: re-roll failed rout tests; immune to fear and all alone."}
  ]},
  "nightgoblin-special": {"n":"Night Goblin special","list":[
    {"n":"Ded Shooty","d":"+6 inches missile range (not nets)."},
    {"n":"Sneaky Git","d":"Big Boss only: moves D3 warband members after deployment."},
    {"n":"Infiltrate","d":"Deploys after the enemy, out of sight."},
    {"n":"Netter","d":"Chuck and charge with a net."}
  ]},
  "restless-special": {"n":"Restless Dead special","list":[
    {"n":"Corpse Bomb","d":"A secretly chosen Zombie explodes when it charges or is charged."},
    {"n":"Deathspeaker","d":"Deploy D3 free Zombies for the battle."},
    {"n":"Wraith Touch","d":"An unarmed attack that wounds automatically; a Liche regains a wound."},
    {"n":"Forbidden Rite","d":"A pool of casting bonuses if he skipped searching."},
    {"n":"Summoner","d":"Warband size +1."}
  ]},
  "hashut-special": {"n":"Sons of Hashut special","list":[
    {"n":"True Grit","d":"Injury roll of 1-3 is knocked down, 4-5 stunned."},
    {"n":"Extra Tough","d":"May re-roll a serious injury result once."},
    {"n":"Unlimited Hatred","d":"Hates everyone."},
    {"n":"Thick Skull","d":"3+ save to avoid being stunned (2+ with a helmet)."}
  ]},
  "dreamwalker-special": {"n":"Dreamwalker special","list":[
    {"n":"Inspiring Presence","d":"Dreamer only: Worshippers use his Leadership at 12 inches."},
    {"n":"Fanatical","d":"Dreamer only: re-roll one failed rout test per game."},
    {"n":"Inured to Horror","d":"Immune to fear and all alone."},
    {"n":"Blessed by Morr","d":"Spells against him fail on 4+ against the Undead."}
  ]},
  "druchii-special": {"n":"Druchii special","list":[
    {"n":"Frenzied Charge","d":"4 inch follow-up move after taking out all opponents."},
    {"n":"Fey Quickness","d":"Avoids attacks on a 6."},
    {"n":"Infiltration","d":"Deploys after the enemy, out of sight."},
    {"n":"Poisoner","d":"Brews D2 doses of Dark Venom instead of searching."},
    {"n":"Marksman of Naggaroth","d":"No long-range penalty with crossbows; repeaters fire twice."},
    {"n":"Will to Survive","d":"Leadership test to survive a Dead result."},
    {"n":"Keen Sight","d":"Spots hidden enemies from twice as far."}
  ]},
  "dwslayer-special": {"n":"Slayer special","list":[
    {"n":"Deathwish","d":"Immune to psychology (Stubbles and Axe Hurlers must learn it)."},
    {"n":"Ferocious Charge","d":"Double Attacks on the charge at -1 to hit."},
    {"n":"Monster Slayer","d":"Always wounds on 4+."},
    {"n":"Berserker","d":"+1 to hit on the charge."},
    {"n":"Deathblow","d":"Finishes his attacks when taken out of action."},
    {"n":"Relentless","d":"A failed charge still moves the full distance."},
    {"n":"Axe Mastery","d":"Re-rolls misses with an axe on the charge."},
    {"n":"True Grit","d":"Injury roll of 1-3 is knocked down, 4-5 stunned."},
    {"n":"Thick Skull","d":"3+ save to avoid being stunned."},
    {"n":"Songster","d":"Rememberer only: allies re-roll failed Leadership tests within 6 inches."},
    {"n":"Song of Honor","d":"Rememberer only: +1 experience for everyone when a Slayer dies."}
  ]},
  "graver-special": {"n":"Grave Robber special","list":[
    {"n":"Darkstalker","d":"Ignores all alone; doubles Initiative to spot hidden models."},
    {"n":"Instinctual Violence","d":"No fear test against the Undead; one attack strikes first."},
    {"n":"De-animator","d":"Ignores No Pain against the Undead."},
    {"n":"Hardy Constitution","d":"Immune to disease and poison."},
    {"n":"Body Dealer","d":"May recover the bodies and gear of the slain."}
  ]},
  "halfling-special": {"n":"Halfling special","list":[
    {"n":"Quiet as a Mouse","d":"Enemies halve Initiative to detect him."},
    {"n":"Crude Belch","d":"Enemies in contact test Leadership or lose their first attack."},
    {"n":"Wizened Halfling","d":"Leader only: allies re-roll failed Leadership tests within 6 inches."},
    {"n":"Stealthy","d":"Thief only: hides after running."},
    {"n":"Skilled Huntsman","d":"May shoot and stay hidden on a 3+."},
    {"n":"Layers of Fat","d":"A permanent 6+ save on top of armour."},
    {"n":"Shifty","d":"A bonus attack that strikes first when charged."}
  ]},
  "horror-special": {"n":"Masters of Horror special","list":[
    {"n":"Surgeon","d":"Mad Scientist: re-roll one injury result."},
    {"n":"Alchemist","d":"Mad Scientist: a random potion before each battle."},
    {"n":"Apt Revitalist","d":"Mad Scientist: Zombies gain experience like human henchmen."},
    {"n":"Lunatic","d":"Any hero: causes fear and may re-roll Leadership tests."}
  ]},
  "necrarch-special": {"n":"Necrarch special","list":[
    {"n":"Pupil of Nagash","d":"Learn a spell from the Scrolls of Nagash."},
    {"n":"Master of the Black Arts","d":"Spell ranges extended by half."},
    {"n":"Pull of Undeath","d":"Leader only: undead henchmen within 4 inches go out of action only on a 6."}
  ]},
  "nippon-special": {"n":"Nippon special","list":[
    {"n":"Death before Dishonor","d":"A final attack before being removed from a close combat kill."},
    {"n":"Night Fighter","d":"Shinobi only: runs and stays hidden."},
    {"n":"Iaijutsu","d":"+1 Attack that strikes first when charged."},
    {"n":"Last Stand","d":"Re-roll all alone tests; +1 WS or BS when isolated."},
    {"n":"Tea Ceremony","d":"Pay 10 gc after a battle to give another hero experience on a 3+."},
    {"n":"Blessed by the Kami","d":"Re-roll one serious injury result."}
  ]},
  "ogrehunt-special": {"n":"Ogre Hunter special","list":[
    {"n":"Crude Belch","d":"Enemies in combat must pass Leadership or be -1 to hit."},
    {"n":"Scent Hound","d":"Spots hidden enemies from twice as far."},
    {"n":"Sabre Trainer","d":"Steers bolting Sabretusk cubs."},
    {"n":"Maneater","d":"Ogres only: learn one Shooting or Academic skill."},
    {"n":"Bull Charge","d":"Ogres only: one +1 to-hit charge attack that knocks the target down."},
    {"n":"Bellowing Roar","d":"Leader only: re-roll the first failed rout test."},
    {"n":"Set Traps","d":"Gnoblars only: lays snares."},
    {"n":"Infiltration","d":"Gnoblars only: deploys after the enemy."},
    {"n":"Netter","d":"Gnoblars only: starts each game with three nets."}
  ]},
  "protectorate-special": {"n":"Protectorate special","list":[
    {"n":"Protection of Sigmar","d":"Spells against him fail on 4+."},
    {"n":"Unshakeable Faith","d":"Immune to fear."},
    {"n":"Utter Determination","d":"Warrior Priest only: re-roll failed rout tests."},
    {"n":"Rousing Sermon","d":"Warrior Priest only: +1 Attack for nearby allies once per game."},
    {"n":"Sigmar's Guidance","d":"May choose any target when shooting."}
  ]},
  "moulder-special": {"n":"Clan Moulder special","list":[
    {"n":"Black Hunger","d":"+1 Attack and extra movement at the cost of D3 S3 hits."},
    {"n":"Beastkin","d":"Beast handling skills work at 12 inches."},
    {"n":"Hypnotic Musk","d":"Enemy animals must pass Leadership to charge him."},
    {"n":"Subjugator of Mankind","d":"With a Thingcatcher, victims are captured."},
    {"n":"Twistkin","d":"Stormvermin only: buys a mutation at half cost."}
  ]},
  "snotling-special": {"n":"Snotling special","list":[
    {"n":"Stampede","d":"Charging mates forfeit attacks to add Strength."},
    {"n":"Achilles' Heel","d":"Criticals on a wound roll of 6."},
    {"n":"Worm","d":"Scouts only: squeezes through walls."},
    {"n":"Big Bully","d":"BigSnotz only: learns one Strength skill."},
    {"n":"Frustratingly Tiny","d":"Enemies are -1 to hit him in close combat."},
    {"n":"Mob Master","d":"Immune to psychology near a Snotling Mob."}
  ]},
  "strigoi-special": {"n":"Strigoi special","list":[
    {"n":"Iron Sinews","d":"+1 Strength."},
    {"n":"Great Thirster","d":"Frenzied after taking an enemy out of action."},
    {"n":"Curse of the Revenant","d":"Regenerates a wound on a 5+ (needs Great Thirster)."},
    {"n":"Dark Arts","d":"Learns a spell from the Dark Arts."}
  ]},
  "strigany-special": {"n":"Strigany special","list":[
    {"n":"Light Fingers","d":"Finds an extra wyrdstone when taking an enemy out of action."},
    {"n":"Practiced Arm","d":"Throws two throwing knives per turn with +1 to injuries."}
  ]},
  "vh-special": {"n":"Vampire Hunter special","list":[
    {"n":"Iron Will","d":"Immune to fear."},
    {"n":"Righteous Aura","d":"Possessed and Undead opponents lose their first attack."},
    {"n":"Thirst for Vengeance","d":"Hates the Undead; +1 Attack on the charge."},
    {"n":"Blessing of Morr","d":"+1 to injury rolls against the Undead."},
    {"n":"Touch of Darkness","d":"Ignores darkness penalties."}
  ]},
  "woodelf-special": {"n":"Wood Elf special","list":[
    {"n":"Fey","d":"A 4+ save against hostile magic."},
    {"n":"Elven Luck","d":"Once per game re-roll any failed roll."},
    {"n":"Excellent Sight","d":"Spots hidden models at twice Initiative."},
    {"n":"Seeker","d":"Shifts one exploration die by 1 (one hero only)."},
    {"n":"Infiltration","d":"Deploys last, out of sight."}
  ]},
  "sigmar-special": {"n":"Sisters of Sigmar special","list":[
    {"n":"Sign of Sigmar","d":"Possessed and Undead opponents lose their first attack in round one."},
    {"n":"Protection of Sigmar","d":"Spells that would affect her are nullified on a 4+."},
    {"n":"Utter Determination","d":"Matriarch only: re-roll failed rout tests."},
    {"n":"Righteous Fury","d":"Hates evil warbands."},
    {"n":"Absolute Faith","d":"Re-roll fear tests; never tests when fighting alone."}
  ]},
  "skaven-special": {"n":"Skaven special","list":[
    {"n":"Black Hunger","d":"+1 Attack and extra movement, at the cost of D3 S3 hits."},
    {"n":"Tail Fighting","d":"An extra attack or +1 armour save from a tail weapon."},
    {"n":"Wall Runner","d":"Climbs walls without an Initiative test."},
    {"n":"Infiltration","d":"Deploys after the enemy, out of sight."},
    {"n":"Art of Silent Death","d":"Fights bare-pawed as if two-weaponed; criticals on 5-6."}
  ]},
  "slayer-special": {"n":"Troll Slayer special","list":[
    {"n":"Ferocious Charge","d":"Doubles attacks on the turn of the charge, at a to hit penalty."},
    {"n":"Monster Slayer","d":"Wounds on 4+ regardless of Toughness unless his own Strength does better."},
    {"n":"Berserker","d":"Bonus to hit on the turn he charges (not with Ferocious Charge)."}
  ]}
};
