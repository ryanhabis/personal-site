export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  metrics: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string[];
};

export type Video = {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics Platform",
    summary: "A SaaS analytics dashboard for product teams to monitor metrics, cohorts, and experiments.",
    description:
      "Pulse Analytics is a full-stack product that helps teams understand user behavior by combining event ingestion, query tooling, and shareable dashboards. I designed the backend API, built the data models, and shipped the front-end experience for the initial beta release.",
    technologies: ["Next.js", "TypeScript", "Postgres", "Prisma", "Tailwind"],
    links: {
      demo: "https://example.com/pulse-demo",
      github: "https://github.com/example/pulse-analytics",
    },
    metrics: ["Reduced dashboard load times by 40%", "Enabled real-time cohort analysis", "Supported 20+ client workspaces"],
  },
  {
    slug: "design-system-kit",
    title: "Design System Kit",
    summary: "A reusable component library and documentation site for product teams building web apps faster.",
    description:
      "I created a themeable design system with tokens, components, accessibility-first patterns, and live Storybook examples. The kit helped teams move from mockups to production screens without sacrificing consistency.",
    technologies: ["React", "Storybook", "Figma", "TypeScript", "CSS Variables"],
    links: {
      demo: "https://example.com/design-system",
      github: "https://github.com/example/design-system-kit",
    },
    metrics: ["Cut UI build time in half", "Improved design consistency across releases", "Documented 50+ reusable patterns"],
  },
  {
    slug: "campus-mentor",
    title: "Campus Mentor",
    summary: "A mentoring platform to connect students, alumni, and faculty with guided career support.",
    description:
      "Campus Mentor helps students find the right mentor, track goals, and request feedback throughout the semester. I built the messaging workflow, scheduling logic, and dashboard pages in an extensible architecture.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Socket.IO"],
    links: {
      demo: "https://example.com/campus-mentor",
      github: "https://github.com/example/campus-mentor",
    },
    metrics: ["300+ mentorship matches created", "12% increase in student engagement", "Simplified review workflows for advisors"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-modular-personal-site",
    title: "Building a Modular Personal Site That Can Keep Growing",
    date: "2026-09-01",
    excerpt: "A practical blueprint for organizing content, routes, and reusable UI as your website expands.",
    tags: ["Next.js", "Architecture", "Career"],
    content: [
      "When I started planning my personal website, I wanted something that would feel lightweight now but would not become hard to scale later. The biggest design choice was separating content from presentation so that a new section could be added without rewriting the entire site.",
      "That led me toward a structure where each content type—portfolio, blog, YouTube, and future sections—lives in a data layer and route layer that stays decoupled from the global layout. The result is a site that can grow in an organized, predictable way.",
      "In practice, that means each type gets its own directory, its own schema, and its own page templates. This keeps the homepage, navigation, and shared components reusable while allowing sections to evolve independently.",
      "If you are comfortable coding, this is a powerful approach because it gives you the flexibility of a custom site without locking yourself into a rigid CMS setup.",
    ],
  },
  {
    slug: "content-driven-development",
    title: "Why Content-Driven Development Works So Well for Personal Sites",
    date: "2026-08-20",
    excerpt: "Content-first workflows make it easier to publish updates consistently and keep the site maintainable over time.",
    tags: ["Productivity", "Content", "Strategy"],
    content: [
      "A content-driven website lets you treat the website as a system of pages and blocks instead of a single giant app. This is especially helpful when you want to publish articles, projects, and media without constantly editing shared layouts.",
      "The developer experience improves because content can be kept in simple files or structured data, then rendered through reusable templates. That means you can focus on writing and shipping, while the architecture handles the rest.",
      "The end result is faster iteration, better version control, and more confidence when adding new types of content later.",
    ],
  },
];

export const videos: Video[] = [
  {
    id: "demo-1",
    title: "How I structure a scalable portfolio site",
    description: "A walkthrough of the routing, content model, and component reuse patterns that make a personal site easy to expand.",
    duration: "12:08",
    publishedAt: "2026-08-15",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "demo-2",
    title: "Full-stack project architecture tips",
    description: "A short breakdown of how I think about data models, section boundaries, and long-term maintainability in modern web apps.",
    duration: "8:42",
    publishedAt: "2026-07-30",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getVideoById(id: string) {
  return videos.find((video) => video.id === id);
}
