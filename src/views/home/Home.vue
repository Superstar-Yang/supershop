<template>
  <div>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <fauter-view></fauter-view>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  import HomeSwiper  from "./childcomps/HomeSwiper";
  import RecommendView from "./childcomps/RecommendView";
  import fauterView from "./childcomps/fauterView";
  import {getHomeMultidata} from "network/home"
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      fauterView
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    overflow-y: auto;
  }
.home-nav{
  background:var(--color-tint);
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
