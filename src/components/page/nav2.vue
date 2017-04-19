<template>
    <div>
        <p>安琪拉</p>
        <img src="../../images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能2'
            }
        },
        created () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>