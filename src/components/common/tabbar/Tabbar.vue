<template>
    <div id = "tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tab-bar{
    width: 100%;
    height: 49px;
    display: flex;
  }
</style>
