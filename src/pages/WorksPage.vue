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
import { works } from '../data/works'
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
