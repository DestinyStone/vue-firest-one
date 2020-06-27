<template>
    <div class="nav-tar-home">
      <nav-tar>
        <div id="content" slot="center">购物街</div>
      </nav-tar>
    </div>
</template>

<script>
    import NavTar from "../../../components/common/navtar/NavTar";
    export default {
        name: "NavTarHome",
      components: {NavTar}
    }
</script>

<style scoped>
  .nav-tar-home{
    background-color: var(--color-tint);
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
  }

  #content{
    text-align: center;
    font-weight: 700;
    color: #fff;
  }
</style>
