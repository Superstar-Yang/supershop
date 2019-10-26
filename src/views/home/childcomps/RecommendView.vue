<template>
<div class="commends">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{ item.title }}</div>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .commends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding:15px 0 30px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 80px;
    height:80px;
    margin-bottom: 10px;
  }
</style>
