<template>
  <div class="article-page">
    <article class="article">
      <header class="article-header">
        <div class="container">
          <NuxtLink to="/blog" class="back-link">← 返回博客</NuxtLink>
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="article-category">{{ article.category }}</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-tags">
            <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </header>

      <div class="article-cover">
        <img :src="article.cover" :alt="article.title" />
      </div>

      <div class="article-content">
        <div class="container">
          <div class="content-wrapper">
            {{ article.content }}
          </div>
        </div>
      </div>

      <footer class="article-footer">
        <div class="container">
          <div class="share-section">
            <p class="share-text">觉得有帮助？分享给更多人</p>
            <div class="share-buttons">
              <button class="share-btn" @click="shareToWechat">微信</button>
            </div>
          </div>
        </div>
      </footer>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()
const articleId = route.params.id

const article = {
  id: articleId,
  title: '从零构建现代 Nuxt.js 应用',
  date: '2024-03-15',
  category: '前端开发',
  tags: ['Nuxt', 'Vue', '教程'],
  cover: 'https://picsum.photos/seed/blog1/1200/600',
  content: `这是一篇关于如何从零开始构建现代 Nuxt.js 应用的技术文章。

Nuxt.js 是一个基于 Vue.js 的全栈框架，它提供了服务端渲染、静态站点生成等功能，让开发者能够快速构建高性能的 Web 应用。

## 为什么选择 Nuxt.js？

1. **更好的 SEO**：服务端渲染让搜索引擎能够更好地抓取页面内容
2. **更快的首屏加载**：服务器端生成 HTML，减少客户端渲染压力
3. **优雅的开发体验**：基于 Vue 3，提供更好的类型支持和开发体验
4. **强大的生态**：丰富的模块和插件生态，帮你快速实现各种功能

## 开始使用

首先，我们需要初始化一个新的 Nuxt.js 项目...`
}

const shareToWechat = () => {
  alert('请截图分享到微信群或朋友圈')
}

useHead({
  title: `${article.title} - 博客`
})
</script>

<style scoped>
.article-page {
  min-height: 100vh;
}

.article-header {
  padding: 6rem 0 2rem;
  text-align: center;
}

.back-link {
  display: inline-block;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--primary);
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  color: var(--text-muted);
}

.article-category {
  color: var(--primary);
}

.article-title {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.article-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.article-cover {
  max-width: 1000px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.article-cover img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

.article-content {
  padding: 0 0 4rem;
}

.content-wrapper {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.9;
  color: var(--text-secondary);
}

.content-wrapper :deep(h2) {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 2.5rem 0 1rem;
}

.content-wrapper :deep(p) {
  margin-bottom: 1.5rem;
}

.article-footer {
  padding: 3rem 0;
  background: var(--bg-card);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.share-section {
  text-align: center;
}

.share-text {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.share-btn {
  padding: 0.75rem 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }
}
</style>
