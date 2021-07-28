/*
 * @Author: your name
 * @Date: 2021-07-28 15:10:31
 * @LastEditTime: 2021-07-28 17:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
// 自定义实现vue-router
// import router from "./srouter";
// import store from "./store";
import router from "./router";
import store from "./sstore";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
