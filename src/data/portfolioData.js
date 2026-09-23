export const personalInfo = {
  name: "Kavi Varshini",
  fullName: "Kavivarshini S",
  title: "BCA AI & ML Student | Aspiring Data & AI Professional",
  tagline: "Building intelligent systems, scalable software, and data-driven solutions.",
  degree: "BCA — Artificial Intelligence & Machine Learning",
  university: "Alliance University, Bengaluru",
  graduationYear: "2027",
  academicPeriod: "2023 – 2027",
  cgpaPercentage: "81.31% Academic Record",
  email: "kavivarshini13@gmail.com",
  altEmail: "skavivarshiniBCA24@ced.alliance.edu.in",
  phone: "+91 9345988779",
  location: "Bengaluru, Karnataka, India",
  openToWork: true,
  statusBadge: "Open to Internship Opportunities",
  socials: {
    github: "https://github.com/Kavivarshini13",
    linkedin: "https://www.linkedin.com/in/kavi-varshini-b5601a326/",
    leetcode: "https://leetcode.com/u/Skavivarshini/",
    hackerrank: "https://hackerrank.com/profile/kavivarshini13"
  },
  aboutBio: [
    "I am a BCA Artificial Intelligence and Machine Learning student at Alliance University, Bengaluru. I am passionate about Artificial Intelligence, Machine Learning, Data Analytics, programming, and software development. I enjoy building practical projects and continuously improving my technical and problem-solving skills.",
    "My academic and project foundation blends core computer science fundamentals—such as Data Structures & Algorithms, Object-Oriented Programming, and Relational Database Systems—with modern AI & Data Analytics toolkits. I actively focus on applying structured algorithms to real-world challenges."
  ],
  quickStats: [
    { icon: "GraduationCap", label: "Degree & Specialization", value: "BCA — AI & ML" },
    { icon: "Building2", label: "University", value: "Alliance University, Bengaluru" },
    { icon: "Calendar", label: "Academic Span", value: "2023 – 2027 (81.31% Academic Record)" },
    { icon: "Sparkles", label: "Focus Areas", value: "AI, ML, DSA & Data Systems" }
  ]
};

export const skillsData = {
  programming: [
    {
      name: "Python",
      level: "Core Competency",
      description: "Data analysis, algorithmic scripting, OOP concepts, ML prototyping, and data structures.",
      icon: "Code2",
      tags: ["OOP", "Data Structures", "Algorithms"]
    },
    {
      name: "Java",
      level: "Proficient",
      description: "Object-oriented program architecture, collections, and foundational software engineering.",
      icon: "Coffee",
      tags: ["OOP", "Classes & Inheritance", "Collections"]
    },
    {
      name: "SQL",
      level: "Proficient",
      description: "Relational schema design, complex joins, subqueries, normalization, and indexing.",
      icon: "Database",
      tags: ["Relational DB", "Queries", "Joins", "Data Integrity"]
    }
  ],
  aiData: [
    {
      name: "Machine Learning",
      level: "Applied Concepts",
      description: "Supervised and unsupervised learning models, regression, classification, and evaluation metrics.",
      icon: "Brain",
      tags: ["Scikit-learn", "Model Training", "Evaluation"]
    },
    {
      name: "Data Analytics",
      level: "Applied Concepts",
      description: "Exploratory Data Analysis (EDA), metric identification, statistical insights, and reporting.",
      icon: "BarChart3",
      tags: ["EDA", "Hypothesis", "Pattern Discovery"]
    },
    {
      name: "Pandas & NumPy",
      level: "Proficient",
      description: "Vectorized numerical operations, multi-dimensional array math, and tabular dataset manipulation.",
      icon: "Table",
      tags: ["Data Wrangling", "Matrices", "Series & DataFrames"]
    },
    {
      name: "Matplotlib & Seaborn",
      level: "Proficient",
      description: "Visualizing multivariate distributions, correlation heatmaps, line charts, and bar graphs.",
      icon: "PieChart",
      tags: ["Data Visualization", "Statistical Plots"]
    }
  ],
  webDev: [
    {
      name: "React JS",
      level: "Frontend Core",
      description: "Component architecture, reactive state management, lifecycle hooks, and responsive UX.",
      icon: "Layout",
      tags: ["Components", "Hooks", "Virtual DOM", "SPA"]
    },
    {
      name: "Node.js & Express.js",
      level: "Backend API",
      description: "RESTful API routing, server-side logic, middleware integration, and async handling.",
      icon: "Server",
      tags: ["REST APIs", "Middleware", "Backend Routes"]
    },
    {
      name: "HTML5 & Modern CSS3",
      level: "Foundation",
      description: "Semantic layouts, Flexbox, CSS Grid, animations, and mobile-first responsive web design.",
      icon: "FileCode",
      tags: ["Semantic HTML", "Flexbox", "Grid", "Animations"]
    }
  ],
  tools: [
    {
      name: "Git & GitHub",
      level: "Version Control",
      description: "Repository workflows, branching, pull requests, commit history, and collaboration.",
      icon: "GitBranch",
      tags: ["VCS", "Collaboration", "Git CLI"]
    },
    {
      name: "VS Code & Jupyter",
      level: "Development IDEs",
      description: "Code editing, interactive data science notebooks, debugging, and extensions.",
      icon: "Terminal",
      tags: ["Notebooks", "Debugging", "Productivity"]
    },
    {
      name: "MySQL Workbench",
      level: "DB Administration",
      description: "Visual schema modeling, query execution, and database administration.",
      icon: "HardDrive",
      tags: ["Schema Modeling", "ER Diagrams"]
    },
    {
      name: "Power BI",
      level: "Business Intelligence",
      description: "Interactive visual dashboards, data transformations, and executive KPI reporting.",
      icon: "TrendingUp",
      tags: ["Dashboards", "KPIs", "BI Analytics"]
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Student Study Planner",
    subtitle: "AI-Powered Academic Planning & Progress Tracking",
    category: "ai-ml",
    categoryLabel: "AI & Full Stack",
    description: "An intelligent study planning application designed to help students organize learning activities, manage study time and generate structured study plans.",
    detailedDescription: "Designed to solve unstructured academic workloads by offering algorithmic scheduling based on assignment deadlines, subject complexity, and student study pace. Built with an intuitive React interface and resilient Node/Express API backing.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "Dynamic study plan generation based on course milestones",
      "Interactive daily timetable and goal tracking dashboard",
      "Progress metrics and completion analytics",
      "Clean, distraction-free user interface"
    ],
    technologies: ["React JS", "Node.js", "Express.js", "AI/ML concepts"],
    status: "View Repository",
    hasRealRepo: true,
    githubUrl: "https://github.com/Kavivarshini13/-student-study-planner",
    badge: "Featured Project",
    iconName: "CalendarClock"
  },
  {
    id: 2,
    title: "Hospital Patient Queue Management System",
    subtitle: "Data Structure Implementation with Priority Queues",
    category: "dsa",
    categoryLabel: "Data Structures & Python",
    description: "A Python-based system for managing hospital patient queues efficiently using queue and priority queue concepts.",
    detailedDescription: "Demonstrates core algorithmic problem solving by managing two distinct priority streams: emergency triage (critical condition prioritization) and standard OPD queues (First-In, First-Out). Avoids starvation of regular patients while guaranteeing instant escalation for critical patients.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "Priority Queue (Heap-based) data structure for medical triage",
      "Dual queue workflow: Emergency critical triage vs. standard OPD",
      "Dynamic wait-time computation and real-time patient token dispatch",
      "Robust CLI / algorithmic test harness for edge conditions"
    ],
    technologies: ["Python", "Data Structures", "Priority Queues"],
    status: "View Repository",
    hasRealRepo: true,
    githubUrl: "https://github.com/Kavivarshini13/Hospital-Patient-Queue-Management-System",
    badge: "Core DSA",
    iconName: "Stethoscope"
  },
  {
    id: 3,
    title: "Uber Trip Data Analysis & Data Warehouse",
    subtitle: "End-to-End Mobility Analytics & Dashboard",
    category: "data-analysis",
    categoryLabel: "Data Analytics & Warehousing",
    description: "Analyzed Uber trip data to identify patterns, trends, and key insights through an interactive dashboard.",
    detailedDescription: "Extracted, transformed, and modeled historical Uber trip records using structured data warehousing methodologies. Uncovered spatial pickup hotspots, hourly surge variations, driver availability correlations, and passenger route optimizations.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "Dimensional modeling and data warehouse schema for trip events",
      "Exploratory Data Analysis (EDA) uncovering peak transit hours",
      "Interactive data visualizations of geospatial density",
      "Actionable driver deployment insights based on surge patterns"
    ],
    technologies: ["Python", "SQL", "Pandas", "Matplotlib", "Data Warehouse"],
    status: "View Repository",
    hasRealRepo: true,
    githubUrl: "https://github.com/Kavivarshini13/Uber-Trip-Data-Analysis-Data-Warehouse-Project",
    badge: "Data Warehouse",
    iconName: "Car"
  },
  {
    id: 4,
    title: "Anime Rating Prediction",
    subtitle: "Machine Learning Regression & Score Forecasting",
    category: "ai-ml",
    categoryLabel: "MACHINE LEARNING",
    description: "A machine learning project that analyzes anime-related data and predicts anime ratings using relevant features such as genre, popularity, number of episodes, and other attributes.",
    detailedDescription: "Engineered regression models to forecast entertainment ratings by processing categorical features (genres, animation studios), duration metrics, member counts, and user favorites. Built with structured feature scaling and cross-validation.",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "Feature engineering and preprocessing on high-cardinality metadata",
      "Regression model training (Random Forest, Linear, Gradient Boosting)",
      "Model evaluation using RMSE, MAE, and R-squared metrics",
      "Feature importance ranking identifying key rating drivers"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Data Visualization"],
    status: "View Repository",
    hasRealRepo: true,
    githubUrl: "https://github.com/Kavivarshini13/Anime-prediction",
    badge: "Machine Learning",
    iconName: "Sparkles"
  },
  {
    id: 5,
    title: "Online Course Reviews using NLP",
    subtitle: "Sentiment Analysis & Text Feedback Mining",
    category: "ai-ml",
    categoryLabel: "NLP & MACHINE LEARNING",
    description: "An NLP project that analyzes online course reviews by processing text data and extracting insights from user feedback, including sentiment and review patterns.",
    detailedDescription: "Extracted nuanced learner feedback through natural language processing. Applied tokenization, stopword filtering, lemmatization, and TF-IDF vectorization to classify student sentiments and summarize curriculum pain points.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "Text preprocessing and normalization pipeline using NLTK",
      "Sentiment classification identifying positive, neutral, and critical reviews",
      "N-gram frequency analysis and keyword clustering",
      "Visual sentiment heatmaps and feedback distribution charts"
    ],
    technologies: ["Python", "NLP", "NLTK", "Text Processing", "Machine Learning"],
    status: "View Repository",
    hasRealRepo: true,
    githubUrl: "https://github.com/Kavivarshini13/nlp-project",
    badge: "NLP & AI",
    iconName: "Brain"
  },
  {
    id: 6,
    title: "Lost and Found Portal",
    subtitle: "Community Web Platform for Campus Item Recovery",
    category: "web-db",
    categoryLabel: "CAPSTONE PROJECT",
    description: "A web-based platform for reporting, searching, and managing lost and found items across university campus facilities.",
    detailedDescription: "Allows students and faculty to post reports for misplaced belongings, upload descriptions and locations, filter recently cataloged items, and coordinate safe item returns through a clean dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    keyFeatures: [
      "User submission forms with category and campus location tags",
      "Search and filtering mechanism by item type and date",
      "Status tracking: Reported, Claimed, Verified, Returned",
      "Clean UI for intuitive student engagement"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Relational Database"],
    status: "Capstone Project • In Progress",
    isCapstoneInProgress: true,
    hasRealRepo: false,
    githubUrl: null,
    badge: "Capstone Project",
    iconName: "SearchCheck"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Alliance University, Bengaluru",
    period: "2023 – 2027",
    score: "81.31% Academic Record",
    scoreType: "Academic Record",
    status: "Currently Pursuing (Placement Ready)",
    description: "Developing foundations in programming, artificial intelligence, machine learning, data analytics, databases and software development.",
    highlights: [
      "Consistent 81.31% Academic Record",
      "Active participant in technical recruitment DSA programs",
      "Coursework in Python, Java, SQL, and AI/ML algorithms",
      "Practical project work spanning full stack and algorithmic systems"
    ]
  },
  {
    degree: "Higher Secondary (Class XII)",
    specialization: "Stream: MPC (Mathematics, Physics, Chemistry) + Computer Science",
    institution: "Sri Chaitanya Techno School",
    period: "2024",
    score: "60%",
    scoreType: "Board Examination",
    status: "Completed",
    description: "Completed secondary education in MPC stream with Computer Science, building analytical thinking, mathematics, and programming fundamentals.",
    highlights: [
      "MPC (Mathematics, Physics, Chemistry) + Computer Science",
      "Mathematics & Science foundations",
      "Algorithmic thinking and logical reasoning"
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC / 10th)",
    specialization: "General Academics",
    institution: "Sri Chaitanya School",
    period: "2022",
    score: "70%",
    scoreType: "Board Examination",
    status: "Completed",
    description: "Solid academic foundation across mathematics, science, and computer literacy.",
    highlights: ["Strong foundation in quantitative sciences", "Early interest in technology and computers"]
  }
];

export const internshipExperience = [
  {
    role: "1M1B Green Intern",
    program: "1M1B Green Internship – Green Skills Academy",
    collaboration: "In partnership with AICTE & Supported by Salesforce",
    duration: "60 Hours of Intensive Learning & Live Project Work",
    status: "Successfully Completed",
    description: "Successfully completed the 1M1B Green Internship in partnership with AICTE and supported by Salesforce, with 60 hours of learning and live project work focused on developing a sustainable mindset.",
    outcomes: [
      "Completed 60 hours of practical curriculum and hands-on project work",
      "Gained exposure to industry frameworks supported by Salesforce & AICTE",
      "Collaborated on live project deliverables addressing sustainability problem statements",
      "Strengthened cross-functional problem solving and professional teamwork"
    ],
    tags: ["AICTE Partnered", "Salesforce Supported", "Sustainability & Tech", "60 Hours Live Project"]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Introduction to Databases",
    issuer: "Meta",
    category: "Databases & Backend",
    icon: "Database",
    color: "#0668E1",
    description: "Database architecture, SQL operations, relational integrity, table design, and queries.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/M56DQDBT9OTR"
  },
  {
    id: 2,
    title: "Data Warehouse Fundamentals",
    issuer: "IBM",
    category: "Data Architecture",
    icon: "Layers",
    color: "#054ADA",
    description: "Dimensional modeling, ETL concepts, OLAP cubes, schema architecture, and data pipelines.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/HJXXBV139KTY"
  },
  {
    id: 3,
    title: "Introduction to Computers",
    issuer: "Microsoft",
    category: "Computer Science",
    icon: "Cpu",
    color: "#00A4EF",
    description: "Core hardware architecture, operating system fundamentals, and computational theory.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/SH4MG9EROWYT"
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Amazon",
    category: "Web Engineering",
    icon: "Globe",
    color: "#FF9900",
    description: "Frontend interfaces, backend APIs, client-server communications, and cloud architecture.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/ICX5JN0VHKNX"
  },
  {
    id: 5,
    title: "Inferential Statistics",
    issuer: "Duke University",
    category: "Data Science & Math",
    icon: "Sigma",
    color: "#001A9C",
    description: "Hypothesis testing, confidence intervals, normal distributions, and inference modeling.",
    certificateUrl: "https://www.coursera.org/verify/RAKPHW707P0M"
  },
  {
    id: 6,
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    category: "Software Engineering",
    icon: "Code",
    color: "#054ADA",
    description: "Software lifecycles (SDLC), Agile methodologies, design patterns, and testing principles.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/4R00DM535C6L"
  },
  {
    id: 7,
    title: "Automation Developer",
    issuer: "UiPath Academy",
    category: "Robotic Process Automation",
    icon: "Bot",
    color: "#FA4616",
    description: "RPA workflows, automated process design, selectors, and digital worker implementations.",
    certificateUrl: "https://www.credential.net/0ff8fdc8-fa04-4367-ad7a-f13bf8568592#acc.4F0dIDJO"
  },
  {
    id: 8,
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    category: "Artificial Intelligence",
    icon: "Sparkles",
    color: "#0070F3",
    description: "AI strategy, machine learning capabilities, deep learning workflows, and ethical tech adoption.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/EIZVFX7L2R20"
  },
  {
    id: 9,
    title: "Programming for Everybody",
    issuer: "University of Michigan",
    category: "Programming & Python",
    icon: "TerminalSquare",
    color: "#00274C",
    description: "Structured programming fundamentals, control flow, functions, and algorithmic basics in Python.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/TDIJ3FRIZKUV"
  },
  {
    id: 10,
    title: "Data Visualization",
    issuer: "University of Illinois Urbana-Champaign",
    category: "Data Science",
    icon: "BarChart",
    color: "#E84A27",
    description: "Information visualization design, human visual perception, interactive charts, and storytelling.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/GUQZE4S7CS05"
  }
];

export const onlineProfiles = [
  {
    platform: "GitHub",
    handle: "Kavivarshini13",
    url: "https://github.com/Kavivarshini13",
    subtitle: "Source Code & Repositories",
    description: "Explore my codebases, academic projects, and version-controlled developments.",
    icon: "Github",
    color: "#24292e",
    accentBg: "rgba(36, 41, 46, 0.06)",
    buttonText: "Visit GitHub Profile"
  },
  {
    platform: "LinkedIn",
    handle: "kavi-varshini-b5601a326",
    url: "https://www.linkedin.com/in/kavi-varshini-b5601a326/",
    subtitle: "Professional Network",
    description: "Connect for internship opportunities, academic collaborations, and industry networking.",
    icon: "Linkedin",
    color: "#0077b5",
    accentBg: "rgba(0, 119, 181, 0.08)",
    buttonText: "Connect on LinkedIn"
  },
  {
    platform: "LeetCode",
    handle: "Skavivarshini",
    url: "https://leetcode.com/u/Skavivarshini/",
    subtitle: "Data Structures & Problem Solving",
    description: "Practicing algorithmic problem solving, time-space complexity optimization, and coding interviews.",
    icon: "Code",
    color: "#FFA116",
    accentBg: "rgba(255, 161, 22, 0.08)",
    buttonText: "View LeetCode Profile"
  },
  {
    platform: "HackerRank",
    handle: "kavivarshini13",
    url: "https://hackerrank.com/profile/kavivarshini13",
    subtitle: "Skill Badges & Practice",
    description: "Competitive coding problem sets in Python, Java, SQL, and problem solving fundamentals.",
    icon: "Award",
    color: "#00EA64",
    accentBg: "rgba(0, 234, 100, 0.08)",
    buttonText: "View HackerRank"
  }
];
