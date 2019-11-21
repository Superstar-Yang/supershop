<template>
  <div id="detail">
    <detail-nav-bar class="detail_nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="countentIndex" :probe-type="3">
      <detail-swiper :toImageItem="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list  ref="recommentd" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
<!--    <toast :message="message" :show="show"/>-->
  </div>
</template>

<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from "./children/DetailSwiper";
  import DetailBaseInfo from "./children/DetailBaseInfo";
  import DetailShopInfo from "./children/DetailShopInfo";
  import DetailGoodsInfo from "./children/DetailGoodsInfo";
  import DetailParamInfo from "./children/DetailParamInfo";
  import DetailCommentInfo from "./children/DetailCommentInfo";
  import DetailBottomBar from "./children/DetailBottomBar";

  import Scroll from 'components/common/BScroll/Bscroll'
  import GoodsList from 'components/content/goods/goodsList'
  // import Toast from "components/common/toast/Toast"
  import {getDetail, Goods, Shop, GoodsInfo, getRecommend} from 'network/detail'
  import {ItemImgListenerMixin, BottomBar} from "common/mixin";
  import {debouce} from "common/untils";
  import { mapActions} from 'vuex'

  export default {
    name: "detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      // Toast
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        currentTitle:[],
        currentIndex:0,
        // message:'',
        // show:false
      }
    },
    mixins:[ItemImgListenerMixin,BottomBar],
    created() {
      //1.保存传入的iid
      // this.iid =this.$route.query.iid
      this.iid =this.$route.params.iid
      //2.根据iid请求详细数据
      getDetail(this.iid).then(res=>{
        //1获取顶部的图片轮播数据
        console.log(res)
        const data = res.result;
        this.topImages = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获取商品详情信息
        this.detailInfo = data.detailInfo
        //获取参数信息
        this.paramInfo = new GoodsInfo(data.itemParams.info,data.itemParams.rule)
        //获取评论信息
        if(data.rate.cRate !==0){
          this.commentInfo = data.rate.list[0]
        }
      })
      //获取推荐数据
      getRecommend().then(res=>{
        this.recommends = res.data.list
      })
      this.getThemeTopYs = debouce(()=>{
        this.currentTitle = []
        this.currentTitle.push(0)
        this.currentTitle.push(this.$refs.params.$el.offsetTop)
        this.currentTitle.push(this.$refs.comment.$el.offsetTop)
        this.currentTitle.push(this.$refs.recommentd.$el.offsetTop)
      })
    },
    methods:{
      ...mapActions({
        add:'addCart'
      }),
      imageLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopYs()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.currentTitle[index],200)
      },
      countentIndex(position){
        const paramsY = -position.y;
        const length = this.currentTitle.length
        for(var i=0;i<length;i++){
          if(this.currentIndex !== i && i < length-1 && paramsY >= this.currentTitle[i] && paramsY<this.currentTitle[i+1] || i===length-1 && paramsY>this.currentTitle[i] ){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        this.listShowBackTop(position)
      },
      addToCart(){
       //获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        product.count = 1;
        //将商品添加到购物车
        // this.$store.commit('addCart',Product)
        // this.$store.dispatch('addCart',product)
        this.add(product).then(res=>{
          //   this.show = true;
          //   this.message = res;
          //   setTimeout(()=>{
          //   this.show = false
          //   this.message = ''
          // },2000)
          // console.log(res);
            this.$toast.show("添加购物车成功")
          console.log(this.$toast);
        })
      }
    },
    destroyed() {
      this.$bus.$off('itemImageLoad',-this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .detail_nav{
    position: relative;
    z-index: 9;
    background: #fff;
  }
  .content{
    height:calc(100% - 44px - 49px);
  }
</style>
