# Mordheim Warband Builder

A free tool for building and running Mordheim warbands. It runs entirely in your browser: no account, no server, nothing to install.

**Live page:** `https://YOUR-USERNAME.github.io/YOUR-REPO/` (replace with your own address once Pages is on)

## What it does

**Build tab**
- 72 warbands across the core rules and grades 1a, 1b, 1c and 2a, with a search box for finding one by name, book, tag or unit.
- Starting gold, model and hero limits, mandatory units and unit ratios (for example Goblins per Orc), with warnings when you break them.
- Equipment, skills, spells, mutations and blessings for each warrior, with stat and armour save effects worked out for you.
- Hired swords and Dramatis Personae, filtered by what each warband may hire, with their kit linked to real equipment items (so its weapons and armour show their profile and count toward the armour save) and a dropdown for any kit with a choice.
- Weapon profiles (Strength, range, armour save penalty) shown next to equipment, sourced from mordheimer.net's weapon pages.
- Stat maximums by race, warband rating and upkeep.
- A printable roster on US Letter that follows the freebooters.org sheet layout: page 1 heroes with the warband header, then henchmen, then hired swords. It starts a new page whenever a section has more than 6 heroes or 7 henchman or hired sword blocks. Experience boxes are shaded, injuries and missed games print in the Injuries box, and special rules, injuries and option descriptions print in the Notes area, with the effects of the weapons carried and the skills and spells known listed at the bottom.

**Campaign tab**
- Experience and advances ready (starting experience does not count toward advances).
- Apply advances: +1 to a characteristic, a new skill or spell, or a note.
- Serious injuries with lasting stat effects, missed games, and removing the dead.
- Buy equipment for a hero or henchman group from the warband's own list (with the same limits as the Build tab), and sell, drop or undo a purchase.
- Recruitment, the treasury, hired sword upkeep, and a history log.
- Promote a henchman with The Lad's Got Talent.

## Project layout

```
index.html            page layout and styles
js/loader.js          loads the data files, then the app
js/app.js             the tool's logic
data/                 all game data (edit these)
  equipment.js  skills.js  spells.js  races.js  grades.js  hired-swords.js
  manifest.js         list of files to load
  warbands/<id>.js    one file per warband
  README.md           how to edit the data
```

To add or change a warband, item, skill, spell or hired sword, edit the files in `data/` (see `data/README.md`). The page checks the data when it opens and lists any typos it finds.

## Saving your roster

Your roster is stored in your browser's local storage for this address. It is not shared between people or devices, and clearing your browser data removes it. Use **Export JSON** to back it up and **Import JSON** to load it again.

## Publishing your own copy on GitHub Pages

1. Put all the files (keeping the folders) in a public GitHub repository.
2. Go to **Settings, Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
3. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a couple of minutes.

To try it on your own computer, you can open `index.html` directly. It works without a web server.

## Known limits

- Some special rules are shown as notes and not calculated (for example animosity rolls, goading and mounted combat).
- Random costs such as "20 + 2D6 gc" use their base price only.
- The advance experience thresholds and serious injury table follow the standard Mordheim tables; edit them at the top of the campaign code in `js/app.js` if your campaign differs.
- Several warbands have variants or older versions on the source site that are not included.

## Credits and legal

This is an unofficial fan project. Rules content is summarised from the community rules site [mordheimer.net](https://mordheimer.net) and the original Mordheim material by Games Workshop and its contributors. Mordheim and all related names and rules are the property of Games Workshop. This tool is not affiliated with or endorsed by Games Workshop, mordheimer.net or any of the community authors credited on that site.

The printed roster layout follows the community freebooters.org roster sheets (v1.6 standard and v2.1).

If you are a rights holder and would like something changed or removed, please open an issue.
