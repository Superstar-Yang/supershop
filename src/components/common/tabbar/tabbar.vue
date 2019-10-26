<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "tabbar"
  }
</script>
<style scoped>
  #tab-bar{
    background: #f6f6f6;
    display: flex;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
