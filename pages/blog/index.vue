<template>
  <div class="px-6">
    <h1 class="text-3xl font-medium">
      Blog
    </h1>
    <div class="mt-6">
      <ul class="space-y-4">
        <li v-for="post in posts" :key="post.date">
          <nuxt-link :to="'/blog/' + post.slug">
            <h2 class="text-xl font-medium">
              {{ post.title }}
            </h2>
            <p>{{ post.description }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.posts = await this.$content("blog").sortBy("date", "desc").fetch();
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style></style>
