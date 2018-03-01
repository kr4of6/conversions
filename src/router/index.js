import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Liquid from '@/components/Liquid'
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
    }
  ]
})
