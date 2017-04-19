<template>
    <div>
        <p>卡特琳娜</p>
        <img src="../../images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能1'
            }
        },
        created () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>