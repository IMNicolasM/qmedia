export default {
  //Home Page
  selectMediaCKEditor: {
    permission: 'media.medias.index',
    activated: true,
    path: '/media/select',
    name: 'app.media.select',
    page: () => import('@imagina/qmedia/_pages/admin/selectCkEditor'),
    layout: () => import('@imagina/qsite/_layouts/blank.vue'),
    title: 'qmedia.sidebar.adminIndex',
    icon: 'fas fa-camera-retro',
    authenticated: true,
  },
}
