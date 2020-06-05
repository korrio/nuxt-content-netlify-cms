/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    // We prefixed with `example/` here since we run `nuxt example/` and working dir is '../' for PurgeCSS
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "content/**/*.md",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
};
