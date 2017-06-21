<template>
  <div class="payment">
    <p v-text="msg"></p>
  </div>
</template>

<script>
export default {
  name: 'payment',
  data () {
    return {
      msg: 'this is a payment page'
    };
  }
};
</script>
<style scoped>
  .payment{
    width: 100vw;
    background: #eee
  }
</style>
