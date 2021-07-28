/*
 * @Author: your name
 * @Date: 2021-07-28 17:15:37
 * @LastEditTime: 2021-07-28 19:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\sstore\svuex.js
 */
let Vue;

// 循环
const forEachValue = (obj, fn) => {
  Object.keys(obj).forEach((key) => fn(obj[key], key));
};

// 注册
const registerGetter = (store, fn, name) => {
  Object.defineProperty(store.getters, name, {
    get: () => {
      return fn(store.state);
    },
  });
};

class Store {
  constructor(options) {
    // 变成响应式的
    this._vm = new Vue({
      data: {
        $$state: options.state,
      },
    });

    this.getters = {};

    // 保存一下
    this._mutations = options.mutations;
    this._actions = options.actions;
    // this._getters = options.getters;

    // bind
    this.dispatch = this.dispatch.bind(this);
    this.commit = this.commit.bind(this);

    //  getters 进行处理
    forEachValue(options.getters, (fn, name) => {
      registerGetter(this, fn, name);
    });

    // 常规写法====================
    // 进行响应式
    // Object.keys(this._getters).forEach((key) => {
    //   // 响应式劫持
    //   Object.defineProperty(this.getters, key, {
    //     get: () => {
    //       return this._getters[key](this.state);
    //     },
    //   });
    // });

    // 保存this指向 因为 function有自己的this
    // let _this = this;

    // Object.keys(this._getters).forEach((key) => {
    //   Object.defineProperty(this.getters, key, {
    //     get: function() {
    //       return _this._getters[key](_this.state);
    //     },
    //   });
    // });
  }

  // 获取结果
  get state() {
    return this._vm._data.$$state;
  }

  set state(v) {
    console.log("pleace use replaceState to reset state");
  }

  commit(type, payload) {
    const entry = this._mutations[type];

    //
    if (!entry) {
      console.error("unkown mutations type!");
    }

    // 调用函数
    entry(this.state, payload);
  }

  dispatch(type, payload) {
    const entry = this._actions[type];

    if (!entry) {
      console.error("unkown actions type!");
    }

    // 调用函数
    entry(this, payload);
  }
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default {
  Store,
  install,
};
