from django.contrib import admin
from .models import Sample, Page, Item

class SampleAdmin(admin.ModelAdmin):
    pass

class PageAdmin(admin.ModelAdmin):
    pass

class ItemAdmin(admin.ModelAdmin):
    pass

admin.site.register(Sample, SampleAdmin)
admin.site.register(Page, PageAdmin)
admin.site.register(Item, ItemAdmin)
