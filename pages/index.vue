<template>
  <main class="">
    <DynamicBlock
      v-for="(block, index) in page.contentBlocks"
      :key="index"
      :block="block"
    ></DynamicBlock>
  </main>
</template>

<script>
import DynamicBlock from "~/components/DynamicBlock.vue";

export default {
  components: {
    DynamicBlock,
  },
  async fetch() {
    this.page = await this.$content("index").fetch();
  },
  data() {
    return {
      page: [],
    };
  },
};
</script>

<style></style>
