# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Potential clients evaluating pdrmottadev for hire — people looking for someone to build a website, build an application, do data analysis, or take on DBA (database administration) work. Secondary audience: people who found the GSBD Util tool and want to know who built it, reach the maintainer, or support the project.

## Product Purpose

A services portfolio ("portfólio de serviços oferecidos") that lets a prospective client review pdrmottadev's capabilities, see proof of real work, and make contact to hire. It also serves as the home base for the GSBD Util project, including a way to support it via donation.

## Positioning

A cross-disciplinary combination of software development and hands-on database administration, demonstrated by a real shipped tool (GSBD Util) rather than claimed credentials: GSBD Util does backup/restore and ships a SQL editor for SQL Server, MySQL/MariaDB, PostgreSQL, Oracle, Firebird and SQLite, on Windows, Linux and macOS — breadth most single-discipline developers or DBAs would not have reason to build.

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

- Real project: **GSBD Util** (facts from its README, 2026-10) — backup/restore utility and SQL editor. Distributed at https://sourceforge.net/projects/gsbd-util/.
  - Engines: SQL Server 2008–2022, MySQL 5.7–8.4, MariaDB 10.6–11.4, PostgreSQL 12+, Oracle (Data Pump), Firebird 2.5–5, SQLite 3.
  - v5.x: C# / .NET 10 + Avalonia, Windows / Linux / macOS 14+; v4.x was Delphi/VCL (legacy). UI in pt-BR and EN.
  - License: **freeware** (free for personal and commercial use; code and brand reserved), © 2019–2026. It is NOT open source — never call it that.
  - Features: SQL editor (per-tab sessions, autocomplete, editable grids, execution plans, CSV import, exports), object designer, scheduled backup jobs (retention, verify-by-restore, AES-256 zip, SFTP/S3/FTP copies, email alerts), schema compare and database copy, production guard, SSH tunnel, CLI (`gsbd-util backup --job <name>`).
  - Integration-tested in containers against 18 server versions.
- Client project: **laticiniosdovalle.com.br** (live) — company website pdrmottadev built for Laticínios Do Valle, a dairy in Palmital - PR (cheese, cream, concentrated whey, SIF-inspected). Astro static build, AVIF/WebP images, schema.org LocalBusiness, Open Graph, 8 pages incl. privacy/terms/cookies, WhatsApp CTAs, pt-BR only. Screenshot of its home page at `media/projects/laticiniosdovalle.webp`.
- Donation: Pix key `5724d44b-7060-4794-942e-c2b0411acf57` (Brazil-only payment method), with a QR code image at `media/pix.png`. A PayPal donation link is intended but not yet provided — do not fabricate one.
- Contact channels: email and GitHub link above are real and confirmed.
- **Absent, do not fabricate:** no real bio/background text for About yet (real bio is coming from the user); no case studies or named clients beyond GSBD Util and Laticínios Do Valle; no projects beyond GSBD Util and laticiniosdovalle.com.br confirmed yet. The Projects section (`index.html`, `.projects` list) holds one card per confirmed project — do not invent placeholder entries to fill it.

## Product Principles

1. **Credibility over claims.** Let the real open-source project (GSBD Util, its multi-DBMS breadth) carry the proof-of-skill weight rather than generic self-praise or invented case studies.
2. **Two intents, kept distinct.** "Hire me for services" and "support/discover GSBD Util" are related but different visitor goals — the site should serve both without forcing one narrative to explain the other.
3. **Bilingual by design, not by accident.** Portuguese and English coexist deliberately; structure must make the split legible rather than mixed mid-section.
4. **Static-site honesty.** No backend exists — nothing should look interactive (forms, dynamic features) unless it actually works within GitHub Pages' static constraints.
5. **Contact within reach.** A visitor evaluating services for hire should always be a click or two from email, GitHub, or a real contact path.
