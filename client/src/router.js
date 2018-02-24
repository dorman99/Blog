import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import blogs from './components/blogs.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import previewblog from './components/previewblog.vue'
import blogDetail from './components/blogdetail.vue'
import admin from './components/admin.vue'
import addBlog from './components/addblog.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/blogs',
      component: blogs,
      children: [
        { name: 'addBlog',
          path: '/blogs/add',
          component: addBlog
        },
        {
          path: '',
          name: 'blogs',
          component: previewblog
        }, {
          path: '/blog/:id',
          component: blogDetail,
          props: true
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
