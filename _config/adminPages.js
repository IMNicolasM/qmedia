export default {
  //Home Page
  index: {
    permission: 'media.medias.manage',
    activated: true,
    path: '/media/index',
    name: 'app.media.index',
    page: () => import('@imagina/qmedia/_pages/admin/index'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'media.cms.sidebar.adminIndex',
    icon: 'fa-light fa-photo-film',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Zones Page
  zones: {
    permission: 'media.zones.manage',
    activated: true,
    path: '/media/zones',
    name: 'app.media.zones',
    crud: import('@imagina/qmedia/_crud/zones'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'media.cms.sidebar.adminZones',
    icon: 'fa-light fa-sliders-up',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
}
