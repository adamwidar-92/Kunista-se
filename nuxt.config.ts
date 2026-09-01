// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/app/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'sv' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  vite: {
    server: {
      middlewareMode: false,
      hmr: false,
      allowedHosts: ['localhost', '127.0.0.1', 'shinily-benthic-bula.ngrok-free.dev', '.ngrok-free.dev']
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/om-oss',
        '/ny-teknik',
        '/begagnad-teknik',
        '/teknikuthyrning',
        '/kontakt',
        '/ny-teknik/metalfach-z562-classic',
        '/ny-teknik/metalfach-z562-fullwidth',
        '/ny-teknik/metalfach-z562-cardgrid',
        '/ny-teknik/metalfach-z562-heroimage',
        '/ny-teknik/metalfach-z562-minimal',
        '/ny-teknik/metalfach-z562-dark',
        '/ny-teknik/metalfach-z562-tiled',
        '/ny-teknik/metalfach-z562-compact',
        '/ny-teknik/metalfach-z562-rightimage',
        '/ny-teknik/metalfach-z562-alternate',
        '/ny-teknik/metalfach-zls-800',
        '/ny-teknik/metalfach-tytan-10',
        '/ny-teknik/metalfach-n267-2',
        '/ny-teknik/metalfach-z560',
        '/ny-teknik/metalfach-zi-180'
      ]
    }
  }
})
