import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e48daa1 = () => interopDefault(import('../pages/bus.vue' /* webpackChunkName: "pages/bus" */))
const _6483392c = () => interopDefault(import('../pages/interests.vue' /* webpackChunkName: "pages/interests" */))
const _02a447ef = () => interopDefault(import('../pages/set-location.vue' /* webpackChunkName: "pages/set-location" */))
const _d3784c12 = () => interopDefault(import('../pages/stock.vue' /* webpackChunkName: "pages/stock" */))
const _d60e34c4 = () => interopDefault(import('../pages/subway.vue' /* webpackChunkName: "pages/subway" */))
const _95c66116 = () => interopDefault(import('../pages/todo.vue' /* webpackChunkName: "pages/todo" */))
const _42fd41f6 = () => interopDefault(import('../pages/mapi/todos/_id.vue' /* webpackChunkName: "pages/mapi/todos/_id" */))
const _1a8ccdb3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bus",
    component: _0e48daa1,
    name: "bus"
  }, {
    path: "/interests",
    component: _6483392c,
    name: "interests"
  }, {
    path: "/set-location",
    component: _02a447ef,
    name: "set-location"
  }, {
    path: "/stock",
    component: _d3784c12,
    name: "stock"
  }, {
    path: "/subway",
    component: _d60e34c4,
    name: "subway"
  }, {
    path: "/todo",
    component: _95c66116,
    name: "todo"
  }, {
    path: "/mapi/todos/:id?",
    component: _42fd41f6,
    name: "mapi-todos-id"
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
