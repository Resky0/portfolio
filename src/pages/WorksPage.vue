<template>
  <div class="works-page">
    <section class="page-header">
      <div class="container">
        <h1 class="section-title gradient-text">作品集</h1>
        <p class="section-subtitle">这里展示了我独立开发的 AI 应用与后端项目，重点呈现问题拆解、工程实现和项目成果</p>
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
    description: '面向 AI 应用从需求到代码生成的工程化平台，核心围绕多阶段 AI 工作流编排与稳定性治理。',
    highlights: [
      '使用 LangChain4j 与 LangGraph4j 组织生成链路，拆分需求理解、代码生成、结果校验等阶段',
      '引入多级缓存、分布式限流、异步处理与护轨重试，提升高并发场景下的可用性',
      '沉淀 Spring Boot 3 + Redis + Redisson 的后端工程实践，可作为 AI 应用平台脚手架'
    ],
    tags: ['Spring Boot 3', 'LangChain4j', 'LangGraph4j', 'Redis', 'Redisson'],
    image: 'https://raw.githubusercontent.com/Resky0/MdPicture/img/img/image-20260527202037798.png',
    link: 'https://github.com/Resky0/AI-assisted-code-generation-platform'
  },
  {
    id: 2,
    title: '旅游回忆册',
    description: '企业级图片素材与协同图库平台，围绕图片上传、空间管理、权限控制和实时协作构建完整业务闭环。',
    highlights: [
      '支持公共、私有与团队空间，覆盖个人素材管理和多人协同图库两类场景',
      '接入 COS 对象存储与 Redis 缓存，优化图片资源管理、访问速度和系统扩展性',
      '结合 AI 与 WebSocket 能力，增强素材处理体验和团队协同反馈效率'
    ],
    tags: ['Spring Boot', 'Redis', 'WebSocket', 'AI', 'COS'],
    image: 'https://raw.githubusercontent.com/Resky0/MdPicture/img/img/image-20260528160757554.png',
    link: 'https://github.com/Resky0/picture'
  },
  {
    id: 3,
    title: 'PhotoMentor',
    description: 'AI 摄影辅助平台，面向摄影学习与作品改进场景，提供照片理解、评分反馈和拍摄建议。',
    highlights: [
      '集成通义千问多模态模型，实现照片智能评分、问题诊断与改进建议生成',
      '前后端采用 Vue 3 + Spring Boot 3 分层实现，兼顾交互体验与服务端扩展',
      '面向多端设备适配实时拍摄指导流程，让 AI 建议更贴近实际拍摄场景'
    ],
    tags: ['Spring Boot 3', 'Spring AI', 'Vue3'],
    image: 'https://raw.githubusercontent.com/Resky0/MdPicture/img/img/image-20260528194221421.png',
    link: 'https://github.com/Resky0/PictureMentor'
  },
  /*{
    id: 4,
    title: 'AI 智能客服',
    description: '基于 Spring Boot 3 + Spring AI + RAG + Tool Calling 的企业级 AI 客服智能体，支持多轮对话、工具调用与知识库检索',
    tags: ['Spring Boot 3', 'Spring AI', 'RAG', 'Tool Calling'],
    image: 'https://picsum.photos/seed/project3/600/400',
    link: '#'
  }*/
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
