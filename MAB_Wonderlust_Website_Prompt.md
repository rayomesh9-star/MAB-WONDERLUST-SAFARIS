# MAB WONDERLUST SAFARIS — Website Creative Brief & Build Prompt

*"Every Journey, A New Wonder"*

---

## 1. THE PROMPT (copy this to brief a designer/developer — or Claude)

> Design and build a single-page, scroll-driven marketing website for **Mab Wonderlust Safaris**, a Kenya-based tourism company offering wildlife safaris, cultural & heritage tours, indigenous & spiritual journeys, nature/adventure travel, conservation experiences, storytelling tours, and fully customized private/family/group journeys.
>
> The site should feel **cinematic, warm, and alive** — like the first light of an African sunrise. It should NOT feel like a generic template. Use the exact brand palette below, generous whitespace, large evocative typography, and layered parallax/scroll animation to create a sense of movement and journey as the user scrolls — mirroring the brand promise "Every Journey, A New Wonder."
>
> Build it as a **single self-contained HTML file** (inline CSS + JS, no build step), using scroll-triggered reveal animations, magnetic/tilt hover effects on cards and buttons, a subtle parallax sunset-and-savanna hero, and smooth section transitions. Optimize for both desktop and mobile, respecting reduced-motion preferences.

---

## 2. BRAND COLOR PALETTE (sampled directly from the logo)

| Role | Color | Hex |
|---|---|---|
| Primary — Sunset Orange | 🟠 | `#ED9A0C` |
| Gradient highlight — Golden Amber | 🟡 | `#F1C063` |
| Ink / Headings — Charcoal Black | ⚫ | `#151210` |
| Background accent — Moonlight Cream | ⚪ | `#FAF7D4` |
| Secondary accent — Terracotta (tagline color) | 🟤 | `#DB9A64` |
| Base page background | ⚪ | `#FDF9F0` (warm off-white, not stark white) |
| Body text | ⚫ | `#2A2420` (soft charcoal, easier to read than pure black) |

**Signature gradient** (use for hero backdrop, section dividers, button hovers):
`linear-gradient(180deg, #F1C063 0%, #ED9A0C 55%, #C9780A 100%)` — mimics the logo's sunset dome exactly.

---

## 3. TYPOGRAPHY DIRECTION

- **Headlines:** a tall serif with safari/editorial character — e.g. *Fraunces*, *Playfair Display*, or *Bodoni Moda* (the logo's serif wordmark suggests classic travel-brand elegance). Use wide letter-spacing on all-caps headlines like the logo ("MAB WONDERLUST SAFARIS").
- **Tagline/accent text:** italic serif in terracotta, echoing *"Every Journey, A New Wonder"* styling from the logo.
- **Body copy:** a clean humanist sans — e.g. *Inter*, *Outfit*, or *Sora* — for readability and modern contrast against the serif headlines.
- Load fonts via Google Fonts.

---

## 4. SITE STRUCTURE & CONTENT (from the company profile)

**1. Hero**
- Full-bleed animated sunset/savanna scene (layered SVG silhouettes: acacia trees, elephants, birds — echoing the logo) with parallax drift on scroll/mouse-move.
- Headline: "DISCOVER KENYA. EXPERIENCE AFRICA. CREATE MEMORIES."
- Sub: "Every Journey, A New Wonder."
- Two CTAs: *Explore Our Safaris* / *Plan Your Journey* — magnetic hover buttons that glow amber on hover.

**2. Introduction — "Your Journey Begins With Wonder"**
- Short narrative paragraph from the profile (Kenya's contrasts, the brand's role).
- Fade/slide-up reveal as it enters viewport.

**3. What We Offer — Safaris & Tours (grouped, not all 9 as a flat list)**
Organize as 4 tappable/hoverable category cards, each expanding or linking to a filtered detail:
- 🐘 **Safari & Wildlife** — Wildlife Safaris, Game Drives, Nature Experiences, Conservation
- 🎭 **Culture & Heritage** — Cultural Tours, Indigenous Journeys, Storytelling, Historical Sites
- 🌄 **Adventure & Nature** — Nature Tours, Adventure Tours, Outdoor Experiences
- 🚐 **Customized Travel** — Private/Family/Group Tours, Custom Packages, Accommodation & Travel Arrangements

Cards: image-tilt-on-hover (subtle 3D perspective), title slides up, icon rotates in.

**4. Our Story**
- Split layout: text left, image-collage right (or vice versa) with a scroll-parallax image stack.
- Key line to feature large: *"We don't simply take you to places. We help you experience them."*

**5. Mission / Vision / Values**
- Mission & Vision as two large pull-quote panels on a dark charcoal section (contrast break from the warm tones) with amber underline accents.
- 6 Core Values (Authenticity, Discovery, Connection, Respect, Conservation, Excellence) as a hover-reveal icon grid — icon flips or glows amber on hover, revealing the one-line description.

**6. Why Travel With Us**
- 5 feature rows (Authentic Experiences, Personalized Journeys, Kenya at the Heart, Meaningful Travel, Adventure & Discovery) with alternating image/text layout and scroll-triggered slide-in from left/right.

**7. Travel Philosophy**
- Full-width, dark, editorial section: *"Travel. Discover. Connect. Remember."*
- Animated typewriter or line-by-line fade for: "A safari is not only about seeing an elephant. A cultural tour is not only about visiting a community..."

**8. Who We Serve**
- Horizontal auto-scrolling / draggable marquee of traveler types (Families, Couples, Solo Travellers, Corporate Groups, Photography Enthusiasts, etc.) as pill tags.

**9. About Us (can be its own anchor/section)**
- Company description + "Our Promise" quote treatment, same as story section styling.

**10. Contact / Start Your Journey**
- Warm gradient CTA band.
- Phone: +254 713 002755 · Email: mabwonderlustsafaris@gmail.com · Location: Mfangano Street, Nairobi, Kenya
- Simple animated contact form (name, email, journey interest, message) with focus-glow input states.
- Social follow CTA: "Follow us. Discover with us. Travel with us."

**Footer**
- Logo mark, nav links, socials, tagline, © line.

> **Note carried from the brochure:** founding year, team/directors, specific destinations, accommodation partners, fleet, certifications, pricing and booking process are **not specified** in the source material — leave these out or mark as placeholders rather than inventing details.

---

## 5. CREATIVE MOTION & INTERACTION DIRECTION

- **Hero parallax:** acacia tree silhouettes + elephant herd drift at different speeds on scroll (multi-layer parallax), sun/moon glows pulse softly (slow `@keyframes` opacity breathing).
- **Scroll reveals:** IntersectionObserver-driven fade-up + slight scale-in for every section (stagger children ~80ms apart).
- **Magnetic buttons:** CTA buttons subtly follow the cursor within a small radius (transform: translate based on mouse offset), with an amber glow/shadow bloom on hover.
- **Card tilt:** service/value cards tilt in 3D (perspective transform) toward the cursor position — restrained, ~6–8° max.
- **Custom cursor (optional, desktop only):** small circular cursor that expands into a ring over clickable elements.
- **Section dividers:** torn/organic SVG wave or horizon-line shapes in the gradient palette between light and dark sections, animated to subtly shift on scroll.
- **Nav bar:** transparent over hero, morphs to solid cream/blur (backdrop-filter) with a bottom border-glow after scrolling past hero.
- **Number/stat counters** (if you add trust stats later): count-up animation on viewport entry.
- **Image treatments:** grayscale-to-color transition on hover for gallery/service images, echoing the black silhouette → golden sunset motion of the logo itself.
- **Reduced motion:** respect `prefers-reduced-motion` — disable parallax/tilt, keep simple fades only.
- **Performance:** animations via CSS transforms/opacity (GPU-friendly) and IntersectionObserver, not scroll-jank-prone libraries; keep total page weight light (inline SVGs, no heavy external images required — can start with elegant SVG/CSS scenery in the brand palette, matching the logo's own silhouette style).

---

## 6. SUGGESTED TECH APPROACH

- Single `index.html`, inline `<style>` and `<script>`.
- Fonts: Google Fonts (`Fraunces` or `Playfair Display` + `Inter`).
- Icons: inline SVG (safari/African motif icons — paw, tree, compass, drum, mountain, camera).
- Animation: vanilla JS + IntersectionObserver + CSS transitions/keyframes (no heavy dependency needed); AOS.js or GSAP from cdnjs are fine optional upgrades if richer easing is wanted.
- Fully responsive: mobile stacks all split-sections, disables tilt/magnetic effects, keeps fades.

---

*Ready when you are — I can build this out as a live, hosted page (with all the hover/parallax/reveal effects described above) whenever you'd like me to start.*
