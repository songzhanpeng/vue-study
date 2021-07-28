/*
 * @Author: your name
 * @Date: 2021-07-28 15:10:31
 * @LastEditTime: 2021-07-28 15:55:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./srouter";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
