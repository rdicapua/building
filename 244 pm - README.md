# Resident Portal — Redesign Concept

A working front-end concept for a more usable resident dashboard, put together for the Board's review after feedback that the current BuildingLink resident dashboard is hard to navigate — especially for senior residents — and buries everyday actions like requesting valet service.

This is a **static demo**: real HTML, CSS, and JavaScript, with no build tools and no backend. Every button works and shows what the interaction would feel like, but form submissions aren't wired to a real system. It's meant to give the Board and management something concrete to react to, not a drop-in replacement for BuildingLink.

**[View the live demo →](#deploying-this-demo)** (see deployment steps below — takes two minutes on GitHub Pages)

## What was wrong with the current dashboard

- The most frequently used action — **requesting valet** — is buried several clicks deep instead of being front and center.
- Dense menus and small text/icons are hard to read and navigate for senior residents.
- There's no visual hierarchy: routine tasks (calling the front desk, checking packages) and rare ones are given equal visual weight, so nothing stands out.
- No accommodation for residents who need larger text or higher contrast.

## What this redesign does differently

**1. The most-used actions are the first thing you see.**
A single row of large, plain-language buttons sits right under the header: Request Valet, Report a Repair, Reserve a Space, My Packages, Call Front Desk, Announcements. Valet is visually first and uses the accent color, since it was the specific pain point raised. No scrolling or hunting through menus required.

**2. Built for senior residents specifically.**
- Large base text (18px, scaling up further with the text-size control)
- High-contrast color palette by default, with an optional **"High contrast" mode** (black background, yellow/white text) for low-vision residents
- Big tap targets (every button is comfortably larger than the 44×44px minimum recommended for accessibility)
- Icon **and** text label on every button — never icon-only
- Plain language throughout ("Report a Repair," not "Submit Work Order")
- No hidden hamburger menus or nested navigation — everything relevant is visible on one page
- A visible text-size toggle (A / A / A) in a consistent spot at the very top

**3. Clear visual hierarchy.**
One primary action (valet) is color-highlighted; everything else uses a calm, consistent card style. Announcements, account balance, and payment history are still available but don't compete for attention with the daily-use buttons.

**4. Simple, guided interactions.**
Tapping any quick-action button opens a short, focused form (e.g., valet: "when do you need your car" + car description) instead of navigating to a separate page. A plain-language confirmation appears immediately after submitting, so residents know their request went through.

**5. Emergency and front-desk contact are always visible.**
A red emergency bar with the security line stays pinned in the footer of every screen, and front desk / property manager numbers are tap-to-call.

## Screenshots

| Desktop | Valet request | Mobile |
|---|---|---|
| ![Desktop dashboard](screenshots/dashboard-desktop.png) | ![Valet request modal](screenshots/valet-request-modal.png) | ![Mobile dashboard](screenshots/dashboard-mobile.png) |

**High contrast + large text mode**, for low-vision residents:

![High contrast and large text mode](screenshots/high-contrast-large-text.png)

## Deploying this demo

No build step needed — it's plain HTML/CSS/JS. To let the Board view it as a live link:

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then save.
4. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

Or, to preview locally before pushing anything: just double-click `index.html` — no server required.

## Customizing this for the actual building

Everything is in three plain files, no framework or build tools to learn:

- **`index.html`** — page structure and content. Update the building name (currently a placeholder, "Residence du Cap"), address, phone numbers, and announcement text here.
- **`styles.css`** — all colors, spacing, and font sizes. The color palette (navy / gold) is defined once at the top of the file as CSS variables (`--color-navy`, `--color-gold`, etc.) — change those two values to match the building's actual branding and every button/accent updates automatically.
- **`script.js`** — button and form behavior. This is where a developer would connect the "Send Valet Request," "Send Repair Request," etc. buttons to whatever system the building actually uses (BuildingLink's API, email, a work-order system, etc.) instead of the placeholder confirmation message.

## What this is *not*

- Not a BuildingLink replacement or integration — it doesn't talk to BuildingLink's servers.
- Not a finished production app — form data currently isn't sent or stored anywhere.
- Not a claim about what's technically possible within BuildingLink's existing platform — this is a proposal for what a better layout *could* look like, to guide a conversation with the Board and/or BuildingLink about requested improvements.
