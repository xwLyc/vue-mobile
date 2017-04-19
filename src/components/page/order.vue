<template>
    <div>
        <order-top></order-top>
        <order-slide></order-slide>
        <order-content></order-content>
        <order-bottom></order-bottom>
        <!--<p>卡特琳娜</p>
        <img src="../../images/logo.png" alt="">-->
    </div>
</template>
<script>
    import orderTop from './order/orderTop'
    import orderSlide from './order/orderSlide'
    import orderContent from './order/orderContent'
    import orderBottom from './order/orderBottom'
    export default{
        data(){
            return{
                title:'小乔'
            }
        },
        components: {
          orderTop,orderSlide,orderContent,orderBottom
        },
        mounted () {
            this.$root.$emit('head-title',this.title)
        }
    }
</script>