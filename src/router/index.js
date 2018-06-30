import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'
import homePage from '@/components/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: body,
      children:[{
        path:"/",
        component:homePage
      }]
    }
  ]
})
