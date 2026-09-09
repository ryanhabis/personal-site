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
    slug: "commercial-drone-surveying",
    title: "Commercial Drone Surveying",
    summary: "Aerial mapping, inspection, and site documentation for construction and infrastructure teams.",
    description:
      "This portfolio piece highlights how I use drones to capture structured visual data for planning, documentation, and project visibility. The work focuses on efficient survey workflows, clear reporting, and delivering usable aerial assets for clients.",
    technologies: ["DJI Enterprise", "Photogrammetry", "GIS", "Drone Mapping", "Video Editing"],
    links: {
      demo: "https://www.youtube.com/channel/UCFODtxH31XxzkY4QY--KTSw",
    },
    metrics: ["Faster site coverage", "Clearer visual reporting", "Improved client communication"],
  },
  {
    slug: "drone-inspection-workflow",
    title: "Drone Inspection Workflow",
    summary: "Inspection-focused drone operations designed to capture issues quickly and communicate findings clearly.",
    description:
      "This project shows how drone operations can support inspection work across industrial, property, and infrastructure environments. The emphasis is on speed, safety, and producing a reliable visual record that can be shared with stakeholders.",
    technologies: ["Aerial Inspection", "Data Capture", "Safety Planning", "Reporting", "Video Production"],
    links: {
      demo: "https://www.youtube.com/channel/UCFODtxH31XxzkY4QY--KTSw",
    },
    metrics: ["Reduced site travel time", "Faster issue identification", "More consistent deliverables"],
  },
  {
    slug: "media-and-marketing-drone-content",
    title: "Media & Marketing Drone Content",
    summary: "Visual storytelling and promotional aerial footage built for a modern drone brand presence.",
    description:
      "This work focuses on creating polished drone footage and branded media that help communicate the value of drone services in a more engaging and memorable way. It blends technical execution with creative presentation for a stronger portfolio impact.",
    technologies: ["Cinematic Aerial Video", "Brand Storytelling", "Editing", "Content Strategy", "Social Media"],
    links: {
      demo: "https://www.youtube.com/channel/UCFODtxH31XxzkY4QY--KTSw",
    },
    metrics: ["Better visual storytelling", "Stronger online presence", "More polished client-facing content"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-drone-portfolio-that-shows-real-work",
    title: "Building a Drone Portfolio That Shows Real Work Clearly",
    date: "2026-09-01",
    excerpt: "A practical approach to organizing drone projects, media, and outcomes so visitors can understand the value of the work quickly.",
    tags: ["Portfolio", "Drone Work", "Strategy"],
    content: [
      "When I built this site, the main goal was to make the work feel organized and easy to understand. A drone company portfolio works best when visitors can quickly see what kind of projects you handle, what footage you produce, and what outcomes your work supports.",
      "That is why I structured the site around a combination of project highlights, YouTube content, and concise descriptions. The result is a portfolio that feels professional without becoming cluttered or difficult to navigate.",
      "A strong portfolio also helps people understand the range of your capabilities, whether that includes mapping, inspection, filming, or technical demonstrations. The more clearly you can present that, the easier it becomes to attract the right opportunities.",
    ],
  },
  {
    slug: "how-to-organize-drone-content-for-clients",
    title: "How I Organize Drone Content for Clients and Recruiters",
    date: "2026-08-20",
    excerpt: "A simple method for turning YouTube content and drone footage into a polished, searchable showcase.",
    tags: ["Content", "Marketing", "Process"],
    content: [
      "YouTube content is valuable, but it becomes much more useful when it is presented with context. That means pairing each video with a short explanation of the purpose, the setting, and the type of work it represents.",
      "For a portfolio site, that context is what turns raw footage into a useful story. Viewers can immediately understand whether they are looking at a survey, inspection, media project, or demonstration.",
      "When content is organized well, it becomes easier to share with clients, employers, and collaborators. It also makes future updates much more manageable as the portfolio grows.",
    ],
  },
];

export const videos: Video[] = [
  {
    id: "demo-1",
    title: "Drone Survey and Mapping Demo",
    description: "A look at how aerial survey work can be organized into a clear, professional portfolio piece with usable visual output.",
    duration: "12:08",
    publishedAt: "2026-08-15",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "demo-2",
    title: "Inspection and Site Documentation Workflow",
    description: "A short walkthrough of the process behind inspection-focused drone work, including capture, organization, and presentation.",
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
