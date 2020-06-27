<template>
    <div id="main-tab-bar">
      <tabbar>
        <tabbar-item path="/home">
          <img slot="icon" src="@/assets/image/tabbar/home.svg"/>
          <img slot="activityIcon" src="@/assets/image/tabbar/home_active.svg"/>
          <div slot="content">首页</div>
        </tabbar-item>
        <tabbar-item path="/category">
          <img slot="icon" src="@/assets/image/tabbar/category.svg"/>
          <img slot="activityIcon" src="@/assets/image/tabbar/category_active.svg"/>
          <div slot="content">分类</div>
        </tabbar-item>
        <tabbar-item path="/cart">
          <img slot="icon" src="@/assets/image/tabbar/cart.svg"/>
          <img slot="activityIcon" src="@/assets/image/tabbar/cart_active.svg"/>
          <div slot="content">购物车</div>
        </tabbar-item>
        <tabbar-item path="/profile">
          <img slot="icon" src="@/assets/image/tabbar/profile.svg"/>
          <img slot="activityIcon" src="@/assets/image/tabbar/profile_active.svg"/>
          <div slot="content">我的</div>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
    import Tabbar from "../../common/tabbar/Tabbar";
    import TabbarItem from "../../common/tabbar/TabbarItem";
    export default {
        name: "MainTabbar",
      components: {TabbarItem, Tabbar}
    }
</script>

<style scoped>
  #main-tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: var(--color-background);
  }
</style>
