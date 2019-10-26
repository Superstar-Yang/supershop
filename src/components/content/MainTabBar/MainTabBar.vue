<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/index.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/index-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/item.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/item-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcar-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item >
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
  import tabBar from 'components/common/05-webpacktabbar/05-webpacktabbar'
  import tabBarItem from 'components/common/05-webpacktabbar/tabbaritem'
  export default {
    name: "MainTabBar",
    components:{
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
