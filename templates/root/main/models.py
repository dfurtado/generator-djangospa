from django.db import models

# Create your models here.

class Sample(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=150, blank=True, default='')
	img_name = models.CharField(max_length=100, blank=True, default='')
	info = models.TextField()	
	owner = models.ForeignKey('auth.user', related_name='sample')
	
	class Meta:
		ordering = ('created',)

	def __unicode__(self):
		return self.name
		
