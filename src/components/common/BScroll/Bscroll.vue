<template>
  <div class="wrapper" ref="scroll">
   <div class="content">
     <slot></slot>
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Bscroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
       scroll:null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      //2.监听滚动的位置
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      //3.监听上拉加载更多事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo &&this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y :0
      }
    }
  }
</script>

<style scoped>

</style>
