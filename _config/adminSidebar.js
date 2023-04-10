const pages = config('pages') // Get Pages from config

//Media
export default [
  {
    title: 'media.cms.sidebar.adminGroup',
    icon: 'fa-light fa-photo-film',
    children: [
      pages.qmedia.index,
      pages.qmedia.zones
    ]
  }
]
