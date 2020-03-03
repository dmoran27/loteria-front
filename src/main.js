/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";

import Vuex from "vuex";
import 'bootstrap/dist/css/bootstrap.min.css'

import App from "./App";
import router from "./router/index";
import store from './store';
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import { ServerTable } from 'vue-tables-2';
import vmodal from 'vue-js-modal';
    Vue.use(vmodal, { dynamic: true, injectModalsContainer: true })
Vue.use(ServerTable);
Vue.use(PaperDashboard);


window.bus = new Vue();
Vue.prototype.$store = store;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

