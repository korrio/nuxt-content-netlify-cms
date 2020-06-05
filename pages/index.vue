<template>
  <div class="px-4">
    <div>
      <h1 class="text-4xl">
        Welcome
      </h1>
      <nuxt-link to="blog">
        Go check the blog posts
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        },
      ],
    };
  },
};
</script>

<style></style>
