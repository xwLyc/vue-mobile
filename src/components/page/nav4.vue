<template>
    <div>
        <p>i'm lyc</p>
        <img src="/static/images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能4'
            }
        },
        mounted (){
            this.$root.$emit('head-title',this.title)
        }
    }
</script>
