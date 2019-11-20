import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2abc257b = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _02a447ef = () => interopDefault(import('../pages/set-location.vue' /* webpackChunkName: "pages/set-location" */))
const _95c66116 = () => interopDefault(import('../pages/todo.vue' /* webpackChunkName: "pages/todo" */))
const _1a8ccdb3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _2abc257b,
    name: "inspire"
  }, {
    path: "/set-location",
    component: _02a447ef,
    name: "set-location"
  }, {
    path: "/todo",
    component: _95c66116,
    name: "todo"
  }, {
    path: "/",
    component: _1a8ccdb3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
