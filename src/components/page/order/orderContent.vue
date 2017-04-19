<template>
    <div class="orderContent" >
        <ul>
            <li v-for="(list,index) in contentList">
                <p class="name">{{list.name}}</p>
                <p class="detail">{{list.detail}}</p>
                <div class="spriceBox">
                    <span class="sprice">{{list.price}}</span><span>元/</span><span class="unitprice">{{list.unitprice}}</span>
                    <v-price :pid="list.p_id,priceArr"></v-price>
                    <!--<div class="optprice">
                        <label class="add red fr" @click="add(list.p_id)">+</label>
                        <span class="num fr">{{list.count}}</span>
                        <label class="sub fr" @click="sub(list.p_id)">-</label>
                    </div>-->

                </div>
            </li>
        </ul>
    </div>
</template>
<script>

    import vPrice from './orderPrice'
    export default {
        data(){
            return{
                contentList:'',
                priceArr:[]

            }
        } ,
        components:{
            vPrice
        },
        created(){
            this.$root.$on('contentList',(data)=>{
                this.contentList = data;
                // console.log(data)
            });

        }
        // ,
        // methods:{
        //     add(count){
        //         count++;
        //         console.log(count)
        //     },
        //     sub(count){
        //         this.count--;
        //         console.log(this.count)
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>