# Project Architecture Guide

This project is a Next.js personal site built with the App Router, TypeScript, React, and Tailwind CSS. The design is intentionally simple and modular: content lives in one central place, pages are route-based, and reusable UI pieces live in the `components/` folder.

---

## 1. High-level overview

At a high level, the app is organized like this:

- `app/` — route pages and the global application shell
- `components/` — shared UI components used across multiple pages
- `lib/` — data and reusable helper logic
- `public/` — static assets served directly by the app
- Root config files — package metadata, TypeScript config, Next.js config, and styling setup

The central idea is:

- the site is content-driven
- page files in `app/` decide what route is shown
- reusable data comes from `lib/content.ts`
- shared UI pieces sit in `components/`

This keeps the site easy to extend when you add new portfolio items, blog posts, or videos.

---

## 2. The role of Next.js App Router

This project uses Next.js App Router conventions, which means the folder structure under `app/` directly defines the site’s routes.

### Main route structure

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/page.tsx` → `/blog`
- `app/blog/[slug]/page.tsx` → dynamic blog post pages like `/blog/my-post`
- `app/portfolio/page.tsx` → `/portfolio`
- `app/portfolio/[slug]/page.tsx` → dynamic portfolio case-study pages
- `app/youtube/page.tsx` → `/youtube`
- `app/youtube/[id]/page.tsx` → dynamic video detail pages
- `app/cv/page.tsx` → `/cv`

### Why this matters

Each `page.tsx` file is a route component. The folder name defines the URL path. The special `[slug]` and `[id]` segments create dynamic routes, and the code uses `generateStaticParams()` to prebuild valid pages for the known content entries.

---

## 3. How the app shell works

### `app/layout.tsx`

This is the root layout for the entire application.

It is responsible for:

- loading the Geist fonts
- setting global metadata (`title`, `description`)
- importing global CSS from `app/globals.css`
- rendering the shared header across all pages

In this project, the root layout wraps every page with:

- `<html lang="en">`
- a shared `SiteHeader`
- the page content inside a single page container

That means the header does not need to be duplicated on every page.

### `app/globals.css`

This file contains the global styling layer for the site. It is imported from the root layout, so it applies across the whole app.

In this project, the CSS is relatively light and mostly used for base styles, typography, and theme setup. Tailwind is enabled through the PostCSS/Tailwind setup, so many class names are applied directly in components.

---

## 4. Folder-by-folder explanation

## `app/`

This is the heart of the application because it contains the route-based pages.

### `app/page.tsx`

The homepage. It:

- imports `projects`, `blogPosts`, and `videos` from `lib/content.ts`
- renders the landing hero section
- shows section cards for portfolio, blog, YouTube, CV, and About
- lists featured projects and recent content

This page acts like a dashboard for the whole site.

### `app/about/page.tsx`

A simple static page describing the owner and the purpose of the site.

### `app/blog/`

Contains the blog index page and the dynamic post detail route.

- `app/blog/page.tsx` lists all blog posts
- `app/blog/[slug]/page.tsx` renders one selected post

### `app/portfolio/`

Contains the portfolio index and individual case-study pages.

- `app/portfolio/page.tsx` lists the available projects
- `app/portfolio/[slug]/page.tsx` renders one project detail page

### `app/youtube/`

Contains the media archive and individual video pages.

- `app/youtube/page.tsx` renders the list of videos
- `app/youtube/[id]/page.tsx` renders one selected video detail page

### `app/cv/page.tsx`

This page contains the full CV content directly in the component. It is not driven by `lib/content.ts`, so it behaves more like a static profile document than a content-managed section.

---

## 5. The `components/` folder

This folder contains reusable UI building blocks that are shared across multiple pages.

### `components/SiteHeader.tsx`

Defines the top navigation bar used across the site.

It includes links to:

- Portfolio
- Blog
- YouTube
- CV
- About

This is a good example of a reusable component that keeps the app consistent.

### `components/SectionCard.tsx`

A generic card component used on the homepage to create the modular section overview.

This component accepts props like:

- `title`
- `href`
- `description`
- `eyebrow`
- `details`

That makes it reusable for many different kinds of cards without duplicating markup.

---

## 6. The `lib/` folder

This is the content layer of the application.

### `lib/content.ts`

This file is the most important data source in the whole project.

It exports:

- `projects`
- `blogPosts`
- `videos`
- lookup functions such as `getProjectBySlug`, `getBlogPostBySlug`, and `getVideoById`

### Why this file matters

This project is intentionally content-first. Instead of storing content in separate markdown files or databases, the data is stored in one TypeScript file.

That means:

- adding a new project means updating the `projects` array
- adding a blog post means updating the `blogPosts` array
- adding a YouTube item means updating the `videos` array

Then the page components simply map over those arrays and render the data.

### Data flow example

Here is the pattern used throughout the app:

1. `lib/content.ts` defines the content arrays and types.
2. `app/page.tsx` imports `projects`, `blogPosts`, and `videos`.
3. The page renders those items into cards and lists.
4. When a user clicks a project, the dynamic route loads the matching slug.
5. `getProjectBySlug(slug)` finds the correct project record.
6. The detail page renders that specific item.

This is a clean separation between:

- content
- UI layout
- route logic

---

## 7. The `public/` folder

The `public/` directory is for static files that should be served directly.

In this project, the relevant content is:

- `public/cv/` containing downloadable CV files

That means the CV page can link directly to `/cv/Ryan_Habis_CV_v2.docx` and the browser can download it.

This folder is useful for files that do not need to be processed by React or Next.js code.

---

## 8. Root config files and what they do

### `package.json`

This is the project manifest. It defines:

- package name and version
- dependency versions
- scripts such as `dev`, `build`, `start`, and `lint`

The app depends on:

- `next`
- `react`
- `react-dom`

and includes:

- TypeScript
- ESLint
- Tailwind CSS

### `next.config.ts`

This file contains Next.js-specific configuration. It is where framework-level settings can be changed if needed.

### `tsconfig.json`

Defines TypeScript compiler options, path aliases, and project rules.

The project uses path aliases such as `@/components` and `@/lib`, which are configured in TypeScript and used throughout the code.

### `eslint.config.mjs`

Configures ESLint rules for the project.

### `postcss.config.mjs`

Configures PostCSS, which is used to process Tailwind CSS.

### `next-env.d.ts`

This is automatically generated by Next.js and provides TypeScript types for the Next.js app.

---

## 9. How routing works in practice

This project uses route files and typed params in a very modern Next.js pattern.

### Example: portfolio detail page

`app/portfolio/[slug]/page.tsx` does the following:

1. exports `generateStaticParams()`
2. uses the incoming `params` value to read the slug
3. calls `getProjectBySlug(slug)`
4. shows a `notFound()` page if the project does not exist

This means the route is dynamic, but all valid paths can be generated in advance.

### Example: blog detail page

`app/blog/[slug]/page.tsx` follows the same pattern for blog posts.

### Example: YouTube detail page

`app/youtube/[id]/page.tsx` uses the same idea for videos.

That pattern is very important because it shows the architecture behind dynamic pages:

- static list page shows data
- dynamic page fetches that data by identifier
- the page renders the single chosen item

---

## 10. Why this project is easy to learn from

This codebase is a great example of a clean, beginner-friendly architecture because it demonstrates several important web development patterns:

### Content-driven design

The site’s main content is centralized in one file, which makes it very easy to understand where content comes from.

### Route-driven structure

The `app/` folder clearly maps to the website’s URL structure.

### Reusable components

Shared pieces like the header and section cards reduce duplicate code.

### Dynamic pages

The `[slug]` and `[id]` routes show how to build page-level detail screens.

### Modern React + Next.js patterns

The project uses hooks-free server components, typed data, and route-based page organization.

---

## 11. Recommended way to explore this codebase

If you want to learn everything from this project, a good order is:

1. Start with `package.json` to understand the stack.
2. Read `app/layout.tsx` to see the app shell.
3. Read `app/page.tsx` to understand the homepage composition.
4. Read `lib/content.ts` to understand the content model.
5. Read one dynamic route such as `app/portfolio/[slug]/page.tsx`.
6. Read one shared component such as `components/SiteHeader.tsx`.
7. Then inspect `app/blog/page.tsx`, `app/youtube/page.tsx`, and `app/cv/page.tsx` to see how each section differs.

---

## 12. Quick mental model

If you want a one-line summary of the architecture, use this:

> This project is a Next.js App Router personal site where `app/` defines routes, `lib/content.ts` provides the content model, `components/` provides reusable UI, and `public/` stores downloadable static assets.

---

## 13. Practical next steps for learning

Once you understand the current structure, the next useful experiments are:

- add a new portfolio item to `lib/content.ts`
- create a new section in `app/`
- refactor a repeated UI block into a new reusable component
- replace the static CV content with data-driven content from `lib/content.ts`
- add a new dynamic route pattern for another content type

That will help you see how the architecture scales as the project grows.

---

## 14. Summary

This folder setup is intentionally organized around a few key ideas:

- `app/` = routes and page UI
- `components/` = reusable UI blocks
- `lib/` = content and helper logic
- `public/` = static files
- root files = project configuration and tooling

That combination makes the project easy to understand, easy to extend, and a strong example of a modern Next.js content-driven website.
