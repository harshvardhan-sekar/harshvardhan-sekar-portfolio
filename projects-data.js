// Projects Data for Portfolio Website
// This file contains all project information for easy management

const projectsData = [
    {
        id: 1,
        title: "LendingClub Credit Risk Analysis",
        description: "Comprehensive credit risk analysis using machine learning algorithms to predict loan defaults. Implemented various models including Random Forest, XGBoost, and Neural Networks with feature engineering and model optimization.",
        category: "credit",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/harshvardhan-sekar/lc-credit-risk-analytics",
        demo: "#",
        image: "fas fa-chart-line",
        status: "completed",
        date: "2024"
    },
    {
        id: 2,
        title: "Oscar Award Winner Predictions",
        description: "Machine learning project predicting Oscar winners using XGBoost and Random Forest algorithms. Analyzed historical data and movie features to build predictive models with 85% accuracy.",
        category: "ml",
        technologies: ["Python", "XGBoost", "Random Forest", "Pandas", "Scikit-learn", "NumPy"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-trophy",
        status: "completed",
        date: "2024"
    },
    {
        id: 3,
        title: "Pneumonia Detection using Computer Vision",
        description: "Deep learning model for detecting pneumonia from chest X-ray images using Convolutional Neural Networks. Achieved 92% accuracy in medical image classification with data augmentation techniques.",
        category: "cv",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "PIL"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-x-ray",
        status: "completed",
        date: "2023"
    },
    {
        id: 4,
        title: "Tableau Business Intelligence Dashboards",
        description: "Interactive dashboards for business intelligence and data visualization. Created comprehensive reports for various business metrics, KPIs, and financial analytics with real-time data connections.",
        category: "viz",
        technologies: ["Tableau", "SQL", "Data Visualization", "Business Intelligence", "Dashboard Design"],
        github: "#",
        demo: "https://public.tableau.com/app/profile/harshvardhan.sekar",
        image: "fas fa-chart-bar",
        status: "completed",
        date: "2024"
    },
    {
        id: 5,
        title: "Empathetic Healthcare Chatbot",
        description: "Natural Language Processing chatbot designed for healthcare applications. Uses sentiment analysis and empathetic response generation for patient interaction with medical knowledge base integration.",
        category: "nlp",
        technologies: ["Python", "NLTK", "Transformers", "Flask", "NLP", "Sentiment Analysis"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-robot",
        status: "in-progress",
        date: "2024"
    },
    {
        id: 6,
        title: "Financial Auditing Assistant Chatbot",
        description: "AI-powered chatbot for financial auditing assistance. Helps with deal structuring, compliance checking, and financial analysis using advanced NLP techniques and financial domain knowledge.",
        category: "nlp",
        technologies: ["Python", "OpenAI API", "Flask", "Financial Analysis", "NLP", "RAG"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-calculator",
        status: "planned",
        date: "2024"
    },
    {
        id: 7,
        title: "AWS Data Pipeline with Snowflake",
        description: "End-to-end data pipeline using AWS services and Snowflake for data warehousing. Implemented ETL processes for large-scale data processing with Netflix dataset analysis and visualization.",
        category: "de",
        technologies: ["AWS", "Snowflake", "Python", "SQL", "ETL", "Data Warehousing"],
        github: "https://github.com/harshvardhan-sekar/netflix-snowflake-warehouse",
        demo: "#",
        image: "fas fa-database",
        status: "completed",
        date: "2024"
    },
    {
        id: 8,
        title: "TensorFlow & Keras Learning Repository",
        description: "Comprehensive collection of TensorFlow and Keras implementations following Daniel Bourke's tutorials. Covers deep learning fundamentals, neural networks, and advanced techniques with practical applications.",
        category: "ml",
        technologies: ["TensorFlow", "Keras", "Python", "Deep Learning", "Neural Networks", "Jupyter"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-brain",
        status: "in-progress",
        date: "2024"
    },
    {
        id: 9,
        title: "Power BI Financial Analytics",
        description: "Advanced financial analytics dashboards using Power BI. Created interactive visualizations for financial reporting, business intelligence, and executive dashboards with DAX calculations.",
        category: "viz",
        technologies: ["Power BI", "DAX", "SQL", "Financial Analytics", "Data Modeling", "Visualization"],
        github: "#",
        demo: "#",
        image: "fas fa-chart-pie",
        status: "completed",
        date: "2024"
    },
    {
        id: 10,
        title: "Self-Driving Car Simulation",
        description: "Computer vision project simulating autonomous vehicle navigation using deep learning. Implements lane detection, object recognition, path planning, and real-time decision making algorithms.",
        category: "cv",
        technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning", "Simulation"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-car",
        status: "planned",
        date: "2024"
    },
    {
        id: 11,
        title: "Retail Customer Segmentation",
        description: "Machine learning project for customer segmentation in retail using K-means clustering and RFM analysis. Identified customer segments for targeted marketing and personalized recommendations.",
        category: "ml",
        technologies: ["Python", "Scikit-learn", "K-means", "Pandas", "Matplotlib", "Customer Analytics"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-users",
        status: "planned",
        date: "2024"
    },
    {
        id: 12,
        title: "Real-time Stock Price Prediction",
        description: "Time series analysis and prediction of stock prices using LSTM neural networks. Implemented real-time data processing and prediction with risk assessment and portfolio optimization.",
        category: "ml",
        technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "Yahoo Finance API", "Time Series"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-chart-line",
        status: "planned",
        date: "2024"
    }
];

// Category information
const categoryInfo = {
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
    }
};

// Skills data
const skillsData = {
    programming: [
        { name: 'Python', level: 90 },
        { name: 'R', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'Java', level: 65 }
    ],
    ml: [
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Keras', level: 75 },
        { name: 'XGBoost', level: 80 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 }
    ],
    visualization: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 75 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 75 },
        { name: 'Plotly', level: 70 }
    ],
    cloud: [
        { name: 'AWS', level: 70 },
        { name: 'Snowflake', level: 75 },
        { name: 'Google Cloud', level: 60 },
        { name: 'Azure', level: 65 }
    ]
};

// Certifications data
const certificationsData = [
    {
        name: 'Data Science Specialization',
        provider: 'Coursera',
        date: '2023',
        credential: 'Certificate',
        url: '#'
    },
    {
        name: 'Machine Learning Course',
        provider: 'Coursera',
        date: '2023',
        credential: 'Certificate',
        url: '#'
    },
    {
        name: 'Data Engineering',
        provider: 'Coursera',
        date: '2024',
        credential: 'Certificate',
        url: '#'
    },
    {
        name: 'AWS Cloud Practitioner',
        provider: 'AWS',
        date: 'In Progress',
        credential: 'Certification',
        url: '#'
    },
    {
        name: 'AI Practitioner',
        provider: 'AWS',
        date: 'Planned',
        credential: 'Certification',
        url: '#'
    }
];

// Export data (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        categoryInfo,
        skillsData,
        certificationsData
    };
}
