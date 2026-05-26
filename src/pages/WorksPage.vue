<template>
  <div class="works-page">
    <section class="page-header">
      <div class="container">
        <h1 class="section-title gradient-text">作品集</h1>
        <p class="section-subtitle">这里展示了我独立开发的网站和项目，每一个都倾注了大量心血</p>
      </div>
    </section>

    <section class="works-section">
      <div class="container">
        <div class="works-grid">
          <WorkCard
            v-for="work in works"
            :key="work.id"
            :work="work"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import WorkCard from '../components/WorkCard.vue'

const works = [
  {
    id: 1,
    title: 'AI 项目生成器',
    description: '基于 Spring Boot 3 + LangChain4j + LangGraph4j 的 AI 应用生成平台。核心为 AI 工作流，采用多级缓存、分布式限流、异步处理、护轨重试等多种优化策略，保证系统的高性能与稳定性',
    tags: ['Spring Boot 3', 'LangChain4j', 'LangGraph4j', 'Redis', 'Redisson'],
    image: 'https://picsum.photos/seed/project1/600/400',
    link: '#'
  },
  {
    id: 2,
    title: '旅游回忆册',
    description: '基于 Spring Boot + Redis + COS + AI + WebSocket 的企业级图片素材平台，支持公共、私有与团队协同图库',
    tags: ['Spring Boot', 'Redis', 'WebSocket', 'AI', 'COS'],
    image: 'https://picsum.photos/seed/project2/600/400',
    link: '#'
  },
  {
    id: 3,
    title: 'AI 智能客服',
    description: '基于 Spring Boot 3 + Spring AI + RAG + Tool Calling 的企业级 AI 客服智能体，支持多轮对话、工具调用与知识库检索',
    tags: ['Spring Boot 3', 'Spring AI', 'RAG', 'Tool Calling'],
    image: 'https://picsum.photos/seed/project3/600/400',
    link: '#'
  }
]
</script>

<style scoped>
.works-page {
  min-height: 100vh;
}

.page-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.works-section {
  padding: 2rem 0 6rem;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

@media (max-width: 640px) {
  .works-grid {
    grid-template-columns: 1fr;
  }
}
</style>