import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { getWorkBySlug } from '../data/works'

const SITE_URL = 'https://resky.top'
const DEFAULT_TITLE = ' Resky - AI 应用开发工程师'
const DEFAULT_DESCRIPTION = 'Resky 的个人作品集，展示 AI 应用开发、Java 后端、Spring Boot、LangChain4j、Spring AI、RAG 与智能体项目实践。'

interface SeoMeta {
  title?: string
  description?: string
}

const upsertMeta = (selector: string, createAttrs: Record<string, string>, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(createAttrs).forEach(([key, value]) => element?.setAttribute(key, value))
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const setCanonical = (url: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

const applySeo = (title: string, description: string, url: string) => {
  document.title = title
  upsertMeta('meta[name="description"]', { name: 'description' }, description)
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, url)
  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website')
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
  setCanonical(url)
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION
    }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../pages/WorksPage.vue'),
    meta: {
      title: '项目作品 - Resky',
      description: 'Resky的 AI 应用与 Java 后端项目作品集，包含 AI 项目生成器、旅游回忆册、PhotoMentor 等项目详情。'
    }
  },
  {
    path: '/works/:slug',
    name: 'WorkDetail',
    component: () => import('../pages/ProjectDetailPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
    meta: {
      title: '关于Resky - AI 应用开发工程师',
      description: '了解 Resky 的技术背景、Java 后端能力、AI 应用开发经验、研究经历与求职方向。'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: {
      title: '联系 Resky',
      description: '通过邮箱、GitHub 或站内表单联系 Resky，交流 AI 应用开发、Java 后端与项目合作机会。'
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../pages/ResumePage.vue'),
    meta: {
      title: 'AI应用开发工程师- Resky 简历',
      description: '在线查看和下载 Resky 的 AI 应用开发工程师简历，了解 Java 后端、Spring Boot、Spring AI 与 RAG 项目经验。'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: {
      title: '技术博客 -  Resky',
      description: 'Resky 的技术博客入口，分享 Java 后端、AI 应用开发、Spring AI、LangChain4j 与项目实践。'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  let title = (to.meta as SeoMeta).title || DEFAULT_TITLE
  let description = (to.meta as SeoMeta).description || DEFAULT_DESCRIPTION

  if (to.name === 'WorkDetail') {
    const work = getWorkBySlug(to.params.slug as string)
    title = work ? `${work.title} - 项目详情` : '项目不存在 - Resky'
    description = work
      ? `${work.title}项目详情：${work.description} 技术栈包括 ${work.tags.join('、')}。`
      : '项目详情不存在，请返回作品集查看 Resky 的 AI 应用与 Java 后端项目。'
  }

  applySeo(title, description, `${SITE_URL}${to.path}`)
})

export default router
