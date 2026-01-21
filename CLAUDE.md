# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

InstaGrow landing page - a marketing site for an AI-powered sales script generation tool for Instagram Reels content creators. Built with Next.js 16, React 19, and TypeScript.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is currently configured.

## Architecture

### Tech Stack
- **Framework:** Next.js 16.1.1 with App Router
- **Styling:** CSS Modules with CSS custom properties (design tokens defined in `globals.css`)
- **Font:** Onest (Google Fonts)

### Component Structure
All page sections live in `app/components/` with co-located CSS Modules:
- `Hero/` - Main entry with gradient title and CTA
- `Problem/` - Problem statement section
- `VSComparison/` - Before/after visual comparison
- `HowItWorks/` - 3-step feature explainer
- `Preview/` - Screenshot preview section
- `Pricing/` - Call-to-action with pricing (has `id="pricing"` for anchor navigation)
- `FAQ/` - Collapsible Q&A using native `<details>` elements

Components are barrel-exported from `app/components/index.ts`.

### Page Composition
The single page (`app/page.tsx`) imports and stacks all section components. All components are purely presentational with no client-side state.

## Design System

Design tokens and documentation are in:
- `app/globals.css` - CSS custom properties (`--bg`, `--text`, `--accent`, `--radius-*`, `--shadow-*`)
- `specs/design-system.md` - Comprehensive design guide with colors, typography, and patterns

Key breakpoint: `768px` for mobile/desktop responsive styles.

## Configuration

- `next.config.ts` - Image optimization (AVIF/WebP, custom device sizes)
- `eslint.config.mjs` - Flat config with Next.js core web vitals
- Path alias `@/*` maps to project root
