import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../pages/WorksPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/BlogPage.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogArticle',
    component: () => import('../pages/BlogArticlePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router