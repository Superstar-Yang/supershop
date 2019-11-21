<template>
  <div class="category-detail">
    <div class="category-detail-item" v-for="(item,index) in CategoryList" :key="index">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Subcategory",
    // components:{
    //   Scroll
    // },
    props:{
      CategoryList:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .category-detail {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  }
  .category-detail-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100px;
    margin-bottom: 10px;
  }
  .category-detail-item img {
    width: 65px;
    margin-bottom: 7px;
  }
  .category-detail-item p {
    font-size: 14px;
  }
</style>
