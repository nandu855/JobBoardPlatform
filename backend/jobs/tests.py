from django.test import TestCase
from django.contrib.auth.models import User

from .models import Job


class JobModelTest(TestCase):

    def setUp(self):

        self.user = User.objects.create_user(
            username="testuser",
            password="test12345"
        )

    def test_create_job(self):

        job = Job.objects.create(
            employer=self.user,
            title="Python Developer",
            company="ABC Company",
            location="Hyderabad",
            salary=600000,
            job_type="FULL_TIME",
            description="Django Developer"
        )

        self.assertEqual(job.title, "Python Developer")

    def test_company_name(self):

        job = Job.objects.create(
            employer=self.user,
            title="React Developer",
            company="Google",
            location="Bangalore",
            salary=1000000,
            job_type="FULL_TIME",
            description="Frontend"
        )

        self.assertEqual(job.company, "Google")

    def test_location(self):

        job = Job.objects.create(
            employer=self.user,
            title="Java Developer",
            company="Infosys",
            location="Chennai",
            salary=700000,
            job_type="FULL_TIME",
            description="Backend"
        )

        self.assertEqual(job.location, "Chennai")

    def test_salary(self):

        job = Job.objects.create(
            employer=self.user,
            title="Node Developer",
            company="TCS",
            location="Pune",
            salary=800000,
            job_type="FULL_TIME",
            description="NodeJS"
        )

        self.assertEqual(job.salary, 800000)

    def test_job_type(self):

        job = Job.objects.create(
            employer=self.user,
            title="Intern",
            company="Microsoft",
            location="Delhi",
            salary=25000,
            job_type="INTERNSHIP",
            description="Internship"
        )

        self.assertEqual(job.job_type, "INTERNSHIP")