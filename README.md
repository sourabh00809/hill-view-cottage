# Hill View Cottage (HVC) — Tirumala

Boutique static site for a cottage / hotel / lodge on **Bhanumati Road, Garudadri Nagar, Tirumala, Tirupati (AP 517505)** — beside Sannidhanam Guest House.

> 4.2★ from **4,465 Google reviews** · Hotel · Cottage · Lodge

Live demo (after Vercel deploy): `https://hill-view-cottage.vercel.app` — update the URL in `index.html` canonical / OG tags and `sitemap.xml` if you use a custom domain.

## Why this exists
Portfolio project to replace a “client demo / placeholder” site with a production-grade, resume-ready build: no placeholders, real pricing, enquiry flow, and Vercel one-click deploy.

## Stack
- **HTML + CSS + vanilla JS** — no framework, no build step, no npm install
- Google Fonts (Fraunces + Inter), Unsplash images via CDN
- `vercel.json` for clean URLs and security headers

## Features
- Responsive, accessible (skip link, focus states, reduced-motion)
- Rooms with tariffs (₹1,499 / ₹2,499 / ₹3,499), amenities, gallery, map embed
- Testimonials (sourced from Google rating summary), FAQ, policies, nearby spots
- Enquiry form that builds a pre-filled **WhatsApp** message (no backend)
- Sticky mobile CTA (WhatsApp / Call / Directions)
- SEO: canonical, OG, Twitter, JSON-LD `Hotel`, sitemap, robots, manifest

## Run locally
Just open `index.html` — or:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy to Vercel
1. Push this folder to GitHub (root must be this site — `index.html` at repo root)
2. Vercel → Add New Project → Import `sourabh00809/hill-view-cottage` → Deploy (no build command, output dir `.`)

## Replace demo data before handover
- Phone: `+91 98765 43210` → owner number in `index.html` + `scripts/main.js` + JSON-LD
- Room photos: Unsplash URLs → real HVC photos in `#stay` + `#gallery`
- Update `og:image` if you add a real cover photo
- Set custom domain and update canonical / sitemap URLs

## Source
Google Maps listing CID `8134190655803957827` · Address: `M8FX7FV, Bhanumati Rd, HVC Road, beside Sannidhanam Guest House, Garudadri Nagar, Tirumala`

## License
MIT — portfolio/demo. Not the official HVC brand site until the owner adopts it.
