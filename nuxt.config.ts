export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          integrity: "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet'
        },
        { rel: 'stylesheet', href: '/assets/vendor/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/font-awesome/all.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/slim-select/slimselect.css' },
        { rel: 'stylesheet', href: '/src/input.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/vendor/swiper/swiper-bundle.min.js' },
        { src: '/assets/vendor/fslightbox/fslightbox.js' },
        { src: '/assets/vendor/mixitup/mixitup.min.js' },
        { src: '/assets/vendor/slim-select/slimselect.min.js' },
        { src: '/assets/js/main.js' },
        { src: '/assets/js/accordion.js' },
      ],
    }
  },
  css: [
    // '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
})