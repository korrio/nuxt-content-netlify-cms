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
  middleware({ params, redirect }) {
    if (params.slug === "index") {
      redirect("/");
    }
  },
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

  head() {
    return {
      // script: [
      //   {
      //     src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      //   },
      // ],
    };
  },
};
</script>

<style></style>
