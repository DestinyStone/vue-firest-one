<template>
    <div class="tab-bar-item" @click="routerRedirect">
      <div v-show="isActive"><slot name="icon"></slot></div>
      <div v-show="!isActive"><slot name="activityIcon"></slot></div>
      <div class="item-text" :style="colorChange"><slot name="content"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "TabbarItem",
      computed: {
        isActive() {
          if (this.$route.path.indexOf(this.path))
            return true;
          else
            return false;
        },
        colorChange() {
          if (this.isActive == true)
            return {};
          else
            return {color: "red"};
        }
      },
      props: {
        path: {
          type: String,
          required: true
        }
      },
      methods: {
        routerRedirect() {
          if (this.path != this.$route.path)
            this.$router.replace({path: this.path})
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    display: block;
    margin: 5px auto;
  }

  .tab-bar-item .item-text {
    height: 100%;
    text-align: center;
  }

</style>
