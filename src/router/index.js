import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'

import NotFound from "../views/error/NotFound";

Vue.use(Router);

export default new Router({
  // 去掉路径中的#
  mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {path: '/user/profile/:id', name:'UserProfile', component: UserProfile, props: true},
        {path: '/user/list', component: UserList},
      ]
    },
    {
      path: '/goHome/:username',
      redirect: '/main/:username'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
