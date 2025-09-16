# Portfolio Website - Netflix Style

A Django-based portfolio website with a Netflix-style interface featuring different account types for different audiences.

## Features

### 🎯 Account-Based Portfolio Views
- **Recruiter**: Professional experience, skills, and work samples
- **University**: Academic projects, coursework, and research
- **Fellow Developer**: Technical projects and code repositories
- **Other**: General portfolio overview for all visitors

### 🎨 Design
- Netflix-inspired dark theme interface
- Cool Coastal Vibes color palette:
  - Dark Navy (#2C3E50) - Primary background
  - Coral Red (#E74C3C) - Accent color
  - Light Gray (#ECEFF1) - Text and highlights
- Responsive design with smooth animations
- Interactive hover effects

### 🛠️ Technology Stack
- **Backend**: Django 5.2.6
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome
- **Database**: SQLite (development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/zaid3004/portfolio-website.git
cd portfolio-website
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install Django
```

4. Run the development server:
```bash
python manage.py runserver
```

5. Open your browser and navigate to `http://127.0.0.1:8000/`

## Project Structure

```
PortfolioWebsite/
├── PortfolioWebsite/          # Django project settings
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── website/                   # Main application
│   ├── static/website/css/    # Stylesheets
│   ├── templates/website/     # HTML templates
│   ├── views.py
│   └── ...
├── manage.py
└── README.md
```

## Development

The website is currently in development. The main page features the Netflix-style account selection interface. Future development will include:

- Individual portfolio pages for each account type
- Content management system
- Project galleries
- Contact forms
- Blog functionality

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

This project is personal portfolio code. Please respect intellectual property and ask before reusing significant portions of the code.

---

**Zaid Shaheed** - [GitHub](https://github.com/zaid3004)