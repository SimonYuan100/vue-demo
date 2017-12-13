<template>
  <div @click="add">
    {{count}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 0
      };
    },
    methods: {
      add () {
        this.count += 1;
        this.$emit('go', this.count);
      }
    }
  };
</script>
