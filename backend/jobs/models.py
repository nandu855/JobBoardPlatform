from django.db import models
from django.contrib.auth.models import User


class Job(models.Model):

    JOB_TYPES = [
        ('FULL_TIME', 'Full Time'),
        ('PART_TIME', 'Part Time'),
        ('REMOTE', 'Remote'),
        ('INTERNSHIP', 'Internship'),
    ]

    employer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='jobs'
    )

    title = models.CharField(max_length=200)

    company = models.CharField(max_length=150)

    location = models.CharField(max_length=150)

    salary = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    job_type = models.CharField(
        max_length=20,
        choices=JOB_TYPES
    )

    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Application(models.Model):

    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('REVIEWED', 'Reviewed'),
        ('ACCEPTED', 'Accepted'),
        ('REJECTED', 'Rejected'),
    ]

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name='applications'
    )

    applicant = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='applications'
    )

    cover_letter = models.TextField(
        blank=True,
        null=True
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    class Meta:
        ordering = ['-applied_at']

    def __str__(self):
        return f"{self.applicant.username} applied for {self.job.title}"