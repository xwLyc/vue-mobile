<template>
    <div class="optprice">
        <label class="add red fr" @click="add(pId)">+</label>
        <span class="num fr">{{count}}</span>
        <label :class="['sub', 'fr', {red:count>0}]" @click="sub(pId)">-</label>
    </div>
</template>
<script>
  
    export default {

        props: ['pId','pCount','pPrice'],
        data(){
            return{
                count: 0
            }
        } ,
        mounted(){
            this.$root.$on('vCount',()=>{
                // 如果不加 nextTick 视图总是上一次更新的状态，坑了我好久
                // 官方说明 异步更新队列 http://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列
                this.$nextTick(()=>{
                    this.count = this.pCount[this.pId];
                })

            });
                

        },
        methods:{
            add(pId){
                this.count++;
                this.$root.$emit('pidCount',pId,this.count);
            },
            sub(pId){
                if(this.count>0){
                    this.count--;
                    this.$root.$emit('pidCount',pId,this.count);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>