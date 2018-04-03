import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Bookshelf from '@/pages/Bookshelf'
import User from '@/pages/User'
import Read from '@/pages/Read'
import Notes from '@/pages/Notes'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/bookshelf',
      name: 'Bookshelf',
      component: Bookshelf
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/read',
      name: 'Read',
      component: Read
    },{
      path: '/notes',
      name: 'Notes',
      component: Notes
    },{
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },{
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },{
      path: '/404',
      name: '404',
      component: 404
    }
  ]
})
