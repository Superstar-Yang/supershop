<template>
  <div class="profile">
    <nav-bar class="nav-bar">
        <div  slot="center">super商城</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login @goLogin="goLogin" :username="username" :phone="phone" :cur-Login="isLogin" ref="login"></login>
      <money></money>
      <div class="line"></div>
      <profile-list></profile-list>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/BScroll/Bscroll";
  import NavBar from 'components/common/navbar/navbar'
  import ProfileList from './childComp/profileList'
  import Money from'./childComp/Money'
  import Login from'./childComp/Login'
  export default {
    name: "proFile",
    components:{
      Scroll,
      NavBar,
      ProfileList,
      Money,
      Login
    },
    data(){
      return{
        isLogin:false,
        username:'',
        phone:''
      }
    },
    methods:{
        goLogin(){
          this.$router.push('/login');
        }
    },
    activated(){
      let shop_login = localStorage.getItem("shop_login");
      let user_pic = localStorage.getItem("user_pic");
      if(shop_login){
        let login = JSON.parse(shop_login);
        this.username = login.username;
        this.phone = login.phone;
        this.isLogin = true;
      }
      if(user_pic){
        this.$refs.login.defaultPic = JSON.parse(user_pic);
      }
    }
  }
</script>

<style scoped>
  @import "/assets/css/base.css";
  .profile {
    width: 100%;
    height: 100%;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 600;
  }

  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }

  .scroll-height {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>
