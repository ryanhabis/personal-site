const summary = {
  name: "RYAN HABIS",
  contact: ["083 802 2571", "ryan.habis@gmail.com", "Dundalk, Co. Louth, Ireland"],
  workAuthorization: "Work Authorization: Stamp 4 / EU Citizen (No sponsorship required)",
};

const skills = {
  cloudAndDevOps: [
    "AWS (EC2, S3, Lambda, ECS, SQS, DynamoDB, CloudFormation, IAM)",
    "Azure (IoT Hub, Blob Storage, Functions, App Services)",
    "CI/CD, Git, Bash, PowerShell",
  ],
  languagesAndDatabases: [
    "Python, SQL (PostgreSQL, MySQL, SQL Server)",
    "C#, Java, JavaScript, PHP",
    "MongoDB, DynamoDB",
  ],
  frameworksAndWeb: [
    "ASP.NET Core, ReactJS, Node.js",
    "RESTful APIs, Entity Framework, HTML5/CSS3",
  ],
  dataAndAnalytics: [
    "Machine Learning, Statistical Modelling",
    "Big Data Analytics, Data Visualization (Power BI/Matplotlib)",
  ],
};

const projects = [
  {
    title: "Cloud-Managed 3D Printing System (Azure IoT Hub & Blob Storage)",
    award: "Best Thesis Award (2025)",
    bullets: [
      "Architected an automated IoT telemetry pipeline using Azure IoT Hub, Functions, and Blob Storage for real-time device monitoring.",
      "Reduced manual operational intervention, achieving a 40% process efficiency gain.",
    ],
  },
  {
    title: "AI Autonomous Tank Bot (RoboCode Ireland)",
    award: "1st Place National Winner (2023)",
    bullets: [
      "Engineered a custom predictive targeting and movement algorithm in Java, achieving a 95% win rate against national university teams.",
    ],
  },
  {
    title: "Financial Anomaly Detection Engine (MSc Project)",
    award: "",
    bullets: [
      "Developed machine learning models in Python (scikit-learn, pandas) to detect fraudulent transaction patterns in large-scale financial datasets.",
    ],
  },
];

const experience = [
  {
    role: "Tutor & Tech Educator",
    company: "Dundalk Institute of Technology (DkIT)",
    period: "2021 – Present",
    bullets: [
      "Instruct 120+ undergraduate students in Object-Oriented Programming (Java, C#), web development, and algorithmic logic.",
      "Secured €6,500 in N-TUTORR national fellowship funding (Top 1% of applicants) to design and lead a tech masterclass series for 680+ students in collaboration with industry engineers.",
    ],
  },
  {
    role: "Freelance Web & Cloud Solutions Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    bullets: [
      "Deploy and maintain secure web applications and custom e-commerce solutions for clients utilizing PHP, JavaScript, WordPress, and AWS S3/EC2 hosting.",
      "Configured custom payment gateway REST APIs, SSL certificates, and automated backup pipelines.",
    ],
  },
  {
    role: "Operations & Systems Manager",
    company: "Self-Employed",
    period: "2018 – Present",
    bullets: [
      "Streamlined property management operations by setting up automated tenant payment workflows and digital record-keeping systems using Office 365 and PowerShell scripts.",
    ],
  },
  {
    role: "Electrician Apprentice",
    company: "Halpenny Electrical Ltd",
    period: "2020",
    bullets: [
      "Diagnosed complex electrical circuitry and interpreted technical schematics, developing a structured hardware-software troubleshooting methodology.",
    ],
  },
];

const education = [
  {
    title: "MSc in Data Analytics",
    institution: "Dundalk Institute of Technology",
    detail: "Expected 2026",
  },
  {
    title: "BSc (Hons) in Cloud Computing",
    institution: "Dundalk Institute of Technology",
    detail: "2020 – 2025 — Grade: 1st Class Honours Equivalent / Best Thesis Award",
  },
];

export default function CvPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Curriculum Vitae
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">{summary.name}</h1>
        </div>
        <a
          href="/cv/Ryan_Habis_CV_v2.docx"
          download
          className="inline-flex rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          Download CV
        </a>
      </div>

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap gap-3 text-sm text-zinc-600">
          {summary.contact.map((item) => (
            <span key={item} className="rounded-full bg-zinc-100 px-3 py-1">
              {item}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium text-zinc-700">{summary.workAuthorization}</p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Professional Summary</h2>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            MSc Data Analytics student and award-winning BSc Cloud Computing graduate (1st Place National RoboCode 2023, Best Thesis Award 2025). Hands-on experience architecting serverless Azure IoT pipelines and AWS cloud environments. Proven track record leading technical initiatives, teaching 680+ students via N-TUTORR national funding, and building production-ready web and data applications. Combines an electrician’s system-troubleshooting mindset with expertise in Python, SQL, REST APIs, and Cloud Infrastructure.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Technical Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800">Cloud & DevOps</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                {skills.cloudAndDevOps.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-800">Languages & Databases</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                {skills.languagesAndDatabases.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-800">Frameworks & Web</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                {skills.frameworksAndWeb.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-800">Data & Analytics</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                {skills.dataAndAnalytics.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Technical Projects</h2>
          <div className="mt-6 space-y-6">
            {projects.map((project) => (
              <div key={project.title} className="rounded-2xl bg-zinc-50 p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
                  {project.award ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-600">
                      {project.award}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Professional Experience</h2>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <div key={`${item.role}-${item.company}`} className="rounded-2xl border border-zinc-200 p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.role}</h3>
                  <span className="text-sm text-zinc-500">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600">{item.company}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Education</h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div key={item.title} className="rounded-2xl bg-zinc-50 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.institution}</p>
                <p className="mt-2 text-sm text-zinc-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
