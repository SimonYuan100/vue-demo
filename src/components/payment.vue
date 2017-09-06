<template>
  <div class="payment">
    <p v-text="msg"></p>
    <input type="text" v-model='payF'>
    <input type="text" v-model='payA'>
    <p>支付方:{{payF}}</p>
    <p>支付金额:{{payA}}</p>
    <p>支付信息1:{{payI1}}</p>
    <p>支付信息2:{{payI2}}</p>
    <p @click='showPrice'>showPrice</p>
    <p v-if='isShow'>{{totalPrice}}</p>
    <select v-model='sel' multiple="">
      <option v-for='subPay in payFArray' :value='subPay.val'>{{subPay.name}}</option>
    </select>
    <p>你选择的支付方式是： {{sel}}</p>
  </div>
</template>

<script>
import payFArray from '../source/payFArray';
export default {
  name: 'payment',
  data () {
    return {
      msg: 'this is a payment page',
      payF: '微信',
      payA: 5000,
      money: 665,
      isShow: false,
      payFArray: payFArray,
      sel: []
    };
  },
  created () {
    // this.payI1 = this.payF + this.payA;
    console.log(this.payI2);
    this.payI2 = {payF: '支付宝', payA: 523};
  // }
  },
  computed: {
    payI1 () {
      return this.payF + this.payA;
    },
    payI2: {
      get () {
        return this.payF + this.payA;
      },
      set (newVal) {
        this.payF = newVal.payF;
        this.payA = newVal.payA;
      }
    },
    totalPrice () {
      return this.money + 1;
    }
  },
  methods: {
    showPrice () {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
  .payment{
    width: 100vw;
    background: #eee
  }
</style>
