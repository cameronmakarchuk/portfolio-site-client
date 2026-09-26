# Cameron Makarchuk Personal Brand Style Guide

This guide captures the visual and editorial system behind the portfolio site. Use it as the source of truth when extending the site, adding project pages, or producing related material that should feel like Cameron's personal brand.

The code is authoritative. When this guide and the code disagree, trust the code and update this guide.

| Concern | Source |
| --- | --- |
| Color, layout and breakpoint tokens | `src/styles/partials/_theme.scss` |
| Type mixins | `src/styles/partials/_typography.scss` |
| Global element styles | `src/App.scss` |
| Font and icon loading | `index.html` |
| Shared components | `src/components/*` |
| Pages | `src/pages/*` |
| Content | `src/data/portfolio.ts`, `src/data/projects.ts` |

## Brand Essence

The site is a logbook: a quiet, editorial record of a coach who became a software developer. It reads like a well-set notebook more than a product page. Type and whitespace carry the design, thin rules give it structure, and color is rare enough that it means something when it appears.

Core attributes:

- Technical but human
- High-signal, low-fluff
- Dark, calm, editorial
- Builder-oriented
- Reflective without becoming sentimental
- Confident without sounding overproduced

Avoid:

- Generic SaaS gradients
- Overly corporate portfolio polish
- Beige wellness/coaching aesthetics
- Glows, neon, and "hacker console" styling
- Cute or whimsical tech motifs
- Explaining the UI inside the UI

## Visual Direction

The page is a two-column spread. A fixed-feeling left column holds identity: who Cameron is, the short story, and how to get in touch. The right column is the record: what he is doing now, and a dated timeline of work and projects.

Structure comes from hairline rules and a consistent label column, not from boxes. There are no cards, panels, shadows, rounded containers, or background textures. The only filled surfaces are media frames holding screenshots.

Color does two jobs only:

- **Mint** marks something live: the "Now" strip and project status tags.
- **Coral** marks the pivot and the call to action: the "Age 38" moment and "Write to me".

Everything else is warm off-white text in a few steps of emphasis on a near-black background.

## Color System

Tokens live in `src/styles/partials/_theme.scss`.

Surfaces and rules:

| Token | Value | Use |
| --- | --- | --- |
| `$color-bg` | `#111114` | Page background, dialog background |
| `$color-surface` | `#1b1b20` | Media frames, form fields |
| `$color-surface-stripe` | `#202026` | Stripe in the hatched media placeholder |
| `$color-rule` | `#2a2a30` | All hairline rules and borders |
| `$color-rule-strong` | `#3a3a42` | Inactive "Now" ticks |
| `$color-underline-muted` | `#5a5463` | Underline for links inside quiet text |

Text, strongest to faintest:

| Token | Value | Use |
| --- | --- | --- |
| `$color-text` | `#f0e9df` | Primary text, titles |
| `$color-text-soft` | `#d9d1c7` | Ledes, quotes, social icons, resume link |
| `$color-text-quiet` | `#c8bfc9` | Secondary prose, the contact question |
| `$color-text-muted` | `#a39cad` | Body copy, descriptions, role line |
| `$color-text-faint` | `#8c8596` | Metadata: years, row labels, captions, placeholders |

Accents:

| Token | Value | Role |
| --- | --- | --- |
| `$color-mint` | `#b8f2e6` | Live or current state: "● NOW", active tick, status tags, focus outline, focused form fields |
| `$color-coral` | `#ef8354` | Pivot and action: "Age 38" row, "Write to me", form submit, form errors |

Usage rules:

- Keep the page background near black and text warm off-white, never pure white.
- Express hierarchy by stepping down the text scale before reaching for an accent.
- Use mint only for things that are current or active.
- Use coral only for the career pivot and for the primary contact action. Don't use it for decoration.
- Don't add new accent colors. If something needs emphasis, use weight, size, or the text scale.

## Typography

Three families, loaded from Google Fonts in `index.html`. Each has a clear job.

| Family | Token | Weights | Job |
| --- | --- | --- | --- |
| Source Serif 4 | `$font-serif` | 300, 400, 300 italic | Voice: bio, ledes, case study prose, quotes, page titles, the contact prompt |
| IBM Plex Sans | `$font-sans` | 400, 500 | Structure: timeline titles, body copy, descriptions, fact values |
| IBM Plex Mono | `$font-mono` | 400, 500 | Metadata: years, row labels, captions, status tags, name/role line, resume and location |

Mixins live in `src/styles/partials/_typography.scss`. Use them instead of writing font shorthands by hand.

| Mixin | Spec | Use |
| --- | --- | --- |
| `text-mono($size: 13px, $color: $color-text-faint)` | Plex Mono 400, line-height 1.4 | Labels, years, captions, metadata. Use 12px for small metadata and 13px for row labels. |
| `text-status` | Plex Mono 400 11px, mint, `0.04em` tracking, uppercase | Project status tags ("IN PROGRESS", "CAPSTONE") |
| `text-title($size: 20px)` | Plex Sans 400, line-height 1.35 | Timeline entry titles, pager names (18px) |
| `text-body` | Plex Sans 400 15px/1.55, muted | Descriptions, summaries, lists |
| `text-lede($size: 20px, $line-height: 1.5)` | Source Serif 300, `text-wrap: pretty` | Bio paragraphs, page ledes. Case study prose uses a line-height of 1.6. |
| `text-quote` | Source Serif italic 300 24px/1.5, soft | The closing "Learned" / "Carried over" line |

Type rules:

- Page titles (`h1` on project and About pages) are Source Serif 400 at 44px/1.1 with `-0.01em` tracking. This is the only negative tracking in the system.
- The coral pivot line is Source Serif italic 300 at 24px.
- Keep prose to `$prose-max-width` (640px).
- Only status tags and the "NOW" badge use uppercase or letter-spacing. Leave everything else in sentence case with no tracking.
- Don't use bold. The heaviest weight in use is 500, and only for the "NOW" badge.

## Layout

The layout lives in `SplitLayout` (`src/components/SplitLayout`).

Tokens:

| Token | Value |
| --- | --- |
| `$layout-max-width` | `1440px` |
| `$prose-max-width` | `640px` |
| `$row-label-width` | `90px` |
| `$tablet` | `600px` |
| `$desktop` | `1000px` |

Breakpoint mixins: `tablet-up` (≥ 600px) and `desktop-up` (≥ 1000px).

Behavior by width:

| Width | Layout | Padding |
| --- | --- | --- |
| < 600px | Aside stacks above main, separated by a bottom rule. Labeled rows collapse to one column with an 8px gap. | `48px 24px` |
| 600–999px | Still stacked. Labeled rows use the 90px label column with a 24px gap. | `64px 40px` |
| ≥ 1000px | Side by side, with a right rule on the aside. | `56px 56px 48px 64px` |

Aside width at desktop:

- Home (`variant='home'`): `clamp(440px, 40vw, 560px)`
- Inner pages (`variant='page'`): `clamp(400px, 34vw, 480px)`

Sticky aside: at desktop widths the aside is `position: sticky; bottom: 0` with `min-height: 100vh` and `align-self: flex-end`. If its content fits the screen, it is exactly one screen tall and pins immediately. If it is taller than the screen, it scrolls with the page until its bottom edge is in view and then pins, so content is never clipped at any screen height. Don't swap this for `top: 0; height: 100vh`, which clips tall asides.

Vertical rhythm:

- Aside: two groups (identity/intro and contact/links) pushed apart with `justify-content: space-between` and at least 40px between them.
- Main: a 48px gap between sections on home and 56px on inner pages.
- Timeline rows (`compact`): 28px vertical padding, label offset 4px.
- Case study and About rows (`relaxed`): 32px vertical padding, label offset 6px.

## Components

### SplitLayout

`src/components/SplitLayout`. The page frame: an `<aside>` and a `<main>`. Every page uses it. Pass `variant='home'` or `variant='page'`.

### LabeledRows / LabeledRow

`src/components/LabeledRows`. This is the core pattern of the site: a 90px mono label column next to content, with rows separated by hairline rules.

- `density='compact'` for the home timeline, `density='relaxed'` for case studies and About.
- `hasBottomRule` closes the list with a final rule. The home timeline and About use it; case studies don't, because the pager follows.
- `isPivot` turns the label coral. Reserve it for the career-change moment.
- Shared text classes: `.labeled-row__prose` (serif lede at 1.6, 640px max) and `.labeled-row__quote` (serif italic quote).

### Timeline (home)

`src/pages/Home/Timeline.tsx`, driven by `timelineEntries` in `src/data/portfolio.ts`. Entry kinds:

- `projects` with one project: a featured row with the title link ("Name →"), a status tag, a 240px media frame, and a summary.
- `projects` with several projects: a card grid (`auto-fit, minmax(220px, 1fr)`) with 200px media frames. Cards don't show status tags.
- `role`: a title, an optional external link ("Coaching → BluePhoenix Fitness ↗"), and a description.
- `pivot`: a single coral serif italic line with a coral year label.

List newest first.

### NowRotator (home)

`src/pages/Home/NowRotator.tsx`. A "● NOW" header with an updated date, one rotating label/text pair, and tick buttons.

- It rotates every 5 seconds with a 300ms fade.
- Rotation pauses on hover, on keyboard focus (`:focus-visible` only), while the tab is hidden, and when the viewer prefers reduced motion.
- Clicking the item advances it, and clicking a tick jumps to that item.
- Ticks are 24×12px buttons that draw a 2px line, so the hit area stays usable.

### MediaFrame

`src/components/MediaFrame`. The only filled surface in the system. Images use `object-fit: contain` on `$color-surface`.

| Size | Height | Padding | Use |
| --- | --- | --- | --- |
| `feature` | 240px | 14px | Single-project timeline row |
| `card` | 200px | 14px | Multi-project timeline cards |
| `hero` | 420px | 24px | Case study cover |
| `detail` | 260px | 12px | Case study detail grid |

Placeholder media (`{ kind: 'placeholder', label }`) renders a 135° hatched stripe (`$color-surface` / `$color-surface-stripe`) with a 12px mono caption at the bottom, for example "screen — league detail". Use it for screenshots that don't exist yet, and replace it with real media as soon as the media exists.

### ImageLightbox

`src/components/ImageLightbox`. Case study cover and detail images are wrapped in a button (zoom-in cursor) that opens the image full size in a native `<dialog>`, with its alt text as a mono caption. It closes with Escape, the × button, or a click on the backdrop, and the page stops scrolling while it's open. The open/close behavior is shared with the contact form through `src/hooks/useModalDialog.ts`.

On the home page timeline, project images link to their case study instead. That image link is hidden from keyboard and screen readers because the title next to it already links to the same page.

### FactList

`src/components/FactList`. A semantic `<dl>` for short facts in an inner-page aside, such as Role, Stack, Timeline and Links, or Based, Work, Also and Resume. It uses the same 90px label column as labeled rows, 12px mono labels and 15px sans values, with a rule above and below every row. The `Links` row appears only when a project has links.

### PageAside

`src/components/PageAside`. The aside for every inner page, top to bottom:

1. A back link to home: a 32px avatar plus "← Cameron Makarchuk" in muted mono.
2. The intro: a mono eyebrow (year plus status tag on projects, "About" on About, "404" on the 404 page), a 44px serif title, and a serif lede.
3. A FactList, if there are facts.
4. The ContactPrompt (`regular`), then social links beneath a rule.

### ContactPrompt and ContactDialog

`src/components/ContactPrompt`. "Hiring, or need something built?" in quiet serif, then "Write to me →" in coral serif as an underlined button.

- `size='large'` (22px/26px) on home and `size='regular'` (20px/24px) on inner pages.
- The button opens a native `<dialog>` with the Formspree contact form. The dialog closes with Escape, the × button, or a click on the backdrop.
- Form fields use a mono 12px label, a `$color-surface` field, a `$color-rule` border, and a mint border on focus.
- The submit button is mono coral text with a coral border and no fill. Errors show in coral.

### SocialLinks

`src/components/SocialLinks`. Font Awesome brand icons (GitHub, LinkedIn, Instagram, X) at 19px in `$color-text-soft`, spaced 20px apart. Each link has visually hidden text for screen readers. Font Awesome loads from cdnjs with SRI hashes in `index.html`.

## Links and Interaction

Global link styles are in `src/App.scss`:

- Links inherit their color and use a 1px underline with a 4px offset.
- On hover, links drop to `opacity: 0.7` with a 160ms transition. That is the only hover effect in the system, so don't add movement, glows, or color shifts.
- Keyboard focus shows a 2px mint outline with a 3px offset on every focusable element.
- Links inside quiet text, such as BluePhoenix in the bio, use `$color-underline-muted` for the underline.
- Prev/next pager links and the back link have no underline.

Arrow conventions:

- `→` means go somewhere on this site: timeline titles, "Write to me", Next.
- `←` means go back: the home link, Previous.
- `↗` means leave the site: BluePhoenix, Code and Demo links. These open in a new tab.
- `↓` means a download: Resume.

Motion:

- Keep motion to opacity fades (160ms hover, 300ms Now fade).
- `prefers-reduced-motion` turns off smooth scrolling and transitions globally and stops the Now rotation.

## Pages

| Route | Page | Notes |
| --- | --- | --- |
| `/` | `src/pages/Home` | Bio aside, Now strip, timeline |
| `/projects/:slug` | `src/pages/Project` | Case study: cover and caption, then Problem / Built / Detail / Learned rows, then the prev/next pager |
| `/about` | `src/pages/About` | Portrait (4:5, max 520px), then Coaching / At 38 / Now / Carried over rows |
| `*` | `src/pages/NotFound` | "Nothing logged here." with a link home |

Case studies come from `projects` in `src/data/projects.ts`. That array is newest first, and it also sets the order for previous/next. To add a case study, add a `Project` to that array and reference it from a `projects` timeline entry.

## Imagery

Use real project screenshots, product screens, portraits, or system dashboards. Images should show the thing being discussed.

- Always show screenshots inside a MediaFrame, uncropped (`object-fit: contain`), on the flat surface color.
- Present app screenshots in a device mockup that is part of the image file: an iPhone for mobile apps (RecLeague, BrainStorm), and a dark laptop with a soft shadow and faint screen glare for desktop screens (Homelab, portfolio site). Generate laptop and phone mockups with `npm run mockups` (see `mockups/generate.ts`) rather than by hand, so frames stay consistent and can be regenerated after content changes. Don't add frames or shadows in CSS.
- When there's no real screen to show, a case study detail can be a small diagram of something true about the project (schema, architecture, user flow), drawn in the site's own style: hairline boxes, mono labels, and mint/coral accents on a transparent background at 400×300. Keep the SVG source in `mockups/diagrams` and add it to `mockups/config.ts` so the script renders it. Never mock up UI that didn't exist.
- The link preview image (`public/og-image.png`, 1200×630) is a `share-card` entry in `mockups/config.ts`: name, role and tagline on the left, the live home page on a laptop on the right. It's regenerated with the other mockups, so re-run `npm run mockups` after changing the home page.
- Portraits are the only images that crop. They use a circle for avatars (56px on home, 32px in the back link) and a 4:5 crop on About.
- Every image needs meaningful alt text. The back-link avatar is decorative (`alt=''`) because the name sits next to it.

Avoid:

- Abstract stock imagery
- Decorative images that don't carry information
- Filters, glows, or overlays on screenshots

## Content Voice

Voice should sound like Cameron: direct, curious, grounded, a little reflective, and comfortable with technical language.

Writing traits:

- Write in the first person.
- Prefer concrete verbs: built, shipped, learned, maintained, rebuilt, experimented.
- Connect software work to coaching history through systems, consistency, and training metaphors, and keep them light. Example: "Scope is a training program. Pick the few lifts that matter and do them well."
- Let the career pivot be part of the story without making every section about the pivot. It gets one coral line on the timeline.
- Keep it short: one-line summaries on the timeline, one paragraph per case study row.
- Use sentence case everywhere except status tags.
- Use a middle dot (`·`) to separate lists in one line ("React · Node · Express · MySQL", "Toronto · remote friendly").

Avoid:

- Startup buzzwords
- Grandiose claims
- Faux-hacker or system-status copy
- Overexplaining the interface
- Resume-only writing
- Generic "passionate about technology" phrasing

Good examples:

- "For fifteen years I coached people through physical change, first in a studio, then online."
- "Age 38. Went all in on software."
- "Self-hosted services, scripts and a Jellyfin media server. Where most of my tinkering happens."
- "Hiring, or need something built?"

## Applying The Brand Across Other Projects

When adapting the style outside the portfolio site:

- Keep the near-black background, warm off-white text scale, and the three-family type system (serif voice, sans structure, mono metadata).
- Keep the two-accent rule: mint for live or current, coral for the pivot or primary action.
- Build structure from hairline rules and a label column, not boxes.
- If a project has its own brand, use Cameron's system as a framing layer rather than overwhelming the project.

Project-specific guidance:

- **Portfolio or case study:** use the split layout and labeled rows as-is.
- **Resume or professional profile:** a single column with labeled rows (year or label on the left), serif for the summary, and mono for dates.
- **Developer tool or dashboard:** lean on Plex Sans and Plex Mono, with rules instead of panels. Use serif only for any narrative text.
- **Blog or writing page:** Source Serif for body at the 640px measure, with mono for dates and tags.
- **Slide deck:** a dark background, a large serif title, thin rules, a mono label on each slide, screenshot-forward layouts, and at most one accent per slide.

## Implementation Checklist

Before shipping a new branded surface:

- Uses tokens from `_theme.scss` and mixins from `_typography.scss` rather than raw values.
- Uses serif for voice, sans for structure, and mono for metadata.
- Uses mint only for live or current state and coral only for the pivot or primary action.
- Has no cards, panels, shadows, glows, gradients, textures, or rounded containers. Media frames are the only filled surfaces.
- Reuses `SplitLayout`, `LabeledRows`, `MediaFrame`, `FactList`, and `PageAside` before adding new layout components.
- Uses real project, person, or product imagery where imagery is needed, or the hatched placeholder until real media exists.
- Has visible keyboard focus and meaningful alt text.
- Respects `prefers-reduced-motion`.
- Reads like Cameron, not a generic developer portfolio template.
