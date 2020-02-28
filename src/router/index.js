/*
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "./routes";
import axios from "axios";
import Frontend from "@/layout/frontend/FrontendLayout";
Vue.use(VueRouter);
Vue.use(Vuex);


// configure router
axios.defaults.headers.common = {
    'Content-Type': 'application/json'
};



const router = new VueRouter({
mode: 'history',
  //base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkActiveClass: "active"
});


router.beforeEach((to, from, next) => {


  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = ""
  const rolePage = to.matched.some(record => record.meta.role);
  const roleUser = this.$store.state.rol;
  const { role } = to.meta;

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      //query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }
console.log(roleUser);
console.log(rolePage)
  // No permita que el usuario visite la página de inicio de sesión o se registre si está conectado
  if (loggedIn && onlyWhenLoggedOut) {
  if(rolePage==roleUser){
    return next('/')
  }
      
    
  }
   

  next();
})





export default router;
*/

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { store } from '@/store/index.js';
import axios from "axios";
Vue.use(VueRouter);

// configure router
axios.defaults.headers.common = {
    'Content-Type': 'application/json'
};



const router = new VueRouter({
mode: 'history',
  //base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkActiveClass: "active"
});


router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const role = to.matched.some(record => record.meta.role)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!localStorage.getItem('access_token');

  if (!isPublic && !loggedIn) {

    this.$notify({ group: 'auth', type:'success', title: 'acceso negado' });
    return next({
      path:'/login',
      //query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  // No permita que el usuario visite la página de inicio de sesión o se registre si está conectado
  if (loggedIn && onlyWhenLoggedOut  ) {
    return next('/')
  }

  else{
    next(); 
  }
})





export default router;
