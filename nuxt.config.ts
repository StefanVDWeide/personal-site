// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/seo', '@nuxt/content', "@nuxt/fonts", "@nuxtjs/plausible"],
  site: {
    url: 'https://weidev.nl',
    name: "Stefan van der Weide's Personal Site",
    description: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
    defaultLocale: "en",
  },
  ogImage: {
    strictNuxtContentPaths: true
  },
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["js", "python", "zsh", "rust", "yaml", "dockerfile"],
    },
  },
  plausible: {
    ignoredHostnames: ['localhost'],
    apiHost: "https://stats.weidev.nl"
  }
})
