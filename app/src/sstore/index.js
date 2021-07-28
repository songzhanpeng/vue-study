/*
 * @Author: your name
 * @Date: 2021-07-28 17:14:10
 * @LastEditTime: 2021-07-28 18:10:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\sstore\index.js
 */
import Vue from "vue";
import Vuex from "./svuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 18,
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
  },
  mutations: {
    add(state) {
      state.num++;
    },
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  modules: {},
});
