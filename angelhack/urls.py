from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from main.models import CompanyResource, ContestResource, UserResource, ProjectUpdateResource
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

from tastypie.api import Api

v1_api = Api(api_name='v1')
v1_api.register(ContestResource())
v1_api.register(CompanyResource())
v1_api.register(UserResource())
v1_api.register(ProjectUpdateResource())


urlpatterns = patterns('',
    # Examples:
    url(r'', include('social_auth.urls')),
    url(r'logout/', 'main.views.auth_logout'),
    url(r'^$', 'main.views.homepage', name='home'),
    url(r'^signup_complete', 'main.views.signup_complete'),
    url(r'^contest/(\d+)/$', 'main.views.project_page'),
    url(r'^contest/(\d+)/details/$', 'main.views.project_details'),
    (r'^api/', include(v1_api.urls)),
    # url(r'^angelhack/', include('angelhack.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
     url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
     url(r'^admin/', include(admin.site.urls)),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
