import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login.vue'
import admin from '@/components/Admin.vue'
import about from '@/components/about/About.vue'
import home from '@/components/Home.vue'
import menu from '@/components/Menu.vue'
import register from '@/components/Register.vue'
import contact from '@/components/about/Contact'
import delivery from '@/components/about/Delivery'
import history from '@/components/about/History'
import orderguide from '@/components/about/OrderingFuide'
import phone from '@/components/about/phone'
import person from '@/components/about/person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      children:[
        {
          path: '/about',
          name: 'contact',
          component: contact,children:[
            {
              path: '/about',
              name: '/phone',
              component: phone
            },
            {
              path: '/about/contact/person',
              name: '/person',
              component: person
            }
          ]
        },
        {
          path: '/about/delivery',
          name: 'delivery',
          component: delivery,
        },
        {
          path: '/about/history',
          name: 'history',
          component: history,
        },
        {
          path: '/about/orderguide',
          name: 'orderguide',
          component: orderguide,
        },
      ]
    },
    {
      path: '/',
      name: 'homelink',
      components: {
        default:home,
        'delivery':delivery,
       'history': history,
        'orderguide':orderguide,
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path:'*',redirect:'/'
    }
  ]
,
scrollBehavior(to,from,savedPosition){
  //return { x:0, y:100 }
    // return { selector: '.btn-success'}
  if(savedPosition){
    return savedPosition
  }else{
    return { x:0, y:0 }
  }
 
 }

})
