<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#D9418B">
      <img  slot="item-icon" src="~assets/img/tabbar/index.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/index-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#D9418B">
      <img  slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#D9418B">
      <img  slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#D9418B">
      <img  slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
  import  TabBar from 'components/common/tabbar/tabbar'
  import  TabBarItem from 'components/common/tabbar/tabbaritem'
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
