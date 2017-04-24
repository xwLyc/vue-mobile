<template>
    <div class="orderContent" >
        <ul>
            <li v-for="(list,index) in contentList">
                <p class="name">{{list.name}}</p>
                <p class="detail">{{list.detail}}</p>
                <div class="spriceBox">
                    <span class="sprice">{{list.price}}</span><span>元/</span><span class="unitprice">{{list.unitprice}}</span>
                    <v-price :p-id="list.p_id" :p-price="list.price" :p-count="countArr"></v-price>
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
                countArr:[]

            }
        } ,
        components:{
            vPrice
        },
        created(){
            let arr = new Array();
            this.$root.$on('contentList',(data)=>{
                this.contentList = data;
                // console.log(data)
                data.forEach(function(element,index) {
                    // console.log(element)
                    if(this.countArr[element.p_id]==undefined){
                        let obj = new Object();
                        obj.count = 0;
                        obj.price = element.price;
                        this.countArr[element.p_id] = obj;
                    }
                }, this);

                this.$root.$emit('vCount');

            });
            this.$root.$on('pidCount',(pid,count)=>{
                this.countArr[pid].count= count;

            });
            this.$root.$on('changeCount',()=>{
                this.$root.$emit('totalArr',this.countArr)
            })

        },
        methods:{
            
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>