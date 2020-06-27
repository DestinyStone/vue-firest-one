<template>
    <div id="home">
      <nav-tar-home></nav-tar-home>
      <swiper-home :banners="banners"></swiper-home>
      <recommend-home :recommend="recommend"></recommend-home>
      <feature-home></feature-home>
      <main-tab-control id="mian-tab-control-home" :titles="['流行', '新款', '精选']"></main-tab-control>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </div>
</template>

<script>
    import NavTar from "../../components/common/navtar/NavTar";
    import NavTarHome from "./childrencomps/NavTarHome";
    import SwiperHome from "./childrencomps/SwiperHome";
    import {getHomeMulitData} from 'network/home'
    import RecommendHome from "./childrencomps/RecommendHome";
    import FeatureHome from "./childrencomps/FeatureHome";
    import MainTabControl from "../../components/content/maintabcontrol/MainTabControl";

    export default {
      name: "home",
      data() {
        return {
          banners:[],
          recommend:[]
        }
      },
      components: {MainTabControl, FeatureHome, RecommendHome, SwiperHome, NavTarHome, NavTar},
      methods: {


      },
      created() {
        getHomeMulitData().then(res => {
          this.banners = res.data["banner"].list;
          this.recommend = res.data["recommend"].list;
        })
      }
    }
</script>

<style scoped>
  #home {
    /*width: 100%;*/
  }

  #mian-tab-control-home{
    position: sticky;
    top: 43px;
  }
</style>
