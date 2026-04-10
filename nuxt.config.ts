export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      title: '我的个人作品集',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '独立开发者个人作品集网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    email: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    public: {
      siteName: 'Resky Portfolio'
    }
  }
})
