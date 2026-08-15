---
name: Lumina Digital Cinema
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#adc7ff'
  primary: '#adc7ff'
  on-primary: '#002e68'
  primary-container: '#4a8eff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bc0'
  secondary: '#ddfcff'
  on-secondary: '#00363a'
  secondary-container: '#00f1fe'
  on-secondary-container: '#006a70'
  tertiary: '#d1bcff'
  on-tertiary: '#3c0090'
  tertiary-container: '#a178ff'
  on-tertiary-container: '#34007f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#74f5ff'
  secondary-fixed-dim: '#00dbe7'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-label:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 64px
  container-padding-mobile: 20px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality is high-octane, premium, and technologically superior. Designed for a discerning French audience seeking a luxury home cinema experience, the UI must evoke feelings of speed, infinite content choice, and elite reliability.

The design style is **Futuristic Glassmorphism**. It utilizes deep obsidian surfaces layered with translucent, frosted glass panels that appear to float over vibrant, kinetic background glows. This creates a sense of immense depth and multi-dimensional navigation, mimicking a high-end physical media center or a futuristic spaceship interface. High-quality dark mode is the standard, ensuring that content (movie posters and live streams) remains the focal point while the interface feels like an invisible, premium conduit.

## Colors
The palette is rooted in a "Deep Space" philosophy. The primary **Electric Blue** serves as the functional color for focus states and primary actions. A **Cyan Secondary** and **Violet Tertiary** are reserved for vibrant gradients and background "auras" that sit behind glass layers.

- **Surface Primary:** #121212 (Deep Charcoal) - used for the base background.
- **Surface Secondary:** #1E1E1E - used for content containers and elevated sections.
- **Electric Blue:** Used for highlights, active navigation states, and progress bars.
- **Accents:** Vibrant gradients (Primary to Secondary) are used sparingly for "Premium" or "Live" badges to denote urgency and quality.

## Typography
This design system utilizes **Inter** for its incredible legibility and "tech-neutral" aesthetic, allowing the vibrant imagery of the IPTV service to shine. **Geist** is introduced for technical labels, timestamps, and metadata to provide a precise, developer-grade feel to the playback statistics and channel information.

Headlines should be tightly tracked (negative letter-spacing) to feel impactful and cinematic. Body text uses a generous line height to ensure readability in low-light viewing environments (living rooms). All labels for "Live" or "4K" badges should use the uppercase `label-caps` style for maximum distinction.

## Layout & Spacing
The layout follows a **Fluid Cinematic Grid**. It uses a 12-column structure on desktop with wide 64px side margins to emulate a theatrical wide-screen aspect ratio. 

- **Desktop:** 12 columns, 24px gutters. Content cards typically span 2, 3, or 4 columns.
- **Mobile:** 4 columns, 16px gutters. Horizontal swiping (carousels) is preferred over long vertical lists to keep the "TV App" feel.
- **Spacing Rhythm:** All spacing must be multiples of 8px to maintain a strict geometric alignment, reinforcing the "reliable" brand promise.

## Elevation & Depth
Elevation is not conveyed through traditional drop shadows, but through **Tonal Translucency and Blurs**. 

1.  **Level 0 (Base):** Solid #121212.
2.  **Level 1 (Navigation/Sidebar):** Background blur (20px) with 40% opacity fill of #1E1E1E and a 1px subtle inner border (stroke) of 10% white.
3.  **Level 2 (Modals/Overlays):** Background blur (40px) with 60% opacity fill and a subtle Primary Color outer glow (15% opacity) to simulate a light-emitting screen.

Interactive elements use a "Luminous Lift" effect: when hovered or focused, the element's border brightness increases, and a subtle vibrant gradient glow appears behind it.

## Shapes
The shape language uses **Rounded (0.5rem)** corners to balance the high-tech feel with approachability. 

- **Cards & Containers:** Use 1rem (`rounded-lg`) for large content tiles like movie posters.
- **Buttons & Inputs:** Use 0.5rem for a precision-machined look.
- **Badges:** Use a full pill-shape for status indicators like "Live" or "New" to differentiate them from functional buttons.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white text. High-contrast, no shadow, subtle inner glow on hover.
- **Secondary (Glass):** Semi-transparent background (20% white) with a 1px border and heavy backdrop blur.

### Content Cards
- Movie/TV cards should have no visible borders. Depth is created by a subtle gradient overlay at the bottom where titles are placed (Linear: Transparent to Black 80%). On focus, the card scales by 1.05x and gains a 2px Electric Blue border.

### Input Fields
- Dark backgrounds (#080808) with a 1px #333 border. On focus, the border transitions to a Primary-to-Secondary gradient.

### Navigation Sidebar
- Always uses the Glassmorphism effect. Active items are indicated by a vertical Electric Blue bar on the left edge and a subtle glow behind the icon.

### Video Player Controls
- Ultra-minimalist. Floating glass bar at the bottom. Use `Geist` for the timecode to emphasize precision. The progress bar should be a 4px height line that expands to 8px on hover, featuring a "comet" glow at the current playhead position.