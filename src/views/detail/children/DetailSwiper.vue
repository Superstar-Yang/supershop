<template>
  <swiper class="swiper-item">
    <swiper-item v-for="item in toImageItem">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {swiper, swiperItem} from 'components/common/swiper/index'
  export default {
    name: "detailSwiper",
    components:{
      swiper,swiperItem
    },
    props:{
      toImageItem:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-item{
    height: 300px;
    overflow: hidden;
  }
</style>
