import {debouce} from "./untils";
import {BACK_POSITION} from "./const";
import BackTop from "components/content/backtop/BackTop";

export const ItemImgListenerMixin = {
  data(){
    return{
      itemImgListener:null,
      refrersh:null
    }
  },
  mounted(){
    //3.监听item中图片加载完成
    this.refrersh = debouce(this.$refs.scroll.refresh)
    //记录监听事件
    this.itemImgListener = ()=>{
      this.refrersh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const BottomBar = {
  data(){
   return{
     isShowBackTop:false,
   }
  },
  components:{
    BackTop,
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listShowBackTop(position){
      this.isShowBackTop = -(position.y) > BACK_POSITION
    }
  }
}
