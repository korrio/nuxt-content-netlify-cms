<template>
  <div>
    <h1 class="text-4xl">
      Blog
    </h1>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="'/blog/' + post.slug">
          <h2 class="text-3xl">
            {{ post.title }}
          </h2>
          <p>{{ post.description }}</p>
        </nuxt-link>
      </li>
    </ul>
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
