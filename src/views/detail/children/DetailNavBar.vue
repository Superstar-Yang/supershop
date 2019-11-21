<template>
      <detail-nav-bar>
        <div slot="left" class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <div class="title-item" :class="{active:index === currentIndex }" @click="titleClick(index)"  v-for="(item,index) in title " >{{ item }}</div>
        </div>
      </detail-nav-bar>
</template>

<script>
  import detailNavBar from 'components/common/navbar/navbar'
  export default {
    name: "DetailNavBar",
    components:{
      detailNavBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit("titleClick",index)
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back{
    margin-top: 5px;
  }
  .title{
    display: flex;
    font-size: 12px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color:var(--color-high-text)
  }
</style>
