export default {
  routes: [
    // 根目录
    {
      path: '/',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: (resolve) => require(['./view/Home'], resolve)
    },
    // Angular
    {
      path: '/angular',
      name: 'Angular',
      component: (resolve) => require(['./view/Angular'], resolve)
    },
    // React
    {
      path: '/react',
      name: 'React',
      component: (resolve) => require(['./view/React'], resolve)
    },
    // Vue
    {
      path: '/vue',
      name: 'Vue',
      component: (resolve) => require(['./view/Vue'], resolve)
    },
    // Python
    {
      path: '/python',
      name: 'Python',
      component: (resolve) => require(['./view/Python'], resolve)
    }
  ]
}
