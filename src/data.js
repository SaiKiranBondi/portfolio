const portfolioData = {
  hero: {
    name: "Sai Kiran Bondi",
    tagline: "Software Engineer | AI & Full-Stack Developer",
    intro: "Passionate about AI/ML and building scalable backend solutions.",
    profileImage: "/images/profile.png",
    resume: "/resume.pdf",
    github: "https://github.com/SaiKiranBondi",
    linkedin: "https://www.linkedin.com/in/sai-kiran-bondi-1a4459379/",
  },
  about: {
    education: [
      {
        school: "IIITDM Kancheepuram",
        degree: "B.Tech CSE (AI Major)",
        year: "2025",
        cgpa: "9.12",
      },
      {
        school: "SASI Junior College",
        degree: "Intermediate",
        year: "2021",
        cgpa: "9.78",
      },
      {
        school: "Holy Angels E.M School",
        degree: "SSC",
        year: "2019",
        cgpa: "10",
      },
    ],
    funFacts: [
      "Powerlifting Captain at IIITDM",
      "Tutored juniors in Calculus & Linear Algebra (Certificate awarded)",
    ],
  },
  experience: [
    {
      company: "Ruckus Networks",
      role: "Software Engineer (Full Time)",
      duration: "July 2025 – Present",
      highlights: [
        "Started as a Full-Time Software Engineer in the Infrastructure Team.",
      ],
    },
    {
      company: "GoLLM",
      role: "Full Stack and AI Intern",
      duration: "December 2024 – March 2025",
      highlights: [
        "Built a Video-RAG system for timestamp-based retrieval in videos using Whisper, Azure Speech-to-Text, Qdrant, and Gemini AI.",
        "Developed LLM-based document automation pipelines for AI-driven reporting.",
        "Designed and deployed REST APIs for scalable backend operations and seamless data processing.",
      ],
    },
    {
      company: "IIITDM Kancheepuram",
      role: "Research Intern",
      duration: "August 2024 – November 2024",
      highlights: [
        "Co-authored a paper on continual learning for chest X-ray disease classification titled 'Evaluation of Class Incremental Replay Methods for Lung Diseases Classification', submitted to CVIP (Paper ID: 444).",
        "Implemented GAN architectures (CycleGAN, Pix2Pix, WGAN) for image synthesis and domain adaptation using PyTorch and related libraries.",
        "As a continuation, developed a novel hybrid continual learning strategy named EWC-Replay.",
      ],
    },
    {
      company: "IIITDM Kancheepuram",
      role: "Academic Tutor",
      duration: "August 2024 – November 2024",
      highlights: [
        "Taught Calculus & Linear Algebra to my fellow juniors at IIITDM.",
        "Received certificate of appreciation from Academics",
      ],
    },
    {
      company: "ESAB India",
      role: "Full Stack and AI Intern",
      duration: "June 2024 – August 2024",
      highlights: [
        "Implemented an LLM-powered retrieval system for 25,000+ industrial documents using multi-modal RAG.",
        "Worked with embedded C and hardware interfaces to collect real-time data from industrial machines.",
        "Contributed to a project on material lifetime prediction using various ML/DL models and deployed TFLite models on edge devices.",
      ],
    },
  ],
  currentProjects: [
    {
      title: "CollabGraph",
      desc: `Imagine if **LinkedIn, GitHub, and a hackathon matchmaking tool** had a smart AI baby. CollabGraph:
-   Finds people working on ideas like yours.
-   Shows you exactly how your work overlaps.
-   Lets you connect instantly without oversharing until you’re ready.

The funny part? While building CollabGraph the first time, _I’d probably need help myself_. But once it’s ready, I’ll never have to go hunting again, I can just click a button, raise a “help ticket” to my network and beyond, and get my own AI-powered buddy to bring in the right people fast. From there, we can collaborate directly, track progress, and even meet locally if it makes sense.`,
      fullDescription: `
_A smart platform to discover, match, and collaborate on projects with like-minded people._

### Core Idea

Imagine if **LinkedIn, GitHub, and a hackathon matchmaking tool** had a smart AI baby. CollabGraph:
-   Finds people working on ideas like yours.
-   Shows you exactly how your work overlaps.
-   Lets you connect instantly without oversharing until you’re ready.

The funny part? While building CollabGraph the first time, _I’d probably need help myself_. But once it’s ready, I’ll never have to go hunting again, I can just click a button, raise a “help ticket” to my network and beyond, and get my own AI-powered buddy to bring in the right people fast. From there, we can collaborate directly, track progress, and even meet locally if it makes sense.

### Why People Will Care

- You can find collaborators _or_ quick problem-solvers instantly.
- You control exactly what you share and when.
- Collaboration becomes as easy as posting a help request.
- Visual, engaging, and eliminates cold networking.

### Key Features

1. **LinkedIn Integration** – Pull public project and skill data from your connections to see what they’re working on.
2. **Interest & Project Flags** – Tag your projects with specific categories (e.g., AI, EdTech, IoT) to make them discoverable.
3. **Controlled Context Sharing** – Decide exactly what information is shared for matching.
4. **Smart Match Engine** – AI-powered keyword and semantic matching to find relevant people and projects.
5. **Match Graph Visualization** – Interactive maps showing overlaps and closest matches.
6. **Help Ticket System (“Buddy Mode”)** – One-click broadcast for assistance to network + community.
7. **Expert Linking** – Auto-suggest experts when a problem is flagged.
8. **Location-Based Meetups** – Suggest in-person meetups for nearby collaborators.
9. **Connection Requests** – “Connect to Collaborate” with optional staged intros.
10. **Two-Way Bot Intro** – AI-mediated starter conversation before direct chat.
11. **Progress Sharing & Tracking** – Link repos, share updates, and track milestones.`,
      tech: ["LLM", "Agents", "Google ADK", "Vector DB"],
    },
    {
      title: "LangForge",
      desc: `LangForge is your **personal AI automation toolkit** a stable, modular version of LangChain you can fully control.
Instead of dealing with breaking updates, you build AI workflows your way:
-   Load PDFs into structured data.
-   Extract insights using Google’s NLP tools.
-   Process scanned docs with OCR.
-   Chain everything with your own custom agents.

You decide what tools plug in, and you keep the power to adapt no vendor lock-in, no chaos.`,
      fullDescription: `
_A stable, modular alternative to LangChain, fully under your control._

### Core Idea

LangForge is your **personal AI automation toolkit** a stable, modular version of LangChain you can fully control.
Instead of dealing with breaking updates, you build AI workflows your way:
-   Load PDFs into structured data.
-   Extract insights using Google’s NLP tools.
-   Process scanned docs with OCR.
-   Chain everything with your own custom agents.

### Why People Will Care

- Keeps working even when the AI ecosystem changes.
- No vendor lock-in or surprise breaking changes.
- Lets you combine your own tools into powerful custom AI pipelines.
- Perfect for developers who want document processing without bloated frameworks.

### Key Features

1. **Stable Core Wrapper** – Modular Python framework to connect LLMs, tools, and workflows without dependency breakage.
2. **Custom PDF Loader** – Convert PDFs directly into structured JSON with metadata.
3. **LangExtract Integration** – Use Google’s NLP tools for entity/context extraction.
4. **IntelliPDF** – Combine OCR + LangExtract + AI agents for scanned or complex PDFs.
5. **MCP Integration** – Custom Model Control Points for domain-specific processing.
6. **Extensible Agents** – Add new tools and chain logic without altering the base system.
7. **Plugin Store** – Drop-in modules for loaders, parsers, and connectors.`,
      tech: ["LangChain", "OCR", "NLP", "Agents"],
    },
  ],
  pastProjects: [
    {
      title: "GoLLM Survey Analytics Tool",
      desc: `Upload CSV/Excel data to generate AI-powered survey analytics reports with quantitative/qualitative insights, intelligent summarization, and automated reporting.`,
      fullDescription: `
      _Upload CSV/Excel data to generate AI-powered survey analytics reports with quantitative/qualitative insights, intelligent summarization, and automated reporting._

      Developed an AI-powered survey analytics platform that transforms raw tabular data (Excel/CSV) into professional, insightful DocX reports with automated visuals. This first version, now in production with continuous updates, provides:
- Quantitative and Qualitative analysis using advanced LLM-based insights.
- Semantic clustering and pattern recognition for intelligent summarization and sub-topic discovery.
- Automated visualization of key findings.
- A seamless flow from raw data to comprehensive, visually rich reports.`,
      tech: ["FastAPI", "React", "PostgreSQL", "Redis", "LangChain"],
    },
    {
      title: "Video-RAG System",
      desc: `Ask questions about videos or YouTube playlists and get precise answers with timestamp links.`,
      fullDescription: `
      _Ask questions about videos or YouTube playlists and get precise answers with timestamp links._
      Developed a Video-RAG system for a client, enabling intelligent search and retrieval from video collections. Key features include:
- Utilized python-scenedetect to automatically identify and capture important scenes based on content changes.
- Processed both visual and audio streams to generate comprehensive transcript data.
- Implemented a robust retrieval system with extensive support for various Indian languages.`,
      tech: [
        "Azure Speech-to-Text",
        "Whisper",
        "Qdrant",
        "Gemini AI",
        "Redis",
        "FastAPI",
      ],
    },
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript"],
    backend: ["FastAPI", "Django", "Node.js", "REST APIs"],
    ai: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Langgraph",
      "Google ADK-A2A",
      "Hugging Face",
      "OpenAI",
      "Gemini AI",
      "Crew AI",
      "MCP",
    ],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant"],
    devOps: ["Docker", "GitHub Actions"],
    frontend: ["React.js", "Next.js", "Tailwind CSS"],
    developerTools: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Postman"],
  },
  achievements: [
    "Won Vashisht ML Hackathon 2024",
    "1st in Prompt Engineering 2025",
  ],
  contact: {
    email: "amsaikiran01@gmail.com",
    github: "https://github.com/SaiKiranBondi",
    linkedin: "https://www.linkedin.com/in/sai-kiran-bondi-1a4459379/",
  },
};

export default portfolioData;
