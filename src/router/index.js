import { createRouter, createWebHistory } from 'vue-router';

import Chat from '../components/pages/Chat.vue';
import Portfolio from '../components/pages/Portfolio.vue';

const routes = [
  {
    name: 'Chat',
    path: '/',
    component: Chat
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: Portfolio
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})