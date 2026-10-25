---
name: pdrmottadev Portfolio
description: A services portfolio presented as a living package-registry entry — badges, README structure, changelog, sponsor section.
colors:
  paper: "#f7f7f5"
  paper-raised: "#ffffff"
  ink: "#14161a"
  ink-soft: "#4a4d54"
  ink-faint: "#5b5e65"
  line: "#e3e2dc"
  line-strong: "#cfcec6"
  signal: "#1b7a4b"
  signal-ink: "#0f4a2d"
  signal-soft: "#e3f2e9"
  signal-on-dark: "#2fbb72"
  amber: "#d98f2b"
  amber-ink: "#7a4d13"
  amber-soft: "#fbeedc"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.75rem (2.75rem below 720px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.01em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "72px"
  9: "104px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  badge-status:
    backgroundColor: "{colors.signal-soft}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  badge-pending:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
---

# Design System: pdrmottadev Portfolio

## Overview

**Creative North Star: "The Registry Entry"**

The whole practice reads like a real, living package-registry page — the same grammar as npm, PyPI, or the SourceForge listing GSBD Util already lives on. A visitor scans it the way a developer scans a project before depending on it: a badge row for status, a terse description, an install-style call to action, a dependency list of services, a proof section for the one tool that actually ships, a changelog instead of a bio, and a sponsor section instead of a generic "support me" plea. Nothing performs liveness it doesn't have — badges are flat and static, not pulsing "live" indicators, because this is a static site describing real, confirmed facts, not a dashboard.

The system was chosen by rolling three visual-world candidates against the product's real content and audience (developers, DBAs, and technical clients evaluating a freelancer) and locking this one over an ER-diagram world ("The Data Model") and a cockpit-instrument world ("The Cross-Check"). It deliberately avoids the two ruts a developer-portfolio brief invites: the dark-terminal/neon-hacker aesthetic, and the generic SaaS-template hero-plus-card-grid.

**Key Characteristics:**
- Paper-light ground with a single confident signal-green accent and a secondary amber accent reserved for "not yet available."
- Monospace (JetBrains Mono) owns every piece of real metadata — badges, tags, nav labels, version numbers — never used as decoration.
- Bricolage Grotesque carries display weight (the wordmark, section headings); Hanken Grotesk carries reading text.
- Every surface commits to either a hairline border or a soft shadow, never both.
- Every interactive affordance (copy buttons, the mailto-composer contact form, the locale toggle) performs a real action — no decorative dead ends.

## Colors

Mostly paper and ink, with signal-green doing the work of "this is real and confirmed" and amber doing the work of "this is honestly not ready yet."

### Primary
- **Signal Green** (`#1b7a4b`): the system's one confident accent. Marks "available," "verified," proof links, active nav state, focus rings, and the terminal-prompt character. On dark surfaces (the CTA command block) it steps up to **Signal On Dark** (`#2fbb72`) to hold 4.5:1 contrast against ink.

### Secondary
- **Sponsor Amber** (`#d98f2b`): reserved exclusively for "pending / not yet available" — the PayPal sponsor card's dashed border and badge. Never used for anything that is actually ready.

### Neutral
- **Paper** (`#f7f7f5`): the page ground.
- **Paper Raised** (`#ffffff`): cards, inputs, elevated surfaces sitting on paper.
- **Ink** (`#14161a`): primary text, and the CTA command block's own background (a dark surface floating on the light page).
- **Ink Soft** (`#4a4d54`): secondary/body-adjacent text (descriptions, taglines).
- **Ink Faint** (`#5b5e65`): tertiary/meta text (section labels, captions, footer). Deliberately darker than a typical "muted gray" to clear 4.5:1 on both paper and white.
- **Line** / **Line Strong** (`#e3e2dc` / `#cfcec6`): hairline dividers and borders, two steps of emphasis.

### Named Rules
**The One Signal Rule.** Signal-green is the only color that means "true and available." Nothing else — not amber, not ink — is ever used to imply status.

## Typography

**Display Font:** Bricolage Grotesque (with ui-sans-serif, system-ui fallback)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular fallback)

**Character:** A grotesque pairing with real personality instead of the training-data defaults (Space Grotesk, IBM Plex, Inter-as-display) the category converges on. Bricolage Grotesque's slight quirk carries the wordmark and headings; Hanken Grotesk stays warm and legible for reading; JetBrains Mono gives every piece of real metadata a code-like, tabular-numeral register.

### Hierarchy
- **Display** (700, 4.75rem / 2.75rem below 720px, line-height 1, -0.03em tracking): the `pdrmottadev` wordmark in the hero. Appears once.
- **Title** (600, 1.25rem): card and subsection titles — `deps__name`, `package-card__name`, `sponsor-card__head h3`.
- **Body** (400, 1rem, line-height 1.6, max 68ch measure): all paragraph copy.
- **Label** (500, 0.75rem, +0.01–0.02em tracking, mono, lowercase): badges, nav tabs, section labels (`## services`), changelog tags, footer.

### Named Rules
**The Three-Step Rule.** Static body type uses exactly three sizes — 12px (label), 16px (body), 20px (title) — plus the one display step. No size is ever added between them; hierarchy comes from weight and color, not incremental px bumps.

## Layout

A single anchor-linked scrolling page, not a multi-route app: `#overview #services #proof #about #sponsor #contact`, navigated by a sticky top tab bar. Content sits in an 840px column, centered, with generous top padding per section (72px desktop / 48px mobile) so each `## section` reads like a distinct README heading. One breakpoint at 720px collapses two-column layouts (sponsor cards, contact grid, changelog entries) to one column and hides the wordmark/locale text from the topbar, keeping only icons and tabs.

## Elevation & Depth

Two shadow roles, used for surfaces that have **no border** — the system never stacks a hairline border and a diffuse shadow on the same element (that combination reads as a generic AI-template signature and was deliberately corrected out during finishing).

### Shadow Vocabulary
- **Card** (`0 1px 2px rgba(20,22,26,.05), 0 10px 28px -12px rgba(20,22,26,.16)`): the package-card and the CTA command block — surfaces meant to visually lift off the page.
- **Raised** (`0 1px 1px rgba(20,22,26,.04), 0 4px 12px -4px rgba(20,22,26,.1)`): lighter lift for the sponsor cards and the contact submit button.

Bordered surfaces (badges, compat-matrix chips, form inputs, the default sponsor card) stay flat — their edge is a 1px hairline, not a shadow.

### Named Rules
**The One Edge Rule.** A surface gets a border or a shadow, never both.

## Shapes

Radius steps by role: 6px (`sm`) for chips and form fields, 10px (`md`) for the icon tile and CTA block, 16px (`lg`) for cards, and full pill (999px) for every badge and button. No sharp corners anywhere — the registry-page world is soft-edged and typographic, not geometric.

## Components

### Buttons
- **Shape:** pill (999px radius).
- **Primary** (`contact-form__submit`): ink background, paper text, 12px/24px padding, Raised shadow.
- **Hover:** background steps to Signal Ink; `:active` nudges down 1px.
- **Ghost/inline copy buttons** (`cta-command__copy`, `sponsor-card__copy`): translucent paper-on-ink or bordered-on-paper pill, switching to solid signal-green with a check icon in its `.is-copied` state — the one state-driven color change in the system.

### Badges
- **Style:** pill, 1px `line` border, `paper-raised` background, mono label text, lowercase.
- **Status variant:** `signal-soft` background / `signal-ink` text, with a small static (non-pulsing) signal-green dot.
- **Pending variant:** `amber-soft` background / `amber-ink` text.
- **Link variant:** same shape, hover state borrows `signal-soft`/`signal-ink`.

### Cards / Containers
- **Package card** (`proof` section): no border, `radius-lg`, Card shadow, paper-raised background.
- **Sponsor card:** `radius-lg`, 1px `line` border, Raised shadow, flat (no shadow+border stacking exception — this one is genuinely a plain bordered card, no shadow token applied beyond `shadow-raised` alone). Pending variant swaps the border to dashed amber and drops to the plain `paper` background.
- **Internal padding:** 24–32px (`space-5`/`space-6`).

### Package card contents (`proof`)
Inside the package card, in order: a `package-card__meta` badge row (status badge first, then plain release-fact badges), the body paragraph, the compat matrix (engine chips with a muted `compat-matrix__ver` version suffix and a mono signal-ink note), and `package-card__section` blocks — each opened by a hairline rule and a mono `package-card__label`. The `features` grid (two columns, one below 720px) pairs a mono signal-ink key with body text, reusing the services list's `"kebab-name"` grammar. The `package-card__cli` block is the CTA command's dark surface at label size, with no copy button (nothing to act on) and no border or shadow (it sits inside a card).

### Projects list and the site card
`.projects` is a single-column list of package cards (each `id="project-<slug>"`), one per confirmed project; the hero's `projects: N` badge counts them in `script.js`. A website uses `package-card--site`: the usual head and meta badges, then a `site-preview` two-column grid (one column below 720px) — a hairline-bordered browser frame (mono URL bar over a 1280×800 WebP screenshot of the live home page, `media/projects/<slug>.webp`) beside the body text and an `under the hood` chip list that reuses the compat-matrix chips. Services may point at their proof with a `deps__proof` link — a mono kind (`Delivered project` / `In-house product`), a hairline divider, the project's name and an arrow, only when a real project backs it.

### Inputs / Fields
- **Style:** 1px `line-strong` border, `radius-sm`, `paper-raised` background, 16px text (deliberately ≥16px to avoid iOS zoom-on-focus).
- **Focus:** border steps to signal-green plus a 3px `signal-soft` glow ring — no default browser outline.
- **Hover:** border steps to `ink-faint`.

### Navigation
- **Style:** sticky top bar, translucent paper with backdrop blur, mono-set tabs. Default `ink-soft`, hover `ink`, active tab gets `signal-ink` text with a 2px signal-green underline, tracked via scroll position (`IntersectionObserver`).
- **Mobile:** wordmark text and locale label hide at ≤720px; icons and tabs remain, tab row scrolls horizontally.

### The Changelog Entry (signature component)
About-as-changelog: a left-rule timeline with a small signal-green node per entry, a mono tag (`role`, `practice`, `site v2.0.0`) in a signal-soft pill on the left, and prose on the right. Reused nowhere else — it exists specifically to make "About" read as a log of real, dated facts rather than a biography.

## Do's and Don'ts

### Do:
- **Do** use JetBrains Mono for anything that is real metadata — badges, tags, nav labels, version numbers, form field captions — never for decorative flourish.
- **Do** keep signal-green as the only color that means "true / available / verified"; amber only ever means "pending."
- **Do** give every elevated surface either a border or a shadow, never both (**The One Edge Rule**).
- **Do** make every interactive-looking element actually work: copy buttons copy, the contact form opens a real prefilled email, the locale toggle actually switches content.

### Don't:
- **Don't** use Space Grotesk, IBM Plex (Sans or Mono), Inter-as-display, or other saturated AI-default faces — this system was built specifically to avoid them (see the detector's `overused-font` finding this project corrected).
- **Don't** add a pulsing/glowing animation to a status indicator unless it reflects genuinely live, changing data — a flat colored dot with a clear label is the system's honest default.
- **Don't** introduce a third accent hue. Signal-green and sponsor-amber are the whole palette beyond neutrals.
- **Don't** stack a repeating-gradient or striped texture on a "pending/disabled" surface as a liveness cue — use a flat muted background and a dashed border instead.
