import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component:  resolve => require(['../components/page/login'],resolve)
    },
    {
      path: '/home',
      component:  resolve => require(['../components/common/Home'],resolve),
      redirect:'/order',
      children:[
        {
          path: '/order',
          component:  resolve => require(['../components/page/order'],resolve)
        },
        {
          path: '/nav2',
          component:  resolve => require(['../components/page/nav2'],resolve)
        },
        {
          path: '/nav3',
          component:  resolve => require(['../components/page/nav3'],resolve)
        },
        {
          path: '/nav4',
          component:  resolve => require(['../components/page/nav4'],resolve)
        },
      ]
    }
  ]
})
