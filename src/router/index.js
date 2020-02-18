import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { TokenService } from '@/services/storage.service';
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
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      //query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  // No permita que el usuario visite la página de inicio de sesión o se registre si está conectado
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})





export default router;
