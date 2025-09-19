// Modal System JavaScript

const cardData = {
    // Professional Experience Cards
    'AWS Virtual Internship': {
        rating: '2024',
        title: 'AWS Virtual Internship',
        description: 'Completed comprehensive cloud-focused challenges that strengthened my understanding of scalable solutions and modern infrastructure through real-world simulations.',
        sections: {
            'Key Learning Outcomes': [
                'Mastered AWS EC2, S3, and RDS services',
                'Implemented scalable cloud architectures',
                'Learned infrastructure as code with CloudFormation',
                'Gained experience with AWS Lambda serverless computing',
                'Understood cloud security best practices'
            ],
            'Projects Completed': [
                'Built a scalable web application on AWS',
                'Implemented CI/CD pipeline using AWS CodePipeline',
                'Created monitoring dashboards with CloudWatch',
                'Designed cost-optimized cloud solutions'
            ],
            'Skills Developed': [
                'Cloud Architecture Design',
                'AWS Services Management',
                'Infrastructure Automation',
                'Cost Optimization',
                'Security Implementation'
            ]
        },
        links: [
            { text: 'View Certificate', url: '#' },
            { text: 'GitHub Repository', url: '#' }
        ]
    },
    
    'Accenture Job Simulation': {
        rating: '2024',
        title: 'Accenture Job Simulation',
        description: 'Engaged in consulting-style problem solving, honing skills in client analysis, digital transformation, and strategic planning.',
        sections: {
            'Consulting Skills Developed': [
                'Client requirement analysis and documentation',
                'Business process optimization strategies',
                'Digital transformation roadmap creation',
                'Data-driven decision making frameworks',
                'Stakeholder communication and presentation'
            ],
            'Technical Applications': [
                'Process automation solution design',
                'Data analytics dashboard creation',
                'Technology implementation planning',
                'ROI analysis and financial modeling'
            ],
            'Key Achievements': [
                'Successfully completed 5 client simulation cases',
                'Achieved top 10% ranking in problem-solving assessment',
                'Delivered compelling business transformation proposal'
            ]
        },
        links: [
            { text: 'View Certificate', url: '#' },
            { text: 'Case Study Portfolio', url: '#' }
        ]
    },
    
    // Technical Skills Cards
    'Python & Django': {
        rating: 'Expert',
        title: 'Python & Django Development',
        description: 'Advanced proficiency in Python programming and Django web framework with extensive experience building scalable web applications and APIs.',
        sections: {
            'Python Expertise': [
                'Advanced Python programming patterns',
                'Object-oriented and functional programming',
                'Data structures and algorithm optimization',
                'Unit testing and test-driven development',
                'Package management and deployment'
            ],
            'Django Framework': [
                'MVC/MTV architecture implementation',
                'RESTful API development with DRF',
                'Advanced ORM usage and optimization',
                'Custom authentication systems',
                'Production deployment and scaling'
            ],
            'Notable Projects': [
                'E-commerce platform with payment integration',
                'Real-time chat application with WebSockets',
                'Content management system with custom admin',
                'High-performance API service (10k+ requests/min)'
            ]
        },
        links: [
            { text: 'GitHub Projects', url: '#' },
            { text: 'Live Demos', url: '#' },
            { text: 'Code Documentation', url: '#' }
        ]
    },
    
    'JavaScript & React': {
        rating: 'Advanced',
        title: 'JavaScript & React Development',
        description: 'Strong skills in modern JavaScript and React.js. Created dynamic user interfaces and single-page applications with responsive design.',
        sections: {
            'JavaScript Skills': [
                'ES6+ features and modern patterns',
                'Asynchronous programming (Promises, async/await)',
                'DOM manipulation and event handling',
                'API integration and HTTP clients',
                'Module systems and build tools'
            ],
            'React Ecosystem': [
                'Component-based architecture',
                'State management (Redux, Context API)',
                'React Router for SPA navigation',
                'Form handling and validation',
                'Testing with Jest and React Testing Library'
            ],
            'Key Projects': [
                'Interactive dashboard with data visualization',
                'Progressive Web App with offline support',
                'E-commerce frontend with cart functionality',
                'Real-time messaging application'
            ]
        },
        links: [
            { text: 'React Portfolio', url: '#' },
            { text: 'Interactive Demos', url: '#' },
            { text: 'Component Library', url: '#' }
        ]
    },
    
    // Add more cards as needed for other sections...
    // You can add entries for Database Management, Cloud & DevOps, Version Control, etc.
};

// Create modal HTML structure
function createModalHTML() {
    const modalHTML = `
        <div id="cardModal" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <div class="modal-rating"></div>
                    <h2 class="modal-title"></h2>
                </div>
                <div class="modal-body">
                    <p class="modal-description"></p>
                    <div class="modal-sections"></div>
                    <div class="modal-links"></div>
                </div>
            </div>
        </div>
    `;
    
    if (!document.getElementById('cardModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

// Open modal with card data
function openModal(cardTitle) {
    const modal = document.getElementById('cardModal');
    const data = cardData[cardTitle];
    
    if (!data) {
        console.warn(`No data found for card: ${cardTitle}`);
        return;
    }
    
    // Populate modal content
    modal.querySelector('.modal-rating').textContent = data.rating;
    modal.querySelector('.modal-title').textContent = data.title;
    modal.querySelector('.modal-description').textContent = data.description;
    
    // Clear and populate sections
    const sectionsContainer = modal.querySelector('.modal-sections');
    sectionsContainer.innerHTML = '';
    
    Object.entries(data.sections).forEach(([sectionTitle, items]) => {
        const sectionHTML = `
            <div class="modal-section">
                <h3>${sectionTitle}</h3>
                <ul>
                    ${items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        sectionsContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });
    
    // Add links
    const linksContainer = modal.querySelector('.modal-links');
    linksContainer.innerHTML = '';
    
    if (data.links && data.links.length > 0) {
        data.links.forEach(link => {
            linksContainer.insertAdjacentHTML('beforeend', 
                `<a href="${link.url}" class="modal-button" target="_blank">${link.text}</a>`
            );
        });
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize modal system
function initializeModalSystem() {
    console.log("Initializing modal systems...")
    createModalHTML();
    
    // Add click listeners to movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.movie-title').textContent;
            openModal(title);
        });
    });
    
    // Close modal when clicking outside or on close button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeModalSystem();
    
    // Keep existing scroll functionality
    document.querySelectorAll('.scroll-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const container = this.parentElement;
            const moviesRow = container.querySelector('.movies-row');
            const cardWidth = 295; // card width + gap
            
            if (this.classList.contains('left')) {
                moviesRow.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
            } else {
                moviesRow.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
            }
        });
    });
});