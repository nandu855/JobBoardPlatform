from rest_framework import serializers
from .models import Job, Application


class JobSerializer(serializers.ModelSerializer):
    employer = serializers.ReadOnlyField(source="employer.username")

    class Meta:
        model = Job
        fields = "__all__"


class ApplicationSerializer(serializers.ModelSerializer):
    applicant = serializers.ReadOnlyField(source="applicant.username")

    class Meta:
        model = Application
        fields = "__all__"