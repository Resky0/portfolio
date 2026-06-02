<template>
  <div class="not-found-page">
    <section class="not-found-section">
      <div class="container not-found-content">
        <p class="not-found-code">404</p>
        <h1 class="section-title gradient-text">页面不存在</h1>
        <p class="section-subtitle">这个页面可能已经移动或下线，你可以继续查看我的简历和项目作品。</p>
        <div class="not-found-actions">
          <RouterLink to="/" class="btn-primary">返回首页</RouterLink>
          <RouterLink to="/works" class="btn-secondary">查看作品</RouterLink>
          <RouterLink to="/resume" class="btn-secondary">查看简历</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 72px);
}

.not-found-section {
  min-height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  padding: 5rem 0;
}

.not-found-content {
  text-align: center;
}

.not-found-code {
  color: var(--primary);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  margin-bottom: 1rem;
}

.not-found-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .not-found-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
