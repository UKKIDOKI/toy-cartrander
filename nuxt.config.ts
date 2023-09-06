// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    '@nuxtjs/supabase'
  ],
  supabase: {
    // Options
    redirect:false,
    // redirectOptions:
    //  {
      // login: '/login',
      // callback: '/confirm',
      // exclude: [],
    // }
  }
})
