// Projects Data for Portfolio Website
export const projectsData = [
  {
    id: 11,
    title: "Medical Question Answering Agent using MedQuAD",
    description: "Built a supervised NLP pipeline leveraging MedQuAD dataset (47K+ NIH-sourced Q-A pairs) to enhance reliability in medical question answering. Integrated transformer models (T5, BioBART, PubMedBERT) with dense retrievers (SBERT, ColBERTv2) in a Retrieval-Augmented Generation architecture, improving factual accuracy for domain-specific healthcare applications.",
    category: "nlp",
    technologies: ["Python", "Transformers", "T5", "BioBART", "SBERT", "ColBERTv2", "PyTorch", "Pandas", "ROUGE", "BERTScore", "UMLS"],
    github: "https://drive.google.com/drive/folders/1NSdnuuvminwojnERVqrkOKL3wbHRk1lJ",
    demo: "#",
    image: "fas fa-stethoscope",
    imageUrl: "/images/projects/medical-qa-agent.png",
    status: "completed",
    date: "2024"
  },
  {
    id: 1,
    title: "LendingClub Credit Risk Analytics",
    description: "Built an end-to-end credit risk framework across PD, EAD, and LGD with ECL = PD × EAD × LGD aligned with IFRS 9/Basel III. Trained Logistic Regression and XGBoost models for PD, Decision Trees and Random Forests for EAD and LGD, producing portfolio-level ECL insights by grade, state, income, and DTI with total portfolio ECL of $194.9M.",
    category: "credit",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib"],
    github: "https://drive.google.com/file/d/1jRdlOzO_NTiof10o2Gc0uQZmWuhTNg3i/view?usp=drive_link",
    demo: "#",
    image: "fas fa-chart-line",
    imageUrl: "/images/projects/lendingclub-credit-risk.png",
    status: "completed",
    date: "2024"
  },
  {
    id: 2,
    title: "Oscar Award Winner Predictions",
    description: "Designed a comprehensive analytics and machine learning pipeline to predict Oscar-winning films and Emmy-winning TV shows using audience metrics, critic ratings, and production metadata. Integrated data engineering, predictive modeling, and visualization in a single workflow combining Tableau Prep, Python ML models, and Power BI dashboards.",
    category: "ml",
    technologies: ["Python", "XGBoost", "Random Forest", "Pandas", "Scikit-learn", "NumPy", "Tableau Prep", "Power BI"],
    github: "https://github.com/harshvardhan-sekar/red-carpet-analytics/blob/main/README.md",
    demo: "https://public.tableau.com/app/profile/harshvardhan.sekar",
    image: "fas fa-trophy",
    imageUrl: "/images/projects/oscar-award-winning-image-predictions.png",
    status: "completed",
    date: "2024"
  },
  {
    id: 3,
    title: "Pneumonia Detection using Computer Vision",
    description: "Built a four-class deep learning classifier to detect Normal, Bacterial Pneumonia, Viral Pneumonia, and COVID-19 from chest X-rays using transfer-learned architectures (VGG-16, DenseNet-201, Xception, EfficientNet-B0). Curated multiple open-source CXR datasets into a unified training pipeline with preprocessing, data augmentation, and transfer learning from ImageNet weights. The best model (VGG-16) achieved ~90% accuracy with robust differentiation between pneumonia subtypes.",
    category: "cv",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
    github: "https://drive.google.com/drive/folders/1TflHC1mJcdsHXIJAVQHozNDI49irpcRd",
    demo: "#",
    image: "fas fa-x-ray",
    imageUrl: "/images/projects/pneumonia-detection.png",
    status: "completed",
    date: "2023"
  },
  {
    id: 4,
    title: "Integrating AI to Optimize the Brisbane 2032 Olympic Games",
    description: "Developed a consulting-grade strategy using McKinsey's 7-Step framework to integrate AI technologies — including Digital Twins, Predictive Analytics, and Smart City Systems — to enhance sustainability, reduce costs (~A$300M), and lower carbon emissions (~8,000 tons CO₂e) for the Brisbane 2032 Olympic Games. Combined cost-benefit modeling, vendor benchmarking, and an implementation roadmap aligned with IOC sustainability targets, delivering a phased rollout strategy for AI-powered venue optimization, energy management, and operational efficiency.",
    category: "consulting",
    technologies: ["Tableau", "Excel", "AWS", "McKinsey Framework", "MECE", "Cost-Benefit Analysis"],
    github: "https://drive.google.com/drive/folders/1IoTwDxXTz8fOlEsRLbZvAmglmRFSCt00",
    demo: "#",
    image: "fas fa-trophy",
    imageUrl: "/images/projects/brisbane-2032.png",
    status: "completed",
    date: "2024"
  },
  {
    id: 5,
    title: "Netflix Data Warehouse with Metadata Validation",
    description: "Built a scalable Snowflake data warehouse solution to ingest, clean, and validate Netflix catalog metadata using Python preprocessing and OMDb API verification. Validated runtime/duration data for 7,787+ titles, identifying and correcting ~27% with inconsistencies (e.g., 1-minute TV shows, 6-minute movies). Implemented ELT pipelines with star schema dimensional modeling to improve data accuracy for recommendation systems, catalog quality assurance, and high-performance analytics.",
    category: "de",
    technologies: ["Python", "Snowflake", "SQL", "OMDb API", "ELT", "Dimensional Modeling", "Data Validation"],
    github: "https://drive.google.com/drive/folders/1VlC8y6x1bWORpJFOlnpmF9HODHTYcDO7",
    demo: "#",
    image: "fas fa-database",
    imageUrl: "/images/projects/netflix-warehouse.png",
    status: "completed",
    date: "2024"
  },
  // {
  //   id: 6,
  //   title: "Financial Auditing Assistant Chatbot",
  //   description: "AI-powered chatbot for financial auditing assistance. Helps with deal structuring, compliance checking, and financial analysis using advanced NLP techniques and financial domain knowledge.",
  //   category: "nlp",
  //   technologies: ["Python", "OpenAI API", "Flask", "Financial Analysis", "NLP", "RAG"],
  //   github: "https://github.com/harshvardhan-sekar",
  //   demo: "#",
  //   image: "fas fa-calculator",
  //   status: "planned",
  //   date: "2024"
  // },
  {
    id: 7,
    title: "Multimodal Cloze in Comics using Vision-Language Models",
    description: "Building an end-to-end vision-language modeling pipeline to perform closure—predicting missing dialogue and generating corresponding artwork between comic panels. Leverages LLaVA, OpenFlamingo, and Stable Diffusion to jointly reason over text and imagery from the COMICS dataset (1.2M panels). Includes preprocessing with YOLOv8 for panel segmentation, CRAFT for text balloon detection, and EasyOCR for dialogue extraction, enabling multimodal narrative understanding and AI-assisted comic creation.",
    category: ["cv", "nlp"],
    technologies: ["Python", "PyTorch", "YOLOv8", "CRAFT", "EasyOCR", "LLaVA", "OpenFlamingo", "Stable Diffusion", "Hugging Face Diffusers"],
    github: "https://github.com/harshvardhan-sekar/beyond-the-frame/blob/main/README.md",
    demo: "#",
    image: "fas fa-images",
    imageUrl: "/images/projects/multimodal-cloze.png",
    status: "in-progress",
    date: "2024"
  },
  // {
  //   id: 8,
  //   title: "TensorFlow & Keras Learning Repository",
  //   description: "Comprehensive collection of TensorFlow and Keras implementations following Daniel Bourke's tutorials. Covers deep learning fundamentals, neural networks, and advanced techniques with practical applications.",
  //   category: "ml",
  //   technologies: ["TensorFlow", "Keras", "Python", "Deep Learning", "Neural Networks", "Jupyter"],
  //   github: "https://github.com/harshvardhan-sekar",
  //   demo: "#",
  //   image: "fas fa-brain",
  //   status: "in-progress",
  //   date: "2024"
  // },
  // {
  //   id: 9,
  //   title: "Power BI Financial Analytics",
  //   description: "Advanced financial analytics dashboards using Power BI. Created interactive visualizations for financial reporting, business intelligence, and executive dashboards with DAX calculations.",
  //   category: "viz",
  //   technologies: ["Power BI", "DAX", "SQL", "Financial Analytics", "Data Modeling", "Visualization"],
  //   github: "#",
  //   demo: "#",
  //   image: "fas fa-chart-pie",
  //   status: "completed",
  //   date: "2024"
  // },
  // {
  //   id: 10,
  //   title: "Self-Driving Car Simulation",
  //   description: "Computer vision project simulating autonomous vehicle navigation using deep learning. Implements lane detection, object recognition, path planning, and real-time decision making algorithms.",
  //   category: "cv",
  //   technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning", "Simulation"],
  //   github: "https://github.com/harshvardhan-sekar",
  //   demo: "#",
  //   image: "fas fa-car",
  //   status: "planned",
  //   date: "2024"
  // }
]

export const categoryInfo = {
  'ml': {
    name: 'Machine Learning',
    description: 'Traditional and advanced machine learning algorithms',
    color: '#3b82f6',
    icon: 'fas fa-brain'
  },
  'cv': {
    name: 'Computer Vision',
    description: 'Image processing and computer vision applications',
    color: '#10b981',
    icon: 'fas fa-eye'
  },
  'nlp': {
    name: 'Natural Language Processing',
    description: 'Text processing and language understanding',
    color: '#8b5cf6',
    icon: 'fas fa-language'
  },
  'credit': {
    name: 'Credit Risk',
    description: 'Financial risk analysis and modeling',
    color: '#ef4444',
    icon: 'fas fa-shield-alt'
  },
  'viz': {
    name: 'Data Visualization',
    description: 'Interactive dashboards and visual analytics',
    color: '#f59e0b',
    icon: 'fas fa-chart-bar'
  },
  'de': {
    name: 'Data Engineering',
    description: 'Big data processing and cloud infrastructure',
    color: '#06b6d4',
    icon: 'fas fa-database'
  },
  'consulting': {
    name: 'Information Consulting',
    description: 'Strategic consulting and data-driven decision making',
    color: '#ec4899',
    icon: 'fas fa-briefcase'
  }
}
