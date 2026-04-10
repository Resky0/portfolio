<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1 class="section-title gradient-text">联系我</h1>
        <p class="section-subtitle">无论是项目合作、技术咨询还是只是想聊聊，都可以联系我</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="contact-title">让我们建立联系</h2>
            <p class="contact-description">
              如果你有有趣的项目想法、想讨论技术问题、或者只是想打个招呼，
              我都很乐意收到你的消息。通常会在 24 小时内回复。
            </p>

            <div class="contact-methods">
              <a href="mailto:Resky0818@163.com" class="contact-method">
                <span class="method-icon">📧</span>
                <div class="method-content">
                  <span class="method-label">邮箱</span>
                  <span class="method-value">Resky0818@163.com</span>
                </div>
              </a>
              <a href="https://github.com/Resky0" target="_blank" rel="noopener" class="contact-method">
                <span class="method-icon">🐙</span>
                <div class="method-content">
                  <span class="method-label">GitHub</span>
                  <span class="method-value">github.com/Resky0</span>
                </div>
              </a>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name" class="form-label">姓名</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  placeholder="你的姓名"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">邮箱</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div class="form-group">
                <label for="subject" class="form-label">主题</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  placeholder="邮件主题"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message" class="form-label">内容</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  placeholder="你想说什么..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-primary submit-btn">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  const subject = encodeURIComponent(form.subject || '来自作品集网站的咨询')
  const body = encodeURIComponent(
    `姓名：${form.name}\n邮箱：${form.email}\n\n${form.message}`
  )
  window.location.href = `mailto:Resky0818@163.com?subject=${subject}&body=${body}`
}

useHead({
  title: '联系 - Resky'
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.page-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.contact-section {
  padding: 4rem 0 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
}

.contact-method:hover {
  border-color: var(--primary);
  transform: translateX(8px);
}

.method-icon {
  font-size: 1.5rem;
}

.method-content {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.method-value {
  font-weight: 600;
}

.contact-form-wrapper {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--bg-dark);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-status {
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}

.submit-status.success {
  color: #22c55e;
}

.submit-status.error {
  color: #ef4444;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
