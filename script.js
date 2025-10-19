// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing portfolio website');
    
    initNavigation();
    initScrollAnimations();
    loadProjects(); // Load projects first
    
    // Initialize filters after a short delay to ensure projects are loaded
    setTimeout(() => {
        initProjectFilters();
    }, 100);
    
    initSkillBars();
    initContactForm();
    initContactLinks();
    initShareButtons();
    initTypewriter();
    
    console.log('All functions initialized');
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Throttled navbar styling for better performance
    let ticking = false;
    
    function updateNavbarStyle() {
        const navbar = document.querySelector('.navbar');
        const scrollPos = window.scrollY;
        
        // Remove all existing classes
        navbar.classList.remove('hero-nav', 'scrolled');
        
        // Only transparent when at the very top of the page (scroll position 0)
        if (scrollPos <= 5) {
            // At the very top - transparent style
            navbar.classList.add('hero-nav');
        } else {
            // Scrolled down - solid style
            navbar.classList.add('scrolled');
        }
        
        ticking = false;
    }
    
    function requestNavbarUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateNavbarStyle);
            ticking = true;
        }
    }

    // Initial call
    updateNavbarStyle();
    
    // Update on scroll with throttling
    window.addEventListener('scroll', requestNavbarUpdate, { passive: true });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Project data
const projectsData = [
    {
        id: 1,
        title: "LendingClub Credit Risk Analysis",
        description: "Comprehensive credit risk analysis using machine learning algorithms to predict loan defaults. Implemented various models including Random Forest, XGBoost, and Neural Networks with feature engineering and model optimization.",
        category: "credit",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/harshvardhan-sekar/lc-credit-risk-analytics",
        demo: "#",
        image: "fas fa-chart-line"
    },
    {
        id: 2,
        title: "Oscar Award Winner Predictions",
        description: "Machine learning project predicting Oscar winners using XGBoost and Random Forest algorithms. Analyzed historical data and movie features to build predictive models with 85% accuracy.",
        category: "ml",
        technologies: ["Python", "XGBoost", "Random Forest", "Pandas", "Scikit-learn", "NumPy"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-trophy"
    },
    {
        id: 3,
        title: "Pneumonia Detection using Computer Vision",
        description: "Deep learning model for detecting pneumonia from chest X-ray images using Convolutional Neural Networks. Achieved 92% accuracy in medical image classification with data augmentation techniques.",
        category: "cv",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "PIL"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-x-ray"
    },
    {
        id: 4,
        title: "Tableau Business Intelligence Dashboards",
        description: "Interactive dashboards for business intelligence and data visualization. Created comprehensive reports for various business metrics, KPIs, and financial analytics with real-time data connections.",
        category: "viz",
        technologies: ["Tableau", "SQL", "Data Visualization", "Business Intelligence", "Dashboard Design"],
        github: "#",
        demo: "https://public.tableau.com/app/profile/harshvardhan.sekar",
        image: "fas fa-chart-bar"
    },
    {
        id: 5,
        title: "Empathetic Healthcare Chatbot",
        description: "Natural Language Processing chatbot designed for healthcare applications. Uses sentiment analysis and empathetic response generation for patient interaction with medical knowledge base integration.",
        category: "nlp",
        technologies: ["Python", "NLTK", "Transformers", "Flask", "NLP", "Sentiment Analysis"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-robot"
    },
    {
        id: 6,
        title: "Financial Auditing Assistant Chatbot",
        description: "AI-powered chatbot for financial auditing assistance. Helps with deal structuring, compliance checking, and financial analysis using advanced NLP techniques and financial domain knowledge.",
        category: "nlp",
        technologies: ["Python", "OpenAI API", "Flask", "Financial Analysis", "NLP", "RAG"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-calculator"
    },
    {
        id: 7,
        title: "AWS Data Pipeline with Snowflake",
        description: "End-to-end data pipeline using AWS services and Snowflake for data warehousing. Implemented ETL processes for large-scale data processing with Netflix dataset analysis and visualization.",
        category: "de",
        technologies: ["AWS", "Snowflake", "Python", "SQL", "ETL", "Data Warehousing"],
        github: "https://github.com/harshvardhan-sekar/netflix-snowflake-warehouse",
        demo: "#",
        image: "fas fa-database"
    },
    {
        id: 8,
        title: "TensorFlow & Keras Learning Repository",
        description: "Comprehensive collection of TensorFlow and Keras implementations following Daniel Bourke's tutorials. Covers deep learning fundamentals, neural networks, and advanced techniques with practical applications.",
        category: "ml",
        technologies: ["TensorFlow", "Keras", "Python", "Deep Learning", "Neural Networks", "Jupyter"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-brain"
    },
    {
        id: 9,
        title: "Power BI Financial Analytics",
        description: "Advanced financial analytics dashboards using Power BI. Created interactive visualizations for financial reporting, business intelligence, and executive dashboards with DAX calculations.",
        category: "viz",
        technologies: ["Power BI", "DAX", "SQL", "Financial Analytics", "Data Modeling", "Visualization"],
        github: "#",
        demo: "#",
        image: "fas fa-chart-pie"
    },
    {
        id: 10,
        title: "Self-Driving Car Simulation",
        description: "Computer vision project simulating autonomous vehicle navigation using deep learning. Implements lane detection, object recognition, path planning, and real-time decision making algorithms.",
        category: "cv",
        technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning", "Simulation"],
        github: "https://github.com/harshvardhan-sekar",
        demo: "#",
        image: "fas fa-car"
    }
];

// Load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
        <div class="project-image">
            <i class="${project.image}"></i>
        </div>
        <div class="project-content">
            <span class="project-category">${getCategoryName(project.category)}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
                ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link secondary">
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                </a>` : ''}
                <div class="share-container">
                    <button class="share-button" onclick="toggleShareDropdown(${project.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <div class="share-dropdown" id="share-dropdown-${project.id}">
                        <a href="#" onclick="shareProject('${project.title}', '${project.github}', 'twitter')">
                            <i class="fab fa-twitter"></i>
                            Twitter
                        </a>
                        <a href="#" onclick="shareProject('${project.title}', '${project.github}', 'linkedin')">
                            <i class="fab fa-linkedin"></i>
                            LinkedIn
                        </a>
                        <a href="#" onclick="shareProject('${project.title}', '${project.github}', 'facebook')">
                            <i class="fab fa-facebook"></i>
                            Facebook
                        </a>
                        <a href="#" onclick="copyProjectLink('${project.title}', '${project.github}')">
                            <i class="fas fa-link"></i>
                            Copy Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'ml': 'Machine Learning',
        'cv': 'Computer Vision',
        'nlp': 'Natural Language Processing',
        'credit': 'Credit Risk',
        'viz': 'Data Visualization',
        'de': 'Data Engineering'
    };
    return categoryNames[category] || category;
}

// Project filtering with toggleable functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    console.log('Initializing project filters, found buttons:', filterButtons.length);
    
    filterButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.textContent, 'data-filter:', button.getAttribute('data-filter'));
        
        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Filter button clicked:', this.textContent, 'filter:', this.getAttribute('data-filter'));
            
            const filter = this.getAttribute('data-filter');
            
            // Handle "All" button specially - it should be exclusive
            if (filter === 'all') {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to "All" button
                this.classList.add('active');
            } else {
                // Toggle the clicked button
                this.classList.toggle('active');
                
                // If any category button is active, remove active from "All"
                const allButton = document.querySelector('.filter-btn[data-filter="all"]');
                const hasActiveCategory = Array.from(filterButtons).some(btn => 
                    btn.getAttribute('data-filter') !== 'all' && btn.classList.contains('active')
                );
                
                if (hasActiveCategory) {
                    allButton.classList.remove('active');
                } else {
                    // If no category buttons are active, activate "All"
                    allButton.classList.add('active');
                }
            }

            // Get all active filters
            const activeFilters = Array.from(filterButtons)
                .filter(btn => btn.classList.contains('active'))
                .map(btn => btn.getAttribute('data-filter'));
            
            console.log('Active filters:', activeFilters);
            
            // Update filter count indicator
            updateFilterCountIndicator(activeFilters);
            
            const projectCards = document.querySelectorAll('.project-card');
            console.log('Filtering projects with filters:', activeFilters, 'Found cards:', projectCards.length);

            // Add smooth transition effect
            projectCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');
                console.log(`Card ${index}: category=${cardCategory}, activeFilters=${activeFilters}`);
                
                // Show card if "all" is active OR if the card's category is in active filters
                const shouldShow = activeFilters.includes('all') || activeFilters.includes(cardCategory);
                
                if (shouldShow) {
                    card.style.display = 'block';
                    // Add a small delay for staggered animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    // Hide after transition completes
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 400);
                }
            });
            
            // Show notification for filter changes
            if (activeFilters.length > 1 && !activeFilters.includes('all')) {
                showNotification(`Showing projects in ${activeFilters.length} categories`, 'info');
            } else if (activeFilters.includes('all')) {
                showNotification('Showing all projects', 'info');
            }
        });
    });
}

// Update filter count indicator
function updateFilterCountIndicator(activeFilters) {
    const filterContainer = document.querySelector('.project-filters');
    const categoryFilters = activeFilters.filter(filter => filter !== 'all');
    
    if (categoryFilters.length > 1) {
        filterContainer.classList.add('has-multiple-active');
        filterContainer.setAttribute('data-active-count', categoryFilters.length);
    } else {
        filterContainer.classList.remove('has-multiple-active');
        filterContainer.removeAttribute('data-active-count');
    }
}

// Contact links initialization
function initContactLinks() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    console.log('Contact links found:', contactLinks.length);
    
    contactLinks.forEach((link, index) => {
        console.log(`Link ${index}:`, link.href, link.textContent.trim());
        
        // Ensure links are clickable
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        
        // Add click event listener for debugging
        link.addEventListener('click', function(e) {
            console.log('Contact link clicked:', this.href);
        });
    });
}

// Share button functionality
function initShareButtons() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.share-container')) {
            document.querySelectorAll('.share-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Toggle share dropdown
function toggleShareDropdown(projectId) {
    const dropdown = document.getElementById(`share-dropdown-${projectId}`);
    const allDropdowns = document.querySelectorAll('.share-dropdown');
    
    // Close all other dropdowns
    allDropdowns.forEach(dd => {
        if (dd.id !== `share-dropdown-${projectId}`) {
            dd.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('active');
}

// Share project on social media
function shareProject(title, githubUrl, platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this amazing project: ${title}`);
    
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    // Close dropdown
    document.querySelectorAll('.share-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

// Copy project link to clipboard
function copyProjectLink(title, githubUrl) {
    const text = `Check out this project: ${title}\nGitHub: ${githubUrl}\nPortfolio: ${window.location.href}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Project link copied to clipboard!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Project link copied to clipboard!', 'success');
    }
    
    // Close dropdown
    document.querySelectorAll('.share-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let hasAnimated = false; // Flag to prevent re-animation
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateSkillBars();
            }
        });
    }, { threshold: 0.3 });
    
    // Observe the skills section instead of individual bars
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    function animateSkillBars() {
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            const delay = index * 150; // Stagger animation by 150ms per bar
            
            setTimeout(() => {
                // Reset width to 0 first
                bar.style.width = '0%';
                bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
                
                // Add energy bar effect with color changes
                bar.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ffa726 50%, #66bb6a 100%)';
                bar.style.boxShadow = '0 0 10px rgba(102, 187, 106, 0.5)';
                
                // Animate to target percentage
                setTimeout(() => {
                    bar.style.width = width + '%';
                    
                    // Add completion effect
                    setTimeout(() => {
                        bar.style.boxShadow = '0 0 15px rgba(102, 187, 106, 0.8)';
                        bar.style.transform = 'scale(1.02)';
                        
                        // Reset transform after a moment
                        setTimeout(() => {
                            bar.style.transform = 'scale(1)';
                        }, 300);
                    }, 2000);
                }, 50);
            }, delay);
        });
    }
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) {
        console.error('Contact form not found');
        return;
    }
    
    console.log('Contact form initialized');
    
    // Ensure all form inputs are properly enabled
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.disabled = false;
        input.readOnly = false;
        console.log('Input enabled:', input.name, input.type);
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #2563eb;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;
document.head.appendChild(style);

// Typewriter effect for name
function initTypewriter() {
    const nameElement = document.getElementById('typewriter-name');
    const cursorElement = document.querySelector('.cursor');
    const fullName = 'Harshvardhan Sekar';
    
    if (!nameElement) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100; // milliseconds per character
    
    function typeWriter() {
        if (currentIndex < fullName.length) {
            // Typing
            nameElement.textContent = fullName.substring(0, currentIndex + 1);
            currentIndex++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Finished typing, hide the cursor
            setTimeout(() => {
                cursorElement.style.display = 'none';
            }, 500);
        }
    }
    
    // Start the typewriter effect after a short delay
    setTimeout(() => {
        typeWriter();
    }, 500);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
