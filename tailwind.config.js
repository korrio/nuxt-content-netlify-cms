/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: ".dark-mode",
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-focus",
      "dark-hover",
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
    borderColor: ["responsive", "hover", "focus", "dark", "dark-focus"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "content/**/*.md",
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
    options: {
      whitelist: ["dark-mode"],
    },
  },
};
