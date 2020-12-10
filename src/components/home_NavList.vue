<template>
    <div class="NavList">
        <ul v-for="(Lis,index) in navList" :key="'Ul'+index">
            <li v-for="(li,index) in Lis" :key="'li'+index">
                <img :src="li.img" alt="">
                <p>{{li.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'TicketInquiry',
  data() {
    return {
      navList:[]
    }
  },
  created() {
      this.navList = [
          {
          Li1:{
              title:"车站大屏",
              img:require("@/assets/homePage/navListIcon1.png")
          },
          li2:{
              title:"时刻表",
              img:require("@/assets/homePage/navListIcon2.png")
          },
          li3:{
              title:"铁路e卡通",
              img:require("@/assets/homePage/navListIcon3.png")
          },
          li4:{
              title:"扶贫商城",
              img:require("@/assets/homePage/navListIcon4.png")
          }
        },
        {
          Li1:{
              title:"空铁联运",
              img:require("@/assets/homePage/navListIcon5.png")
          },
          li2:{
              title:"约车",
              img:require("@/assets/homePage/navListIcon6.png")
          },
          li3:{
              title:"酒店住宿",
              img:require("@/assets/homePage/navListIcon7.png")
          },
          li4:{
              title:"出行保险",
              img:require("@/assets/homePage/navListIcon8.png")
          }
        },
        {
          Li1:{
              title:"温馨服务",
              img:require("@/assets/homePage/navListIcon9.png")
          },
          li2:{
              title:"餐饮·特产",
              img:require("@/assets/homePage/navListIcon10.png")
          },
          li3:{
              title:"奔腾有礼",
              img:require("@/assets/homePage/navListIcon11.png")
          },
          li4:{
              title:"更多推荐",
              img:require("@/assets/homePage/navListIcon12.png")
          }
        }
      ]
  },
}
</script>

<style scoped>
.NavList{
    width: 3.36rem;
    margin: 0 auto;
}
.NavList ul{
    height: 0.7rem;
    width: 3.36rem;
    display: flex;
    justify-content: space-between;
}
.NavList ul li{
    width: 0.66rem;
    height: 0.7rem;
}
.NavList ul li img{
    display: block;
    width: 0.27rem;
    height: 0.27rem;
    margin: 0.12rem auto 0.08rem;
}
.NavList ul li p{
    text-align: center;
    font: 0.1rem/0.1rem "微软雅黑";
}
</style>
