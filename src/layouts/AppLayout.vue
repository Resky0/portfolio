<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <RouterLink to="/" class="logo">
          <span class="logo-mark">R</span>
          <span class="gradient-text">Resky</span>
        </RouterLink>
        <nav class="nav">
          <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</RouterLink>
          <RouterLink to="/works" class="nav-link" :class="{ active: route.path === '/works' }">作品集</RouterLink>
          <a href="https://blog.csdn.net/m0_54000398?type=blog" class="nav-link" target="_blank" rel="noopener">博客</a>
          <RouterLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">关于</RouterLink>
          <RouterLink to="/resume" class="nav-link" :class="{ active: route.path === '/resume' }">简历</RouterLink>
          <RouterLink to="/contact" class="nav-link" :class="{ active: route.path === '/contact' }">联系</RouterLink>
        </nav>
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <RouterLink to="/" class="nav-link" @click="mobileMenuOpen = false">首页</RouterLink>
        <RouterLink to="/works" class="nav-link" @click="mobileMenuOpen = false">作品集</RouterLink>
        <a href="https://blog.csdn.net/m0_54000398?type=blog" class="nav-link" target="_blank" rel="noopener" @click="mobileMenuOpen = false">博客</a>
        <RouterLink to="/about" class="nav-link" @click="mobileMenuOpen = false">关于</RouterLink>
        <RouterLink to="/resume" class="nav-link" @click="mobileMenuOpen = false">简历</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="mobileMenuOpen = false">联系</RouterLink>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="logo-mark">R</span>
            <span>Resky</span>
          </div>
          <div class="footer-links">
            <a href="https://github.com/Resky0" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:Resky0818@163.com">邮箱</a>
            <RouterLink to="/resume">简历</RouterLink>
          </div>
          <p class="footer-copyright">© 2026 Resky. AI 应用开发作品集。</p>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="footer-beian">鲁ICP备2026026679号</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.logo,
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #fff;
  background:
    linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(139, 92, 246, 0.86));
  border: 1px solid rgba(248, 250, 252, 0.16);
  border-radius: 10px;
  font-size: 0.98rem;
  font-weight: 800;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.22);
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  position: relative;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.mobile-menu .nav-link {
  padding: 0.75rem 0;
}

.main {
  flex: 1;
  padding-top: 72px;
}

.footer {
  background: var(--bg-card);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  padding: 3rem 0;
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

.footer-brand {
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-links a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-copyright {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.footer-beian {
  display: inline-block;
  color: var(--text-muted);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.7;
}

.footer-beian:hover {
  color: var(--primary);
  opacity: 1;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

}
</style>
