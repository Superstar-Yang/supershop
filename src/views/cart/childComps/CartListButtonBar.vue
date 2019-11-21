<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :isChecked="isSelectedAll" @click.native="CheckClick" class="check-button"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去计算：({{calcCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartListButtonBar",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters({
        list:'cartList'
      }),
      totalPrice(){
        return "￥" + this.list.filter(item=>{
          return item.checked
        }).reduce((previousValue, item) => {
          return previousValue +   item.count * item.price
        }, 0).toFixed(2)
      },
      calcCount(){
        return this.list.filter(item=>item.checked).length
      },
      isSelectedAll(){
        if(this.list.length===0) return false;
        return !this.list.filter(item=>!item.checked).length
      }
    },
    methods:{
      CheckClick(){
          if(this.isSelectedAll){
          this.list.forEach(item=>item.checked=false)
        }else{
          this.list.forEach(item=>item.checked=true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    height: 40px;
    display: flex;
    background: #ddd;
    align-items: center;
    justify-content: center;
  }
  .check-content{
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    text-align: left;
  }
  .check-button{
    width: 22px;
    height: 22px;
    margin: 0 5px;
    text-align: center;
  }
  .price{
    flex: 1;
    text-align: center;
  }
  .calculate{
    flex: 1;
    text-align: right;
  }
</style>
