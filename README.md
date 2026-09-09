# Personal Site

A modular personal website built with Next.js, TypeScript, and Tailwind CSS. The site is structured around reusable sections for portfolio work, writing, videos, CV, and profile content, making it easy to expand over time.

## Features

- Homepage with featured projects, latest blog posts, and latest videos
- Dedicated sections for:
  - Portfolio
  - Blog
  - YouTube
  - CV
  - About
- Content-driven architecture via `lib/content.ts`
- Clean, responsive UI using modern Next.js app-router pages

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  about/
  blog/
  cv/
  portfolio/
  youtube/
  globals.css
  layout.tsx
  page.tsx
components/
  SectionCard.tsx
  SiteHeader.tsx
lib/
  content.ts
public/
  cv/
```

## Content Editing

Most of the site content is centralized in `lib/content.ts`, including:

- portfolio projects
- blog posts
- video entries
- data helpers like `getProjectBySlug`, `getBlogPostBySlug`, and `getVideoById`

Update the exported arrays in that file to change the content shown across the site.

## Customizing Pages

- Homepage content: `app/page.tsx`
- About page: `app/about/page.tsx`
- Blog page: `app/blog/page.tsx`
- Portfolio pages: `app/portfolio/`
- YouTube pages: `app/youtube/`
- CV page: `app/cv/page.tsx`

## Deployment

This project is ready to deploy on platforms like Vercel. After building the app, you can publish it with your preferred hosting provider.

## Notes

The current repository is a content-first personal site starter that you can extend with your own projects, articles, media, and resume details as your portfolio grows.
