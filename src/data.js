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
      title: "LLM Optimization Toolkit",
      desc: "Working on optimizing inference pipelines",
      img: "/images/project1.png",
    },
    {
      title: "Learning Graph Databases",
      desc: "Exploring Neo4j and its AI integrations",
      img: "/images/project2.png",
    },
  ],
  pastProjects: [
    {
      title: "ML Studio",
      desc: "Hackathon-winning ML model selector",
      tech: ["TensorFlow", "Streamlit"],
    },
    {
      title: "Video-RAG",
      desc: "AI video search engine",
      tech: ["FastAPI", "Qdrant"],
    },
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript", "TypeScript"],
    backend: ["FastAPI", "Django", "Node.js"],
    ai: ["TensorFlow", "PyTorch", "LangChain"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
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
