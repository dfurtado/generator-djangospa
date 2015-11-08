from django.contrib import admin
from import_export import resources
from .models import Page, Item
from .models import Sample
from import_export.admin import ImportExportModelAdmin

# for django-import-export
class PageResource(resources.ModelResource):

    class Meta:
        model = Page
        fields = ('id', 'created', 'pageid', 'header', 'message', 'url', 'urltext', 'project', 'owner',)

class PageAdmin(ImportExportModelAdmin):
    resource_class = PageResource
    pass

class ItemResource(resources.ModelResource):

    class Meta:
        model = Item
        fields = ('id', 'created', 'page', 'name', 'url', 'urltext', 'owner', 'info', 'button',)

class ItemAdmin(ImportExportModelAdmin):
    resource_class = ItemResource
    pass    

class SampleResource(resources.ModelResource):

    class Meta:
        model = Sample
        fields = ('id', 'created', 'name', 'img_name', 'info', 'url', 'owner',)

class SampleAdmin(ImportExportModelAdmin):
    resource_class = SampleResource
    pass

admin.site.register(Page, PageAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Sample, SampleAdmin)
