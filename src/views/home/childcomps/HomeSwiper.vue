<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {swiper,swiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isImage:false
      }
    },
    components:{
      swiper,
      swiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isImage){
          this.$emit('imageLoad')
          this.isImage = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
