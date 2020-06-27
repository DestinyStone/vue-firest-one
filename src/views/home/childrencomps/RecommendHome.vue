<template>
    <div id="recommend-home">
      <div class="recommend-home-item" v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "RecommendHome",
      props: {
        recommend:{
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>
   #recommend-home{
     width: 100%;
     display: flex;
     text-align: center;
     padding-bottom: 20px;
     border-bottom: 20px solid #c6c6c6;
   }
  .recommend-home-item{
    flex: 1;
  }
   .recommend-home-item img{
     width: 90%;
   }
</style>
