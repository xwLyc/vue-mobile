
<template lang="html">
    <header>
        <p class="menu" @click="showSide">
            <img src="/static/images/icon-menu.png" />
        </p>
        <slot name="title"></slot>
    </header>
</template>

<script>
export default {
    methods:{
        showSide(){
            //实现兄弟组件通信
            this.$root.$emit('showSide')
        }
    }
}
</script>

<style lang="scss">
    @import '../../style/common/head.scss'
</style>
