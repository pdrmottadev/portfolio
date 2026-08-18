# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Potential clients evaluating pdrmottadev for hire — people looking for someone to build a website, build an application, do data analysis, or take on DBA (database administration) work. Secondary audience: people who found the GSBD Util open-source tool and want to know who built it, reach the maintainer, or support the project.

## Product Purpose

A services portfolio ("portfólio de serviços oferecidos") that lets a prospective client review pdrmottadev's capabilities, see proof of real work, and make contact to hire. It also serves as the home base for the GSBD Util open-source project, including a way to support it via donation.

## Positioning

A cross-disciplinary combination of software development and hands-on database administration, demonstrated by a real shipped tool (GSBD Util) rather than claimed credentials: GSBD Util supports dumping/restoring across Microsoft SQL Server, MySQL, MariaDB, Oracle (limited), and Firebird 2.5 — breadth most single-discipline developers or DBAs would not have reason to build.

## Operating Context

- Static site, deployed to GitHub Pages via GitHub Actions (`.github/workflows/static.yml`) on push to `main`. No backend/server.
- GSBD Util itself is distributed separately via SourceForge (https://sourceforge.net/projects/gsbd-util/); the portfolio links out to it rather than hosting it.
- Donations for GSBD Util are collected via Pix (Brazil-specific instant payment) and, eventually, PayPal — separate from any client-services engagement.
- Bilingual audience: Portuguese (pt-BR) and English visitors, deliberately, not a single-language site with stray translations.

## Capabilities and Constraints

- Services offered (durable, confirmed): website development ("desenvolvimento de sites"), application development ("aplicações"), data analysis ("análise de dados"), and DBA/database administration.
- Site is static HTML/CSS/JS with no backend. Any contact form or dynamic behavior must work within that constraint (e.g. a third-party form endpoint or mailto — not a real server).
- Bilingual by design: Portuguese and English content must coexist in a structured way (e.g. per-section or toggled), not mixed inconsistently within the same sentence/section as in the current placeholder copy.
- Open decision: how bilingual content is structured (toggle vs. side-by-side vs. per-section) is not yet decided — a later design/build step should decide and confirm, not invent silently.

## Brand Commitments

- Handle/identity: "pdrmottadev".
- Contact: pdr.motta@gmail.com, GitHub https://github.com/pdrmottadev, LinkedIn https://www.linkedin.com/in/joao-pedro-ribeiro-da-motta-a6476416a/, Instagram https://www.instagram.com/pedro.motta.18/.

## Evidence on Hand

- Real project: **GSBD Util** — a database dump/restore tool. Compatible with Microsoft SQL Server, MySQL, MariaDB, Oracle (limited support), and Firebird 2.5. Distributed at https://sourceforge.net/projects/gsbd-util/.
- Donation: Pix key `5724d44b-7060-4794-942e-c2b0411acf57` (Brazil-only payment method), with a QR code image at `media/pix.png`. A PayPal donation link is intended but not yet provided — do not fabricate one.
- Contact channels: email and GitHub link above are real and confirmed.
- **Absent, do not fabricate:** no real bio/background text for About yet (real bio is coming from the user); no case studies or named clients for the web/app/data/DBA services beyond GSBD Util; no other projects beyond GSBD Util confirmed yet. The Projects section (`index.html`, `.projects` grid) is now structured to hold more project cards as they're confirmed — do not invent placeholder entries to fill it.

## Product Principles

1. **Credibility over claims.** Let the real open-source project (GSBD Util, its multi-DBMS breadth) carry the proof-of-skill weight rather than generic self-praise or invented case studies.
2. **Two intents, kept distinct.** "Hire me for services" and "support/discover GSBD Util" are related but different visitor goals — the site should serve both without forcing one narrative to explain the other.
3. **Bilingual by design, not by accident.** Portuguese and English coexist deliberately; structure must make the split legible rather than mixed mid-section.
4. **Static-site honesty.** No backend exists — nothing should look interactive (forms, dynamic features) unless it actually works within GitHub Pages' static constraints.
5. **Contact within reach.** A visitor evaluating services for hire should always be a click or two from email, GitHub, or a real contact path.
