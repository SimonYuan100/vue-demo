import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
var state = {
  age: 5,
  color: 'red'
};

var mutations = {
  plus (state) {
    state.age++;
  }
};
export default new Vuex.Store({
  state,
  // getters,
  mutations
  // actions,
});
