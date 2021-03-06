export default {
  ssr: true,
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate: (chunk) => {
      if (chunk) {
        return `${chunk} - Content & NetlifyCMS Demo`;
      }

      return "Content & NetlifyCMS Demo";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#667EEA" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],
  /*
   ** Nuxt.js Content Module Settings
   */
  content: {
    markdown: {
      plugins: ["remark-unwrap-images"],
    },
    // Options
  },
  /*
   ** Build configuration
   */

  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
};
