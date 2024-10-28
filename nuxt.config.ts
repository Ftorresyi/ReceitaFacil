// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    'vuetify/styles', // Vuetify styles
  ],

  build: {
    transpile: ['vuetify'], // Transpile Vuetify
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'], // Ensure Vuetify is bundled for SSR
    },
  },

  compatibilityDate: '2024-10-28',
})