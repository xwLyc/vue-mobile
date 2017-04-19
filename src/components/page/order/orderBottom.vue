<template>
    <footer class="orderBottom wp100">
        <p class="fl">
            共 <span>{{shopNum}}</span> 种商品，总价 <span>{{totalPrice}}</span> 元
        </p>
        <button class="fr payBtn">去结算</button>
    </footer>
</template>
<script>
  
    export default {
        data(){
            return{
                shopNum:0,
                totalPrice:0
            }
        } ,
        created(){
           
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>