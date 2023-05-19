from django.db import models


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)  #auto_now means to take the current time
    created = models.DateTimeField(auto_now_add=True) #auto_now_add means to take that time when actuallt the model instance was created

    def _str_(self):
        return self.body[0:50]































