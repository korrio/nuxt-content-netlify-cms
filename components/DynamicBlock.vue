<template>
  <component :is="componentFile" :block="block"></component>
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
  computed: {
    componentFile(context) {
      return () => import(`~/components/contentBlocks/${this.block.type}.vue`);
    },
  },
};
</script>
