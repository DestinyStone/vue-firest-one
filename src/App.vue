<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import MainTabbar from "./components/content/MainTabbar/MainTabbar";
import router from "./router/index"

export default {
  name: 'App',
  router,
  components: {
    MainTabbar
  }
}
</script>

<style>
 @import "assets/css/base.css";

  #app {
    position: relative;
  }
</style>
