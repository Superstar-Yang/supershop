<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <img src="~assets/img/profile/message.png" alt="">
      <span>我的消息</span>
    </div>
    <div class="profile-list-item">
      <img src="~assets/img/profile/jifen.png" alt="">
      <span>积分商城</span>
    </div>
    <div class="profile-list-item">
      <img src="~assets/img/profile/vip.png" alt="">
      <span>会员卡</span>
    </div>
    <div class="line"></div>
    <div class="profile-list-item">
      <img src="~assets/img/profile/gouwuche.png" alt="">
      <span>我的购物车</span>
    </div>
    <div class="profile-list-item">
      <img src="~assets/img/profile/download.png" alt="">
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .profile-list{
    width: 100%;
  }
  .profile-list-item{
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
  }
  .profile-list-item img{
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
  .profile-list-item span{
    width: 100%;
    line-height:45px;
    font-size: 15px;
    color:#333;
    border-bottom:1px solid #f2f5f8 ;
  }
  .profile-list-item span:nth-of-type(3){
    border-bottom: 0;
  }
  .line{
    width: 100%;
    height: 10px;
    background-color:#eee;
  }
</style>
