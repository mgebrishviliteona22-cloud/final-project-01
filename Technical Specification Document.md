# Technical Specification Document
## Online Print-on-Demand Service for Documents

**Project Status:** Ideation / Content Planning  
**Technology:** Native HTML5, CSS3, JavaScript  
**Architecture:** Static, client-side only  
**Backend:** None  
**Document Type:** Work-in-Progress Technical Specification

---

# 1. Project Overview

## 1.1 Project Purpose

The project is a **static online document printing service website** that allows users to explore printing options, estimate the cost of an order, configure basic printing requirements, and simulate submitting a print request.

The website is intended to demonstrate the complete user journey of an online print-on-demand service:

**Choose printing options → Upload/select a document → Configure order → Calculate estimated price → Submit simulated order**

Because there is currently **no backend server or database**, the website will not actually upload files, process payments, create orders, or store customer information. All interactive functionality will be simulated using client-side JavaScript.

---

## 1.2 Target Audience

The primary target users include:

- **Students** — printing assignments, essays, dissertations, lecture notes, and study materials.
- **Professionals** — printing reports, presentations, contracts, proposals, and business documents.
- **Small businesses** — printing invoices, brochures, internal documents, manuals, and marketing materials.
- **Individuals** — printing personal documents, forms, photographs, or other materials.

The interface should therefore prioritize **simplicity, speed, and clarity** rather than assuming advanced technical knowledge.

---

## 1.3 Key Goals

The website should:

1. Clearly explain what the printing service provides.
2. Explain the printing process in a simple step-by-step format.
3. Allow users to configure basic printing requirements.
4. Provide a **client-side print price calculator**.
5. Allow users to simulate selecting/uploading a document.
6. Collect basic order information through a form.
7. Dynamically display an estimated order total.
8. Provide clear calls-to-action such as **"Start Printing"** and **"Get a Quote"**.
9. Work correctly across desktop, tablet, and mobile screen sizes.
10. Establish a clean HTML/CSS/JavaScript foundation that could later be connected to a real backend.

---

# 2. Information Architecture (Sitemap)

The proposed site structure is:

```text
Website
│
├── Home
│
├── How It Works
│
├── Pricing / Calculator
│
├── Upload / Order
│
└── Contact
```

### Home

**Primary purpose:** Introduce the printing service, communicate its main benefits, and direct users toward starting a print order.

### How It Works

**Primary purpose:** Explain the printing and delivery process from document submission to completed order.

### Pricing / Calculator

**Primary purpose:** Allow users to configure printing options and receive a simulated estimated price.

### Upload / Order

**Primary purpose:** Provide the main simulated order form where users select a document and enter their printing and delivery requirements.

### Contact

**Primary purpose:** Provide basic contact information and a simple client-side contact form for questions or inquiries.

---

# 3. Content Planning (Page-by-Page)

The following descriptions represent a **wireframe-in-text** and should be used as a content and layout blueprint before implementing the visual design.

---

## 3.1 Homepage

### Page Structure

```text
[Header]
    ├── Logo
    ├── Navigation
    │   ├── Home
    │   ├── How It Works
    │   ├── Pricing
    │   ├── Upload / Order
    │   └── Contact
    └── CTA: "Start Printing"

[Hero Section]
    ├── Main headline
    ├── Supporting description
    ├── CTA: "Start Printing"
    └── Secondary CTA: "Calculate Price"

[Service Benefits]
    ├── Fast Printing
    ├── Multiple Paper Options
    ├── Professional Binding
    └── Delivery Available

[How It Works Preview]
    ├── Step 1: Upload
    ├── Step 2: Configure
    ├── Step 3: Calculate
    └── Step 4: Receive

[Printing Options]
    ├── Paper Types
    ├── Color Printing
    └── Binding Options

[Price Preview]
    ├── Short explanation
    ├── Example pricing
    └── CTA: "Calculate My Price"

[Final CTA]
    ├── Headline
    └── "Start Printing" button

[Footer]
    ├── Navigation
    ├── Contact information
    └── Copyright
```

### Hero Section

The hero should immediately communicate the core value proposition.

**Example:**

> **Print Your Documents. We Handle the Rest.**

Supporting text should explain that users can configure their documents, choose printing and binding options, and receive an estimated price.

Primary CTA:

**Start Printing**

Secondary CTA:

**Calculate Price**

A visual element can show printed documents, bound reports, paper sheets, or a simplified illustration of the printing process.

---

## 3.2 How It Works

### Page Structure

```text
[Page Header]
    ├── Title: "How It Works"
    └── Short introduction

[Step 1]
    ├── Icon / Illustration
    ├── "Upload Your Document"
    └── Description

[Step 2]
    ├── Icon / Illustration
    ├── "Choose Printing Options"
    └── Description

[Step 3]
    ├── Icon / Illustration
    ├── "Review Your Price"
    └── Description

[Step 4]
    ├── Icon / Illustration
    ├── "Submit Your Order"
    └── Description

[Printing Options Explanation]
    ├── Paper
    ├── Color
    ├── Binding
    └── Quantity

[FAQ]
    ├── What file types are supported?
    ├── Can documents be bound?
    ├── How is the price calculated?
    └── Is online payment available?

[CTA]
    └── "Start Printing"
```

Each step should be visually separated and numbered.

The page should make the process understandable without requiring the user to visit another page.

---

# 3.3 Pricing / Calculator

This is one of the core functional pages of the website.

### Page Structure

```text
[Page Header]
    ├── "Print Price Calculator"
    └── Short explanation

[Calculator Form]

    [Document Information]
        ├── Number of Pages
        └── Number of Copies

    [Paper Options]
        ├── A4
        ├── A5
        └── Glossy / Premium

    [Color Options]
        ├── Black & White
        └── Full Color

    [Binding Options]
        ├── No Binding
        ├── Spiral Binding
        └── Perfect Binding

    [Additional Options]
        └── Optional extras

[Price Summary]
    ├── Printing Cost
    ├── Paper Cost
    ├── Binding Cost
    └── Estimated Total

[CTA]
    └── "Continue to Order"
```

### Calculator Controls

The controls should use appropriate HTML form elements:

- **Page count:** `<input type="number">`
- **Copies:** `<input type="number">`
- **Paper size/type:** `<select>` or radio buttons
- **Color:** radio buttons
- **Binding:** radio buttons or a `<select>`
- **Optional services:** checkboxes

Example options:

| Category | Options |
|---|---|
| Paper | A4 Standard, A5 Standard, Premium/Glossy |
| Color | Black & White, Full Color |
| Binding | None, Spiral, Perfect |
| Copies | 1, 2, 3... |
| Pages | User-defined number |

The current prices should be stored in JavaScript as configuration values rather than hard-coded repeatedly throughout the HTML.

Example pricing model:

```text
Black & White: $0.10 / page
Color: $0.30 / page

A4 Standard: $0.02 / page
Premium Paper: $0.08 / page

No Binding: $0.00
Spiral Binding: $2.50
Perfect Binding: $5.00
```

These values are **illustrative only** and can be replaced during the design/content phase.

---

# 3.4 Upload / Order

This page represents the primary simulated customer workflow.

### Page Structure

```text
[Page Header]
    ├── "Start Your Print Order"
    └── Short instructions

[Document Upload Area]
    ├── Drag & Drop visual area
    ├── "Choose File" button
    └── Supported file types message

[Selected File Preview]
    ├── File name
    ├── File size
    └── Remove button

[Print Configuration]
    ├── Pages
    ├── Copies
    ├── Paper
    ├── Color
    └── Binding

[Customer Information]
    ├── Name
    ├── Email
    └── Phone

[Delivery Information]
    ├── Delivery address
    └── Delivery method

[Order Summary]
    ├── Document
    ├── Print configuration
    ├── Quantity
    └── Estimated price

[Submit]
    └── "Get Quote / Submit Order"

[Confirmation Area]
    └── Simulated order confirmation
```

### Simulated Upload

Since there is no backend, the upload feature should **not actually send the document anywhere**.

The browser can still use:

```html
<input type="file">
```

JavaScript can read the selected file's metadata, such as:

- File name
- File extension
- File size

The interface can then display:

> `report.pdf selected successfully.`

The file itself should not be uploaded to a server.

---

# 3.5 Contact

### Page Structure

```text
[Page Header]
    ├── "Contact Us"
    └── Short introduction

[Contact Information]
    ├── Email
    ├── Phone
    ├── Business hours
    └── Service area

[Contact Form]
    ├── Name
    ├── Email
    ├── Subject
    ├── Message
    └── "Send Message"

[FAQ Preview]
    └── Link to How It Works / FAQ

[Footer]
```

Because there is no backend, submitting the form should produce a simulated confirmation rather than actually sending an email.

Example:

> **Thank you! Your message has been recorded as a demo submission.**

---

# 4. Front-End Functional Requirements (Client-Side JS)

JavaScript should provide the interactive behavior of the static website.

No JavaScript functionality should depend on a server, database, API, authentication system, or backend endpoint.

---

## 4.1 Print Calculator

The calculator is the primary JavaScript feature.

### Required Inputs

The calculator should capture:

1. Page count
2. Number of copies
3. Paper type
4. Color option
5. Binding type

Optional future inputs may include:

- Double-sided printing
- Delivery method
- Rush printing
- Cover type
- Additional finishing options

---

## 4.2 Input Types

Recommended controls:

```text
Page Count
→ number input

Copies
→ number input

Paper
→ select / radio buttons

Color
→ radio buttons

Binding
→ radio buttons / select

Optional Services
→ checkboxes
```

All required fields must have appropriate labels.

---

## 4.3 Price Calculation

The calculator should update whenever a relevant input changes.

Example calculation:

```text
Printing Cost =
Page Count × Copies × Price Per Page

Paper Cost =
Page Count × Copies × Paper Price

Binding Cost =
Selected Binding Price × Copies

Total =
Printing Cost + Paper Cost + Binding Cost
```

Example:

```text
100 pages
× 2 copies
× $0.10 B&W

= $20.00 printing cost
```

If spiral binding costs `$2.50` per copy:

```text
$20.00 + ($2.50 × 2)
= $25.00 estimated total
```

The result should be rendered dynamically in the UI.

Example:

```text
--------------------------------
Estimated Total

$25.00

100 pages · 2 copies
Black & White · A4
Spiral Binding
--------------------------------
```

The calculation should be performed entirely in JavaScript.

---

## 4.4 Price Configuration

Prices should be centralized in a JavaScript configuration object.

Conceptually:

```text
prices
├── printing
│   ├── blackAndWhite
│   └── color
├── paper
│   ├── standard
│   └── premium
└── binding
    ├── none
    ├── spiral
    └── perfect
```

This allows the prices to be changed without modifying calculation logic.

---

## 4.5 Form Validation

Before processing the simulated order:

1. Prevent the browser's default form submission.
2. Validate required fields.
3. Ensure page count is greater than `0`.
4. Ensure copies are at least `1`.
5. Ensure required customer information is provided.
6. Ensure a printing option has been selected.
7. Display validation errors next to the relevant fields.

The form handler should follow the general pattern:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate form
    // Calculate total
    // Display simulated confirmation
});
```

No request should be sent to a server.

---

## 4.6 Simulated Order Confirmation

After successful validation, JavaScript should display a confirmation section or modal.

Example:

```text
Order Summary

Document: thesis.pdf
Pages: 120
Copies: 1
Paper: A4 Standard
Color: Black & White
Binding: Spiral

Estimated Total: $14.90

This is a simulated order.
No document has been uploaded and no payment has been processed.
```

The confirmation should clearly communicate that the website is currently a prototype.

---

## 4.7 Simulated File Upload

The file input should support a simulated upload workflow.

JavaScript should:

1. Detect when a file is selected.
2. Read its name and size.
3. Display the selected file in the interface.
4. Allow the user to remove the selected file.
5. Optionally validate the file extension.

Potential supported formats:

```text
PDF
DOC
DOCX
TXT
JPG
PNG
```

The actual file contents should not be transmitted anywhere.

---

## 4.8 Mobile Navigation

Implement a simple responsive hamburger menu.

Expected behavior:

```text
Desktop:
Logo | Home | How It Works | Pricing | Order | Contact

Mobile:
Logo | ☰
```

Clicking the hamburger button should:

- Toggle the navigation menu.
- Add/remove an active CSS class.
- Update `aria-expanded`.
- Allow the menu to close when a navigation link is selected.

No external menu library should be required.

---

## 4.9 Binding Option Tabs

Binding options can optionally use a tabbed interface.

Example:

```text
[No Binding] [Spiral] [Perfect]

--------------------------------
Spiral Binding

Plastic coil binding suitable
for reports, assignments and
presentations.
--------------------------------
```

JavaScript should:

- Detect the selected tab.
- Display the corresponding content.
- Add an active state to the selected tab.
- Update accessibility attributes where appropriate.

---

## 4.10 Dynamic Order Summary

The order summary should update when the user changes:

- Page count
- Copies
- Paper type
- Color
- Binding

The user should not need to refresh the page.

---

## 4.11 General JavaScript Principles

JavaScript should:

- Use modern ES6+ syntax where appropriate.
- Use `const` and `let` instead of `var`.
- Separate calculation logic from DOM manipulation where practical.
- Avoid unnecessary global variables.
- Use descriptive function names.
- Keep reusable functions small.
- Validate user input before performing calculations.
- Avoid inline JavaScript in HTML.
- Load scripts using `defer` where appropriate.

Suggested structure:

```text
js/
├── main.js
├── calculator.js
├── navigation.js
└── form.js
```

For a small prototype, these can also be combined into one `script.js` file.

---

# 5. Basic Technical Guidelines (HTML/CSS)

## 5.1 HTML5

The website must use **semantic HTML5**.

Recommended document structure:

```html
<header>
    <nav>
        ...
    </nav>
</header>

<main>
    <section>
        ...
    </section>

    <section>
        ...
    </section>
</main>

<footer>
    ...
</footer>
```

Use semantic elements wherever appropriate:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<form>`
- `<label>`
- `<button>`

Avoid using `<div>` for every structural element when a semantic element is more appropriate.

---

## 5.2 Accessibility

The interface should follow basic accessibility practices.

Requirements include:

- Every form input must have a `<label>`.
- Buttons should use `<button>` rather than clickable `<div>` elements.
- Images should have meaningful `alt` attributes.
- Navigation should be keyboard accessible.
- Focus states should remain visible.
- Color should not be the only method of communicating information.
- Form errors should be clearly identifiable.
- Interactive elements should have meaningful accessible names.
- Use ARIA attributes only when native HTML semantics are insufficient.

---

# 5.3 CSS3

CSS should be written using native CSS3 without Sass, LESS, or another preprocessor.

Recommended organization:

```text
css/
├── reset.css
├── variables.css
├── layout.css
├── components.css
└── responsive.css
```

For a small project, these can instead be consolidated into:

```text
style.css
```

---

## 5.4 Mobile-First Responsive Design

The project should follow a **mobile-first** approach.

Base styles should target small screens first, with media queries used to progressively enhance the layout for larger screens.

Example:

```css
/* Base / Mobile */

.container {
    width: 100%;
}

/* Tablet */

@media (min-width: 768px) {
    ...
}

/* Desktop */

@media (min-width: 1024px) {
    ...
}
```

Recommended breakpoints are starting points only and should ultimately be determined by the content rather than specific device models.

---

# 5.5 Layout System

Use **Flexbox** and **CSS Grid** for layout.

### Flexbox

Use for:

- Navigation
- Button groups
- Horizontal card layouts
- Form rows
- Small component alignment

### CSS Grid

Use for:

- Pricing cards
- Feature sections
- Calculator layouts
- Desktop page structures
- Multi-column content

Avoid positioning major page elements using excessive `position: absolute`.

---

# 5.6 CSS Custom Properties

Use CSS variables for reusable design values.

Example:

```css
:root {
    --color-primary: /* PLACEHOLDER */;
    --color-secondary: /* PLACEHOLDER */;
    --color-background: /* PLACEHOLDER */;
    --color-text: /* PLACEHOLDER */;
    --color-muted: /* PLACEHOLDER */;

    --font-heading: /* PLACEHOLDER */;
    --font-body: /* PLACEHOLDER */;

    --space-xs: /* PLACEHOLDER */;
    --space-sm: /* PLACEHOLDER */;
    --space-md: /* PLACEHOLDER */;
    --space-lg: /* PLACEHOLDER */;
    --space-xl: /* PLACEHOLDER */;

    --radius-sm: /* PLACEHOLDER */;
    --radius-md: /* PLACEHOLDER */;
}
```

The actual visual design system can be defined during the design phase.

---

# 5.7 Color Palette

The final color palette has not yet been established.

Use placeholders during development:

```text
Primary:        [PRIMARY COLOR]
Secondary:      [SECONDARY COLOR]
Background:     [BACKGROUND COLOR]
Surface:        [SURFACE COLOR]
Text:           [TEXT COLOR]
Muted Text:     [MUTED COLOR]
Success:        [SUCCESS COLOR]
Error:          [ERROR COLOR]
```

The palette should provide sufficient contrast and should communicate reliability, cleanliness, and professionalism appropriate for a document-printing service.

---

# 5.8 Typography

Typography is currently a placeholder.

Define:

```text
Heading Font: [FONT]
Body Font:    [FONT]
Fallback:     system-ui, sans-serif
```

Recommended hierarchy:

```text
H1 → Page / Hero title
H2 → Major section
H3 → Component title
Body → Main content
Small → Supporting information
```

Typography should remain readable on mobile devices and should not rely on excessive font-size variation.

---

# 5.9 Spacing and Containers

A consistent spacing system should be used instead of arbitrary margins.

Suggested scale:

```text
XS → 4px
SM → 8px
MD → 16px
LG → 24px
XL → 40px
XXL → 64px
```

These values are placeholders and can be adjusted during visual design.

A reusable `.container` class should control the maximum content width.

Conceptually:

```css
.container {
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
}
```

---

# 5.10 Recommended Project Structure

The initial static project can use the following structure:

```text
print-service/
│
├── index.html
├── pages/
│   ├── how-it-works.html
│   ├── pricing.html
│   ├── order.html
│   └── contact.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── calculator.js
│   ├── navigation.js
│   └── form.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

For the initial prototype, the project may be simplified into fewer files if that makes development easier.

---

# Development Priority

The recommended implementation order is:

```text
1. HTML structure
       ↓
2. Content and page hierarchy
       ↓
3. Basic CSS layout
       ↓
4. Responsive design
       ↓
5. Calculator UI
       ↓
6. JavaScript price calculation
       ↓
7. Simulated upload
       ↓
8. Form validation
       ↓
9. Simulated order confirmation
       ↓
10. Navigation and secondary interactions
       ↓
11. Accessibility refinement
       ↓
12. Visual polish
```

The first version should prioritize **clear information architecture and working interactions** over sophisticated visual effects.

---

# Future Backend Considerations

Although the current implementation is completely static, the architecture should avoid making future backend integration unnecessarily difficult.

Potential future functionality could include:

- Real file uploads
- User accounts
- Database-backed orders
- Real-time order status
- Payment processing
- Automated price calculation
- Email confirmations
- Order history
- Delivery tracking
- Administrator dashboard
- Server-side file validation

These features are **out of scope for the current version**.

The current project should therefore be treated as a **front-end prototype and functional proof of concept** for the future online document-printing platform.