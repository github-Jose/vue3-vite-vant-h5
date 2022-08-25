const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/layout/basic/basicIndex.vue'),
    children: [
      {
        path: 'home',
        component: () => import('/@/views/home/homeIndex.vue'),
        meta: {
          title: 'home',
          keepAlive: true
        }
      },
      {
        path: 'personalCenter',
        component: () => import('/@/views/personalCenter/personalIndex.vue'),
        meta: {
          title: 'personalCenter',
          keepAlive: true
        }
      }
    ]
  }
]

export default routes
