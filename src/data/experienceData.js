export const EXPERIENCE_DATA = [
  {
    id: "exp-1",
    type: "school",
    badgeText: "SCHOOL EDUCATION //",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Computer Science",
    org: "Edustar International School",
    location: "Kovilpatti, Tamil Nadu",
    date: "2021 – 2022",
    gradeTitle: "GRADE",
    gradeValue: "75%",
    highlightTag: "Academic Foundation",
    highlightText: "Built a strong foundation in Computer Science, Mathematics, and Problem Solving, which sparked my interest in engineering.",
    tags: ["Computer Science", "Mathematics", "Physics", "Algorithmic Problem Solving"]
  },
  {
    id: "exp-2",
    type: "college",
    badgeText: "COLLEGE EDUCATION //",
    title: "B.Tech in Artificial Intelligence & Data Science",
    subtitle: "Department of AI & Data Science",
    org: "P.S.R.R. College of Engineering",
    location: "Sivakasi, Tamil Nadu",
    date: "Sep 2023 – May 2027",
    gradeTitle: "Final Year",
    gradeSubtitle: "(Ongoing)",
    stepper: [
      { label: "I Year – Foundation", done: true },
      { label: "II Year – Core AI & DS", done: true },
      { label: "III Year – Systems & Projects", done: true },
      { label: "IV Year – Final Year", active: true }
    ],
    focusAreas: ["Machine Learning", "Deep Learning", "Data Structures", "Full-Stack Development", "Generative AI"],
    tags: ["Machine Learning", "System Design", "Distributed Systems", "Full-Stack Development"]
  },
  {
    id: "exp-3",
    type: "hackathon-codefury",
    badgeText: "HACKATHON //",
    title: "CODEFURY-24",
    titleHighlight: "-24",
    titleBase: "CODEFURY",
    subtitle: "National Level Technical Hackathon",
    org: "Syed Ammal Engineering College",
    location: "Ramanathapuram · Conducted by LEAP Success",
    date: "Aug 2024 · 24-Hour Continuous Sprint",
    gradeTitle: "NATIONAL FINALIST",
    gradeSubtitle: "AWARD",
    highlights: [
      "Participated in a high-intensity 24-hour National Level Hackathon along with a multidisciplinary team.",
      "Architected and shipped a credit-based P2P digital library platform for community book sharing with dynamic lending economy.",
      "Pitched live prototype to industry evaluation panels, qualifying as a high-ranking National Finalist."
    ],
    tags: ["P2P Digital Library", "Credit Engine", "Full-Stack Web", "REST APIs"]
  },
  {
    id: "exp-4",
    type: "internship",
    badgeText: "INTERNSHIP EXPERIENCE //",
    title: "Data Science Intern",
    titleHighlight: "Intern",
    titleBase: "Data Science ",
    subtitle: "Data Science & Analytics Division",
    org: "Persevex (Data Science & Analytics)",
    location: "Remote / Hybrid",
    date: "Jul 2025 – Sep 2025",
    workMode: "Hybrid",
    roleWork: "Worked on data preprocessing, EDA, and ML model development for real-world enterprise datasets.",
    impact: "Built end-to-end data pipelines and gained hands-on experience with production data analytics and model evaluations.",
    techStack: [
      { name: "Python", type: "python" },
      { name: "Pandas", type: "pandas" },
      { name: "Scikit-learn", type: "scikitlearn" },
      { name: "SQL", type: "sql" },
      { name: "Power BI", type: "powerbi" }
    ],
    tags: ["Python", "Pandas", "Scikit-Learn", "Data Pipelines", "Exploratory Data Analysis"]
  },
  {
    id: "exp-5",
    type: "hackathon-odyssey",
    badgeText: "HACKATHON //",
    title: "HACK ODYSSEY 3.0",
    titleBase: "HACK ODYSSEY ",
    titleHighlight: "3.0",
    subtitle: "24-Hour Systems & Blockchain Hackathon",
    org: "Kalasalingam Engineering College (KARE)",
    location: "Krishnankoil, Tamil Nadu",
    date: "Oct 2025 · 24-Hour Continuous Sprint",
    gradeTitle: "SYSTEMS CHALLENGE",
    gradeSubtitle: "FINALIST",
    highlights: [
      "Architected a tamper-proof image provenance shield deployed on the Polygon blockchain within 24 hours.",
      "Implemented SHA-256 cryptographic digital signatures to verify image provenance and prevent deepfake tampering.",
      "Engineered on-chain verification smart contracts and web verification portal for authenticity validation."
    ],
    tags: ["Polygon Blockchain", "SHA-256 Signatures", "Provenance Shield", "Smart Contracts"]
  }
];

export const CERTIFICATES_DATA = [
  {
    id: "cert-1",
    title: "Programming in Java",
    issuer: "IIT Kharagpur · NPTEL",
    badge: "Elite + Gold Medal (86%)",
    badgeClass: "cert-gold",
    date: "2024",
    skills: ["Java Architecture", "OOP System Design", "Collections Framework"]
  },
  {
    id: "cert-2",
    title: "Python for Data Science",
    issuer: "IIT Madras · NPTEL",
    badge: "Elite + Silver Medal (75%)",
    badgeClass: "cert-silver",
    date: "2024",
    skills: ["Pandas", "NumPy", "Statistical Inference", "Model Evaluation"]
  },
  {
    id: "cert-3",
    title: "Programming, Data Structures & Algorithms Using Python",
    issuer: "IIT Madras · NPTEL",
    badge: "NPTEL Certified",
    badgeClass: "cert-elite",
    date: "2024",
    skills: ["Algorithm Analysis", "Data Structures", "Dynamic Programming"]
  },
  {
    id: "cert-4",
    title: "Database Management Systems (DBMS)",
    issuer: "IIT Kharagpur · NPTEL",
    badge: "Elite Certificate",
    badgeClass: "cert-elite",
    date: "Mar 2025",
    skills: ["SQL", "Relational Algebra", "ACID Transactions", "Indexing & Optimization"]
  },
  {
    id: "cert-5",
    title: "Data Science Internship Certification",
    issuer: "Persevex",
    badge: "Industry Verified",
    badgeClass: "cert-verified",
    date: "Sep 2025",
    skills: ["Machine Learning", "Pipeline Engineering", "Data Analytics"]
  },
  {
    id: "cert-6",
    title: "Code Fury National Hackathon — Finalist Award",
    issuer: "LEAP Success · Syed Ammal Eng. College",
    badge: "24h Hackathon Finalist",
    badgeClass: "cert-award",
    date: "Aug 2024",
    skills: ["P2P Digital Library", "Credit Engine", "Full-Stack Web"]
  },
  {
    id: "cert-7",
    title: "Hack Odyssey 3.0 Systems Challenge Award",
    issuer: "Kalasalingam Engineering College (KARE)",
    badge: "24h Systems Challenge",
    badgeClass: "cert-award",
    date: "Oct 2025",
    skills: ["Polygon Blockchain", "SHA-256 Signatures", "Provenance Shield"]
  },
  {
    id: "cert-8",
    title: "Front-End Web Development Specialist",
    issuer: "Coursera / Meta",
    badge: "Specialization",
    badgeClass: "cert-elite",
    date: "2024",
    skills: ["React.js", "Modern JavaScript (ES6+)", "Responsive CSS3 Architecture"]
  },
  {
    id: "cert-9",
    title: "Full-Stack Software Engineering Foundations",
    issuer: "HackerRank Verified",
    badge: "Verified Skills",
    badgeClass: "cert-verified",
    date: "2024",
    skills: ["Node.js", "RESTful Architecture", "Relational Databases", "Git"]
  }
];
