<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

  // /* -----------------rem 适配------------------- */
  // // rem 原理：根据 html 的 fontSize 属性值为基准，其它所有的 rem 值，根据这个基准计算。
  // // 我们根据屏幕宽度用 js 动态修改了 html 的 fontSize 属性值，达到移动端适配的目的
  // let html = document.documentElement;
  // //getBoundingClientRect() 方法返回一个矩形对象，包含六个属性 :top,bottom,left,right,width,height
  // //这里基于宽 320px 的屏幕分成了 32 份，也就是 1rem = 10px
  // window.rem = html.getBoundingClientRect().width/32;
  // html.style.fontSize = window.rem +'px';
</script>

<style lang="scss">
  @import "/style/base.scss"
</style>
