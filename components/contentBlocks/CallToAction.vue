<template>
  <div class="call-to-action bg-gray-800 py-16">
    <div class="px-6 max-w-3xl mx-auto">
      <h1 class="text-2xl">{{ block.header }}</h1>
      <p>{{ block.description }}</p>
      <div class="mt-4">
        <button class="px-10 py-2 bg-gray-700 rounded">
          {{ block.button }}
        </button>
      </div>
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
