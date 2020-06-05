<template>
  <div>
    <h1 class="text-2xl">{{ post.title }}</h1>
    <p>{{ post.date }}</p>

    <div class="mt-4">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.post = await this.$content('blog', this.$route.params.slug)
      .sortBy('date', 'desc')
      .fetch()
  },
  data() {
    return {
      post: {}
    }
  }
}
</script>

<style scoped>
.nuxt-content h1 {
  @apply text-xl;
}
</style>
