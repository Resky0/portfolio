<template>
  <div class="resume-page">
    <section class="resume-header">
      <div class="container resume-header-inner">
        <div>
          <p class="resume-kicker">Resume</p>
          <h1 class="section-title gradient-text">Resky · AI 应用开发工程师</h1>
          <p class="section-subtitle">在线预览简历，也可以下载 PDF 保存到本地。</p>
          <div class="resume-meta">
            <span>AI 应用开发</span>
            <span>Java 后端</span>
            <span>27届硕士</span>
            <span>Spring AI / RAG</span>
          </div>
        </div>
        <div class="resume-actions">
          <a :href="resumeUrl" class="btn-primary" download="AI应用开发工程师-公开版.pdf">下载简历</a>
          <a :href="resumeUrl" class="btn-secondary" target="_blank" rel="noopener">新窗口打开</a>
        </div>
      </div>
    </section>

    <section class="resume-viewer-section">
      <div class="container">
        <div class="resume-viewer">
          <div class="resume-toolbar">
            <span>AI应用开发工程师-公开版.pdf</span>
            <div class="resume-toolbar-actions">
              <a :href="resumeUrl" download="AI应用开发工程师-公开版.pdf">下载</a>
              <a :href="resumeUrl" target="_blank" rel="noopener">新窗口</a>
            </div>
          </div>
          <object :data="resumeUrl" type="application/pdf" class="resume-frame">
            <div class="resume-fallback">
              <h2>当前浏览器无法直接预览 PDF</h2>
              <p>你仍然可以下载简历，或在新窗口中打开查看。</p>
              <div class="resume-fallback-actions">
                <a :href="resumeUrl" class="btn-primary" download="AI应用开发工程师-公开版.pdf">下载简历</a>
                <a :href="resumeUrl" class="btn-secondary" target="_blank" rel="noopener">新窗口打开</a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const resumeUrl = '/resume-cao-jinghao-ai-engineer.pdf'
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
}

.resume-header {
  padding: 4rem 0 2rem;
  background: linear-gradient(180deg, rgba(14, 165, 233, 0.08), transparent);
}

.resume-header-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: end;
}

.resume-kicker {
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0.5rem;
}

.resume-header .section-title,
.resume-header .section-subtitle {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.resume-header .section-subtitle {
  margin-bottom: 1rem;
}

.resume-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.resume-meta span {
  padding: 0.45rem 0.75rem;
  color: var(--text-primary);
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.22);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
}

.resume-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 0.25rem;
  flex-wrap: wrap;
}

.resume-viewer-section {
  padding: 2rem 0 6rem;
}

.resume-viewer {
  height: calc(100vh - 220px);
  min-height: 680px;
  background: var(--bg-card-soft);
  border: 1px solid var(--border-soft);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
}

.resume-toolbar {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
  background: linear-gradient(180deg, #182033, #101827);
  border-bottom: 1px solid var(--border-soft);
}

.resume-toolbar span {
  min-width: 0;
  overflow: hidden;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.resume-toolbar-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.resume-toolbar-actions a {
  padding: 0.4rem 0.7rem;
  color: var(--text-primary);
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(14, 165, 233, 0.22);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.resume-toolbar-actions a:hover {
  background: rgba(14, 165, 233, 0.2);
  border-color: rgba(14, 165, 233, 0.46);
}

.resume-frame {
  width: 100%;
  height: calc(100% - 56px);
  border: 0;
  display: block;
  background: #111827;
}

.resume-fallback {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.resume-fallback h2 {
  font-size: 1.5rem;
}

.resume-fallback p {
  color: var(--text-secondary);
}

.resume-fallback-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .resume-header-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .resume-kicker,
  .resume-header .section-title,
  .resume-header .section-subtitle {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .resume-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .resume-meta {
    justify-content: center;
  }

  .resume-viewer {
    height: 70vh;
    min-height: 520px;
    border-radius: 12px;
  }

  .resume-toolbar {
    padding: 0 0.75rem;
  }
}
</style>
