# Bob & Sherry's 50th Wedding Anniversary Website

## Project Spec for Claude Code

---

## Overview

A single-page React site hosted on GitHub Pages with a custom domain (`bobandsherry50.com`) celebrating Bob & Sherry Hazleton's 50th wedding anniversary. The site evolves through three phases, progressively adding content as the event approaches and concludes.

**Event Details:**
- **Date:** August 8, 2026
- **Location:** del Alma Restaurant, Corvallis, Oregon
- **Guest Count:** ~35 people
- **Vibe:** Nostalgic, semi-formal

---

## Design Direction

### Aesthetic
- **Tone:** Warm, nostalgic, refined — not stuffy. Think vintage wedding invitation meets modern web design.
- **Color Palette:** Muted golds, warm creams/ivories, soft charcoal text. Gold is the traditional 50th anniversary color — lean into it tastefully without going gaudy. Consider a deep burgundy or sage green as an accent.
- **Typography:** A distinctive serif display font for headings (something with personality — Playfair Display, Cormorant Garant, or similar) paired with a clean, readable body font. Avoid anything that reads as generic tech/startup.
- **Photography Treatment:** Photos should feel warm and timeless. Consider subtle sepia/warm tone overlays or soft vignettes to unify photos from different eras.
- **Motion:** Gentle, elegant. Soft fade-ins on scroll, smooth carousel transitions. Nothing bouncy or playful — this is a celebration of 50 years, not a product launch.

### Layout Principles
- Mobile-first (many guests will receive this link via text or email and open on phones)
- Generous whitespace
- Content sections separated by subtle dividers or background color shifts
- Photos are the stars — give them room to breathe

---

## Phase 1: Save the Date (Deploy ASAP)

### Purpose
Beautiful, minimal announcement that communicates: "Save August 8, 2026 for Bob & Sherry's 50th Anniversary celebration."

### Sections (top to bottom)

#### 1. Hero Section
- Full-width hero with Bob & Sherry's wedding photo (user will provide image)
- Photo should have a warm overlay or treatment to set the tone
- Overlay text or text below the image:
  - "Bob & Sherry" (large, display font)
  - "Fifty Years" or "1976 – 2026" (elegant subheading)

#### 2. Save the Date Card
- Centered, card-like section (could have a subtle border or background)
- Content:
  - "Save the Date"
  - "August 8, 2026"
  - "Corvallis, Oregon"
  - "Formal invitation to follow"
- This section should feel like a physical save-the-date card — consider subtle paper texture or letterpress-inspired styling

#### 3. Photo Carousel
- Horizontal carousel of photos spanning their 50 years together (user will provide 8-15 photos)
- Smooth, auto-advancing with manual navigation (arrows + dots or swipe on mobile)
- Optional: subtle captions below photos (year or brief description)
- Consider a fade or slide transition between photos
- Accessible: keyboard navigable, pause on hover/focus

#### 4. Their Story (Optional narrative section)
- A brief, warm paragraph or two about Bob & Sherry
- Content to be written by Keith
- Placement: between the carousel and footer, set apart with a different background tone
- Could include a small accent photo or just be text
- Keep it short — this is a complement to the photos, not a biography

#### 5. Footer
- Simple, minimal
- "The Hazleton Family" or similar
- No links needed in Phase 1

### Technical Notes for Phase 1
- Placeholder/fallback images should be included so the site works before real photos are added
- Image optimization: photos should be lazy-loaded and appropriately sized (provide guidance for image dimensions in a README)
- The carousel should be touch-friendly for mobile

---

## Phase 2: Full Event Page (Deploy when invites go out)

### Purpose
Add event logistics. This becomes the canonical information page for guests.

### New/Updated Sections

#### 5. Event Details Section (NEW — insert between Save the Date card and Carousel)
- **When:** August 8, 2026 (add time once confirmed — leave a placeholder/TBD note)
- **Where:** del Alma Restaurant, Corvallis, Oregon
  - Include a link to the restaurant's website
  - Include a link to Google Maps or an embedded map
- **Dress Code:** Semi-formal (brief guidance if desired, e.g., "Cocktail attire suggested")
- **Adults Only:** Include a tasteful note: "We respectfully request an adults-only evening" (or similar gentle language — see below for placement)
  - This should be visually integrated, not a callout box or warning. Treat it like the dress code line — just another detail presented with the same warmth as everything else.

#### 6. Travel & Accommodations (NEW — after Event Details)
- Only needed if there are out-of-town guests
- Suggested hotels near del Alma
- Any relevant travel tips for getting to Corvallis (nearest airport, driving directions, etc.)
- Content TBD — build the section shell with placeholder content

#### 7. ~~RSVP Link~~ — REMOVED
- No RSVP on the website. The Paperless Post invitation will link *to* this site, not the other way around. Guests receive the invite via Paperless Post and RSVP there.

#### Update: Hero Section
- Consider whether the hero text should update from "Save the Date" language to celebration language
- The carousel may grow with additional photos

#### Update: Footer
- Minimal — no RSVP link needed since Paperless Post handles that separately

---

## Phase 3: Post-Event (Notes for future implementation)

> These are design notes, not build requirements for now. The site architecture should accommodate these additions without major refactoring.

### Changes
- **Hero:** Update messaging to "Celebrating 50 Years" or "Thank You for Celebrating With Us"
- **Remove:** "Save the Date" card, Travel & Accommodations
- **Add: Photo Gallery Section**
  - Grid layout of photos from the event
  - Lightbox view for full-size photos on click
  - Photos will be added manually by the site owner (not user-uploaded)
  - Consider masonry layout or uniform grid — either works
- **Add: Link to shared photo album**
  - A button/section inviting guests to view/contribute photos
  - Destination TBD (could be a self-hosted gallery, shared album, or simple link)
  - Just needs to be a styled link/button — the destination will be decided later

### Architecture Consideration
- The phase transitions should be manageable by editing a config or swapping section visibility — not a full rebuild each time
- Consider a simple config object or feature flags at the top of the main component:

```javascript
const SITE_CONFIG = {
  phase: 1, // 1 = save-the-date, 2 = full-event, 3 = post-event
  eventTime: "TBD", // Update when confirmed
  photoAlbumUrl: "", // Post-event photo sharing link
};
```

---

## Technical Requirements

### Stack
- **Framework:** React (single-page application)
- **Styling:** Tailwind CSS (or CSS modules — builder's choice, but keep it in a single deployable)
- **Hosting:** GitHub Pages
- **Domain:** `bobandsherry50.com` (configure via CNAME)
- **Build:** Vite or Create React App — whatever produces a clean static build for GitHub Pages

### Image Handling
- All photos stored in the repo (this is a small, private site — no CDN needed)
- Provide a `/public/photos/` directory structure with clear naming:
  - `/public/photos/hero/` — wedding photo for hero
  - `/public/photos/carousel/` — carousel photos
  - `/public/photos/gallery/` — Phase 3 event photos
- Include a README note about recommended image dimensions and compression
- Lazy loading for carousel and gallery images

### Carousel Implementation
- Use a lightweight library (e.g., Embla Carousel, Swiper, or similar) or build custom
- Requirements: auto-advance, manual navigation, touch/swipe support, keyboard accessible, responsive
- Smooth transitions (fade or slide)

### Accessibility
- Semantic HTML throughout
- Alt text on all images (can be generic for carousel: "Bob and Sherry, [year]")
- Keyboard navigation for carousel
- Sufficient color contrast (especially gold text on light backgrounds — test this)
- Responsive: must look great on mobile, tablet, and desktop

### Deployment
- GitHub Pages with GitHub Actions for automatic deploy on push
- CNAME file for custom domain
- HTTPS via GitHub Pages default

---

## File Structure (Suggested)

```
bob-and-sherry-50/
├── public/
│   ├── photos/
│   │   ├── hero/
│   │   │   └── wedding.jpg
│   │   ├── carousel/
│   │   │   ├── 1976.jpg
│   │   │   ├── 1980s.jpg
│   │   │   └── ...
│   │   └── gallery/        # Phase 3
│   ├── CNAME
│   └── favicon.ico         # Consider a gold "50" or monogram
├── src/
│   ├── App.jsx
│   ├── config.js            # SITE_CONFIG lives here
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── SaveTheDate.jsx
│   │   ├── PhotoCarousel.jsx
│   │   ├── EventDetails.jsx  # Phase 2
│   │   ├── Travel.jsx        # Phase 2
│   │   ├── TheirStory.jsx    # Optional narrative
│   │   ├── PhotoGallery.jsx  # Phase 3
│   │   └── Footer.jsx
│   ├── styles/
│   └── index.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deploy
├── package.json
├── vite.config.js
└── README.md                 # Photo guidelines, deployment notes
```

---

## Open Questions / Decisions for Later
- [ ] Event time (currently TBD)
- [ ] Exact photo set for carousel (Keith to curate)
- [ ] Hotel recommendations for Travel section
- [ ] "Their Story" narrative copy (Keith to write)
- [ ] Adults-only wording — final language TBD
- [ ] Post-event photo sharing solution (self-hosted vs. service vs. simple album link)
- [ ] Favicon: gold "50" — generate as SVG or simple graphic
