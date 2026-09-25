# Editing the data

All game data lives in this folder as plain JavaScript files. You can edit them in any text editor, including GitHub's built-in editor. The app in `js/app.js` should not need to change for new warbands, items, skills or spells.

| File | What it holds |
| --- | --- |
| `equipment.js` | Weapons, armour and other items, with prices |
| `skills.js` | Skill lists (Combat, Shooting, and each warband's special skills) |
| `spells.js` | Spell, prayer and ritual lists |
| `races.js` | Racial maximum stats and race display names |
| `grades.js` | The grade groups shown in the pickers |
| `hired-swords.js` | Hired swords and Dramatis Personae |
| `warbands/<id>.js` | One file per warband |
| `manifest.js` | The list of files the tool loads |

When you open the page, the tool checks the data. If it finds a typo or a missing reference (an item name that does not exist, an unknown skill list, and so on) it shows a red box at the top of the page listing the problems.

If a file has a syntax error, such as a missing comma or bracket, the page shows a red message naming the file and line.

## Adding a warband

1. Copy `warbands/_template.js` to `warbands/<id>.js`. Use a short lower-case id with no spaces, for example `wolfpack`.
2. Fill it in (fields below).
3. Add the id to `WARBAND_FILES` in `manifest.js`. The order there is the order within each grade.
4. Reload the page.

## Warband fields

| Field | Meaning |
| --- | --- |
| `name` | Name shown in the picker |
| `source` | Book or website it came from (shown in the file header only) |
| `grade` | Key from `grades.js`: `core`, `1a`, `1b`, `1c` or `2a` |
| `tags` | Words used by hiring rules, for example `["human","mercenary","good"]` |
| `gold` | Starting gold |
| `minModels`, `maxModels`, `maxHeroes` | Size limits |
| `gear` | Items the warband may buy: item names from `equipment.js`, or a group key such as `"melee"` |
| `costs` | Price overrides, for example `{"Bow":15}` |
| `opts` | Option groups such as mutations or blessings: `{"groupKey":{"n":"Title","dbl":false,"list":[{"n":"Name","c":40,"d":"Text"}]}}`. Set `dbl` to true if later picks cost double |
| `sets` | Equipment bundles (used by Pit Fighters) |
| `units` | The list of unit types (below) |

**Hiring rules** (all optional):
- `hireNone: true` - cannot hire anyone.
- `hireOnly: ["h-ogre"]` - can hire only these hired sword ids. Add `hireRaces: ["halfling"]` to also allow every hired sword of a race.
- `noHire: ["h-bounty"]` - cannot hire these ids.
- `noRaces: ["elf"]` - cannot hire swords of these races.
- `hireExplicit: true` - can hire only swords that name this warband; `hireTags` says which tags count.
- `hireAll: true` - can hire any sword.
- By default, hiring follows the tags: a sword's `only` and `not` lists are matched against the warband id and its tags.

## Unit fields

| Field | Meaning |
| --- | --- |
| `id`, `n` | Unique id within the warband, and the name shown |
| `race` | Race key (see `races.js`) |
| `stats` | `{"M":4,"WS":3,"BS":3,"S":3,"T":3,"W":1,"I":3,"A":1,"Ld":7}`. A unit with no stats (a cart, for example) is shown without a stat table |
| `kind` | `"hero"` or `"henchman"` |
| `c` | Hire cost |
| `max` | Most allowed in the warband. Leave out for no limit |
| `min` | Fewest required (a warning appears below this) |
| `req` | `true` if the warband must have one |
| `startXp` | Experience it starts with (starting experience does not earn advances) |
| `startSkills` | Skills it starts with |
| `gear` | Items this unit may buy, overriding the warband list |
| `costs` | Price overrides for this unit |
| `skills` | Skill list keys it can learn from |
| `spells` | Spell list keys it can learn from |
| `opts` | Which of the warband's `opts` groups applies to it |
| `sv` | A natural armour save (6 means 6+) |
| `large` | `true` if it counts as a large target (rating +20 instead of +5) |
| `noXp` | `true` if it never gains experience (animals, undead, constructs) |
| `noCount` | `true` if it does not count toward the model limit |
| `bonusModels` | Raises the warband's model limit by this much per model (Plague Cart) |
| `needs` | Needs another unit id in the warband first (Sabretusk needs a Guide) |
| `maxPer` | A limit relative to other units: `{"of":["goblin"],"mult":1}` means at most one per Goblin |
| `mLabel` | Text to show instead of a number for Movement, for example `"2D6"` |
| `note` | Special rules text shown on the card and on the printed roster |

## Hired swords (`hired-swords.js`)

One line per sword. `st` is the nine stats as text (`"M WS BS S T W I A Ld"`), `c` the fee, `up` the upkeep, `rt` the rating, `g` the grade key from `grades.js`, and `sk` the skill list keys separated by spaces. `only` and `not` control who can hire them.

### Kit options

If a hired sword has a choice of kit, add `kitOptions` and `kitBase`:

```
{"id":"h-ogre", ... "kitBase":"light armour",
 "kitOptions":[{"n":"Weapons","list":[{"n":"Two swords"},{"n":"Two axes"},{"n":"Double-handed weapon"}]}]}
```

The player picks one option per group when hiring, and the first option is the default. The chosen options, then `kitBase`, make up the kit shown on the card and the printed roster. An option can also carry `txt` (the text to show instead of its name), `kitItems` (armour that counts toward the save, for example `["Heavy armour"]`), `sv` (a save it gives) and `rt` (rating it adds, for example a mount).

## Items, skills and spells

Each list entry is `{"n":"Name","c":price,"d":"description"}` for items and `{"n":"Name","d":"description"}` for skills and spells. See the comment at the top of each file for the optional fields (armour saves, stat changes and so on).

## Tips

- Keep the commas between entries and no comma after the last one in a list.
- Item names in `gear` must match `equipment.js` exactly, including capitals.
- After a change, hard-refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on a Mac) so the browser does not use a cached copy.
