import Vue from 'vue';
import Router from 'vue-router';

import Default from '@/layouts/Default.vue';
import NotFound from '@/layouts/404.vue';

import Home from '@/views/Home.vue';
import AddUser from '@/views/AddUser.vue';
import EditUser from '@/views/EditUser.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '/home',
          alias: '',
          name: 'home',
          component: Home,
        },
        {
          path: '/user/new',
          alias: '',
          name: 'user-new',
          component: AddUser,
        },
        {
          path: '/user/:id/edit',
          alias: '',
          name: 'user-edit',
          component: EditUser,
        }
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
