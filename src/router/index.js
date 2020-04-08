import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/andmin',
      name: 'andmin',
      component: () => import(/*
      webpackChunkName:"andmin" */
        '../andmin/andmin')
    },
    {
      path: '/andminindex',
      name: 'index',
      component: () => import(/*
        webpackChunkName:"index" */
        '../andmin/index')
    },
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/*
        webpackChunkName:"user" */
        '../views/user')
    },
    {
      path: '/ditor',
      name: 'ditor',
      component: () => import(/*
        webpackChunkName:"ditor" */
        '../views/ditor')
    },
    {
      path: '/psp',
      name: 'psp',
      component: () => import(/*
        webpackChunkName:"psp" */
        '../views/psp')
    },

    {
      path: '/youji',
      name: 'youji',
      component: () => import(/*
        webpackChunkName:"youji" */
        '../views/youji')
    },
    {
      path: '/gonglve',
      name: 'gonglve',
      component: () => import(/*
        webpackChunkName:"gonglve" */
        '../views/gonglve')
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/*
        webpackChunkName:"login" */
        '../components/login')
    },
    {
      path: "/wenzhang",
      name: "wenzhang",
      component: () => import(/*
        webpackChunkName:"wenzhang" */
        '../components/wenzhang')
    },
    {
      path: "/tiwen",
      name: "tiwen",
      component: () => import(/*
        webpackChunkName:"tiwen" */
        '../components/tiwen')
    },
    {
      path: "/yemian",
      name: "yemian",
      component: () => import(/*
        webpackChunkName:"yemian" */
        '../components/yemian')
    },
    {
      path: "/reg",
      name: "reg",
      component: () => import(/*
        webpackChunkName:"reg" */
        '../components/reg')
    },
    {
      path: "/huida",
      name: "huida",
      component: () => import(/*
        webpackChunkName:"huida" */
        '../components/huida')
    },
    {
      path: "/tuijian",
      name: "tuijian",
      component: () => import(/*
        webpackChunkName:"tuijian" */
        '../views/tuijian')
    },
    {
      path: "/msg",
      name: "msg",
      component: () => import(/*
        webpackChunkName:"msg" */
        '../views/msg'),
      meta: { isLogin: true }
    },
    {
      path: "/article",
      name: "article",
      component: () => import(/*
        webpackChunkName:"article" */
        '../views/article')
    },
    {
      path: "/jieban",
      name: "jieban",
      component: () => import(/*
        webpackChunkName:"jieban" */
        '../views/jieban')
    },
    {
      path: "/friend",
      name: "friend",
      component: () => import(/*
        webpackChunkName:"friend" */
        '../views/friend')
    },
    {
      path: "/faqi",
      name: "faqi",
      component: () => import(/*
        webpackChunkName:"faqi" */
        '../views/faqi')
    },
    {
      path: "/baoming",
      name: "baoming",
      component: () => import(/*
        webpackChunkName:"baoming" */
        '../views/baoming')
    },
    {
      path: "/tcomment",
      name: "tcomment",
      component: () => import(/*
        webpackChunkName:"tcomment" */
        '../views/tcomment')
    }
  ]
})
