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

<script setup>
const works = [
  {
    id: 1,
    title: '任务管理应用',
    description: '一款简洁高效的个人任务管理工具，支持看板和时间追踪，帮助你高效管理日常任务',
    tags: ['Vue 3', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/project1/600/400',
    link: '#'
  },
  {
    id: 2,
    title: '博客平台',
    description: '基于 Markdown 的技术博客系统，支持代码高亮和 SEO 优化，为技术创作者打造',
    tags: ['Nuxt', 'Tailwind', 'Supabase'],
    image: 'https://picsum.photos/seed/project2/600/400',
    link: '#'
  },
  {
    id: 3,
    title: '在线笔记',
    description: '实时协作的在线笔记应用，支持 Markdown 和知识图谱，让知识管理更高效',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: 'https://picsum.photos/seed/project3/600/400',
    link: '#'
  },
  {
    id: 4,
    title: '天气预报应用',
    description: '优雅的天气预报 PWA，支持全球城市搜索和 7 天预报，实时更新天气数据',
    tags: ['Vue 3', 'OpenWeather API', 'PWA'],
    image: 'https://picsum.photos/seed/project4/600/400',
    link: '#'
  },
  {
    id: 5,
    title: '个人理财助手',
    description: '简洁的个人收支记录应用，支持图表统计和预算设置，帮你掌控财务状况',
    tags: ['React', 'Chart.js', 'LocalStorage'],
    image: 'https://picsum.photos/seed/project5/600/400',
    link: '#'
  },
  {
    id: 6,
    title: '在线白板',
    description: '基于 Canvas 的实时协作白板，支持多种图形工具，适合远程团队头脑风暴',
    tags: ['Canvas', 'Socket.io', 'Express'],
    image: 'https://picsum.photos/seed/project6/600/400',
    link: '#'
  }
]

useHead({
  title: '作品集 - 个人网站'
})
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
