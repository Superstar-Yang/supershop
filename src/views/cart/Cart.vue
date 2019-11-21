<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div  slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 产品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-list-button-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  import CartList from './childComps/CartList'
  import CartListButtonBar from './childComps/CartListButtonBar'
  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartListButtonBar
    },
    computed:{
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background: var(--color-tint);
    color:#fff;
  }
</style>
