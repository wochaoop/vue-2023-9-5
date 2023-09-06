import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './components/Index.vue';
import AboutPage from './components/About.vue';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
