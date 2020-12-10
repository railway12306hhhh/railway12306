<template>
  <div id="TrainInfo">
    <div class="title">
        <div class="toForm">
            <router-link to="/home">
                <span class="returnUp"></span>
            </router-link>
            <p v-text="setOut+'<>'+arrive"></p>
            <span class="news"></span>
        </div>
        <div class="date">
            <p>前一天</p>
            <div class="dateDay">
                <p>12月07日  周一</p>
                <span></span>
            </div>
            <p>后一天</p>
        </div>
    </div>
    <trainList class="main" />
    <ul class="sort">
        <li>
            <img src="../assets/TrainInfo/bottomIcon1.png" alt="">
            <p>筛选</p>
        </li>
        <li>
            <img src="../assets/TrainInfo/bottomIcon2.png" alt="">
            <p>耗时最短</p>
        </li>
        <li class="actionLi">
            <img src="../assets/TrainInfo/bottomIcon3Action.png" alt="">
            <p>发时最早</p>
        </li>
        <li>
            <img src="../assets/TrainInfo/bottomIcon4.png" alt="">
            <p>显示票价</p>
        </li>
        <li>
            <img src="../assets/TrainInfo/bottomIcon5.png" alt="">
            <p>候补下单</p>
        </li>
    </ul>
  </div>
</template>

<script>
import trainList from '@/components/trainInfo_list.vue'

export default{
  name:"TrainInfo",
  data(){
    return {
        setOut:"北京",
        arrive:"西安"
    }
  },
  components:{
      trainList
  }
}
</script>
<style scoped>
#TrainInfo{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.title{
    width: 100%;
    height: 0.84rem;
    background-color: #3b99fb;
}
.title .toForm{
    height: 0.48rem;
    text-align: center;
    font: 0.18rem/0.48rem "微软雅黑";
    color: #fff;
}
.title span{
    display: block;
    position: absolute;
}
.title .returnUp{
    width: 0.12rem;
    height: 0.18rem;
    top: 0.15rem;
    left: 0.16rem;
    background: url(../assets/TrainInfo/leftArrow.png) no-repeat;
    background-size: 100% 100%;
}
.title .news{
    width: 0.23rem;
    height: 0.07rem;
    right: 0.16rem;
    top: 0.21rem;
    background: url(../assets/TrainInfo/threeRound.png) no-repeat;
    background-size: 100% 100%;
}
.title .date{
    height: 0.36rem;
    display: flex;
    justify-content: space-between;
}
.date>p{
    width: 0.8rem;
    height: 0.36rem;
    text-align: center;
    font: 0.14rem/0.36rem "微软雅黑";
    color: #fff;
}
.date>p:nth-of-type(1){
    opacity: .5;
}
.date .dateDay{
    width: 1.44rem;
    height: 0.31rem;
    background-color: #fff;
    border-radius: 0.03rem;
    text-indent: 0.16rem;
    font: 0.14rem/0.31rem "微软雅黑";
    color: #3e99f5;
    position: relative;
}
.date .dateDay span{
    position: absolute;
    width: 0.16rem;
    height: 0.16rem;
    background: url(../assets/TrainInfo/calendar.png) no-repeat;
    background-size: 100% 100%;
    top: 0.08rem;
    right: 0.12rem;
}
.main{
    flex: 1;
    overflow-y: scroll;
}
.main::-webkit-scrollbar{
    display: none;
}
.sort{
    height: 0.55rem;
    display: flex;
    border-top: 0.01rem solid #b4b2b2;
}
.sort li{
    width: 19%;
    height: 100%;
}
.sort li img{
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.13rem auto 0.04rem;
}
.sort li p{
    font: 0.12rem/0.12rem "微软雅黑";
    color: #5b5b5b;
    text-align: center;
}
.sort .actionLi p{
    color: #3f8ec5;
}
</style>