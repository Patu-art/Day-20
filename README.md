# Day 20 — Smui Thai Massage

Day 20 of the 100 Days Local Business Website Challenge.

## Project

A frontend prototype for **Smui Thai Massage, Daventry, UK**. The concept is built around a real customer-journey problem: online appointments and schedule changes need a clearer single flow so customer requests, therapist availability, location and appointment state do not become disconnected.

This repository is a **design/prototype project**, not Smui's production booking system. Demonstration time slots are intentionally labelled as non-live.

## Design direction

**Thai Herbal Sanctuary** — a small contemporary Thai treatment house rather than a generic luxury-spa template.

- Deep tamarind, warm rice, turmeric, lemongrass and clay palette
- Fraunces display typography + Manrope UI typography
- Sen-inspired flowing-line motif
- Thai herbal/material references without resorting to temple, Buddha or lotus clichés
- Calm pressure/release motion rather than generic animation everywhere

## Core UX

- Need-based **Treatment Finder**
- Simplified signature-treatment presentation
- Four-step booking prototype: treatment → location → preferred time → contact
- Two Daventry locations kept visible in the customer journey
- Explicit distinction between a booking request and a confirmed production appointment
- Mobile navigation, reduced-motion support and keyboard-visible focus states

## Booking problem this prototype addresses

The UI is designed around one principle: **one booking should map to one shared record**.

A production implementation would require a real backend/database, therapist availability, collision prevention/slot locking, staff-side schedule management, notifications and confirmation handling. Those systems are deliberately not faked in this static GitHub Pages prototype.

## Structure

```
Day-20/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Asset status

The first prototype is intentionally asset-independent. Decorative CSS artwork is used so the page does not ship with broken placeholders or unlicensed third-party imagery.

The next pass will replace selected visual areas with genuine/local Smui assets after they are sourced and reviewed. Final project images should be stored locally rather than hotlinked.

## Technical notes

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript only
- No framework or animation library
- `prefers-reduced-motion` supported
- Static GitHub Pages compatible
- Booking availability in this prototype is demonstrative only

## Live demo

https://patu-art.github.io/Day-20/

## Status

**Prototype build:** complete  
**Real asset pass:** pending  
**Final visual/responsive QA after assets:** pending
