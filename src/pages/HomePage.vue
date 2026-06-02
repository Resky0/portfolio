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
            <span class="job-badge">求职中</span>
          </h1>
          <p class="hero-status">27届应届硕士 · 求职 AI 应用开发 / Java 后端</p>
          <p class="hero-description">
            专注 Spring Boot 后端工程与 AI 应用落地，熟悉 LangChain4j、Spring AI、RAG 知识库和智能体工作流，
            能把大模型能力接入真实业务流程。
          </p>
          <div class="hero-focus">
            <span>AI 应用开发</span>
            <span>Java 后端</span>
            <span>RAG / 智能体</span>
          </div>
          <ul class="hero-proof">
            <li>独立完成 AI 工作流、图片协同平台、多模态摄影助手等项目</li>
            <li>具备缓存、限流、异步处理、对象存储等后端工程化实践</li>
            <li>材料科学与深度学习交叉背景，适合垂直领域 AI 应用落地</li>
          </ul>
          <div class="hero-actions">
            <RouterLink to="/resume" class="btn-primary">查看简历</RouterLink>
            <RouterLink to="/works" class="btn-secondary">查看作品</RouterLink>
            <RouterLink to="/contact" class="btn-secondary">联系我</RouterLink>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number gradient-text">3+</span>
              <span class="stat-label">项目作品</span>
            </div>
            <div class="stat">
              <span class="stat-number gradient-text">RAG</span>
              <span class="stat-label">知识库构建</span>
            </div>
            <div class="stat">
              <span class="stat-number gradient-text">AI</span>
              <span class="stat-label">智能体开发</span>
            </div>
          </div>
        </div>
        <div class="hero-visual animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="career-panel">
            <div class="career-panel-header">
              <span class="career-panel-kicker">Open To Work</span>
              <span class="career-panel-status">求职中</span>
            </div>
            <div class="career-panel-main">
              <h2>AI 应用开发 / Java 后端</h2>
              <p>用 Spring Boot 的工程化能力承接大模型应用，把 RAG、智能体和多模态能力落进真实业务流程。</p>
            </div>
            <div class="career-panel-grid">
              <div>
                <span>学历</span>
                <strong>27届硕士</strong>
              </div>
              <div>
                <span>项目</span>
                <strong>3+ AI 实践</strong>
              </div>
              <div>
                <span>主栈</span>
                <strong>Spring Boot</strong>
              </div>
              <div>
                <span>AI</span>
                <strong>RAG / Agent</strong>
              </div>
            </div>
            <div class="career-panel-stack">
              <span>Java</span>
              <span>Redis</span>
              <span>MySQL</span>
              <span>LangChain4j</span>
              <span>Spring AI</span>
              <span>Vue 3</span>
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
            :highlight-limit="2"
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
import { works } from '../data/works'

const featuredWorks = works.slice(0, 3)
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.04) 42%, transparent 72%);
  background-size: 44px 44px, 44px 44px, auto;
  mask-image: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.72) 55%, transparent 100%);
}

.hero-orb {
  display: none;
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

.hero-status {
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.job-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, var(--success), #14b8a6);
  border-radius: 999px;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.hero-focus {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.hero-focus span {
  padding: 0.45rem 0.8rem;
  color: var(--text-primary);
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.22);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
}

.hero-proof {
  display: grid;
  gap: 0.625rem;
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
}

.hero-proof li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.hero-proof li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  flex-direction: column;
  min-width: 128px;
  padding: 0.85rem 1rem;
  background: rgba(15, 23, 42, 0.36);
  border: 1px solid var(--border-soft);
  border-radius: 10px;
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

.career-panel {
  width: 100%;
  max-width: 520px;
  background:
    linear-gradient(180deg, rgba(30, 41, 59, 0.94), rgba(15, 23, 42, 0.94)),
    var(--bg-card);
  border-radius: 14px;
  border: 1px solid var(--border-soft);
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.career-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.career-panel-kicker {
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.career-panel-status {
  padding: 0.3rem 0.65rem;
  color: #fff;
  background: linear-gradient(135deg, var(--success), #14b8a6);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.career-panel-main {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  margin-bottom: 1.5rem;
}

.career-panel-main h2 {
  font-size: 1.8rem;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

.career-panel-main p {
  color: var(--text-secondary);
  line-height: 1.75;
}

.career-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.career-panel-grid div {
  padding: 1rem;
  background: rgba(15, 23, 42, 0.48);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 8px;
}

.career-panel-grid span {
  display: block;
  color: var(--text-muted);
  font-size: 0.75rem;
  margin-bottom: 0.35rem;
}

.career-panel-grid strong {
  font-size: 1rem;
}

.career-panel-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.career-panel-stack span {
  padding: 0.35rem 0.7rem;
  color: var(--primary);
  background: rgba(14, 165, 233, 0.1);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.featured-works {
  padding: 6rem 0;
  background: rgba(15, 23, 42, 0.34);
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
  background:
    linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(139, 92, 246, 0.1)),
    var(--bg-card-soft);
  border-radius: 14px;
  border: 1px solid var(--border-soft);
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
    justify-content: center;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-focus {
    justify-content: center;
  }

  .hero-proof {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-stats {
    gap: 0.75rem;
  }

  .stat {
    flex: 1 1 100%;
  }

  .career-panel {
    padding: 1rem;
  }

  .career-panel-grid {
    grid-template-columns: 1fr;
  }

  .works-grid {
    grid-template-columns: 1fr;
  }

  .cta-content {
    padding: 2rem 1.25rem;
  }
}
</style>
