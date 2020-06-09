import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Eat from '../views/Eat.vue';
import Login from '../views/Login.vue';
import Course from '../views/Course.vue';
import Register from '../views/Register.vue';
import store from '../store';

Vue.use(VueRouter);
const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/eat',
    component:Eat
  },
  {
    path:'/course',
    component:Course
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // { 
  //   path: '/login',
  //   component: () => import(
  //     /* webpackChunkName: "login" */ 
  //     '../views/Login.vue'
  //     )
  // },
  // { 
  //   path: '/register',
  //   component: () => import(
  //     /* webpackChunkName: "register" */ 
  //     '../views/Register.vue'
  //     )
  // },
  // { 
  //   path: '/carlist',
  //   component: () => import(
  //     /* webpackChunkName: "carlist" */ 
  //     '../views/Carlist.vue'
  //     )
  // },
  // {
  //   path: '/details',
  //   component: () => import(
  //     /* webpackChunkName: "details" */ 
  //     '../views/Details.vue'
  //     )
  // },
  // {
  //   path: '/center',
  //   component: () => import(
  //     /* webpackChunkName: "center" */ 
  //     '../views/Center.vue'
  //     )
  // },
  // { 
  //   path: '/release',
  //   component: () => import(
  //     /* webpackChunkName: "release" */ 
  //     '../views/Release.vue'
  //     )
  // },
  // { 
  //   path: '/valuation',
  //   component: () => import(
  //     /* webpackChunkName: "valuation" */ 
  //     '../views/Valuation.vue'
  //     )
  // },
  // { 
  //   path: '/cooperation',
  //   component: () => import(
  //     /* webpackChunkName: "cooperation" */ 
  //     '../views/Cooperation.vue'
  //     )
  // },
  // { 
  //   path: '/collection',
  //   component: () => import(
  //     /* webpackChunkName: "collection" */ 
  //     '../views/Collection.vue'
  //     )
  // },

  // { 
  //   path: '/about',
  //   component: () => import(
  //     /* webpackChunkName: "about" */ 
  //     '../views/About.vue'
  //     )
  // },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
