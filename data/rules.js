/* SPECIAL_RULES: shared definitions for named rules that show up again and again — on weapons (Misfire),
   on warriors (Fear, Large Target, Frenzy...) and on hired swords — written once here and referenced by
   key everywhere else, instead of being retyped slightly differently each time.

   Where something applies:
     equipment.js item  ->  "rules": ["misfire"]
     a unit or hired sword  ->  "rules": ["fear","large-target"]
   The key shows as a small tag next to the item, unit or hired sword, and its full text prints once in
   the roster's Notes area (or the Special Rules panel in the app) the same way skills and spells do.
   This is for RE-USABLE rules only. A one-off rule that's unique to a single weapon or warrior still
   belongs in that entry's own "wd" or "note" field, written out in full, same as before.

   Each entry is {n: name shown, d: description}. */
const SPECIAL_RULES = {
  "fear": {"n":"Fear","d":"Enemies must pass a Leadership test to charge it or to finish a charge move in contact with it (failing means stopping 1 inch away instead). In close combat, a model that doesn't also cause fear or terror is at -1 to its Combat Result against it."},
  "terror": {"n":"Terror","d":"Works like Fear, but a model that fails the test must also flee 2D6 inches instead of just stopping short. Only models that cause terror themselves are unaffected."},
  "large-target": {"n":"Large Target","d":"Missile fire may target it even when a closer model is in the way, and it gets no benefit from cover unless most of its body is actually hidden."},
  "frenzy": {"n":"Frenzy","d":"Always strikes first is lost while frenzied; instead it gets +1 Attack and must always charge the nearest enemy it can see and always pursues into the enemy's own turn. If it loses a round of close combat it stops being frenzied for the rest of the battle."},
  "hatred": {"n":"Hatred","d":"Must charge the hated enemy if able, and re-rolls failed to-hit rolls against it in the first round of a fresh close combat."},
  "stupidity": {"n":"Stupidity","d":"Test Leadership at the start of each turn; on a fail it can only move toward the nearest enemy (or mill about if none is visible) and can't shoot, cast or run that turn."},
  "immune-psychology": {"n":"Immune to Psychology","d":"Automatically passes all fear, terror, stupidity, frenzy and all-alone tests."},
  "immune-fear": {"n":"Hardened","d":"Automatically passes fear and terror tests, but is not otherwise immune to psychology."},
  "animosity": {"n":"Animosity","d":"Roll a D6 for it at the start of each of your turns; on a 1, roll again on the animosity table (typically: fight a mate, hurl insults, or charge the nearest enemy) instead of acting normally that turn."},
  "no-pain": {"n":"No Pain","d":"Knocked down and stunned results are ignored; a model that would suffer one carries on as if nothing happened."},
  "cannot-run": {"n":"Cannot Run","d":"May move or charge as normal but may never run, even to flee."},
  "misfire": {"n":"Misfire","d":"If a natural 1 is rolled to hit with this weapon, it misfires: roll a D6. On a 1 the weapon is destroyed and unusable for the rest of the battle; on 2-6 nothing happens, but the shot is wasted."},
  "cumbersome": {"n":"Cumbersome","d":"-1 Movement and -1 Initiative to the model carrying it."}
};
