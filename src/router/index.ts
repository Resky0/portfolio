import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { getWorkBySlug } from '../data/works'

const SITE_URL = 'https://resky.top'
const DEFAULT_TITLE = 'Resky - AI 应用开发工程师'
const DEFAULT_DESCRIPTION = 'Resky 的个人作品集，展示 AI 应用开发、Java 后端、Spring Boot、LangChain4j、Spring AI、RAG 与智能体项目实践。'
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`
const DEFAULT_KEYWORDS = [
  'Resky',
  '曹敬昊',
  'AI 应用开发工程师',
  'Java 后端',
  'Spring Boot',
  'Spring AI',
  'LangChain4j',
  'RAG',
  '智能体',
  '个人作品集'
]

interface SeoMeta {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
}

type JsonLdNode = Record<string, unknown>

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

const applySeo = (
  title: string,
  description: string,
  url: string,
  keywords: string[] = DEFAULT_KEYWORDS,
  image: string = DEFAULT_IMAGE
) => {
  document.title = title
  upsertMeta('meta[name="description"]', { name: 'description' }, description)
  upsertMeta('meta[name="keywords"]', { name: 'keywords' }, keywords.join(', '))
  upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index,follow')
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, url)
  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website')
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Resky Portfolio')
  upsertMeta('meta[property="og:image"]', { property: 'og:image' }, image)
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image)
  setCanonical(url)
}

const toAbsoluteUrl = (url: string) => {
  return url.startsWith('http') ? url : `${SITE_URL}${url}`
}

const applyJsonLd = (nodes: JsonLdNode[]) => {
  let script = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"][data-managed="route"]')

  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-managed', 'route')
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes
  })
}

const buildBreadcrumbs = (routeName: string | symbol | null | undefined, title: string, url: string): JsonLdNode => {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: SITE_URL
    }
  ]

  if (routeName === 'WorkDetail') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: '项目作品',
      item: `${SITE_URL}/works`
    })
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: title.replace(' - 项目详情', ''),
      item: url
    })
  } else if (routeName !== 'Home') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: title.replace(' - Resky', ''),
      item: url
    })
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items
  }
}

const buildJsonLd = (title: string, description: string, url: string, routeName?: string | symbol | null, slug?: string): JsonLdNode[] => {
  const person: JsonLdNode = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: '曹敬昊',
    alternateName: 'Resky',
    jobTitle: 'AI 应用开发工程师',
    url: SITE_URL,
    email: 'mailto:Resky0818@163.com',
    sameAs: [
      'https://github.com/Resky0',
      'https://blog.csdn.net/m0_54000398'
    ],
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Spring AI',
      'LangChain4j',
      'RAG',
      'AI Agent',
      'Redis',
      'MySQL'
    ]
  }

  const website: JsonLdNode = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Resky Portfolio',
    url: SITE_URL,
    inLanguage: 'zh-CN',
    author: { '@id': `${SITE_URL}/#person` }
  }

  const page: JsonLdNode = {
    '@type': routeName === 'Home' || routeName === 'About' ? 'ProfilePage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'zh-CN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` }
  }

  const graph = [person, website, page, buildBreadcrumbs(routeName, title, url)]

  if (routeName === 'WorkDetail' && slug) {
    const work = getWorkBySlug(slug)

    if (work) {
      graph.push({
        '@type': 'SoftwareSourceCode',
        '@id': `${url}#software`,
        name: work.title,
        description: work.description,
        url,
        image: toAbsoluteUrl(work.image),
        codeRepository: work.github,
        programmingLanguage: work.tags,
        applicationCategory: 'AI Application',
        author: { '@id': `${SITE_URL}/#person` },
        keywords: work.tags.join(', ')
      })
    }
  }

  return graph
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
      description: 'Resky 的 AI 应用与 Java 后端项目作品集，包含 AI 项目生成器、旅游回忆册、PhotoMentor 等项目详情。'
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
      title: '关于 Resky - AI 应用开发工程师',
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
      title: 'AI应用开发工程师-曹敬昊简历',
      description: '在线查看和下载 Resky 的 AI 应用开发工程师简历，了解 Java 后端、Spring Boot、Spring AI 与 RAG 项目经验。'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: {
      title: '技术博客 - Resky',
      description: 'Resky 的技术博客入口，分享 Java 后端、AI 应用开发、Spring AI、LangChain4j 与项目实践。'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFoundPage.vue'),
    meta: {
      title: '页面不存在 - Resky',
      description: '你访问的页面不存在，可以返回首页、作品集或简历页面继续了解 Resky。'
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
  let keywords = (to.meta as SeoMeta).keywords || DEFAULT_KEYWORDS
  let image = toAbsoluteUrl((to.meta as SeoMeta).image || DEFAULT_IMAGE)

  if (to.name === 'WorkDetail') {
    const work = getWorkBySlug(to.params.slug as string)
    title = work ? `${work.title} - 项目详情` : '项目不存在 - Resky'
    description = work
      ? `${work.title}项目详情：${work.description} 技术栈包括 ${work.tags.join('、')}。`
      : '项目详情不存在，请返回作品集查看 Resky 的 AI 应用与 Java 后端项目。'
    keywords = work ? [...DEFAULT_KEYWORDS, work.title, ...work.tags] : DEFAULT_KEYWORDS
    image = work ? toAbsoluteUrl(work.image) : DEFAULT_IMAGE
  }

  applySeo(title, description, `${SITE_URL}${to.path}`, keywords, image)
  applyJsonLd(buildJsonLd(title, description, `${SITE_URL}${to.path}`, to.name, to.params.slug as string | undefined))
})

export default router
