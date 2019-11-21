<template>
  <div>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-constrol class="tab-control"
                    :titles="['流行','新款','精品']"
                    @tabClick="tabClick"
                    ref="tabConstrol1"
                    v-show="isFixed"/>
      <bscroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="LoadMore">
        <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <fauter-view></fauter-view>
        <tab-constrol class="tab-control"
                      :titles="['流行','新款','精品']"
                      @tabClick="tabClick"
                      ref="tabConstrol2"/>
        <goods-list :goods="showGoods"></goods-list>
      </bscroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  import tabConstrol from "components/content/tabConstrol/tabConstrol";
  import goodsList from "components/content/goods/goodsList";
  import Bscroll from "components/common/BScroll/Bscroll";

  import HomeSwiper  from "./childcomps/HomeSwiper";
  import RecommendView from "./childcomps/RecommendView";
  import fauterView from "./childcomps/fauterView";


  import {getHomeMultidata,getHomeGoods} from "network/home"
  import {ItemImgListenerMixin, BottomBar} from "common/mixin";

  export default {
    name: "Home",
    components:{
      NavBar,
      tabConstrol,
      goodsList,
      Bscroll,
      HomeSwiper,
      RecommendView,
      fauterView,
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isTop:637,
        isFixed:false,
        saveY:0,
      }
    },
    mixins:[ItemImgListenerMixin,BottomBar],
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      },
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      //保存y值
      this.saveY = this.$refs.scroll.getScrollY()
      //取消全局事件的监听
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{
      /*
      * 事件监听相关的方法
      * */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabConstrol2.currentIndex = index
        this.$refs.tabConstrol1.currentIndex = index
      },
      contentScroll(position){
        //1.判断backtop是否显示
        this.listShowBackTop(position)
        //2.判断tabconstrol是否吸顶
        this.isFixed = -(position.y) > this.isTop
      },
      LoadMore(){
        this.getHomeGoods(this.currentType)
      },
      imageLoad(){
        this.isTop = this.$refs.tabConstrol2.$el.offsetTop;
      },
      /*
      *网络请求相关的方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type, page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
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
  .tab-control{
    position: sticky;
    top:44px;
    background: #ffffff ;
    z-index:2;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
