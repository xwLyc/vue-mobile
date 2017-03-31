<template lang="html">
  <div class="main">
    <v-head>
      <h3 slot="title">{{title}}</h3>
    </v-head>

    <v-sidebar></v-sidebar>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import vHead from './Head.vue'
import vSidebar from './Sidebar.vue'
export default {
  data(){
    return{
      title:''
    }

  },
  created (){
    this.$root.$on('head-title',(data)=>{
      this.title=data;
    })
  },
  components:{
    vHead,vSidebar
  }
}
</script>

<style lang="scss">


</style>
