# Personal Portfolio Web Application

A professional one-page portfolio application built with **HTML, CSS, JavaScript, and Python Flask**.

The project is being developed as a full-stack portfolio platform that will gradually include a REST API, database, authentication, admin dashboard, visitor analytics, comments, likes, image management, cloud storage, testing, and CI/CD.

## Current Technologies

* HTML5
* CSS3
* JavaScript
* Python
* Flask
* Jinja2
* Git & GitHub

## Planned Technologies

* REST API
* SQLite
* PostgreSQL
* AWS S3
* AWS Lambda
* Docker
* GitHub Actions
* Authentication
* Admin Dashboard

## Current Features

* One-page professional portfolio
* Home section
* About section
* Skills section
* Services section
* Contact section
* Professional profile image
* LinkedIn and GitHub links
* Responsive navigation
* Mobile-friendly layout
* Animated professional role text
* Responsive design for desktop and mobile

## Planned Features

### Portfolio Management

* Work experience management
* Project management
* Profile photo management
* Add, edit, and delete portfolio content
* Preserve historical experiences and photos

### REST API

The Flask backend will provide APIs for managing portfolio data.

Planned API resources include:

* Experiences
* Projects
* Photos
* Comments
* Likes
* Visitors

### Database

The initial development database will use SQLite.

The application is planned to migrate to PostgreSQL for production.

### Visitor Analytics

The application is planned to track:

* Number of visitors
* Approximate visitor country
* Approximate visitor city/place
* Visit statistics

Visitor IP addresses will not be publicly displayed.

### Social Features

Planned features include:

* Comments
* Likes
* Visitor interaction tracking

### Admin Dashboard

An authenticated administrator will be able to:

* Add work experiences
* Edit work experiences
* Delete work experiences
* Add projects
* Edit projects
* Delete projects
* Upload profile photos
* Manage comments
* Manage portfolio content

### Cloud Storage

The project is planned to use **Amazon S3** for production image and file storage.

Local storage will be used during initial development.

### DevOps and Deployment

The project is planned to include:

* Docker
* GitHub Actions
* Automated testing
* CI/CD
* Environment variables
* Production deployment
* AWS integration

## Project Structure

The current Flask structure is:

```text
Portfolio.github.io/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    ├── script.js
    └── images/
```

The project will expand as backend and database functionality is added.

## Development Plan

The project is being developed gradually:

1. Convert the existing portfolio to Flask
2. Organize frontend files using the Flask structure
3. Run and test the portfolio through Flask
4. Add SQLite database
5. Create REST API structure
6. Build CRUD APIs
7. Connect the JavaScript frontend to the APIs
8. Add work experience management
9. Add project management
10. Add profile/photo management
11. Add comments and likes
12. Add visitor analytics
13. Add authentication and admin dashboard
14. Add testing, logging, environment variables, and documentation
15. Add Docker, GitHub Actions, PostgreSQL, AWS S3, and production deployment

## Development

Clone the repository and enter the project directory:

```bash
git clone https://github.com/MDWADUD/Portfolio.github.io.git
cd Portfolio.github.io
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install the project dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask application:

```bash
python app.py
```

The application will be available locally at:

```text
http://127.0.0.1:5000
```

## Project Status

🚧 **Currently in development**

The project is being converted from a static portfolio website into a full-stack Flask application.

## Author

**Shiplu Md**

Computer Science graduate and IT Analyst / Systems Analyst focused on software development, systems analysis, APIs, cloud technologies, and identity and access management.

## License

This project is intended for personal portfolio and professional development purposes.
