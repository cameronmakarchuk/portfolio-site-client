# Cameron Makarchuk Personal Brand Style Guide

This guide captures the visual and editorial system behind the redesigned portfolio site. Use it as the source of truth when extending the current site, creating related project pages, or asking Codex to produce work that should feel like Cameron's personal brand.

## Brand Essence

Cameron's brand should feel like a developer logbook with a pulse: technical, reflective, warm, and always in motion. It carries the story of a coach turned software developer without making the design feel nostalgic or soft. The visual language should suggest systems, tooling, experiments, and craft.

Core attributes:

- Technical but human
- High-signal, low-fluff
- Dark, precise, luminous
- Builder-oriented
- Reflective without becoming sentimental
- Confident without sounding overproduced

Avoid:

- Generic SaaS gradients
- Overly corporate portfolio polish
- Beige wellness/coaching aesthetics
- Neon overload
- Cute or whimsical tech motifs
- Explaining the UI inside the UI

## Visual Direction

The design language is a restrained cybernetic interface layered over personal storytelling. It should feel like an operating console for a builder's career: panels, signals, status labels, timelines, project cards, command-like links, and subtle motion.

Use dark surfaces as the foundation. Let the accents behave like signals: cyan for active systems, coral for momentum and transformation, lime for life/current status, amber for milestones and craft history. Purple is a supporting bridge between warm and cool accents, not the main brand color.

The brand should never become a one-color theme. Every major screen should balance cool and warm accents.

## Color System

Canonical Sass tokens live in `src/styles/partials/_theme.scss`.

Primary neutrals:

| Token | Value | Use |
| --- | --- | --- |
| `$color-bg` | `#090914` | Root background, modal backdrop base, deep page fields |
| `$color-bg-soft` | `#141421` | Section bands, stronger dark contrast |
| `$color-bg-panel` | `rgba(255, 255, 255, 0.035)` | Default translucent panels |
| `$color-bg-panel-strong` | `rgba(255, 255, 255, 0.065)` | Stronger panel state |
| `$color-text` | `#f3eadf` | Primary text |
| `$color-text-muted` | `#aaa0b2` | Body copy, secondary text |
| `$color-text-faint` | `rgba(170, 160, 178, 0.62)` | Metadata, low-priority labels |
| `$color-border` | `rgba(255, 255, 255, 0.12)` | Default hairline borders |
| `$color-border-strong` | `rgba(255, 255, 255, 0.22)` | Emphasized borders |

Accent colors:

| Token | Value | Role |
| --- | --- | --- |
| `$color-cyan` | `#38bdf8` | Active system state, primary tech signal, focus and links |
| `$color-coral` | `#ef8354` | Transformation, action, warmth, personal pivot |
| `$color-lime` | `#b8f2e6` | Current status, alive/available markers, growth |
| `$color-amber` | `#d9b26f` | Milestones, experience, history, craft |
| `$color-purple` | `#7c6f9f` | Bridge tone, gradient support, depth |

Usage rules:

- Keep the page background near black.
- Use warm off-white text instead of pure white.
- Use muted lavender-gray for secondary text.
- Use accent colors sparingly, mainly for status, hierarchy, borders, glows, and active states.
- Pair cyan with coral or amber often enough that the design does not read as a generic blue tech UI.
- Use lime for "online", "now", "available", or growth signals.
- Use purple as a gradient support color, not as a dominant field.

## Typography

Primary font:

- `Mona Sans`
- Variable weight range: 200 to 900
- Variable stretch range: 75% to 125%
- Used for display, body, cards, forms, and general UI

Monospace stack:

- `SFMono-Regular`, `Cascadia Code`, `Roboto Mono`, `Liberation Mono`, `ui-monospace`, `monospace`
- Used for metadata, labels, nav, commands, counters, tags, status text, and interface-like copy

Display type:

- Large headings should be bold, tight, and compressed in feel.
- Use weights around 800.
- Use very tight line-height around `0.9` to `0.96`.
- Existing display headings use negative letter spacing, but when creating new UI follow the current frontend instruction to avoid negative letter spacing unless preserving existing site style exactly.
- Use italic emphasis rarely. Prefer `em` in headings as a color accent with normal font style.

Body type:

- Body copy should feel calm and readable.
- Use line-height around `1.65` to `1.7`.
- Avoid oversized paragraphs in dense tool surfaces.
- Keep paragraphs direct and grounded.

Mono labels:

Use this pattern for recurring metadata:

```scss
@mixin mono-label {
	font-family: $font-mono;
	font-size: 0.72rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	line-height: 1.2;
	text-transform: uppercase;
}
```

Use mono labels for:

- Section kickers
- Navigation items
- Status chips
- Tags
- Dates
- Timeline years
- Command-style links
- Project metadata

## Layout

Base shell:

- Dark full-page background.
- Maximum content width: `1180px`.
- Mobile padding: `4rem 1.25rem`.
- Tablet padding: `5.5rem 2rem`.
- Desktop padding: `6rem 3rem`.
- Breakpoints: `768px` and `1280px`.

Composition rules:

- Use full-width page sections rather than nested cards.
- Use cards for repeated items, framed media, modals, project panels, and timeline entries.
- Give each major section a strong heading and metadata line.
- Let layout feel like a sequence of system panels and logs.
- Prefer grid layouts with clear rhythm over loose floating compositions.
- Keep first viewport brand-forward: name, role, portrait, and system identity should be visible quickly.

Hero layout:

- The hero should be immersive and content-rich.
- Use a large typographic statement.
- Pair personal narrative with a framed profile/media module.
- Include status-like microcopy, but keep it meaningful.
- Do not turn the hero into a marketing landing page.

## Surfaces And Panels

Default panel styling is defined by `cyber-panel`.

```scss
@mixin cyber-panel($accent: $color-cyan) {
	position: relative;
	background:
		linear-gradient(135deg, rgba($accent, 0.1), transparent 44%),
		$color-bg-panel;
	border: 1px solid $color-border;
	border-radius: $radius-panel;
	box-shadow:
		0 0 0 1px rgba($accent, 0.08),
		0 1.5rem 4rem rgba(0, 0, 0, 0.28);
	overflow: hidden;
}
```

Panel rules:

- Radius should be restrained: `0.5rem` by default.
- Borders should be thin and translucent.
- Glows should be soft and functional.
- Avoid pill-shaped containers except for tags and small status chips.
- Use subtle accent gradients inside panels, not large decorative blobs.
- Do not place UI cards inside other cards.

## Texture And Effects

Approved effects:

- Subtle page-level grid
- Very low-opacity scanline overlay
- Soft colored glows on active accents
- Thin borders
- Backdrop blur on sticky nav and modal backdrop
- Small hover translation of `-1px`
- Marquee/ticker motion when non-essential and hidden from assistive tech

Effect rules:

- Effects should feel like interface atmosphere, not decoration.
- Use grid texture as a background layer only.
- Keep glow tied to meaningful elements such as marks, active links, stats, and accent nodes.
- Respect `prefers-reduced-motion`.

Avoid:

- Decorative orbs
- Bokeh
- Generic gradient blobs
- Heavy glassmorphism
- Excessive shadows
- Dark blurred stock imagery

## Components

### Navigation

Navigation should feel like a system header.

- Sticky top nav.
- Semi-transparent dark background.
- Thin bottom border.
- Monospace brand/meta text.
- Geometric mark.
- Numbered nav links on tablet and larger screens.
- A single action button.

### Buttons

Button rules:

- Use monospace uppercase labels.
- Use restrained radius.
- Primary buttons use a coral-to-purple gradient.
- Ghost buttons use cyan text, cyan border, and a subtle inset glow.
- Hover/focus may lift by `-1px` and intensify border/glow.
- Keep actions short: "View builds", "Read the journey", "Connect".

### Cards

Card rules:

- Use `cyber-panel`.
- Bind each card to an accent when it represents a status, project, or timeline item.
- Use clear headings, metadata, and concise body copy.
- Project cards should pair media with descriptive content.
- Timeline cards should feel like logged events.

### Tags

Tag rules:

- Monospace.
- Uppercase is acceptable when tags are UI metadata.
- Use pill shapes for compact labels.
- Use accent color, faint accent background, and accent border.

### Forms And Modals

Form rules:

- Inputs use translucent dark fields with thin borders.
- Focus states use cyan border and glow.
- Labels use mono-label styling.
- Error text uses coral.

Modal rules:

- Modal panel uses the same panel language.
- Backdrop should blur and darken without hiding the overall brand atmosphere.
- Close controls should be compact and familiar.

## Imagery

Use actual project screenshots, product screens, portraits, or system dashboards. Images should reveal the thing being discussed.

Image treatment:

- Keep screenshots crisp and inspectable.
- Place project images inside accented media fields.
- Use `object-fit: contain` for app screenshots and dashboards.
- Use subtle drop shadows.
- Use portrait treatment with gradient border and HUD-like overlay only when it supports the personal system identity.

Avoid:

- Abstract stock imagery
- Overly dark/cropped photos where details are unreadable
- Decorative images that do not carry information
- Placeholder illustrations when real product or project media exists

## Content Voice

Voice should sound like Cameron: direct, curious, grounded, a little reflective, and comfortable with technical language.

Writing traits:

- First-person is allowed.
- Prefer concrete verbs: built, shipped, learned, maintained, rebuilt, experimented.
- Connect software work to coaching history through systems, trust, consistency, and transitions.
- Let the career pivot be part of the story without making every section about the pivot.
- Use "builder", "developer", "systems", "experiments", "projects", "work", "journey", and "logbook" naturally.

Avoid:

- Startup buzzwords
- Grandiose claims
- Faux-hacker copy
- Overexplaining the interface
- Resume-only writing
- Generic "passionate about technology" phrasing

Good examples:

- "Developer, builder & constantly improving"
- "What has my attention right now"
- "Projects, experiments, and things I am building"
- "The coaching business that shaped how I think about systems, trust, consistency, and helping people move through hard transitions."

## Interaction

Interaction should be clear and quiet.

- Links and buttons should have visible hover and focus states.
- Motion should be fast and subtle, around `160ms`.
- Avoid complex animation unless it communicates system state.
- Keep interactive elements accessible by keyboard.
- Use `aria-hidden` for decorative ticker loops and HUD effects.
- Respect reduced motion.

## Responsive Rules

- Mobile should remain dense but readable.
- Navigation hides middle links on smaller screens.
- Hero stacks naturally, with profile card below or alongside content depending on width.
- Project cards become two-column layouts at tablet widths.
- Stats use two columns on mobile and four columns on tablet.
- Never let long metadata strings break layout; allow wrapping or use `word-break` when needed.

## Applying The Brand Across Other Projects

When adapting the style outside the portfolio site:

- Preserve the dark technical foundation, warm/cool accent balance, Mona Sans/monospace pairing, and panel system.
- Adapt content density to the project. A dashboard should be more utilitarian; a personal landing page can be more expressive.
- Use real screenshots or generated bitmap imagery only when they clarify the subject.
- Keep the voice direct and personal when Cameron is the speaker.
- If a project has its own brand, use Cameron's system as a framing layer rather than overwhelming the project.

Project-specific guidance:

- Portfolio or case study: use the full expressive system.
- Resume or professional profile: reduce glow, keep typography and accents.
- Developer tool or dashboard: keep panels, mono labels, compact controls, and restrained effects.
- Blog or writing page: reduce interface texture, preserve type, color, and section rhythm.
- Slide deck: use dark backgrounds, large tight headings, thin rules, accent markers, and screenshot-forward layouts.

## Implementation Checklist

Before shipping a new branded surface:

- Uses the canonical color tokens or an intentional translation of them.
- Balances cyan with at least one warm accent.
- Uses Mona Sans for primary type and monospace for metadata.
- Keeps cards and panels to `0.5rem` radius unless there is a strong reason.
- Uses real project/person/product imagery where imagery is needed.
- Avoids decorative orbs, generic gradient blobs, and stock-feeling visuals.
- Includes accessible focus states.
- Respects reduced motion.
- Reads like Cameron, not a generic developer portfolio template.
