<template>
    <footer class="orderBottom wp100">
        <p class="fl">
            共 <span>{{shopNum}}</span> 种商品，总价 <span>{{totalPrice}}</span> 元
        </p>
        <button class="fr payBtn" @click="pay">去结算</button>
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
            this.$root.$on('totalArr',(data)=>{
                this.shopNum=0;
                this.totalPrice=0;
                // console.log(data)
                data.forEach(function(e) {
                    // console.log(e)
                    if(e.count>0){
                        this.shopNum++;
                        this.totalPrice += e.count*(e.price*100); //先转整数计算，然后除100，防止出现浮点运算误差
                    }

                }, this);
                this.totalPrice = (this.totalPrice/100).toFixed(2);
            });

        },
        methods:{
            pay(){
                alert('知道你没钱，就别提交了。。。')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>