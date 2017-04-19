<template lang="html">
    <div class="sideBar wp100 hp100">
            <transition name="fade" mode="in-out">
                <div class="sideBarBg wp100 hp100" v-if="show" @click="leftMove"></div>
            </transition>
            <transition name="fadeMove" mode="out-in">
                <div class="sideBarLeft hp100" v-if="show">
                    <ul class="sideMenu">
                        <li v-for="(menu,index) in sideData" :class="{active:flag==index}"  @click="Active(index)">
                            <router-link :to="menu.route" :class="['wp100', 'hp100']">
                                <img :src="menu.icon" />
                                {{menu.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
    </div>
</template>

<script>
import iconfont1 from '../../images/iconfont1.png'
import iconfont2 from '../../images/iconfont2.png'
import iconfont3 from '../../images/iconfont3.png'
import iconfont4 from '../../images/iconfont4.png'

export default {
    data(){
        return{
            show:false,
            flag:0,
            sideData:[
                {icon: iconfont1, name:'点菜系统', route:'/order'},
                {icon: iconfont2, name:'菜单二', route:'/nav2'},
                {icon: iconfont3, name:'菜单三', route:'/nav3'},
                {icon: iconfont4, name:'菜单四', route:'/nav4'}
            ]
        }
    },
    created(){
        this.$root.$on('showSide',()=>{
            this.leftMove();
        });
        //设置进入当前路由的左侧菜单栏状态
        let _route = this.$route.path;
        this.flag = (()=>{
            let flag;
            this.sideData.forEach(function(e,index){
                if(e.route==_route){
                    flag = index;
                }
            })
            return flag;
        })();      
    },
    methods:{
        leftMove(){
            this.show=!this.show;
        },
        Active(index){
            this.flag = index;
            this.leftMove();
        }
    }
}
</script>

<style lang="scss">
    @import '../../style/common/sidebar.scss'
</style>
