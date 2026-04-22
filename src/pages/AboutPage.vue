<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1 class="section-title gradient-text">关于我</h1>
        <p class="section-subtitle">一个热爱技术、喜欢用代码创造价值的 AI 全栈开发工程师</p>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="image-wrapper">
              <img src="https://picsum.photos/seed/avatar/400/400" alt="头像" />
              <div class="image-decoration"></div>
            </div>
          </div>
          <div class="about-content">
            <h2 class="about-title">你好，很高兴认识你</h2>
            <p class="about-text">
              我是一名 AI 全栈开发工程师，专注于 Java 后端开发与智能应用构建。
              对 Java 核心技术（集合、多线程、JVM）有深入理解，熟练掌握 Spring 全家桶。
            </p>
            <p class="about-text">
              热衷于 RAG 知识库构建和 AI 工具开发，善于利用 Spring AI 和大模型平台
              实现智能化解决方案。如果你有有趣的项目想法或合作机会，欢迎联系我！
            </p>
            <div class="about-details">
              <div class="detail-item">
                <span class="detail-label">位置</span>
                <span class="detail-value">中国</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">专长</span>
                <span class="detail-value">Java / Spring AI / RAG / MySQL / Redis</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">邮箱</span>
                <span class="detail-value">Resky0818@163.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">技术栈</h2>
        <p class="section-subtitle">这些是我在项目中常用的技术</p>
        <div class="skills-grid">
          <div v-for="skill in skillCategories" :key="skill.name" class="skill-category">
            <h3 class="skill-category-title">{{ skill.name }}</h3>
            <div class="skill-list">
              <span v-for="item in skill.items" :key="item" class="skill-item">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">经历</h2>
        <p class="section-subtitle">我的技术成长之路</p>
        <div class="timeline">
          <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-period">{{ exp.period }}</span>
              <h3 class="timeline-title">{{ exp.title }}</h3>
              <p class="timeline-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    name: 'Java 核心技术',
    items: ['集合', '多线程', 'IO', 'JVM 内存模型', '垃圾回收', '类加载机制']
  },
  {
    name: 'Spring 全家桶',
    items: ['Spring', 'SpringMVC', 'SpringBoot', 'MyBatisPlus', 'IOC/DI', 'AOP']
  },
  {
    name: '数据库与缓存',
    items: ['MySQL', 'Redis', '索引', '事务', '锁机制', '数据库调优']
  },
  {
    name: 'AI 与大模型',
    items: ['RAG 知识库', 'Spring AI', 'Tool Calling', '向量数据库', '百炼平台']
  }
]

const experiences = [
  {
    period: '2022 - 至今',
    title: '独立开发',
    description: '作为独立开发者，为个人和小型企业提供 Web 应用开发和咨询服务'
  },
  {
    period: '2019 - 2022',
    title: '全栈开发工程师',
    description: '在科技公司担任全栈开发，负责核心产品功能开发和团队协作'
  },
  {
    period: '2017 - 2019',
    title: '前端开发工程师',
    description: '从事前端开发工作，负责公司官网和内部系统的开发与维护'
  }
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

.page-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.about-section {
  padding: 4rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  display: block;
}

.image-decoration {
  position: absolute;
  inset: 0;
  border: 2px solid var(--primary);
  border-radius: 16px;
  transform: translate(12px, 12px);
  z-index: -1;
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.about-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-details {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  gap: 1rem;
}

.detail-label {
  color: var(--text-muted);
  min-width: 80px;
}

.detail-value {
  color: var(--text-primary);
}

.skills-section,
.experience-section {
  padding: 4rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.skill-category-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary);
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  padding: 0.375rem 0.75rem;
  background: rgba(14, 165, 233, 0.1);
  color: var(--text-secondary);
  border-radius: 6px;
  font-size: 0.875rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--accent));
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--bg-dark);
}

.timeline-content {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.timeline-period {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 600;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

.timeline-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-image {
    max-width: 300px;
    margin: 0 auto;
  }

  .about-details {
    align-items: center;
  }

  .detail-item {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>