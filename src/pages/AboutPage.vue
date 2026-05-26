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
              <img src="/src/assets/photo.png" alt="头像" />
              <div class="image-decoration"></div>
            </div>
          </div>
          <div class="about-content">
            <h2 class="about-title">你好，很高兴认识你</h2>
            <p class="about-text">
              我是一名 AI 全栈开发工程师，27届硕士在读，研究方向为高分子与深度学习的交叉学科。
              对 Java 核心技术（集合、多线程、JVM）有深入理解，熟练掌握 Spring 全家桶。
            </p>
            <p class="about-text">
              热衷于 AI 应用构建，熟悉 LangChain4j、Spring AI 等框架，善于利用 RAG 知识库和
              Tool Calling 实现智能化解决方案。如果你有有趣的项目想法或合作机会，欢迎联系我！
            </p>
            <div class="about-details">
              <div class="detail-item">
                <span class="detail-label">状态</span>
                <span class="detail-value">
                  27届应届硕士
                  <span class="about-job-badge">求职中</span>
                </span>
              </div>
              <div class="detail-item">
                <span class="detail-label">专长</span>
                <span class="detail-value">Java / LangChain4j / Spring AI / RAG / MySQL / Redis</span>
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
    items: ['集合', '多线程',  'JVM 内存模型', '垃圾回收', '类加载机制']
  },
  {
    name: 'Spring 全家桶',
    items: ['Spring', 'SpringMVC', 'SpringBoot', 'MyBatisPlus', 'IOC/DI', 'AOP', 'Bean 生命周期']
  },
  {
    name: '数据库与缓存',
    items: ['MySQL', 'Redis', '索引优化', '事务', '锁机制', '数据库调优', '缓存雪崩/穿透/击穿']
  },
  {
    name: 'AI 与大模型',
    items: ['LangChain4j', 'Spring AI', 'RAG 知识库', 'Tool Calling', '百炼平台', 'AI 工作流']
  },
  {
    name: 'AI 开发环境',
    items: ['Cursor', 'Trae', 'Codex', 'Harness Engineering']
  }
]

const experiences = [
  {
    period: '2026.01 - 2026.04',
    title: '某互联网公司 · 全栈开发实习生',
    description: '参与开源项目协作开发，独立构建 AI 场景助理 MVP（企微智能机器人 × 工作流 × Webhook），将全流程响应时间从 10 秒压缩至 3 秒以内。参与 WorkBuddy 平台 AI 写作 Skill 系统设计与后端集成开发。'
  },
  {
    period: '2024.09 - 2027.06',
    title: '鲁东大学 · 硕士',
    description: '材料科学与工程（交叉学科），高分子与深度学习交叉方向，以第一作者身份发表一篇 SCI 一区 TOP 学术论文，涉及智能材料与传感器系统'
  },
  {
    period: '2019.09 - 2023.06',
    title: '齐鲁工业大学 · 本科',
    description: '计算机科学与技术专业，主修数据结构、计算机组成原理、操作系统、计算机网络，专业排名前 15%，连续三年获得学业奖学金'
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.about-job-badge {
  display: inline-block;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #ef4444, #f97316);
  border-radius: 999px;
  animation: pulse-about-badge 2s ease-in-out infinite;
}

@keyframes pulse-about-badge {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
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