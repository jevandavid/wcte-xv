# WCTE VX 2027 - The Iconic Celebration Tour
## Interest Landing Page

**Project:** Early interest / waitlist capture page for WCTE's 15th Anniversary season (WCTE VX).

**Live Location (planned):** tour.wctedance.com or vx.wctedance.com

**Tech Stack:** Static HTML + Tailwind CSS + vanilla JavaScript (lightweight, Git-friendly, easy to deploy)

**Purpose:** 
- Announce the 2027 Iconic Celebration Tour
- Capture studio interest with no payment pressure
- Showcase confirmed dates + transparent TBDs
- Collect leads for early updates

**Key Stats to Feature:**
- 2,000+ studios
- 450+ competitions hosted
- $652,000+ in studio credits awarded

**Status:** In development

---

## Folder Structure

```
wcte-vx-2027/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/          ← Real media will go here
```

## Deployment Notes
- Will be deployed to a subdomain of wctedance.com
- DNS managed in GoDaddy
- Can be hosted on Netlify, Vercel, or Cloudflare Pages

## Assets (Current Placeholders)
- `assets/images/hero.jpg` — Hero background (generated placeholder)
- `assets/images/testimonial-*.jpg` — (Unused) Previous portrait placeholders; testimonials now use state abbreviation circles (IL/CT/ME)

## Logo System (Current)
- **Main WCTE Logo**: Used in Nav + Footer as the core brand anchor (text treatment).
- **WCTE VX Treatment**: Currently using large text treatment in the Hero ("WCTE VX" + "The Iconic Celebration Tour") instead of the custom logo file.
  - The file `wcte-vx-logo.png` is still in the images folder if you want to bring the image logo back later.
  - Placed in: Hero, above Tour Dates, above Interest Form.
- `assets/images/social-share-xv.jpg` — Instagram/TikTok share graphic (old version)

## Social Media Flyers (New)
- `flyer-square.jpg` — Square flyer (1080x1080) for Instagram / Facebook feed posts
- `flyer-stories.jpg` — Vertical flyer (1080x1920) for Instagram Stories & Reels
- `flyer-from-screenshot-square.jpg` — Square version made directly from the live website screenshot you provided
- `flyer-from-screenshot-stories.jpg` — Vertical version made directly from the live website screenshot you provided

These use the actual hero design from the current site.

**Note:** Old concept files have been cleaned up. Only the official `wcte vx logo.png` remains.

**Important:** All generated images are placeholders. Replace with real WCTE photography and final logo files when available.

## Next Steps
- [x] Full page with filterable tour dates
- [x] Interest form with city dropdown + routines question
- [x] Hero image placeholder
- [x] Testimonials section with real quotes
- [ ] Replace placeholder media with real WCTE assets
- [ ] Final review + deployment
