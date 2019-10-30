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
