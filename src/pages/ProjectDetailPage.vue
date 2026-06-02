<template>
  <div class="project-page">
    <template v-if="work">
      <section class="project-hero">
        <div class="container project-hero-grid">
          <div class="project-intro">
            <RouterLink to="/works" class="back-link">← 返回作品集</RouterLink>
            <p class="project-kicker">Project Case</p>
            <h1 class="project-title gradient-text">{{ work.title }}</h1>
            <p class="project-description">{{ work.description }}</p>
            <div class="project-tags">
              <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-actions">
              <a :href="work.github" target="_blank" rel="noopener" class="btn-primary">查看 GitHub</a>
              <RouterLink to="/resume" class="btn-secondary">查看简历</RouterLink>
            </div>
          </div>
          <div class="project-cover">
            <img :src="work.image" :alt="work.title" />
          </div>
        </div>
      </section>

      <section class="project-section">
        <div class="container detail-grid">
          <article class="detail-main">
            <section class="content-block">
              <h2>项目背景</h2>
              <p>{{ work.background }}</p>
            </section>

            <section class="content-block">
              <h2>我的职责</h2>
              <ul class="detail-list">
                <li v-for="item in work.responsibilities" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section class="content-block">
              <h2>核心功能</h2>
              <div class="feature-grid">
                <div v-for="feature in work.features" :key="feature" class="feature-item">
                  {{ feature }}
                </div>
              </div>
            </section>

            <section class="content-block">
              <h2>技术架构</h2>
              <ul class="detail-list">
                <li v-for="item in work.architecture" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section class="content-block">
              <h2>难点与解决方案</h2>
              <div class="challenge-list">
                <div v-for="challenge in work.challenges" :key="challenge.title" class="challenge-item">
                  <h3>{{ challenge.title }}</h3>
                  <p>{{ challenge.solution }}</p>
                </div>
              </div>
            </section>

            <section class="content-block">
              <h2>项目成果</h2>
              <ul class="detail-list">
                <li v-for="item in work.outcomes" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section class="content-block">
              <h2>后续优化</h2>
              <ul class="detail-list">
                <li v-for="item in work.nextSteps" :key="item">{{ item }}</li>
              </ul>
            </section>
          </article>

          <aside class="detail-aside">
            <div class="summary-panel">
              <span class="summary-label">项目角色</span>
              <strong>{{ work.role }}</strong>
            </div>
            <div class="summary-panel">
              <span class="summary-label">核心能力</span>
              <ul>
                <li v-for="item in work.highlights" :key="item">{{ item }}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </template>

    <section v-else class="not-found">
      <div class="container">
        <h1 class="section-title gradient-text">项目不存在</h1>
        <p class="section-subtitle">这个项目可能已经移动或下线。</p>
        <RouterLink to="/works" class="btn-primary">返回作品集</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getWorkBySlug } from '../data/works'

const route = useRoute()
const work = computed(() => getWorkBySlug(route.params.slug as string))
</script>

<style scoped>
.project-page {
  min-height: 100vh;
}

.project-hero {
  padding: 4rem 0;
}

.project-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 520px);
  gap: 3rem;
  align-items: center;
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

.project-kicker {
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.project-description {
  color: var(--text-secondary);
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-cover {
  background: var(--bg-card);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
}

.project-cover img {
  width: 100%;
  display: block;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.project-section {
  padding: 2rem 0 6rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 3rem;
  align-items: start;
}

.detail-main {
  display: grid;
  gap: 2rem;
}

.content-block {
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.content-block:last-child {
  border-bottom: 0;
}

.content-block h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.content-block p,
.detail-list li,
.challenge-item p,
.summary-panel li {
  color: var(--text-secondary);
  line-height: 1.75;
}

.detail-list {
  display: grid;
  gap: 0.75rem;
  padding: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding-left: 1.1rem;
}

.detail-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.feature-item,
.challenge-item,
.summary-panel {
  background: var(--bg-card);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 12px;
}

.feature-item {
  padding: 1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.challenge-list {
  display: grid;
  gap: 1rem;
}

.challenge-item {
  padding: 1.25rem;
}

.challenge-item h3 {
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.detail-aside {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 1rem;
}

.summary-panel {
  padding: 1.25rem;
}

.summary-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.8125rem;
  margin-bottom: 0.75rem;
}

.summary-panel strong {
  display: block;
  line-height: 1.5;
}

.summary-panel ul {
  display: grid;
  gap: 0.625rem;
  padding: 0;
  list-style: none;
}

.not-found {
  min-height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  text-align: center;
}

@media (max-width: 968px) {
  .project-hero-grid,
  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-aside {
    position: static;
  }

  .project-title {
    font-size: 2.6rem;
  }
}

@media (max-width: 640px) {
  .project-hero {
    padding: 2.5rem 0;
  }

  .project-title {
    font-size: 2.2rem;
  }

  .project-actions {
    flex-direction: column;
  }
}
</style>
