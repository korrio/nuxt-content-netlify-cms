<template>
  <div class="px-6">
    <div class="">
      <h1 class="text-3xl font-medium">
        {{ post.title }}
      </h1>
      <span class="text-sm">{{ postDate }}</span>
    </div>

    <div class="mt-4">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.post = await this.$content("blog", this.$route.params.slug)
      .sortBy("date", "desc")
      .fetch();
  },
  data() {
    return {
      post: {},
    };
  },
  computed: {
    postDate() {
      if (!this.post.date) return "";
      const date = new Date(this.post.date);
      const formated = new Intl.DateTimeFormat().format(date);
      return formated;
    },
  },
};
</script>

<style scoped>
.nuxt-content h1 {
  @apply text-xl;
}
</style>
