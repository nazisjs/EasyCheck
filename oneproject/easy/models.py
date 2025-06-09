from django.db import models

# Create your models here.
class Report(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    status=models.CharField(max_length=10)
    inspector=models.CharField(max_length=100)
    date=models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.title