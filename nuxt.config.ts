import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Define `src` como o diretório de código-fonte
  srcDir: 'src/',

  //css: ['@/assets/main.css'], //  arquivos CSS globais, se houver
  modules: [],

  /* build: {
    transpile: ['@nuxtjs/vuetify'] 
  }, */
  // Habilita importação automática de componentes
  components: true,

  compatibilityDate: '2024-10-27'
});