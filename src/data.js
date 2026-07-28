// Personal Portfolio Data for Data Scientist & AI Enthusiast
// Hero Section
export const personalInfo = {
  name: "Rahul Bhadoriya",
  titles: [
    "Data Scientist",
    "Machine Learning Enthusiast",
    "AI Explorer",
    "Python Developer",
    "Gen-AI Explorer"
  ],
  tagline: "I transform raw data into meaningful insights through analytics, machine learning, and intelligent solutions. Passionate about building impactful AI-driven applications and continuously learning new technologies.",
  intro: "I am a passionate Data Scientist and AI enthusiast dedicated to extracting actionable insights from complex datasets and building intelligent systems. With a strong foundation in statistical analysis, machine learning algorithms, and data visualization, I bridge the gap between raw data and strategic decision-making. Constantly exploring the boundaries of Deep Learning and Generative AI to craft futuristic solutions.",
  email: "rahulbh8077@gmail.com",
  phone: "+91-8077338892",
  location: "Uttar Pradesh-India",
  resumeUrl: "https://drive.google.com/file/d/15tPxniSjQF-e_Kl6nOxs-jn8dWhP4_vt/view?usp=drive_link", // Will trigger interactive preview/download
  githubUsername: "rahulbh8077"
};
// Education Section
export const education = [
  {
    degree: "Bachelor's in Technology (Information Technology)",
    institution: "Dr. AITD Kanpur UP",
    period: "2024 - 2028",
    gpa: "8.03/10.00",
    details: "Specializing in Machine Learning, Deep Learning, and Advanced Analytics. Core coursework: Statistical Inference, Neural Networks, Database Systems, Data Structures & Algorithms, Big Data Technologies."
  },
  {
    degree: "High School & Intermediate (Specialization in Information Technology)",
    institution: "CBSE",
    period: "2021 - 2023",
    gpa: "94.5%",
    details:"Focused on Science and strengthened analytical and logical reasoning skills."
  }
];

export const skills = {
  programming: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Tail-Wind CSS", level: 85 }
  ],
  dataScience: [
    { name: "Machine Learning", level: 92 },
    { name: "Deep Learning", level: 85 },
    { name: "Exploratory Data Analysis (EDA)", level: 95 },
    { name: "Data Cleaning & Preprocessing", level: 90 },
    { name: "Feature Engineering", level: 88 },
    { name: "Model Evaluation & Tuning", level: 90 }
  ],
  libraries: [
    { name: "Pandas & NumPy", level: 95 },
    { name: "Scikit-Learn", level: 92 },
    { name: "TensorFlow & Keras", level: 80 },
    { name: "Matplotlib & Seaborn", level: 94 },
    { name: "PyTorch (Basic)", level: 70 }
  ],
  visualization: [
    { name: "Power BI", level: 88 },
    { name: "Tableau", level: 85 },
    { name: "MS Excel (Advanced)", level: 90 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Jupyter Notebook / Google Colab", level: 95 },
    { name: "Docker", level: 70 }
  ],
  softSkills: [
    { name: "Analytical Problem Solving", level: 95 },
    { name: "Technical Communication", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Leadership", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Hostel Room Allotment System",
    category: "Web Based Project",
    techStack: ["Python", "Flask", "SQL", "HTML5", "CSS3", "JS"],
    description: "An automated, algorithmic room allocation system utilizing constraint satisfaction algorithms to allocate rooms based on student preferences, compatibility matching, and vacancy rules. Designed with a custom dashboard and interactive floor plans.",
    challenge: "Traditional room allotment is time-consuming, prone to human error, and fails to consider student compatibility (study habits, sleeping schedule, interests), leading to conflicts.",
    solution: "Developed an optimization algorithm that evaluates compatibility scores and roommate preferences. Built a Flask web app to automate the application, verification, and allocation flow.",
    keyFeatures: [
      "Secure registration and login system for students to access hostel services.",
      "Dedicated admin panel to manage students, rooms, and hostel records efficiently.",
      "Assigns hostel rooms based on room availability, reducing manual effort.",
      "Add, update, delete, and monitor hostel room details with ease."
    ],
    metrics: "Reduced room allotment processing time by 85% and cut student roommate complaints by 72% in test runs.",
    liveUrl: "#",
    githubUrl: "https://github.com/rahulbh8077/Hostel-Room-Allotment-System"
  },
  {
    id: 2,
    title: "Elderly-Care-Assistant",
    category: "Agents CLI",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Antigravity", "CLI","Agents"],
    description: "An end-to-end Simple ReAct agent Agent generated with agents-cli version 1.0.0",
    challenge: "Many elderly individuals face difficulties in managing their daily activities, medication schedules, emergency situations, and communication with caregivers. Family members may not always be available to monitor their health, leading to missed medications, delayed emergency responses, and feelings of loneliness.",
    solution: "The Elderly Care Assistant is a smart, user-friendly application designed to support senior citizens in their daily lives.",
    keyFeatures: [
      "Safe login and registration for elderly users and caregivers.",
      "SHAP value explanations for model transparency (Explainable AI)",
      "One-tap emergency alert that quickly notifies caregivers or family members.",
      "Schedule and manage doctor appointments with reminder notifications."
    ],
    metrics: "These sections present the project professionally and clearly communicate the problem, solution, and technical capabilities of the Elderly Care Assistant system for a portfolio, resume, or project report.",
    liveUrl: "#",
    githubUrl: "https://github.com/rahulbh8077/elderly-care-assistant"
  },
  {
    id: 3,
    title: "Cricketer-Performance-Analysis-Matplotlib",
    category: "Data Visualization",
    techStack: ["Power BI", "SQL", "Excel", "DAX", "ETL Pipelines"],
    description: "A comprehensive executive-level business intelligence dashboard tracking Cricketer performance & Analysis, Score Vs Avg trends, and Strike Rates. Features advanced DAX measures and custom interactive tooltips.",
    challenge: "This project visualizes the performance of multiple cricketers by comparing their scores across different years.",
    solution: "A simple Python data visualization project that compares the yearly scores of cricketers using Matplotlib.",
    keyFeatures: [
      "Fully automated Analysis and Comparision format",
      "Graphical Representaion of the performance analysis.",
      "Interactive sensitivity ('what-if') analysis parameters",
      "Every Comparision is Printed along with Differnt Types of Graph formats."
    ],
    metrics: "Eliminated manual report compilation efforts entirely (saving 30+ hours/week) and a Great Visualization of data in graph Format.",
    liveUrl: "#",
    githubUrl: "https://github.com/rahulbh8077/Cricketer-Performance-Analysis-Matplotlib"
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    category: "Machine Learning",
    techStack: ["Python", "Surprise Library", "Streamlit", "Collaborative Filtering", "Cosine Similarity"],
    description: "A hybrid recommendation engine combining Collaborative Filtering (SVD) and Content-Based filtering. Resolves cold-start issues by integrating user demographic profiles and features a beautiful user interface.",
    challenge: "Users experience 'choice paralysis' on streaming platforms. Simple content matching fails to deliver serendipitous discoveries.",
    solution: "Used the MovieLens dataset to train Matrix Factorization models. Built a Streamlit web interface demonstrating live query suggestions and interactive ratings collection.",
    keyFeatures: [
      "SVD (Singular Value Decomposition) optimization with GridSearch",
      "TF-IDF vectorizer on movie genres, plots, and tags",
      "Real-time scoring and recommendation refresh",
      "Interactive Streamlit front-end with poster card previews"
    ],
    metrics: "Improved user rating precision (RMSE reduced to 0.84) and achieved high ratings coverage (92% of the library).",
    liveUrl: "#",
    githubUrl: "https://github.com/a-partovii/MovieDude"
  },
  {
    id: 5,
    title: "DataVisualization-Pandas",
    category: "Data Visualization",
    techStack: ["Python", "TensorFlow", "Pandas", "ReadCSV", "Jupyter Notebook"],
    description: "This project showcases the power of Python and Pandas for data analysis.",
    challenge: "It involves importing a country dataset, performing data cleaning and preprocessing, and creating visual representations to better understand patterns, trends, and key statistics.",
    solution: "Data manipulation using Pandas Cleaning and preprocessing datasets",
    keyFeatures: [
      "Unsupervised deep learning for anomaly detection",
      "Exploratory Data Analysis (EDA)",
      "Country Set Data Analysis based on many factors.",
      "Real-time evaluation of the dataset under 5ms"
    ],
    metrics: "Detected 98% of Countries Data while keeping false-positive alerts under 0.05% of total Accuracy Errors.",
    liveUrl: "#",
    githubUrl: "https://github.com/rahulbh8077/DataVisualization_pandas"
  },
  {
    id: 6,
    title: "Online Payment Fraud Detection",
    category: "Machine Learning",
    techStack: ["Python", "Scikit-Learn", "LightGBM", "Optuna", "Geopy"],
    description: "Fraudulent transactions can result in financial losses, identity theft, and reduced customer trust.",
    challenge: "Traditional fraud detection methods often rely on manual reviews or fixed rules, making them ineffective against evolving fraud patterns and high transaction volumes.",
    solution: " The Online Payment Fraud Detection System is an intelligent application that analyzes transaction data to identify potentially fraudulent activities in real time.",
    keyFeatures: [
      "Analyzes transactions instantly to identify suspicious activities.",
      "Assigns a fraud probability score to every transaction.",
      "Feature selection using Recursive Feature Elimination (RFE)",
      "Displays live transaction activity, fraud alerts, and analytics."
    ],
    metrics: "Designed to handle large volumes of transaction data efficiently, with 90% Pro-efficiency.",
    liveUrl: "#",
    githubUrl: "https://github.com/rahulbh8077/Online-Payment-Fraud-Detection"
  },
  {
    id: 7,
    title: "Enterprise AI Chatbot",
    category: "AI & GenAI",
    techStack: ["Python", "LangChain", "OpenAI API", "ChromaDB", "FastAPI"],
    description: "A Retrieval-Augmented Generation (RAG) conversational agent capable of answering queries based on uploaded internal documents. Features conversation memory, context vector search, and a web UI.",
    challenge: "Employees spend hours browsing massive compliance and technical PDFs to resolve standard procedural questions.",
    solution: "Designed a vector database pipeline that chunks documents, embeds them using OpenAI text-embeddings, and uses a LangChain agent to fetch relevant snippets before answering.",
    keyFeatures: [
      "Dynamic document uploading and recursive text chunking",
      "Vector search indexing with ChromaDB",
      "System prompts designed for hallucination prevention and citation tracking",
      "Streaming responses via FastAPI WebSockets"
    ],
    metrics: "Reduced internal information retrieval time by 80% and maintained answer accuracy above 98% based on expert review.",
    liveUrl: "#",
    githubUrl: "https://github.com/LiveHelperChat/livehelperchat"
  },
  {
    id: 8,
    title: "Personal Voice Assistant",
    category: "AI & GenAI",
    techStack: ["Python", "PySpeech", "PyTTSx3", "OpenAI GPT-4", "API Integrations"],
    description: "A local, voice-activated AI companion capable of understanding spoken commands, fetching weather/news, managing calendar events, and holding context-aware conversations using OpenAI API.",
    challenge: "Standard voice assistants (Siri/Alexa) are rigidly programmed and struggle with complex multi-step reasoning or conversational memory.",
    solution: "Integrated speech-to-text engines with a localized GPT-4 API agent loop. Used custom tool bindings to query calendar APIs and OS controls.",
    keyFeatures: [
      "Low-latency local speech recognition and synthesis",
      "Functional tool call triggers (queries local calendar, gets time/weather)",
      "Conversation state storage for continuous back-and-forth dialogue",
      "Wake-word engine detection ('Hey Jarvis')"
    ],
    metrics: "Achieved an average response latency of 1.2 seconds with highly natural conversation flows.",
    liveUrl: "#",
    githubUrl: "#"
  }
];
// Experience Further Updates---------------------------
export const experience = [
  // {
  //   role: "Data Science Intern",
  //   company: "NeuralTech Solutions",
  //   period: "June 2025 - August 2025",
  //   type: "Internship",
  //   details: "Built predictive models for customer retention. Engineered ML pipelines using PySpark and Scikit-Learn to process over 50M rows of raw log data. Implemented target segmentation which increased campaign conversion by 18%."
  // },
  {
    role: "Data Analyst Intern",
    company: "BlueStocks,in",
    period: "2026-End",
    type: "Virtual Intern",
    details: "Delivered 15+ custom web Dashvoards, data cleaning scripts, and interactive dashboards to Performance Analysis clients worldwide. Specialized in converting cluttered sheets into structured databases and actionable Power BI/Tableau storyboards."
  },
  {
    role: "SIH-25",
    company: "Indian Govt.",
    period: "2025 - 2026",
    type: "Hackathons",
    details: "Led a 4-person team to  by prototyping a computer vision system for Alumini Network Managemnt.. Achieved Runner-Up at SIH 2025 for Alumini Centralized DashBoards."
  },
  // {
  //   role: "Open Source Contributor",
  //   company: "Scikit-Learn & Pandas communities",
  //   period: "2023 - Present",
  //   type: "Open Source",
  //   details: "Contributed documentation updates, unit test improvements, and minor bug fixes for Pandas and Scikit-Learn libraries. Actively review pull requests and engage in discussions on computational optimization."
  // },
  // {
  //   role: "Attendee & Speaker",
  //   company: "Global Data Science Workshop",
  //   period: "October 2024",
  //   type: "Workshops",
  //   details: "Attended intensive sessions on MLOps (Kubeflow, MLflow). Gave a lightning talk on 'Explainable AI: Demystifying Black-Box Models using SHAP and LIME' to an audience of 100+ students and professionals."
  // }
];

export const certifications = [
  {
    title: "5-Day AI Agents: Intensive Vibe Coding Course With Google",
    issuer: "Kaggle",
    date: "2026",
    credentialId: "#",
    verifyUrl: "https://developers.google.com/profile/badges/events/cloud/five-day-ai-agents?u=106319494288316775116",
    skillsLearned: "Cloud Infrastructure, Vibe Coding, AntiGravity, Agents CLI, Architecture Design"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "2026",
    credentialId: "#",
    verifyUrl: "https://www.skills.google/public_profiles/3380a347-018c-4392-8de9-1bd97dade3d1/badges/25299384",
    skillsLearned: "LLM, SQL, Neural Netwroks, Tableau, Data Ethics, Dashboarding"
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    date: "2026",
    credentialId: "69db68d3c5e48bc26df1555a",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Python, SQL, Data Analysis, Data Visualization, Machine Learning, Capstone project"
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart Global Tech",
    date: "2026",
    credentialId: "69db68d3c5e48bc26df1555a",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Supervised Learning, Adv Software Engg , Unsupervised Learning, Recommender Systems"
  },
  {
    title: "Cyber Security Job Simualtion",
    issuer: "Master Card",
    date: "2026",
    credentialId: "b7e08debabc341a1a16bf564c6bf3c45",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Cyber Security, E-Mail, Phishing, Pharming, Spam Detection"
  },
  {
    title: "Data Analyst Job Simulation",
    issuer: "Deloitte",
    date: "2026",
    credentialId: "69db68d3c5e48bc26df1555a",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Data Analytics, Ensembling, Tableau, Cross-Validation strategies"
  },
  {
    title: "Python And Data Science",
    issuer: "EI systems",
    date: "2026",
    credentialId: "EIS/AK/T1579",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Python Programming, OOP, File Handling, NumPy, Pandas, Basic Plotting"
  },
  {
    title: "AI For All",
    issuer: "TCS ION",
    date: "2026",
    credentialId: "277082-30943805-1016",
    verifyUrl: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/details/certifications/",
    skillsLearned: "Database Schemas, Gen Ai, Deep Learning, Neural Network, Views, Query Optimization"
  }
];

export const achievements = [
  { metric: "15+", label: "Projects Completed", icon: "🏆" },
  { metric: "8+", label: "Certifications Earned", icon: "📜" },
  { metric: "550+", label: "GitHub Contributions", icon: "💻" },
  { metric: "350+", label: "Problem Solving Score", icon: "⭐" },
  { metric: "25+", label: "Data Visualizations", icon: "📊" },
  { metric: "10+", label: "Machine Learning Models", icon: "🎯" }
];

export const journeyRoadmap = [
  { step: "Python", status: "completed", desc: "Syntax, OOP, scripting, data manipulation with Pandas & NumPy." },
  { step: "SQL", status: "completed", desc: "Complex joins, subqueries, CTEs, relational database modeling, schema design." },
  { step: "Data Analysis", status: "completed", desc: "Exploratory Data Analysis, outlier detection, statistical distributions." },
  { step: "Statistics", status: "completed", desc: "Probability, hypothesis testing (T-test, ANOVA), regression analysis, Bayes theorem." },
  { step: "Machine Learning", status: "completed", desc: "Supervised and unsupervised models, ensemble methods, feature engineering, validation." },
  { step: "Deep Learning", status: "in-progress", desc: "Neural networks, CNNs for computer vision, RNNs/LSTMs, Transformers, NLP." },
  { step: "Deployment", status: "upcoming", desc: "Containerization with Docker, API wrapping via FastAPI/Flask, Streamlit dashboards." },
  { step: "MLOps", status: "upcoming", desc: "CI/CD pipelines for models, version control (DVC), tracking runs with MLflow/Weights & Biases." }
];

export const blogs = [
  {
    title: "Understanding SHAP: Explaining Black-Box Models Simply",
    date: "July 12, 2026",
    readTime: "6 min read",
    summary: "A beginner-friendly guide to SHapley Additive exPlanations (SHAP) and how it helps visualize feature contributions in machine learning models.",
    category: "Explainable AI",
    link: "#"
  },
  {
    title: "A Deep Dive into Class Imbalance: SMOTE and Beyond",
    date: "June 28, 2026",
    readTime: "8 min read",
    summary: "Exploring strategies to handle skewed datasets in classification tasks, comparing oversampling, undersampling, and focal loss models.",
    category: "Machine Learning",
    link: "#"
  },
  {
    title: "Building My First RAG Chatbot with LangChain and ChromaDB",
    date: "May 15, 2026",
    readTime: "10 min read",
    summary: "A step-by-step walkthrough of building a local semantic search engine and chat agent loaded with private documentation.",
    category: "Generative AI",
    link: "#"
  }
];

export const testimonials = [
  {
    quote: "Alex joined our team as an intern and immediately made an impact. Their ability to clean messily formatted data logs and build a functional churn prediction prototype in weeks was highly impressive. Outstanding attention to detail.",
    author: "Dr. Sarah Chen",
    role: "Senior Lead Data Scientist",
    company: "NeuralTech Solutions"
  },
  {
    quote: "We hired Alex to build a sales performance dashboard in Power BI. Not only did they write extremely efficient SQL queries to extract data, but the visual aesthetic of the dashboard made it very easy for our executives to gather insights.",
    author: "Marcus Aurelius",
    role: "Operations Director",
    company: "Vanguard Retail Group"
  },
  {
    quote: "Shikaay is an exceptional learner. During the AI Hack 2025, they worked tirelessly to code our computer vision pipeline. They have a rare mix of deep technical competence and clear presentation skills.",
    author: "Elena Rostova",
    role: "Hackathon Organizer",
    company: "AI Innovators Club"
  }
];

export const socialLinks = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/rahul-bhadoriya-61ab3336b/", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/rahulbh8077", icon: "github" },
  { platform: "Kaggle", url: "https://www.kaggle.com/rahulbhadoriya", icon: "kaggle" },
  { platform: "LeetCode", url: "https://leetcode.com/u/RahulBhadoriya31/", icon: "code" },
  { platform: "HackerRank", url: "https://hackerrank.com", icon: "award" },
  { platform: "X (Twitter)", url: "https://x.com", icon: "twitter" },
  { platform: "Email", url: "mailto:rahulbh8077@gmail.com", icon: "mail" },
  { platform: "Instagram", url: "https://instagram.com//rahul._28s", icon: "instagram" }
];

export const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", proficiency: "Expert", desc: "Core scripting, automation & OOP", color: "#3776AB" },
      { name: "SQL", proficiency: "Expert", desc: "Relational queries & DB optimization", color: "#4479A1" },
      { name: "C++", proficiency: "Intermediate", desc: "Data structures & low-level optimization", color: "#00599C" },
      { name: "JavaScript", proficiency: "Advanced", desc: "Web logic & interactive applications", color: "#F7DF1E" },
      { name: "HTML5", proficiency: "Advanced", desc: "Semantic page structures & DOM markup", color: "#E34F26" },
      { name: "CSS3", proficiency: "Advanced", desc: "Responsive styling & custom keyframe motion", color: "#1572B6" }
    ]
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Scikit-learn", proficiency: "Expert", desc: "Regression, clustering, classification", color: "#F7931E" },
      { name: "TensorFlow", proficiency: "Advanced", desc: "Model design & graph compilation", color: "#FF6F00" },
      { name: "Keras", proficiency: "Advanced", desc: "High-level API for model prototyping", color: "#D00000" },
      { name: "XGBoost", proficiency: "Expert", desc: "Gradient boosted decision tree models", color: "#1E88E5" },
      { name: "LightGBM", proficiency: "Advanced", desc: "Fast gradient boosting on large datasets", color: "#43A047" },
      { name: "CatBoost", proficiency: "Advanced", desc: "Gradient boosting handling categorical keys", color: "#FFB300" }
    ]
  },
  {
    category: "Deep Learning",
    items: [
      { name: "TensorFlow", proficiency: "Advanced", desc: "Neural network pipeline construction", color: "#FF6F00" },
      { name: "PyTorch", proficiency: "Expert", desc: "Dynamic graphs, autograd & training loops", color: "#EE4C2C" },
      { name: "Keras", proficiency: "Advanced", desc: "Rapid deep learning model assembly", color: "#D00000" },
      { name: "OpenCV", proficiency: "Advanced", desc: "Computer vision & real-time image processing", color: "#5C3EE8" },
      { name: "Hugging Face", proficiency: "Advanced", desc: "Transformers, pretrained models & fine-tuning", color: "#FFD21E" }
    ]
  },
  {
    category: "Data Analysis",
    items: [
      { name: "Pandas", proficiency: "Expert", desc: "DataFrame manipulation & cleaning", color: "#150458" },
      { name: "NumPy", proficiency: "Expert", desc: "N-dimensional arrays & vector math", color: "#013243" },
      { name: "SciPy", proficiency: "Advanced", desc: "Scientific computing & signal processing", color: "#8CAAE6" },
      { name: "Statsmodels", proficiency: "Advanced", desc: "Statistical tests & time-series analysis", color: "#4B6584" }
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "Matplotlib", proficiency: "Expert", desc: "Static plots, charts & custom drawings", color: "#11557C" },
      { name: "Seaborn", proficiency: "Expert", desc: "Statistical viz & theme formatting", color: "#3792CB" },
      { name: "Plotly", proficiency: "Advanced", desc: "Interactive HTML charts & graphs", color: "#3F4F75" },
      { name: "Power BI", proficiency: "Advanced", desc: "Business intelligence reports & DAX scripts", color: "#F2C811" },
      { name: "Tableau", proficiency: "Advanced", desc: "Enterprise dashboards & storyboard storytelling", color: "#E97627" },
      { name: "Excel", proficiency: "Expert", desc: "Data modeling, pivot tables & macro automation", color: "#1D6F42" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", proficiency: "Expert", desc: "Structured data storage & index tuning", color: "#4479A1" },
      { name: "PostgreSQL", proficiency: "Advanced", desc: "Enterprise SQL & analytical functions", color: "#336791" },
      { name: "MongoDB", proficiency: "Intermediate", desc: "NoSQL document storage & aggregate queries", color: "#47A248" },
      { name: "SQLite", proficiency: "Expert", desc: "Serverless local database integration", color: "#003B57" }
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "VS Code", proficiency: "Expert", desc: "Primary IDE & debugger integrations", color: "#007ACC" },
      { name: "Jupyter", proficiency: "Expert", desc: "Notebook research & prototyping workspace", color: "#F37626" },
      { name: "Google Colab", proficiency: "Expert", desc: "Cloud GPU notebook hosting", color: "#F9AB00" },
      { name: "Git", proficiency: "Expert", desc: "Version control & repository branching", color: "#F05032" },
      { name: "GitHub", proficiency: "Expert", desc: "Code hosting, reviews & pull requests", color: "#FFFFFF" },
      { name: "Docker", proficiency: "Advanced", desc: "Containerization & sandbox deployment", color: "#2496ED" },
      { name: "Anaconda", proficiency: "Advanced", desc: "Environment management & package index", color: "#44A833" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", proficiency: "Intermediate", desc: "EC2 instances, S3 storage, SageMaker", color: "#FF9900" },
      { name: "Azure", proficiency: "Intermediate", desc: "Cloud VMs, SQL hosting & cognitive APIs", color: "#0078D4" },
      { name: "Google Cloud", proficiency: "Intermediate", desc: "BigQuery analytics & computing modules", color: "#4285F4" },
      { name: "Vercel", proficiency: "Advanced", desc: "Front-end hosting & serverless function routes", color: "#FFFFFF" },
      { name: "Netlify", proficiency: "Advanced", desc: "Static host deployment & edge functions", color: "#00C8C8" },
      { name: "Render", proficiency: "Advanced", desc: "Web services & backend daemon hosting", color: "#46E3B7" }
    ]
  },
  {
    category: "AI & LLM Tools",
    items: [
      { name: "OpenAI API", proficiency: "Advanced", desc: "GPT prompt construction, embeddings & tuning", color: "#412991" },
      { name: "LangChain", proficiency: "Advanced", desc: "Chains, retrieval loaders & agent frameworks", color: "#00B0FF" },
      { name: "Ollama", proficiency: "Advanced", desc: "Local LLM runtime environment & routing", color: "#FFFFFF" },
      { name: "Hugging Face", proficiency: "Advanced", desc: "Model hubs, datasets & space demos", color: "#FFD21E" },
      { name: "Streamlit", proficiency: "Expert", desc: "Rapid Python dashboard & script UI builds", color: "#FF4B4B" },
      { name: "Gradio", proficiency: "Advanced", desc: "Interactive python demos for ML models", color: "#FF8C00" }
    ]
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Windows", proficiency: "Expert", desc: "Desktop workspace & WSL2 virtualization", color: "#0078D6" },
      { name: "Linux", proficiency: "Advanced", desc: "CLI shells, bash automation & server management", color: "#FCC624" },
      { name: "Ubuntu", proficiency: "Advanced", desc: "Standard developer distro environment", color: "#E95420" }
    ]
  },
  {
    category: "Productivity Tools",
    items: [
      { name: "Notion", proficiency: "Expert", desc: "Technical docs, research wikis & roadmap track", color: "#FFFFFF" },
      { name: "Figma", proficiency: "Intermediate", desc: "UI layouts, mockups & design system boards", color: "#F24E1E" },
      { name: "Canva", proficiency: "Advanced", desc: "Visual assets & graphics generation", color: "#00C4CC" },
      { name: "Postman", proficiency: "Advanced", desc: "API endpoint testing & verification requests", color: "#FF6C37" }
    ]
  }
];

