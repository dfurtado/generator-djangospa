from django.contrib.auth.models import User
from rest_framework import serializers
from <%= appName %>.models import Sample

class SampleSerializer(serializers.HyperlinkedModelSerializer):
	owner = serializers.ReadOnlyField(source='owner.username')
	
	class Meta:
		model = Sample
		fields = ('id', 'created', 'name', 'img_name', 'url', 'owner', 'info')
		
class UserSerializer(serializers.HyperlinkedModelSerializer):
	sample = serializers.HyperlinkedRelatedField(many=True, view_name='sample-detail', read_only=True)

	class Meta:
		model = User
		fields = ('url', 'username', 'sample')
		
