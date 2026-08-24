# OnlinePrint.ge — Website System Design
## Premium Print-on-Demand Platform — Visual & Spatial Architecture

---

## 1. Design Philosophy

The OnlinePrint.ge website should feel less like a conventional printing-service website and more like a premium digital studio for turning digital files into physical objects.

The visual experience should communicate three ideas simultaneously:
* **Simplicity** — printing should feel effortless.
* **Trust** — the user should immediately understand what they are ordering and how it works.
* **Emotion** — photography and printed memories should feel tangible and valuable.

The interface should therefore avoid the typical visual language of printing companies: dense tables, excessive technical information, generic stock photography, and rigid symmetrical layouts.

Instead, the design uses:
* editorial whitespace,
* asymmetrical compositions,
* layered cards,
* tactile paper-like surfaces,
* photographic elements,
* restrained motion,
* large typography,
* subtle borders and shadows,
* coral accent moments,
* and strong visual hierarchy.

The page should feel modern, warm, minimal, premium, and distinctly physical.

---

## 2. Global Design System

### Color Architecture
The page is built around a warm neutral foundation rather than a cold technological interface.

* **Primary Background (`#FDFBF7`)**  
  Used as the dominant page background. It gives the interface a warm paper-like quality and visually connects the digital interface with the physical nature of printed products.
* **Surface (`#FFFFFF`)**  
  Used for elevated cards, upload panels, pricing cards, and other interactive surfaces.
* **Subtle Surface (`#FAF8F5`)**  
  Used inside secondary containers, upload areas, segmented controls, and supporting visual regions.
* **Primary Text (`#1A1A1A`)**  
  Used for headlines, navigation, prices, important labels, and primary interface elements.
* **Secondary Text (`#706E6B`)**  
  Used for descriptions, supporting information, metadata, and less prominent navigation elements.
* **Accent (`#E05A47`)**  
  The coral accent is the primary action color. It should be used selectively for:
  * brand emphasis,
  * active states,
  * primary CTAs,
  * hover states,
  * important highlights,
  * featured pricing,
  * and small decorative details.  
  *Note: The accent should never dominate the entire interface.*
* **Borders (`#E8E5DF`)**  
  Very subtle borders define surfaces without creating a heavy card-based appearance.

---

## 3. Typography System

The current implementation uses **Noto Sans Georgian**, ensuring that the Georgian-language interface remains visually consistent and readable. Typography should have a strong editorial hierarchy.

### Hero Heading
Large, confident typography:
* Approximately 48px desktop
* Weight 700
* Line-height around 1.15
* Slightly tightened letter spacing

The headline should occupy a relatively narrow text block rather than stretching across the entire screen.  
*Example:*
> **დაბეჭდე რეალური მოგონებები.**

The heading should feel like a statement rather than a marketing slogan.

### Section Headings
* Approximately 36px, weight 700.
* Introduced major content areas such as:
  * `რას გთავაზობთ?`
  * `დაბეჭდე მარტივად, მიიღე ხარისხიანად.`

### Body Text
* 16–18px depending on context.
* Body copy should remain relatively light and spacious, using the muted text color for secondary information.

### Navigation
* 14–15px with medium weight.
* Navigation should remain visually quiet so that the primary content and CTA remain dominant.

---

## 4. Global Layout Grid

* The desktop experience should use a centered content container approximately **1100px wide**, with **24px horizontal page padding**.
* The grid should not feel mechanically symmetrical even though it is technically grid-based.
* Large sections should alternate between:
  * balanced compositions,
  * asymmetric compositions,
  * full-width surfaces,
  * floating cards,
  * and editorial image arrangements.

The user should experience a rhythm of:  
`content` → `whitespace` → `interaction` → `visual object` → `information` → `action`.

*Avoid filling every available area. Negative space is an intentional component of the design system.*

---

## 5. Header / Navigation

The header is a compact, floating-feeling navigation layer. It remains visually lightweight and should never compete with the hero.

### Spatial Structure
The navigation consists of three horizontal zones:

* **Left:** `OnlinePrint.ge` logo.
* **Center:** 
  * Services
  * Pricing
  * About
  * Contact
* **Right:** Primary CTA — `შეკვეთა`

The logo uses dark text with `.ge` highlighted in the coral accent. The navigation background is warm off-white with approximately 95% opacity and a subtle blur effect, creating a soft translucent appearance while scrolling. A thin bottom border separates the navigation from the content without creating a heavy header.

### Interaction
* Navigation links use muted gray by default.
* On hover, text transitions toward `#1A1A1A`.
* The CTA is dark by default and changes to coral on hover.
* The CTA should feel like a pill-shaped action rather than a traditional rectangular button.

---

## 6. Hero — "Digital File → Physical Memory"

The hero is the primary visual statement of the website. It should not immediately look like a generic upload form. Instead, it should establish an emotional relationship between digital content and physical printing.

### Spatial Composition
* Desktop uses a two-column composition.
* The left side contains the editorial introduction.
* The right side contains the main printing/upload interaction.
* The two areas should have different visual weights: the left side should feel open and editorial, while the right side should feel like a physical workstation.

### Left Hero Area
Large headline:
> **დაბეჭდე რეალური მოგონებები.**

Below it, supporting text explains that users can print photographs, Polaroid-style images, and official documents with delivery throughout Georgia. The copy should remain short.

The visual hierarchy is:  
`Headline` → `explanation` → `physical photo composition`  
*(rather than Headline → paragraph → button).*

### Photo Composition
Under or partially beside the introductory text, photographs should appear as physical printed objects. Instead of a standard image gallery, use two or more overlapping photo cards.

Each card should resemble an actual printed photograph:
* white paper border,
* subtle shadow,
* slightly imperfect rotation,
* rounded corners,
* photographic content.

One photograph can rotate approximately **-2deg**. Another can rotate approximately **+3deg** and sit slightly lower. This creates the impression that printed photographs have been placed casually on a desk.

*On hover, the photograph straightens and scales slightly. This interaction reinforces the physical/tactile concept.*

---

## 7. Upload / Ordering Surface

The upload interface is the primary conversion component of the hero. It should look like a premium physical print-order station, not a generic software upload box.

### Card Structure
The upload card is:
* white,
* rounded (approx. 16px radius),
* subtly bordered,
* elevated with a soft shadow,
* generously padded.

The card should visually float above the warm background.

### Mode Selector
At the top of the card is a compact segmented control with two modes:
1. `🖼️ ფოტოები`
2. `📄 დოკუმენტები`

The selector uses a soft beige background. The active mode sits inside a white pill with a subtle shadow. This makes the interaction resemble a physical control switch.

### Drop Area
The main upload zone is a lightly contrasting surface using:
* `#FAF8F5`
* dashed border
* rounded corners
* generous vertical padding.

The interface should communicate: `Drop` → `Select` → `Configure` (rather than presenting a technically complex file-management interface).

The icon is large and centered. The primary instruction appears below it, and supporting file-format information is smaller and muted.

### Dynamic State
When the user switches from Photos to Documents, the icon, title, and supported formats change without a page reload:

* **Photo mode:**
  * Main text: `ჩააგდეთ ფოტოები აქ`
  * Supporting text: `ან დააჭირეთ ასარჩევად (JPG, PNG)`
* **Document mode:**
  * Main text: `ჩააგდეთ დოკუმენტი (PDF, DOCX) აქ`
  * Supporting text: `ან დააჭირეთ ასარჩევად (MAX 50MB)`

---

## 8. Primary CTA

The upload action is represented by a full-width button.

* **Default state:**
  * dark background `#1A1A1A`
  * white text
  * rounded 12px corners
  * strong 600 weight
  * Text example: `ატვირთვა და ზომების არჩევა →`
* **On hover:**
  * background changes to coral `#E05A47`.

The transition should be smooth and subtle. The button should visually communicate that uploading is only the first step of the ordering process.

---

## 9. Services Section

The services section introduces the product categories after the emotional hero. The section should feel more structured than the hero but retain generous whitespace.

### Introduction
* Centered heading: `რას გთავაზობთ?`
* Supporting text: `ყველაფერი, რაც ბეჭდვასთან არის დაკავშირებული — ერთ ესთეტიკურ სივრცეში.`

The title should be visually dominant while the description remains muted.

### Three-Card Composition
Three service cards form the main grid:
1. **ფოტოების ბეჭდვა**
2. **დოკუმენტების ბეჭდვა**
3. **წიგნის სანიშნები**

Each card should feel like a premium product category rather than a generic service box.

### Card Anatomy
Each card contains:
* **Visual icon:** Large enough to establish immediate recognition.
* **Title:** Approximately 20px, medium/semibold.
* **Description:** Approximately 14px with muted typography.

The cards use white surfaces, subtle borders, 16px radius, and generous internal padding.

### Interaction
On hover, the card moves upward approximately **4px**, and the shadow becomes slightly stronger. The animation should remain restrained.

---

## 10. Pricing Section

The pricing section should transition from product discovery into decision-making.

Use the subtle surface background `#FAF8F5` to create a visual separation from the previous section without introducing a new color.

### Pricing Introduction
* Centered headline: `დაბეჭდე მარტივად, მიიღე ხარისხიანად.`
* Supporting text: `ჩვენ ვზრუნავთ თქვენს დროსა და კომფორტზე`

The tone should remain reassuring rather than aggressively sales-driven.

---

## 11. Pricing Cards

Three pricing cards are displayed in a horizontal desktop grid.

### Card 1 — Standard Photo
* **Type:** 10×15 cm glossy paper
* **Price:** `0.50 ₾ / ცალი`
* **Features:** Premium Glossy paper, accurate colors, ready within 24 hours.

### Card 2 — Polaroid Style (Featured)
* **Type:** Polaroid Style
* **Price:** `0.70 ₾ / ცალი`
* **Features:** Silk paper, text option, gift packaging.
* *Note: This card should visually stand out using the coral accent.*

### Card 3 — A4 Documents
* **Type:** Document printing
* **Price:** `0.15 ₾ / გვერდიდან`
* **Features:** Standard 80g paper, fast printing.

---

## 12. Featured Pricing Treatment

* The Polaroid card should be the visual focal point.
* Its border uses the **coral accent**.
* A small coral badge overlaps the upper edge: `პოპულარული`.
* The badge should visually break the card boundary, creating a subtle floating-layer effect and giving the pricing hierarchy a clear focal point.

---

## 13. Contact / Footer Architecture

The footer is the final information layer rather than simply a copyright area. It should feel like the closing page of an editorial experience.

### Four-Column Structure (Desktop)

* **Column 1 — Brand (Wider than others):**
  * `OnlinePrint.ge` logo.
  * Statement: `თქვენი საიმედო პარტნიორი ციფრული ფოტოებისა და დოკუმენტების ბეჭდვაში.`
* **Column 2 — Services:**
  * ფოტოების ბეჭდვა
  * დოკუმენტების ბეჭდვა
  * წიგნის სანიშნები
* **Column 3 — Information:**
  * მიტანის პირობები
  * ხშირად დასმული კითხვები
  * კონფიდენციალურობა
* **Column 4 — Contact:**
  * `+995 598 878 999`
  * `onlineprint26@gmail.com`
  * `თბილისი, საქართველო`

---

## 14. Contact Information Visual Hierarchy

Contact information should not be presented as a large generic "Contact Us" block. Instead, it should feel like a quiet, trustworthy closing point. The phone number, email, and location use muted typography with recognizable icons.

The visual priority is:  
`Brand` → `Services` → `Information` → `Direct contact`

---

## 15. Footer Closing Line

A thin divider separates the footer navigation from the copyright area.

* Centered copyright text:
  > `© 2026 OnlinePrint.ge. ყველა უფლება დაცულია.`
* Uses smaller muted typography for a calm and spacious visual impression.

---

## 16. Responsive Architecture

At widths below approximately **850px**, the layout transitions from an editorial desktop composition into a vertical mobile experience.

* **Header:** Desktop navigation links disappear. The mobile header retains only the logo and primary action.
* **Hero:** The two-column hero becomes a single vertical sequence: `headline` → `supporting text` → `photo composition` → `upload card`.
* **Services:** Three columns stack into one column while maintaining spacing and rounded surfaces.
* **Pricing:** Three pricing cards stack vertically, with the featured Polaroid card remaining visually highlighted.
* **Footer:** The four-column footer becomes a single vertical layout with clear spacing between groups.

---

## 17. Interaction Language

Interactions should communicate physicality and quality. Avoid exaggerated animations.
Use small movements:
* cards translate upward 3–4px,
* buttons change color,
* photographs straighten,
* navigation links transition color,
* surfaces subtly increase shadow depth.

Animations should generally use approximately **200–300ms transitions**.

---

## 18. Visual Rhythm

The page follows a deliberate user journey:
1. **Stage 1 — Emotion:** Large headline + photographs.
2. **Stage 2 — Action:** Upload and order interaction.
3. **Stage 3 — Discovery:** Available printing services.
4. **Stage 4 — Decision:** Pricing.
5. **Stage 5 — Trust:** Contact information and brand statement.

Rhythm: `See` → `Understand` → `Upload` → `Explore` → `Choose` → `Trust`

---

## 19. Image Direction

Photography is a core part of the visual identity. Images should feel authentic, warm, human, tactile, and contemporary (avoid generic corporate stock imagery).

Preferred visual language:
* printed photographs,
* hands holding prints,
* photographs on desks,
* family moments,
* travel memories,
* documents,
* paper textures,
* close-up printing details.

---

## 20. Overall Art Direction

The final website should resemble a combination of:  
**Premium editorial website + modern print studio + digital ordering platform.**

Key creative concept:
> **OnlinePrint takes something digital and gives it physical form.**

* **Warm paper background (`#FDFBF7`):** Represents the physical medium.
* **White cards (`#FFFFFF`):** Represent paper.
* **Photographs:** Represent finished products.
* **Coral accent (`#E05A47`):** Represents action and brand energy.
* **Dark typography (`#1A1A1A`):** Provides structure and reliability.
* **Generous whitespace:** Gives the interface a premium editorial quality.
