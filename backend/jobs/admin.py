from django.contrib import admin
from .models import Job, Application


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'company',
        'location',
        'job_type',
        'created_at',
    )

    search_fields = (
        'title',
        'company',
    )

    list_filter = (
        'job_type',
        'location',
    )


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = (
        'applicant',
        'job',
        'status',
        'applied_at',
    )

    list_filter = (
        'status',
    )