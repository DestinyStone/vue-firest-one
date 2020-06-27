<template>
    <div class="main-tab-control">
      <tab-control>
        <tab-control-item v-for="(item, index) in titles"
                          :title="item"
                          :active="index == currentItem"
                          @click.native="clickActive(index)"
                          >
        </tab-control-item>
      </tab-control>
    </div>
</template>

<script>
    import TabControl from "../../common/tabcontrol/TabControl";
    import TabControlItem from "../../common/tabcontrol/TabControlItem";
    export default {
      name: "MainTabControl",
      components: {TabControlItem, TabControl},
      data() {
        return{
          currentItem: 0
        }
      },
      props: {
        titles:{
          type: Array,
          default: []
        }
      },
      methods: {
        clickActive(index) {
          this.currentItem = index;
        }
      }
    }
</script>

<style scoped>
  .main-tab-control{
    width: 100%;
    height: 44px;
    background-color: var(--color-background);
  }
</style>
