import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router