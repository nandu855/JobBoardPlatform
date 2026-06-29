# Job Board Platform

## Overview

A full-stack Job Board Platform built using React, Django REST Framework, PostgreSQL, and JWT Authentication.

Employers can post, edit and delete jobs.

Job seekers can browse jobs and apply online.

---

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* PostgreSQL
* Simple JWT

### Frontend

* React
* React Router
* Axios
* Bootstrap

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication

### Employer

* Post Job
* Edit Job
* Delete Job
* View My Jobs

### Job Seeker

* Browse Jobs
* View Job Details
* Apply for Jobs
* View My Applications

---

## Installation

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## API Endpoints

* POST /api/users/register/
* POST /api/token/
* GET /api/jobs/
* POST /api/jobs/
* PUT /api/jobs/{id}/
* DELETE /api/jobs/{id}/
* POST /api/applications/
* GET /api/applications/

---

## Tests

Run:

```bash
python manage.py test
```

---

## Author

Anand kumar badarala
