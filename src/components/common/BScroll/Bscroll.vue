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
      pullupload:{
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
        pullUpLoad:this.pullupload
      })
      //2.监听滚动的位置
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position)
      })
      //监听上拉事件
      this.scroll.on('pullingUp',()=>{
        // console.log('上啦加载更多');
        this.$emit('pullingup')
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
