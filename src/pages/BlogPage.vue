<template>
  <div class="blog-page">
    <section class="page-header">
      <div class="container">
        <h1 class="section-title gradient-text">博客</h1>
        <p class="section-subtitle">分享技术见解、开发经验和成长心得</p>
        <div class="redirect-section">
          <p class="redirect-text">我的博客已迁移到 CSDN，点击下方按钮前往阅读</p>
          <a href="https://blog.csdn.net/m0_54000398?type=blog" class="btn-primary" target="_blank" rel="noopener">
            前往 CSDN 博客 →
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.location.href = 'https://blog.csdn.net/m0_54000398?type=blog'
})
</script>

<style scoped>
.blog-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-header {
  padding: 4rem 0;
  text-align: center;
}

.redirect-section {
  margin-top: 3rem;
}

.redirect-text {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}
</style>