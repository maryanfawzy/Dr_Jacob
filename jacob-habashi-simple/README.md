# Dr. Jacob Habashi Website - Installation Guide

This guide will help you set up and run the personal website for Dr. Jacob Habashi.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   cd jacob-habashi-simple
   npm install
   ```

## Running the Website

### Development Mode

To run the website in development mode with hot-reloading:

```bash
npm run dev
```

This will start the development server, typically at http://localhost:5173 (or another port if 5173 is in use).

### Building for Production

To build the website for production:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
jacob-habashi-simple/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── sections/    # Page section components
│   ├── styles/          # CSS styles
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Backend Setup (Optional)

The contact form is configured to work with a Node.js backend. To set up the backend:

1. Create a `.env` file in the root directory based on `.env.example`
2. Fill in your email service credentials
3. Run the backend server:
   ```bash
   npm run server
   ```

## Customization

- **Colors**: Edit the `theme.extend.colors` section in `tailwind.config.js`
- **Content**: Update text and images in the respective components in `src/components/sections/`
- **Animations**: Modify animation settings in Framer Motion components in `App.jsx`

## Troubleshooting

- If you encounter any issues with Tailwind CSS, try running `npx tailwindcss init -p` to regenerate configuration files
- For dependency conflicts, use `npm install --legacy-peer-deps` when installing new packages

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
