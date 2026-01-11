# PowerGym - Modern Fitness Website

A clean, modern, and mobile-friendly multi-page Next.js website for PowerGym fitness center.

## Features

- 🏠 **Home Page** - Hero section, gym philosophy, features, and testimonials
- 💪 **Programs Page** - Detailed information about Personal Training, Yoga, and HIIT programs
- 💰 **Pricing Page** - Three membership tiers with comparison table
- 📞 **Contact Page** - Contact form, location, hours, and map

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Responsive Design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   ├── programs/
│   │   └── page.tsx      # Programs page
│   ├── pricing/
│   │   └── page.tsx      # Pricing page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation component
│   └── Footer.tsx        # Footer component
└── package.json
```

## Design Features

- Modern gradient backgrounds (blue and orange)
- Fully responsive design
- Smooth animations and transitions
- High-quality images from Unsplash
- Clean typography and spacing
- Mobile-friendly navigation

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Images are loaded from Unsplash. For production, consider hosting images locally or using a CDN.
- The contact form currently logs to console. Integrate with your backend API for production use.