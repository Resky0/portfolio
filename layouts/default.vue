<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">⚡</span>
          <span class="gradient-text">Portfolio</span>
        </NuxtLink>
        <nav class="nav">
          <NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</NuxtLink>
          <NuxtLink to="/works" class="nav-link" :class="{ active: route.path === '/works' }">作品集</NuxtLink>
          <a href="https://blog.csdn.net/m0_54000398?type=blog" class="nav-link" target="_blank" rel="noopener">博客</a>
          <NuxtLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">关于</NuxtLink>
          <NuxtLink to="/contact" class="nav-link" :class="{ active: route.path === '/contact' }">联系</NuxtLink>
        </nav>
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <NuxtLink to="/" class="nav-link" @click="mobileMenuOpen = false">首页</NuxtLink>
        <NuxtLink to="/works" class="nav-link" @click="mobileMenuOpen = false">作品集</NuxtLink>
        <a href="https://blog.csdn.net/m0_54000398?type=blog" class="nav-link" target="_blank" rel="noopener" @click="mobileMenuOpen = false">博客</a>
        <NuxtLink to="/about" class="nav-link" @click="mobileMenuOpen = false">关于</NuxtLink>
        <NuxtLink to="/contact" class="nav-link" @click="mobileMenuOpen = false">联系</NuxtLink>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="logo-icon">⚡</span>
            <span>Portfolio</span>
          </div>
          <div class="footer-links">
            <a href="https://github.com/Resky0" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:Resky0818@163.com">邮箱</a>
          </div>
          <p class="footer-copyright">© 2026 个人作品集. 用 ❤️ 和代码构建</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
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

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-icon {
  font-size: 1.75rem;
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem 1.5rem;
  background: var(--bg-dark);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.main {
  flex: 1;
  padding-top: 72px;
}

.footer {
  background: var(--bg-card);
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer-content {
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
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
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
