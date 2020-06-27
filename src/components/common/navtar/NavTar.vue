<template>
    <div class="nav-tar">
      <div class="nav-left"><slot name="left"></slot></div>
      <div class="nav-center"><slot name="center"></slot></div>
      <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavTar"
    }
</script>

<style scoped>
    .nav-tar{
      width: 100%;
      height: 44px;
      display: flex;
      line-height: 44px;
    }

    .nav-left{
      width: 60px;
    }

    .nav-center{
      flex: 1;
    }

    .nav-right{
      width: 60px;
    }

</style>
