<template>
    <div class="orderSlide">
        <ul>
            <li v-for="(list,index) in slideList" :class="{active:activeIndex==index}" @click="activeClick(index)">{{list.classname}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                slideList:'',
                activeIndex:0
            }
        },
        created () {
             this.$root.$on('orderSlideList',(data)=>{
                 let orderList = JSON.parse(data).orderList;
                 let slideList = new Array();
                 orderList.orderclass.forEach(function(e){
                    slideList.push(e);
                 })
                 this.slideList = slideList;
             });

             //对应nav下的slide状态
             this.$root.$on('slideActive',(i)=>{
                 this.activeIndex = i;
             });

        },
        methods:{
            activeClick(index){
                console.log(this.slideList[index].classdetail)
                this.activeIndex=index;
                this.$root.$emit('activeIndex',this.activeIndex);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>