<template>
  <div class="register">
    <nav-bar class="nav-bar">
      <div slot="center">注册</div>
    </nav-bar>
    <div class="register-item" :class="{error:!formData.username}">
      <label for="username" >用户名:</label>
      <input id="username" type="text" placeholder="请输入用户名" v-model.trim="formData.username">
    </div>
    <div class="register-item" :class="{error:!formData.userpass}">
      <label for="password" >密码:</label>
      <input id="password" type="password" placeholder="请输入密码" v-model.trim="formData.userpass">
    </div>
    <div class="register-item" :class="{error:!formData.useremail}">
      <label for="email" >邮箱:</label>
      <input id="email" type="text" placeholder="请输入邮箱" v-model.trim="formData.useremail">
    </div>
    <div class="register-item" :class="{error:!formData.userphone}">
      <label for="phone" >手机号:</label>
      <input id="phone" type="text" placeholder="请输入手机号" v-model.trim="formData.userphone">
    </div>
    <div class="register-item" :class="{error:!formData.userqq}">
      <label for="qq" >QQ号:</label>
      <input id="qq" type="text" placeholder="请输入qq号" v-model.trim="formData.userqq">
    </div>
    <div class="login-btn">
      <van-button @click="goRegister" class="login-btn-register" type="info">点击注册</van-button>
      <van-button @click="goLogin" class="login-btn-login"  plain type="info">前往登录</van-button>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  import {formatDate} from "../../common/untils";
  export default {
    name: "Register",
    components:{
      NavBar
    },
    data(){
      return{
        formData:{
          username:'',
          userpass:'',
          useremail:'',
          userphone:'',
          userqq:'',
        }
      }

    },
    methods:{
      goRegister(){
        if(!this.formData.username){
          this.$notify({
            type:'danger',
            message:'用户名为空',
          })
        }else if(!this.formData.userpass){
          this.$notify({
            type:'danger',
            message:'密码为空',
          })
        }else if(!this.formData.useremail){
          this.$notify({
            type:'danger',
            message:'邮箱为空',
          })
        }else if(!this.formData.userphone){
          this.$notify({
            type:'danger',
            message:'手机号为空',
          })
        }else if(!this.formData.userqq){
          this.$notify({
            type:'danger',
            message:'QQ号为空',
          })
        }else{
          this.$axios.post("http://121.42.13.36/serve/register.php",this.$qs.stringify(this.formData)).then(res=>{
            console.log(res);
            if(res.data.stata === 'Success'){
              this.$notify({
                type:'success',
                message:'恭喜你,注册成功,正在跳转值登录页面'
              });
              setTimeout(()=>{
                this.$router.push('/login');
              },3000)
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      goLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .register{
    font-size: 14px;
    width: 100%;
  }
  .nav-bar{
    background: var(--color-tint);
    color:white;
  }
  .register-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin: 30px auto;
  }
  .register-item label{
    display: block;
    font-size: 16px;
    width: 70px;
  }
  .register-item input{
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
  .register-item input:focus{
    border:1px solid #409;
  }
  .register-item.error input:focus{
    border:1px solid #f13e3a;
  }
  .register-item input::placeholder{
    color:#999;
  }
  .login-btn{
    display:flex;
    justify-content: space-between;
    width: 340px;
    margin: 0 auto;

  }
</style>
