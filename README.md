# Blessings Portfolio

A personal portfolio built with Next.js, Tailwind CSS and Framer Motion showcasing UI projects and creative work.

## Overview
This repository contains a modern, responsive portfolio site using Next.js (App Router). The UI uses Tailwind CSS for styling and Framer Motion for animations. Project data (projects, assets) are centrally defined so content is easy to update.

## Features
- Responsive layout
- Animated components with Framer Motion
- Image optimization via Next.js `Image`
- Simple content model for projects/assets
- Netlify-ready config included

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Netlify (deploy configuration present)

## Important files
- [app/page.js](app/page.js) — site entry page.
- [app/layout.js](app/layout.js) — global layout.
- [app/globals.css](app/globals.css) — global styles.
- [app/components/Work.jsx](app/components/Work.jsx) — portfolio grid and project card.
- [app/components/Contact.jsx](app/components/Contact.jsx) — contact section.
- [assets/assets.js](assets/assets.js) — images and `workData` used across the site (update this to change projects).
- [package.json](package.json) — scripts and dependencies.
- [tailwind.config.js](tailwind.config.js) — Tailwind configuration.
- [next.config.mjs](next.config.mjs) — Next.js config.
- [netlify.toml](netlify.toml) — Netlify deploy config.

## Getting started

Prerequisites
- Node.js (recommended v18+)
- npm or pnpm

Install dependencies
```bash
npm install
# or
pnpm install