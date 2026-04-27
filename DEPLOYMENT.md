# Vercel Deployment Guide

This React application is configured for seamless deployment on Vercel.

## Pre-deployment Checklist

✅ **Project Structure**
- `src/` - All React components and app logic
- `public/` - Static assets and index.html
- `src/components/` - All React components
- `src/index.js` - React entry point
- `src/App.js` - Main App component

✅ **Build Configuration**
- `craco.config.js` - Webpack alias for `@/` imports
- `tailwind.config.js` - Tailwind CSS configuration
- `vercel.json` - Vercel-specific build settings

✅ **Dependencies**
- All dependencies are listed in `package.json`
- Includes React 19, Framer Motion, Shadcn components

## Deployment Steps

### Option 1: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Go to https://vercel.com and sign in
3. Click "New Project" and select your repository
4. Vercel will auto-detect the build settings
5. Click "Deploy"

### Option 3: Deploy via Git Connection
1. Sign in to Vercel (vercel.com)
2. Click "Add New..." → "Project"
3. Connect your Git repository
4. Accept the default settings (Vercel auto-detects them)
5. Deploy!

## Environment Variables

If you need environment variables in production:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., `REACT_APP_BACKEND_URL`)

See `.env.example` for available environment variables.

## Build Output

The app builds to the `build/` directory and uses:
- **Node**: 18.x (recommended)
- **Package Manager**: npm or yarn
- **Build Command**: `npm run build` (via craco)
- **Output Directory**: `build`

## Post-Deployment

- Your app will be available at: `https://your-project.vercel.app`
- All subsequent commits to main branch trigger automatic deployments
- Preview deployments are created for pull requests

## Troubleshooting

### Build Fails
- Check that all dependencies are correctly listed in `package.json`
- Verify no console errors during local build: `npm run build`
- Check Vercel build logs for specific errors

### Styling Issues
- Ensure `tailwind.config.js` is configured correctly
- Check that `src/index.css` is imported in `src/index.js`

### Component Import Errors
- Verify the `@/` alias is working: `import { Component } from "@/components/Component"`
- Ensure `craco.config.js` has the correct path resolution

## Local Development

```bash
npm install
npm start
```

The app runs on `http://localhost:3000`

---
For more info: https://vercel.com/docs
