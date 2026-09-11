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
  embedUrl?: string;
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
  embedUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "droneireland-website",
    title: "DroneIreland Website",
    summary: "A professional, trust-building website for an Irish drone services business focused on photography, video, inspections, and lead generation.",
    description:
      "DroneIreland is a clean, conversion-focused website built to help a licensed Irish drone operator clearly explain their services, pricing, and credibility. The site highlights photography, video, inspections, and nationwide coverage while reinforcing trust through IAA licensing, insurance, GDPR compliance, and a strong local service message. It is structured to guide visitors from curiosity to enquiry with clear package pages, service explanations, FAQs, and a straightforward contact path.",
    technologies: ["Service Positioning", "Lead Generation", "Trust Signals", "Pricing Pages", "Conversion-Focused UX"],
    links: {
      demo: "https://www.droneireland.ie/",
    },
    metrics: ["Clear service positioning", "Stronger credibility for buyers", "Simple path from interest to enquiry"],
  },
  {
    slug: "bistro-brand-promotion",
    title: "Bistro Coffee Shop Promotion",
    summary: "A collaborative promotional campaign for a local bistro combining drone photography, social-first video, and team-led content production.",
    description:
      "This project involved promoting a coffee and food shop through a multi-format content campaign that blended aerial visuals with on-the-ground video production. I worked alongside a team of videographers to create content that showcased the atmosphere, quality, and personality of the business in a way that felt authentic and highly shareable. The result was a polished social media story designed to attract attention, build local awareness, and present the brand in a stronger, more engaging light.",
    technologies: ["Drone Photography", "Video Production", "Social Media Content", "Brand Promotion", "Team Collaboration"],
    links: {
      demo: "https://www.instagram.com/reel/DY9m0oRM4ZQ/?stkn=MzRlODBiNWFlZA==",
    },
    embedUrl: "https://www.instagram.com/reel/DY9m0oRM4ZQ/embed",
    metrics: ["Strong local brand visibility", "Social-first content creation", "Collaborative production workflow"],
  },
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
    id: "blackrock-4k-drone-flight",
    title: "Drone flight over Blackrock in 4K",
    description:
      "IAA certified pilot.\n\n📍 Location: Blackrock County Louth\n🎵 Music: 2AM - Ben Elson\n✈️ Drone: DJI Mini 4K\n\n🔗 Affiliate links\n\n- DJI: https://click.dji.com/AB4OPzBNbrgwIaRsYOBu-g?pm=link\n\nSocial links:\n📸 Instagram: @drone.ireland\n🌐 Website: https://www.droneireland.ie/\n🎵 TikTok: @tiktok.com/@ryanhabis\n👍 Facebook: Drone Ireland\n\n🛡️ IAA 1a & 3a certified | Public liability insured\n\nBoring but important stuff:\nI am a fully IAA-certified drone pilot (1a & 3a) and maintain full public liability insurance. All flights comply with Irish Aviation Authority regulations.\n\nDisclaimer: Some links in this description are affiliate links, meaning I may earn a small commission if you make a purchase, at no extra cost to you. Thanks for supporting the channel!",
    duration: "0:30",
    publishedAt: "2026-09-11",
    thumbnail: "https://img.youtube.com/vi/MRisT1OiDaY/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/MRisT1OiDaY?si=9rt5EttWesvoaItO",
  },
  {
    id: "cross-cooley-challenge-4k",
    title: "Drone flight of Cross Cooley Challenge from start to finish 15km in 4K",
    description:
      "May 24, 2026\n\nDrone flight of Cross Cooley Challenge from start to finish 15km in 4K – see Ireland's landscape from an aerial view\n\n Charities: 100% of the funds raised go directly to cancer care and support via North Louth Hospice and respite care for children with disabilities via the Maria Goretti Foundation.\n\nIAA certified pilot.\n\n📍 Location: Starting at Lumpers bar ending up in Carlingford\n🎵 Music: Plastic Flowers (Instrumental Version) Sully Bright\n✈️ Drone: DJI Mini 4K\n\n🔗 Affiliate links\n\n- DJI: https://click.dji.com/AB4OPzBNbrgwIaRsYOBu-g?pm=link\n\nSocial links:\n📸 Instagram: @drone.ireland\n🌐 Website: https://www.droneireland.ie/\n🎵 TikTok: @tiktok.com/@ryanhabis\n👍 Facebook: Drone Ireland\n\n🛡️ IAA 1a & 3a certified | Public liability insured\n\nBoring but important stuff:\nI am a fully IAA-certified drone pilot (1a & 3a) and maintain full public liability insurance. All flights comply with Irish Aviation Authority regulations.",
    duration: "0:30",
    publishedAt: "2026-05-24",
    thumbnail: "https://img.youtube.com/vi/A9k4NBnXtQ4/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/A9k4NBnXtQ4?si=1vZWZr2PtewXH5f3",
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
