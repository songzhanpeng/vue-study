<!--
 * @Author: your name
 * @Date: 2021-07-28 15:10:31
 * @LastEditTime: 2021-07-29 09:38:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="$store.commit('add')">{{ $store.state.num }}</p>
    <p @click="$store.dispatch('add')">async {{ $store.state.num }}</p>
    <h1>求和：{{ $store.getters.doubleNum }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this);
    // console.log(this._router);
  },
};
</script>
