import Vue from 'vue';
import Router from "vue-router";

import VueRouter from 'vue-router';

import facade from "@/pages/Facade";
import home from "@/pages/home";
import maas from "@/pages/Maas";
import mine from "@/pages/Mine";
import pwdChange from "@/pages/Pwdchange";
import arder from "@/pages/Arder";
import vip from "@/pages/Vip";
import mineList from "@/pages/MineList";
import trainInfo from "@/pages/TrainInfo";
import configorder from "@/pages/configorder";
import personalData from "@/pages/personalData";
Vue.use(Router);

let routes = [
    {
        path:'/',
        component:facade,
        redirect:"/home"
    },
    {
        path:'/facade',
        component:facade,
        children:[
            {path:'/home',component:home},
            {path:'/maas',component:maas},
            {path:'/arder',component:arder},
            {path:'/vip',component:vip},
            {path:'/mine',component:mine}
        ]
    },
    {path:'/mineList',component:mineList},
    {path:'/pwdChange',component:pwdChange},
    {path:'/trainInfo',component:trainInfo},
    {path:'/configorder',component:configorder},
    {path:'/personalData',component:personalData}
]

let router = new VueRouter({
    routes,
    mode:'history'
});

export default router;

