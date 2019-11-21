<template>
  <div class="login">
    <nav-bar class="nav-bar">
      <div slot="center">登录</div>
    </nav-bar>
    <div class="login-item">
      <label for="username" :class="{error:!formData.username}">用户名:</label>
      <input id="username" type="text" placeholder="请输入用户名" v-model.trim="formData.username">
    </div>
    <div class="login-item">
      <label for="password" :class="{error:!formData.password}">密码:</label>
      <input id="password" type="text" placeholder="请输入密码" v-model.trim="formData.password">
    </div>
    <div class="login-btn">
      <van-button @click="goLogin" class="login-btn-login" type="info">点击登录</van-button>
      <van-button @click="goRegister" class="login-btn-register"  plain type="info">立即注册</van-button>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  export default {
    name: "Login",
    components:{
      NavBar
    },
    data(){
      return{
        formData:{
          username:'',
          phone:''
        }
      }
    },
    methods:{
      //登录
      goLogin(){
        if(!this.formData.username){
          this.$notify({
            type:'danger',
            message:'用户名不能为空'
          });
        }else{
          this.$axios.post('http://121.42.13.36/serve/login.php',this.$qs.stringify(this.formData)).then(res=>{
            if(res.data.state=== 'success'){
              let obj = {
                username:res.data.username,
                phone:res.data.phone
              };
              this.$notify({
                type:'success',
                message:'恭喜你登录成功'
              });
              localStorage.setItem('shop_login',JSON.stringify(obj));
              setTimeout(()=>{
                this.$router.push('/profile');
              },3000)
            }else{
              this.$notify({
                type:'danger',
                message:'用户名或密码输入错误'
              });
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      goRegister(){
        this.$router.push('/register');
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    font-size: 14px;
  }
  .nav-bar{
    background: var(--color-tint);
    color:white;
  }
  .login-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin: 30px auto;
  }
  .login-item label{
    display: block;
    font-size: 16px;
    width: 70px;
  }
  .login-item input{
    display: block;
    width: 270px;
    height: 36px;
    line-height: 36px;
    outline: none;
    background: none;
    border:1px solid #ccc;
    padding-left: 10px;
    font-size: 14px;
  }
  .login-item input:focus{
    border:1px solid #409;
  }
  .login-item.error input:focus{
    border:1px solid #f13e3a;
  }
  .login-item input::placeholder{
    color:#999;
  }
  .login-btn{
    display:flex;
    justify-content: space-between;
    width: 340px;
    margin: 0 auto;

  }
</style>
