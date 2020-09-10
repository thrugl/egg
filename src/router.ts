import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FrontPage from '@@/pages/FrontPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const history = createWebHistory(process.env.BASE_URL)
const router  = createRouter({ history, routes })

export default router
