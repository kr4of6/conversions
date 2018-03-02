import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Liquid from '@/components/Liquid'
import Dry from '@/components/Dry'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Liquid',
      name: 'Liquid',
      component: Liquid
    },
    {
      path: '/Dry',
      name: 'Dry',
      component: Dry
    }
  ]
})
