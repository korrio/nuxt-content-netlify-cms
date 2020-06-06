<template>
  <div class="max-w-5xl mx-auto">
    <div class="px-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-medium">
        {{ post.title }}
      </h1>
      <span class="text-sm text-gray-500">{{ postDate }}</span>
    </div>

    <div class="my-4">
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
  head() {
    return {
      title: this.post.title,
    };
  },
};
</script>

<style scoped>
.nuxt-content h1 {
  @apply text-2xl leading-tight;
}
.nuxt-content h2 {
  @apply text-xl mt-2;
}
.nuxt-content h3 {
  @apply mt-2;
}
.nuxt-content ul {
  @apply list-disc;
}

.nuxt-content ul li {
  @apply mt-1 ml-8;
}
.nuxt-content ol li {
  @apply list-decimal;
}
.nuxt-content ol li {
  @apply mt-1 ml-8;
}
.nuxt-content img {
  @apply py-3;
}

@media screen and (min-width: 640px) {
  .nuxt-content img {
    @apply py-6;
  }
}
.nuxt-content > :not(img) {
  @apply max-w-3xl mx-auto px-6;
}
</style>
