<template>
    <swiper id="swiper-home">
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
    import Swiper from "../../../components/common/swiper/Swiper";
    import SwiperItem from "../../../components/common/swiper/SwiperItem"

    export default {
      name: "SwiperHome",
      props: {
        banners:{
          type: Array,
          default: []
        }
      },
      components: {Swiper, SwiperItem}
    }
</script>

<style scoped>
  #swiper-home{
    width: 100%;
    overflow: hidden;
    margin-top: 44px;
  }
</style>
