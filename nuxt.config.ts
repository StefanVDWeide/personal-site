// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content'
  ],
  site: {
    url: 'https://weidev.nl',
    name: 'Personal Site',
    description: 'Welcome!',
    defaultLocale: 'en',
  }
})