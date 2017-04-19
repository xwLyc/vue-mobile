<template>
    <div>
        <p>i'm lyc</p>
        <img src="../../images/logo.png" alt="">
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'功能4'
            }
        },
        created (){
            this.$root.$emit('head-title',this.title)
        }
    }
</script>
