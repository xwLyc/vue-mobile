<template>
    <div class="optprice">
        <label class="add red fr" @click="add(count)">+</label>
        <span class="num fr">{{count}}</span>
        <label class="sub fr" @click="sub(count)">-</label>
    </div>
</template>
<script>
  
    export default {
        data(){
            return{
                count:0
            }
        } ,
        props: ['pid','priceArr'],
        created(){
            // console.log(this.priceArr[this.pid])
            // this.pid();
        },
        computed:{
            pid(){
                if(this.priceArr[this.pid]==undefined){
                    this.priceArr[this.pid]= this.count;

                }
                console.log(this.pid)
                console.log(this.priceArr)
            }

        },
        methods:{
            add(count){
                this.count++;
                console.log(this.count)
            },
            sub(count){
                this.count--;
                console.log(this.count)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>