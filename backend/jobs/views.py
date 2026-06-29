from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer
from .permissions import IsEmployerOrReadOnly


class JobViewSet(viewsets.ModelViewSet):

    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsEmployerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(employer=self.request.user)

    @action(
        detail=False,
        methods=["get"],
        permission_classes=[IsAuthenticated],
    )
    def my_jobs(self, request):

        jobs = Job.objects.filter(employer=request.user)

        serializer = JobSerializer(jobs, many=True)

        return Response(serializer.data)


class ApplicationViewSet(viewsets.ModelViewSet):

    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):

        if self.request.user.is_authenticated:
            return Application.objects.filter(applicant=self.request.user)

        return Application.objects.none()

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)