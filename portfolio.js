/**
 * Zaid Shaheed Portfolio Data & Logic
 * Blueprint Dark Theme Master Script
 */

const cardData = {
    'AWS Virtual Internship': {
        rating: 'July 2025',
        title: 'AWS Virtual Internship',
        description: 'Solutions Architecture simulation for scalable cloud and serverless systems at Amazon Web Services.',
        sections: {
            'Key Learning Outcomes': [
                'Mastered the role of Solutions Architecture at AWS',
                'Implemented scalable cloud architectures',
                'Learned infrastructure as code with CloudFormation',
                'Gained experience with AWS Lambda serverless computing',
                'Understood cloud security best practices'
            ],
            'Technical Implementation': [
                'Built a scalable web application on AWS',
                'Implemented CI/CD pipeline using AWS CodePipeline',
                'Created monitoring dashboards with CloudWatch',
                'Designed cost-optimized cloud solutions'
            ],
            'Skills Developed': [
                'Cloud Architecture Diagramming',
                'AWS Pricing & Cost Optimization',
                'Technical Communication',
                'Security Implementation Standards'
            ]
        },
        links: [
            { text: 'View Certificate', url: 'https://drive.google.com/file/d/1AtqMUSbOInvAzuo5hPUm1HndfH3ESlKo/view?usp=sharing' }
        ]
    },

    'Accenture Job Simulation': {
        rating: 'June 2024',
        title: 'Accenture North America',
        description: 'Consulting-style problem solving and digital transformation strategy simulation.',
        sections: {
            'Consulting Frameworks': [
                'Client requirement analysis and documentation',
                'Business process optimization strategies',
                'Digital transformation roadmap creation',
                'Data-driven decision making frameworks',
                'Stakeholder communication and presentation'
            ],
            'Project Scope': [
                'Process automation solution design',
                'Data analytics dashboard creation',
                'Technology implementation planning',
                'ROI analysis and financial modeling'
            ],
            'Key Achievements': [
                'Successfully completed 5 client simulation cases',
                'Achieved top 10% ranking in problem-solving assessments',
                'Delivered compelling business transformation proposals'
            ]
        },
        links: [
            { text: 'View Certificate', url: 'https://drive.google.com/file/d/1q34db0J3Vcy0rlRGxbjmc-YYC7nFJ073/view?usp=sharing' }
        ]
    },

    'JP Morgan & Chase Program': {
        rating: 'July 2024',
        title: 'JP Morgan Chase & Co.',
        description: 'Financial tech simulations involving data-driven banking insights and global systems analysis.',
        sections: {
            'Finance & Analysis': [
                'Equity and debt market research',
                'Financial modeling and valuation techniques',
                'Risk identification and mitigation strategies',
                'Client portfolio analysis and advisory',
                'Presentation of investment recommendations'
            ],
            'Technical Ops': [
                'Excel-based financial modeling',
                'Data visualization for market insights',
                'Scenario and sensitivity analysis',
                'Application of corporate finance principles'
            ],
            'Key Achievements': [
                'Completed multiple investment banking case studies',
                'Ranked in top 15% for financial problem-solving accuracy',
                'Delivered actionable recommendations on client investment strategies'
            ]
        },
        links: [
            { text: 'View Certificate', url: 'https://drive.google.com/file/d/1GhG4Qpuk6dm4hRI1Cz0by531D6SEySrq/view?usp=sharing' }
        ]
    },

    'The Forage Programs': {
        rating: '2024 - 2025',
        title: 'Global Virtual Internships',
        description: 'Comprehensive industry exposure through diverse virtual simulations with top-tier global firms.',
        sections: {
            'Industry Exposure': [
                'Tech Consulting (Accenture)',
                'Investment Banking (J.P. Morgan Chase)',
                'Cloud Computing (AWS)',
                'Digital Transformation (various)'
            ],
            'Cross-Disciplinary Skills': [
                'Client communication & requirement analysis',
                'Professional presentation & structured reporting',
                'Data analytics and visualization',
                'Critical thinking in business contexts'
            ]
        },
        links: [
            { text: 'View Portfolio', url: 'https://drive.google.com/drive/folders/1HX9B0fEchZzp-taWDT6I7E9vJrEgCCJZ' }
        ]
    },

    'Computer Science Fundamentals': {
        rating: '2023 - 2026',
        title: 'CS Fundamentals',
        description: 'Rigorous study of computer science core principles, focusing on algorithmic efficiency and system architecture.',
        sections: {
            'Core Areas of Study': [
                'Data Structures (Lists, Trees, Graphs, Hash Maps)',
                'Algorithm Design & Analysis (Sorting, Searching, Dynamic Programming)',
                'Object-Oriented Programming (OOP) Principles',
                'Software Engineering Life Cycle (SDLC)',
                'Operating Systems & Networking'
            ],
            'Applied Logic': [
                'Understanding Big O notation and complexity analysis',
                'Implementing efficient data structures from scratch',
                'Designing scalable and maintainable software architectures',
                'Applying design patterns to complex engineering problems'
            ]
        },
        links: []
    },

    'Harvard CS50W': {
        rating: 'Certificate - 2024',
        title: 'Harvard CS50 Web',
        description: 'Intensive full-stack web development course using Python, JavaScript, and SQL.',
        sections: {
            'Technical Deep Dive': [
                'Backend development with Python and Django',
                'Frontend engineering with JavaScript and modern CSS',
                'Database design using SQL and SQLAlchemy',
                'Scalability, security, and user experience (UX)',
                'Continuous Integration/Continuous Deployment (CI/CD)'
            ],
            'Projects Built': [
                'Search: Google Search front-end implementation',
                'Wiki: Markdown-based online encyclopedia',
                'Commerce: Full-featured e-commerce auction site',
                'Mail: Single-page email client front-end',
                'Network: Social network with follower/post logic'
            ]
        },
        links: [
            { text: 'View Certificate', url: 'https://certificates.cs50.io/3322066c-48c0-4354-94e8-89c0209c13e5.pdf?size=letter' }
        ]
    },

    'MUN Leadership': {
        rating: 'Head of Tech',
        title: 'Technical Leadership',
        description: 'Led digital transformation and technical infrastructure for conferences with 300+ delegates.',
        sections: {
            'Management Scope': [
                'Headed a technical team of 10+ members',
                'Managed digital infrastructure for 300+ delegates',
                'Coordinated real-time technical support during conferences',
                'Standardized documentation and workflow protocols'
            ],
            'Systems Architecture': [
                'Developed custom delegate registration systems',
                'Automated scoring and resolution tracking logic',
                'Maintained high-availability conference websites',
                'Implemented secure voting and communication platforms'
            ]
        },
        links: []
    },

    'VVA Research Paper': {
        rating: 'Co-Author - 2024',
        title: 'Research & AI',
        description: 'Technical exploration of speech-to-intent automation systems and NLP frameworks.',
        sections: {
            'Research Focus': [
                'Speech-to-Intent (STI) processing models',
                'Natural Language Understanding (NLU) optimization',
                'Context-aware automation frameworks',
                'Latency reduction in real-time voice processing'
            ],
            'Technical Contribution': [
                'Developed test scripts for latency benchmarking',
                'Analyzed intent accuracy across diverse acoustic environments',
                'Authored sections on software architecture and logic flow',
                'Designed systemic diagrams for the VVA engine'
            ]
        },
        links: []
    },

    'Pythonic Core': {
        rating: 'Advanced',
        title: 'Pythonic Core',
        description: 'Deep expertise in building scalable backends and autonomous automation scripts using the Python ecosystem.',
        sections: {
            'Frameworks & Libraries': [
                'Django & Flask for robust web backends',
                'SQLAlchemy & Django ORM for data modeling',
                'Scrapy & BeautifulSoup for automated data extraction',
                'Pytest for comprehensive unit and integration testing'
            ],
            'Advanced Implementations': [
                'Asynchronous task processing with Celery',
                'Custom NLP pipelines for text summarization',
                'Speech-to-Task automation logic (VVA)',
                'Automated API integration and service orchestration'
            ],
            'Key Learning': [
                'Mastery of Pythonic design patterns (PEP 8)',
                'Efficient memory management in long-running scripts',
                'Secure authentication and session management',
                'Architecting for high availability and performance'
            ]
        },
        links: [
            { text: 'GitHub Projects', url: 'https://github.com/zaid3004' }
        ]
    },

    'JavaScript, HTML and CSS': {
        rating: 'Advanced',
        title: 'Frontend Architecture',
        description: 'Crafting high-performance, accessible, and visually striking user interfaces with modern web standards.',
        sections: {
            'Drafting Capabilities': [
                'Modern JavaScript (ES6+) for dynamic logic',
                'CSS Grid & Flexbox for symmetrical layouts',
                'Hardware-accelerated CSS animations (clip-path, transforms)',
                'Responsive design across all architectural viewports'
            ],
            'Technical Implementation': [
                'Intersection Observer for scroll-triggered events',
                'Heredoc-based build scripts for rapid prototyping',
                'Custom page transition systems (Journal style)',
                'Performance-first vanilla JS implementation'
            ],
            'Impeccable UI Standards': [
                'Strict adherence to vertical and horizontal symmetry',
                'Tactile feedback systems for user interactions',
                'High-contrast technical typography',
                '100/100 Lighthouse performance optimization'
            ]
        },
        links: []
    },

    'Database Management': {
        rating: 'Core',
        title: 'Data Infrastructures',
        description: 'Designing and managing relational and document-based storage systems for complex data architectures.',
        sections: {
            'Architectural Focus': [
                'PostgreSQL for relational data integrity',
                'MongoDB for flexible document storage',
                'SQLite for localized application states',
                'Schema normalization and indexing strategies'
            ],
            'Key Learning': [
                'Optimizing SQL queries for performance',
                'Database migration and versioning workflows',
                'Secure data persistence and backup protocols',
                'Integrating ORMs with diverse database engines'
            ]
        },
        links: []
    },

    'Version Control': {
        rating: 'Expert',
        title: 'Engineering Workflows',
        description: 'Managing collaborative codebases and deployment pipelines with professional version control standards.',
        sections: {
            'Drafting Workflows': [
                'Git branching, merging, and rebasing strategies',
                'GitHub Actions for automated CI/CD pipelines',
                'Peer code review and documentation standards',
                'Conflict resolution in multi-developer environments'
            ],
            'Technical Ops': [
                'Automated testing on push/pull requests',
                'Vercel & Netlify cloud deployment management',
                'Project-level dependency auditing',
                'Maintaining clean, semantic commit histories'
            ]
        },
        links: [
            { text: 'View GitHub', url: 'https://github.com/zaid3004' }
        ]
    },

    'AI News Aggregator': {
        rating: 'Python - 2024',
        title: 'AI News Aggregator',
        description: 'An automated news processing system that scrapes, summarizes, and categorizes AI-related news using Python and LLM integrations.',
        sections: {
            'Core Features': [
                'Automated scraping of top AI news sources',
                'NLP-based summarization for quick reading',
                'Sentiment analysis and categorization',
                'Daily automated report generation'
            ],
            'Technical Stack': [
                'Python (Scrapy/BeautifulSoup)',
                'OpenAI/Anthropic API for summarization',
                'PostgreSQL for data persistence',
                'GitHub Actions for scheduled runs'
            ],
            'Key Achievements': [
                'Reduced daily research time by 80%',
                'Implemented robust error handling for diverse web structures',
                'Architected scalable data pipeline for 100+ sources'
            ]
        },
        links: [
            { text: 'View Repository', url: 'https://github.com/zaid3004/ai-news-aggregator' }
        ]
    },

    'PR Vault': {
        rating: 'React Native - 2024',
        title: 'PR Vault',
        description: 'A performance-tracking mobile application designed for athletes to log personal records and visualize training progression.',
        sections: {
            'Core Features': [
                'Real-time workout logging and PR tracking',
                'Interactive progress charts and analytics',
                'Custom exercise library with category tagging',
                'Cloud synchronization for cross-device access'
            ],
            'Technical Stack': [
                'React Native (Expo)',
                'Firebase (Auth & Firestore)',
                'Victory Native for data visualization',
                'Context API for global state management'
            ],
            'Key Achievements': [
                'Achieved <200ms latency for data updates',
                'Designed intuitive, high-contrast UI for gym environments',
                'Successfully deployed to internal beta testers'
            ]
        },
        links: [
            { text: 'View Repository', url: 'https://github.com/zaid3004/pr-vault' }
        ]
    },

    'Portfolio Website': {
        rating: 'Web Design - 2025',
        title: 'Architectural Portfolio',
        description: 'A bespoke personal portfolio featuring a "Dark Architectural Blueprint" theme, custom drawing animations, and a focus on technical symmetry.',
        sections: {
            'Design Philosophy': [
                'Strict 2x2 symmetrical grid system',
                'Monochrome charcoal and blueprint blue palette',
                'Tactile mechanical UI interactions',
                'SVG-style "drawing" entry animations'
            ],
            'Technical Implementation': [
                'Vanilla JavaScript for performance-first interactivity',
                'CSS Variables for dynamic theme control',
                'Intersection Observer for scroll-triggered reveals',
                'Heredoc-based build process for maintainability'
            ],
            'Key Achievements': [
                'Perfect 100/100 Lighthouse performance score',
                'Custom-built journal-style page transitions',
                'Fully responsive across all blueprint viewports'
            ]
        },
        links: [
            { text: 'View Repository', url: 'https://github.com/zaid3004/portfolio-website' }
        ]
    },

    'QR Code Generator': {
        rating: 'Web Utility - 2024',
        title: 'QR Code Generator',
        description: 'A lightweight web utility that generates downloadable QR codes from URLs and text input with fast, client-side rendering.',
        sections: {
            'Core Features': [
                'Instant QR code generation from text or links',
                'Download output as image for sharing and printing',
                'Input validation for malformed URLs and empty values',
                'Minimal UI optimized for speed and clarity'
            ],
            'Technical Stack': [
                'Vanilla JavaScript for generation workflow',
                'HTML/CSS for responsive utility interface',
                'Client-side rendering with zero backend dependency',
                'Modular event handling for maintainability'
            ],
            'Engineering Notes': [
                'Built as a quick-access productivity tool',
                'Prioritized low-latency interactions and reliability',
                'Structured for easy extension (custom size/color/error correction)'
            ]
        },
        links: [
            { text: 'View Repository', url: 'https://github.com/zaid3004' }
        ]
    },

    'Custom Crafted Computers': {
        rating: 'Founder - 2023',
        title: 'Custom Crafted Computers',
        description: 'A joint business venture focused on designing and assembling high-performance, bespoke computing solutions for professionals and gamers.',
        sections: {
            'Business Operations': [
                'Co-founded and managed a custom PC building enterprise',
                'Handled client consultation and requirement gathering',
                'Managed supply chain and component procurement',
                'Developed brand identity and digital presence'
            ],
            'Technical Expertise': [
                'High-end hardware assembly and cable management',
                'System optimization and thermal performance tuning',
                'Hardware troubleshooting and quality assurance',
                'Custom liquid cooling loop architecture'
            ]
        },
        links: [
            { text: 'View Website', url: 'https://cc-computers.vercel.app' }
        ]
    }
};

// Open Modal logic
function openModal(key) {
    const modal = document.getElementById('modal');
    const data = cardData[key];
    if (!modal || !data) return;

    // Build internal structure
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()"><i class="ph-bold ph-x"></i></button>
            <div class="modal-rating">${data.rating}</div>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-desc">${data.description}</p>
            <div id="modal-sections">
                ${Object.entries(data.sections || {}).map(([t, items]) => `
                    <div class="modal-sec">
                        <h3>${t}</h3>
                        <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
                    </div>
                `).join('')}
            </div>
            <div class="modal-links">
                ${(data.links || []).map(l => `<a href="${l.url}" class="modal-btn" target="_blank">${l.text}</a>`).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Global Interactivity & Journal Transitions
document.addEventListener('DOMContentLoaded', () => {
    // Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Handle internal link navigation with "Journal" slide effect
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Intersection Observer for drawing elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('draw-in');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hero-title, .hero-desc, .card, .bento-card, .sec-header').forEach(el => {
        observer.observe(el);
    });

    // Explicitly add 'draw-in' to elements visible on load
    document.querySelectorAll('.hero-badge, .logo, .back-link').forEach(el => el.classList.add('draw-in'));
});

window.openModal = openModal;
window.closeModal = closeModal;
