export default {
  //mutations唯一的目的修改state中的状态  但是每个方法尽可能完成事情单一一点  这是可以写在actions中
  addCounter(state, payload){
    payload.count++
  },
  addToCart(state, payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
