<template>
  <div>
    <p>this is parent page</p>
    <el-child @go='change'></el-child>
    <div>this is first count {{c}}</div>
    <el-child @go='change'></el-child>
    <div>this is second count {{c}}</div>
  </div>
</template>
<script>
  import elChild from './children.vue';
  export default {
    name: 'parent',
    components: {elChild},
    data () {
      return {
        count: 0,
        c: 0
      };
    },
    methods: {
      change (go, index) {
        this.c = go;
        console.log(index);
      }
    }
  };
</script>
