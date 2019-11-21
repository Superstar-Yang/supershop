<template>
 <div class="goods-item" @click="goodsListItem">
   <img v-lazy="showImg" alt="" @load="ImageLoad">
   <div class="goods-info">
     <p>{{ goodsItem.title}}</p>
     <span class="price">{{ goodsItem.price}}</span>
     <span class="collect">{{ goodsItem.cfav}}</span>
   </div>
 </div>
</template>

<script>
  import goodsList from "./goodsList";
  export default {
    name: "goodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
        return {}
        }
      }
    },
    computed:{
        showImg(){
          return this.goodsItem.img || this.goodsItem.show.img
        }
    },
    methods:{
      ImageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      goodsListItem(){
        // this.$router.push({path:'/detail',query:{iid:this.goodsItem.iid}})
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position:relative;
    width:48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position:absolute;
    bottom:5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;

  }
  .goods-info .price{
    color:var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: "";
    position: absolute;
    left:-15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
