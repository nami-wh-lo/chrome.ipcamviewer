import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./../components/App.vue"
import Multiview from "../components/Multiview.vue"

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Multiview},
  { path: "*", component: Multiview}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});