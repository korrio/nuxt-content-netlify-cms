<template>
  <div class="hero py-10">
    <div class="px-6 max-w-3xl mx-auto">
      <h1 class="text-3xl">{{ block.header }}</h1>
      <p>{{ block.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
