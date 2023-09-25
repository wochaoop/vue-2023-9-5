import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/Index.vue'),
    },
    {
      path: '/about',
      component: () => import('./components/About.vue'),
    },
    {
      path: '/test',
      component: () => import('./components/Test.vue'),
    },
    {
      path: '/test2',
      component: () => import('./components/Test2.vue'),
    },
    {
      path: '/test3',
      component: () => import('./components/Test3.vue'),
    },
    {
      path: '/test4',
      component: () => import('./components/Test4.vue'),
    },
    {
      path: '/test5',
      component: () => import('./components/Test5.vue'),
    },
    {
      path: '/test6',
      component: () => import('./components/Test6.vue'),
    },
    {
      path: '/test7',
      component: () => import('./components/Test7.vue'),
    },
    {
      path: '/test8',
      component: () => import('./components/Test8.vue'),
    },
    {
      path: '/socket',
      component: () => import('./components/socket.vue'),
    },
  ],
});

export default router;
