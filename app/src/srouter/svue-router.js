/*
 * @Author: your name
 * @Date: 2021-07-28 15:12:18
 * @LastEditTime: 2021-07-28 16:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\srouter\svue-router.js
 */
// function
// 要求必须有一个install,将来会被Vue.use调用
let Vue; // 保存Vue构造函数，插件中要使用，不导入还能用
class VueRouter {
  constructor(options) {
    this.$options = options;
    // 设置默认值
    const initial = window.location.hash.slice(1) || "/";

    // 变成响应式的
    Vue.util.defineReactive(this, "current", initial);

    // 监听hash变化
    window.addEventListener("hashchange", () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

// 参数 1 是Vue.use调用时传入的
VueRouter.install = function(_Vue) {
  Vue = _Vue;

  // 全局混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 声明两个组件
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      return h("a", { attrs: { href: "#" + this.to } }, this.$slots.default);
    },
  });

  Vue.component("router-view", {
    render(h) {
      // 通过地址取到对应的组件
      let component = null;

      //   console.log(this.$router);

      // 循环查找
      const route = this.$router.$options.routes.find((route) => {
        return route.path === this.$router.current;
      });

      if (route) component = route.component;

      return h(component);
    },
  });
};

export default VueRouter;
