export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  css: [],
  runtimeConfig: {
    public: {
      appRootName: 'site'
    }
  }
})