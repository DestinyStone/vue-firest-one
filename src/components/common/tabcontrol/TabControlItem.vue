<template>
    <div class="tab-control-item">
      <span :class="{active: active}">{{title}}</span>
    </div>
</template>

<script>
    export default {
      name: "TabControlItem",
      props: {
        title: String,
        active: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style scoped>
  .tab-control-item{
    flex: 1;
    text-align: center;
  }

  .tab-control-item span{
    padding: 5px;
  }
  .active{
    border-bottom: 3px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>
