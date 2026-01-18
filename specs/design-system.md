# Design System Guide

A light, premium SaaS aesthetic inspired by Flowline. Use this reference to style other landings or apps consistently.

---

## Color Palette

### Core Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#ffffff` | Primary background |
| `--bg-soft` | `#fbf5ff` | Secondary/accent background |
| `--bg-dark` | `#271f36` | Dark sections (contrast) |
| `--text` | `#271f36` | Primary text |
| `--text-muted` | `#7d5f92` | Secondary text, descriptions |
| `--text-light` | `#9880ab` | Tertiary text, captions |
| `--text-inverse` | `#ffffff` | Text on dark backgrounds |

### Accent Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#7d5f92` | Primary accent (purple) |
| `--accent-light` | `#b49cc5` | Light accent, hover states |
| `--accent-gradient` | `linear-gradient(135deg, #7d5f92 0%, #b49cc5 100%)` | Buttons, highlights |

### Shadows & Borders
| Token | Value | Usage |
|-------|-------|-------|
| `--card-bg` | `rgba(255, 255, 255, 0.9)` | Card backgrounds (glassmorphism) |
| `--card-border` | `rgba(125, 95, 146, 0.15)` | Subtle card borders |
| `--shadow-soft` | `0 4px 24px rgba(39, 31, 54, 0.08)` | Default elevation |
| `--shadow-hover` | `0 8px 32px rgba(39, 31, 54, 0.15)` | Hover elevation |

---

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 64px / 40px mobile | 600 | 1.1 |
| H3 (Cards) | 20-24px | 600 | 1.3 |
| Body | 18px | 400 | 1.6 |
| Small | 15-16px | 400 | 1.7 |
| Labels | 13px uppercase | 600 | 1.4 |

### Label Style (Eyebrow/Section Titles)
```css
font-size: 13px;
font-weight: 600;
letter-spacing: 3px;
text-transform: uppercase;
color: var(--accent);
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `12px` | Small elements |
| `--radius-md` | `16px` | Medium cards |
| `--radius-lg` | `20px` | Large cards, sections |
| `--radius-pill` | `100px` | Buttons (pill shape) |

---

## Buttons

### Primary CTA
```css
display: inline-block;
padding: 18px 48px;
background: var(--accent-gradient);
color: white;
font-size: 18px;
font-weight: 600;
border-radius: 100px; /* pill */
box-shadow: var(--shadow-soft);
transition: all 0.3s ease;
```

### Hover State
```css
transform: translateY(-3px);
box-shadow: var(--shadow-hover);
```

---

## Cards

### Glass Card
```css
background: rgba(255, 255, 255, 0.9);
border: 1px solid rgba(125, 95, 146, 0.15);
border-radius: 20px;
padding: 32px;
backdrop-filter: blur(8px);
transition: all 0.3s ease;
```

### Card Hover
```css
transform: translateY(-4px);
box-shadow: var(--shadow-hover);
border-color: var(--accent-light);
```

---

## Layout

### Container
```css
max-width: 1000px;
margin: 0 auto;
padding: 0 40px; /* 24px on mobile */
```

### Section Spacing
- Desktop: `100px` vertical padding
- Mobile: `80px` vertical padding

### Grid (Features)
```css
display: grid;
grid-template-columns: repeat(2, 1fr); /* 1fr on mobile */
gap: 24px;
```

---

## Effects

### Radial Gradient Overlay (Hero)
```css
background: radial-gradient(
  circle,
  rgba(125, 95, 146, 0.12) 0%,
  rgba(180, 156, 197, 0.05) 40%,
  transparent 70%
);
width: 1000px;
height: 1000px;
```

### Animation (Fade In Up)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered delays: 0s, 0.1s, 0.2s, 0.3s, 0.4s */
animation: fadeInUp 0.6s ease-out 0.1s both;
```

---

## Dark Section Pattern

For visual contrast, use dark sections sparingly:

```css
background: #271f36;
color: #ffffff;

/* Muted text on dark */
color: rgba(255, 255, 255, 0.7);

/* Step numbers */
color: rgba(255, 255, 255, 0.15);
font-size: 48px;
font-weight: 700;
```

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `768px` | Mobile/Tablet |

### Mobile Adjustments
- H1: 40px (from 64px)
- Container padding: 24px (from 40px)
- Features grid: single column
- Price: 56px (from 72px)

---

## Quick Reference: CSS Variables

```css
:root {
  --bg: #ffffff;
  --bg-soft: #fbf5ff;
  --bg-dark: #271f36;
  --text: #271f36;
  --text-muted: #7d5f92;
  --text-light: #9880ab;
  --text-inverse: #ffffff;
  --accent: #7d5f92;
  --accent-light: #b49cc5;
  --accent-gradient: linear-gradient(135deg, #7d5f92 0%, #b49cc5 100%);
  --card-bg: rgba(255, 255, 255, 0.9);
  --card-border: rgba(125, 95, 146, 0.15);
  --shadow-soft: 0 4px 24px rgba(39, 31, 54, 0.08);
  --shadow-hover: 0 8px 32px rgba(39, 31, 54, 0.15);
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-pill: 100px;
}
```
