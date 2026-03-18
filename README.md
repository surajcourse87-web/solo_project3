# Cerruti 1881 - Luxury Watch Scrollytelling Experience

A hyper-premium cinematic scrollytelling landing page for a luxury skeleton mechanical wristwatch, featuring Apple-level product storytelling and scroll-linked canvas animations.

## 🎯 Features

- **Cinematic Scroll Animation**: 400vh scroll experience with canvas-based watch explosion/reassembly
- **Luxury Design System**: Premium color palette inspired by champagne gold, platinum, and ruby jewel bearings
- **Framer Motion Integration**: Buttery-smooth scroll-linked text animations
- **Glassmorphism Navbar**: Apple-style navigation with scroll-triggered fade-in
- **Canvas Animation**: Real-time watch component explosion visualization
- **Responsive Layout**: Optimized for all screen sizes
- **Premium Typography**: Clean editorial hierarchy with Inter font

## 🎨 Design Philosophy

Inspired by:
- Apple product pages
- Richard Mille technical showcases
- Hublot luxury presentations
- Audemars Piguet craftsmanship storytelling

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
animation_watch/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & luxury design tokens
├── components/
│   ├── Navbar.tsx          # Glassmorphism navigation
│   └── ScrollStory.tsx     # Canvas + scroll storytelling
├── public/
│   └── frames/             # Watch image sequence (120 frames)
└── tailwind.config.js      # Luxury color palette
```

## 🎬 Scroll Storytelling Structure

1. **Hero (0-15%)**: Assembled watch with brand introduction
2. **Engineering Reveal (15-40%)**: Components begin separating
3. **Movement Explosion (40-65%)**: Full mechanical breakdown
4. **Horology Craftsmanship (65-85%)**: Exploded view showcase
5. **Final Hero (85-100%)**: Reassembly with CTAs

## 🎨 Color Palette

- **Primary Black**: `#050505`
- **Champagne Gold**: `#C9A36A`
- **Platinum Silver**: `#D6D6D6`
- **Ruby Red**: `#9B111E` (jewel bearing accent)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Canvas**: HTML5 Canvas API
- **TypeScript**: Full type safety

## 📝 Customization

### Adding Real Watch Images

Replace the canvas placeholder with your 120-frame image sequence:

1. Export 120 frames from your watch explosion video
2. Name them: `frame_0001.jpg` to `frame_0120.jpg`
3. Place in `public/frames/` directory
4. Update `ScrollStory.tsx` to load images instead of drawing

### Adjusting Scroll Timing

Modify the `useTransform` ranges in `ScrollStory.tsx`:

```typescript
const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0])
```

## 🌟 Performance

- GPU-accelerated canvas rendering
- Optimized scroll listeners
- Lazy-loaded image sequences
- Minimal re-renders with Framer Motion

## 📄 License

Luxury watch experience design © 2024

---

**Built with precision. Designed for luxury.**
