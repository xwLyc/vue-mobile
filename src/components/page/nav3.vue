<template>
    <div>
        <p>what's your name</p>
        <img src="/static/images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能3'
            }
        },
        mounted () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>