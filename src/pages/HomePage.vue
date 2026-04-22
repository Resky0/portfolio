<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text animate-fade-in-up">
          <p class="hero-greeting">你好，我是</p>
          <h1 class="hero-title">
            <span class="gradient-text">Resky</span>
          </h1>
          <p class="hero-description">
            AI 全栈开发工程师，专注于 Java 后端与智能应用开发。热衷于用 Spring AI
            构建智能化解决方案，让技术创造实际价值。
          </p>
          <div class="hero-actions">
            <RouterLink to="/works" class="btn-primary">查看作品</RouterLink>
            <RouterLink to="/contact" class="btn-secondary">联系我</RouterLink>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number gradient-text">5+</span>
              <span class="stat-label">项目作品</span>
            </div>
            <div class="stat">
              <span class="stat-number gradient-text">RAG</span>
              <span class="stat-label">知识库构建</span>
            </div>
            <div class="stat">
              <span class="stat-number gradient-text">AI</span>
              <span class="stat-label">工具开发</span>
            </div>
          </div>
        </div>
        <div class="hero-visual animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="code-window">
            <div class="code-window-header">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="code-window-title">developer.ts</span>
            </div>
            <div class="code-window-content">
              <pre><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">'Resky'</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">'Java'</span>, <span class="code-string">'SpringBoot'</span>,
    <span class="code-string">'MySQL'</span>, <span class="code-string">'Redis'</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string">'AI 全栈开发'</span>,
  <span class="code-property">status</span>: <span class="code-string">'available'</span>
}

<span class="code-comment">// 正在构建智能应用...</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-works">
      <div class="container">
        <h2 class="section-title">精选作品</h2>
        <p class="section-subtitle">这些是我独立开发的网站和项目，每一个都倾注了大量心血</p>
        <div class="works-grid">
          <WorkCard
            v-for="work in featuredWorks"
            :key="work.id"
            :work="work"
          />
        </div>
        <div class="view-more">
          <RouterLink to="/works" class="btn-secondary">查看全部作品</RouterLink>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">有想法？让我们一起实现</h2>
          <p class="cta-description">无论是新项目合作、技术咨询还是只是想聊聊，都可以联系我</p>
          <RouterLink to="/contact" class="btn-primary">开始对话</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import WorkCard from '../components/WorkCard.vue'

const featuredWorks = [
  {
    id: 1,
    title: '任务管理应用',
    description: '一款简洁高效的个人任务管理工具，支持看板和时间追踪',
    tags: ['Vue 3', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/project1/600/400',
    link: '#'
  },
  {
    id: 2,
    title: '博客平台',
    description: '基于 Markdown 的技术博客系统，支持代码高亮和 SEO 优化',
    tags: ['Nuxt', 'Tailwind', 'Supabase'],
    image: 'https://picsum.photos/seed/project2/600/400',
    link: '#'
  },
  {
    id: 3,
    title: '在线笔记',
    description: '实时协作的在线笔记应用，支持 Markdown 和知识图谱',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: 'https://picsum.photos/seed/project3/600/400',
    link: '#'
  }
]
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.hero-orb-1 {
  width: 500px;
  height: 500px;
  background: var(--primary);
  top: -100px;
  right: -100px;
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  background: var(--accent);
  bottom: -100px;
  left: -100px;
}

.hero-orb-3 {
  width: 300px;
  height: 300px;
  background: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  max-width: 600px;
}

.hero-greeting {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-window {
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.code-window-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; }
.dot-yellow { background: #eab308; }
.dot-green { background: #22c55e; }

.code-window-title {
  margin-left: 8px;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.code-window-content {
  padding: 1.5rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

.code-keyword { color: #c678dd; }
.code-variable { color: #e06c75; }
.code-property { color: #e5c07b; }
.code-string { color: #98c379; }
.code-comment { color: #5c6370; font-style: italic; }

.featured-works {
  padding: 6rem 0;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.view-more {
  text-align: center;
  margin-top: 3rem;
}

.cta {
  padding: 6rem 0;
}

.cta-content {
  text-align: center;
  padding: 4rem;
  background: var(--bg-card);
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .works-grid {
    grid-template-columns: 1fr;
  }
}
</style>