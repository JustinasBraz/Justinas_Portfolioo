# Justinas Portfolio

A modern, responsive portfolio website built with Next.js 14, TailwindCSS, and Shadcn UI components.

## Features

- ✨ Modern, clean, and minimal design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- 🎨 Custom brand colors (soft green #a8dadc, dark blue #1d3557)
- ⚡ Smooth animations and transitions
- 🧩 Built with Shadcn UI components
- 📄 Multiple pages: Home, About, Projects, Contact

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TailwindCSS** for styling
- **Shadcn UI** for components
- **Lucide React** for icons
- **Open Sans** font family

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public` folder:
   - `portrait-me.jpg` (hero image)
   - `about-me.jpg`
   - `author-me.jpg`
   - `tutor-web.png`
   - `proshop.png`
   - `app.png`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SkillCard.jsx
│   │   └── ProjectCard.jsx
│   ├── about/
│   │   └── page.jsx
│   ├── projects/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   └── ui/          # Shadcn UI components
├── lib/
│   └── utils.js     # Utility functions
├── public/          # Static assets (images)
└── tailwind.config.js
```

## Customization

### Colors

Brand colors are defined in `tailwind.config.js`:
- `brand-green`: #a8dadc
- `brand-red`: #e63946
- `brand-dark`: #1d3557

### Font

The project uses Open Sans font, loaded via Google Fonts in `globals.css`.

### Dark Mode

Dark mode is implemented using Tailwind's class-based dark mode. The theme toggle is in the Navbar component and persists the user's preference in localStorage.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.




