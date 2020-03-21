import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import index from '@/components/index'
import shop from '@/components/shop'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index0 from '@/components/index0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: admin,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index,
          redirect: 'index/index0',
          children:[
            {
              path: 'index1',
              name: 'index1',
              component: index1,
            },
            {
              path: 'index2',
              name: 'index2',
              component: index2,
            },
            {
              path: 'index0',
              name: 'index0',
              component: index0,
            },
          ]
        },
        {
          path: '/shop',
          name: 'shop',
          component: shop,
        }
      ]
    }
  ]
})
