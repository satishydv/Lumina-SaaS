# Lumina SaaS

A modern, full-featured SaaS platform built with Next.js, React, and Three.js. Lumina provides a beautiful, responsive interface for teams looking to streamline their workflow and scale their operations.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark theme support
- 🚀 **Next.js 15** - Built with the latest Next.js App Router
- 🎭 **3D Visualizations** - Interactive Three.js scenes for engaging user experiences
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎯 **Type-Safe** - Built with TypeScript for better developer experience

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd lumina-saas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lumina-saas/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── product/           # Product page
│   ├── solutions/         # Solutions page
│   ├── resources/         # Resources/Testimonials page
│   ├── pricing/           # Pricing page
│   └── finance/           # Finance page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other components
├── public/               # Static assets
└── package.json          # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Main landing page with hero sections
- **Features** (`/product`) - Product features showcase
- **Security** (`/solutions`) - Solutions page with 3D visualizations
- **Testimonials** (`/resources`) - Customer testimonials with 3D scene
- **Pricing** (`/pricing`) - Pricing plans
- **Finance** (`/finance`) - Finance page

## License

© 2024 Lumina Systems Inc. All rights reserved.
