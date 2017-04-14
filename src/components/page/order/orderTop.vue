<template>
    <div class="orderTop" >
        <swiper :options="swiperOption">
            <swiper-slide v-for="(nav,index) in orderList" :key="nav.id" :class="{'active':index==clickIndex}">
                {{nav.name}}
                <p></p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    // import Vue from 'vue'
    import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

    export default {
        data(){
            return{
                clickIndex:0,
                orderList:'',
                slideActiveIndex:'',
                swiperOption: {
                    slidesPerView: 'auto'
                }
            }
        } ,
        components: {
            swiper,
            swiperSlide
        },
        created(){
            this.axios.get('/static/json/order.json').then((response)=>{
                // console.log(response.data);
                let arrJson = new Array();
                response.data.forEach(function(e) {
                    let jsonTmp ={}
                    jsonTmp.name = e.orderList.listname;
                    jsonTmp.id = e.orderList.id;
                    arrJson.push(jsonTmp)
                }, this);
                this.orderList = arrJson;
                return response;

            }).then((response)=>{
                let data = response.data;
                // console.log(data)
                //设置当前slide选中的节点
                let indexArr = new Array();
                for(let i = 0; i < data.length; i++){
                    indexArr.push(0);
                }
                this.slideActiveIndex = indexArr;
                this.$root.$on("activeIndex",(i)=>{
                    this.slideActiveIndex[this.clickIndex]=i;
                    // console.log(this.slideActiveIndex)
                })
                //激活当前swiper点击 active
                this.swiperOption.onTap = (e)=>{
                    this.clickIndex = e.clickedIndex;
                    this.$root.$emit('orderSlideList',JSON.stringify(data[this.clickIndex]));
                    //设置改点击的nav对应的slide的状态
                    this.$root.$emit('slideActive',this.slideActiveIndex[this.clickIndex]);
                }
                this.$root.$emit('orderSlideList',JSON.stringify(data[this.clickIndex]))
            }).catch((err)=>{
                console.log(err)
            });
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../style/page/order.scss'
</style>