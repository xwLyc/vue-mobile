<template>
    <div>
        <p>what's your name</p>
        <img src="../../images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能3'
            }
        },
        created () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>