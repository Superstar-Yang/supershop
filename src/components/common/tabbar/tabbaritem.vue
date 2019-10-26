<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
  export default {
    name: "tabbaritem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : { }
      }
    },
    methods:{
      itemClick(){
          this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
    flex: 1;
    box-shadow: 0 -3px -3px rgba(100,100,100,.08);
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
  }
</style>
