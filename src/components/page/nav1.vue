<template>
    <div>
        <order-top></order-top>
        <order-slide></order-slide>
        <order-content></order-content>
        <!--<p>卡特琳娜</p>
        <img src="../../images/logo.png" alt="">-->
        


         
    </div>
</template>
<script>
    import orderTop from './order/orderTop'
    import orderSlide from './order/orderSlide'
    import orderContent from './order/orderContent'
    export default{
        data(){
            return{
                title:'分分钟'
            }
        },
        components: {
          orderTop,orderSlide,orderContent
        },
        mounted () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>