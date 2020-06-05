<template>
  <div class="px-6">
    <div>
      <h1 class="text-3xl font-medium">
        Welcome
      </h1>
      <div class="mt-6">
        <p>
          This is my new amazing webpage!
        </p>
      </div>
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
