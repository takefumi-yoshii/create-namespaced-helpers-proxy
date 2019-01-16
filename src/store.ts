import Vue from "vue";
import Vuex from "vuex";
import Test from "./store/test"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test: Test
  }
});
