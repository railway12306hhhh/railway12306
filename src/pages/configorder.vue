<template>
  <div class="config">
      <div class="head">
          <div class="order">
              <span class="returnUp"></span>
              <div class="orderfinish">
                  <p>确认订单</p>
              </div>
              <div class="orderchange">
                  <span>退改说明</span>
              </div>
          </div>
          <div class="day">
              <div class="beforeday">
                  <span>前一天</span>
              </div>
              <div class="cal">
                   <van-cell  :value="date" @click="show = true" />
                   <van-calendar v-model="show" @confirm="onConfirm" />
                   <span class="iconfont icon-rili"></span>
              </div>
             
              <div class="afterday">
                  <span>后一天</span>
              </div>
          </div>
      </div>
      <div class="ticketmsg">
          <div class="go">
              <div class="ticket">
                  <span class="goarea">兰州</span>
                  <h4>05：10</h4>
                  <i>始</i><span class="tickestart">天津</span>
              </div>
              <div class="carcount">
                  <p><span class="iconfont icon-geren"></span><span class="trainnum">k855</span></p>
                  <img src="../assets/configorder/arrow.png">
                  <p>12分钟</p>
              </div>
              <div class="destination">
                  <div>兰州西</div>
                  <h4>05：22</h4>
              </div>
          </div>
      </div>
      <div class="sitetype">
          <ul>
              <li v-for="(item,index) in sitelist" :key="index" :class='{bgc:index==isactive}' @click='fn(index)'>
                <p>{{item.site}}</p>
                <p>{{item.count}}</p>
                <p class="ticketprice">{{item.price}}</p>
              </li>
          </ul>
      </div>
      <div class="idmsg">
          <p class="personid"><span class="name">迪麗熱巴</span>&nbsp;<span>6236***********352</span></p>
          <p class="audlt">學生票</p>
          <p class="hardsite">硬臥</p>
          <p class="shanchu"><img src="../assets/configorder/shanchu.png" alt=""></p>
      </div>
      <div class="addperson">
          <div><img src="../assets/configorder/add2.png"><span class="trainer">选择乘客</span></div>
          <div><img src="../assets/configorder/add1.png"><span class="trainer">选择受让人</span></div>
      </div>
      <p class="orderknow">提交订单表示已阅读并同意<span>《铁路互联网购票须知》《服务条款》</span></p>
      <div class="handon">提交订单</div>
      <div class="tip">
          <p class="tiptitle"><span class="iconfont icon-tishi"></span><span>温馨提示：</span></p>
          <p class="tipword">1显示的卧铺票价为上铺票价，供您参考。具体票价以您确认支付时实际购买的铺别票价为准。</p>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name:"configorder",
  data() {
    return {
      date: '12/10',
      show: false,
      isactive:0,
      sitelist:[
          {
              site:"软卧",
              count:"16",
              price:"￥18"
          },
           {
              site:"硬卧",
              count:"16",
              price:"￥54"
          },
          {
              site:"硬座",
              count:"有",
              price:"￥54"
          },
          {
              site:"无座",
              count:"无",
              price:"￥54"
          }
      ] 
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    fn (index) {
      //点击切换 变量的值 赋值为 index
      this.isactive=index;
    }
  }
};
</script>

<style scoped>
@import url("../assets/minePage/iconfont.css");
.config{
    background-color: #f0eff4;
    width: 100%;
    height: 100vh;
}
.head{
    height: 0.84rem;
    width: 100%;
    background-color: #3b99fb;
}
.order{
    width: 90%;
    height: 0.47rem;
    margin-left: 5%;
    line-height: 0.47rem;
    display: flex;
    justify-content: space-between;
    color: #edf3f8;
}
.order .returnUp{
    position: absolute;
    width: 12px;
    height: 18px;
    top: 15px;
    left: 16px;
    background: url(../assets/TrainInfo/leftArrow.png) no-repeat;
    background-size: 100% 100%;
}
.order .orderfinish{
    margin-left: 125px;
}
.beforeday,.afterday{
    font-size: 0.2rem;
}
.orderchange span{
font-size: 0.12rem;
}
.day{
     width: 90%;
    height: 0.37rem;
    margin-left: 5%;
    line-height: 0.37rem;
    display: flex;
    justify-content: space-between;
    color: #edf3f8;
    display: flex;
    justify-content: space-between;
}
.van-cell__value{
width:1.46rem;
height:0.32rem;

}
.van-cell{
padding: 0;
}
.cal{
    position: relative;
}
.icon-rili{
    position: absolute;
    left: 1rem;
    top: -0.02rem;
    color: #3b99fb;
}
.van-cell__value--alone {
    color: #3b99fb;
    text-indent: 2em;
    line-height: 0.32rem;
}
.van-calendar{
    color: black;
}
.ticketmsg{
    width: 100%;
    height: 0.85rem;
    border-bottom: 0.01rem dotted #ececec;
     background-color: #fff;
}
.go{
    width: 80%;
    height: 0.85rem;
    display: flex;  
    justify-content: space-between;
    margin-left: 10%;
   
}
.ticket{
    width: 0.57rem;
    height: 0.85rem;
    text-align: center;
}
.ticket h4{
    margin-bottom: 0.05rem;
}
.goarea{
    display: inline-block;
    width: 0.57rem;
    height: 0.36rem;
    line-height: 0.36rem;
    text-align: center;
}
.ticket i{
    font-style: normal;
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    background-color: #ea862a;
    color: #fff;
    font-size: 0.14rem;
}
.tickestart{
    display: inline-block;
    width: 0.32rem;
    height: 0.14rem;
    font-size: 0.14rem;
    margin-left: 0.02rem;
}
.carcount{
    width: 1.2rem;
    height: 0.85rem;
    text-align: center;
}
.carcount p{
    margin-top: 0.1rem;
}
.icon-geren{
    font-size: 0.14rem;
    color:#3b99fb;
    margin-right: 0.07rem;
}
.carcount img{
    width: 1.2rem;
    height: 0.08rem;
}
.destination{
    margin-top: 0.1rem;
    width: 0.54rem;
    height: 0.85rem;
}
.destination h4{
    margin-top: 0.16rem;
}
.sitetype{
    width: 100%;
    height: 0.72rem;
    background-color: #fff;
}
.sitetype ul{
    display: flex;
    width: 92%;
    height: 0.72rem;
    margin-left: 4%;
    justify-content: space-between;
}
.sitetype ul li{
    width: 0.8rem;
    height: 0.62rem;
    margin-top: 0.06rem;
    text-align: center;
    font-size: 0.14rem;
}
.ticketprice{
    color: #dedede;
}
.idmsg{
    width:100%;
    height: 0.3rem;
    line-height: 0.3rem;
    margin-bottom: 0.01rem;
    background-color: #fff;
    display: flex;
    margin-top: 0.07rem;
    margin-bottom: 0.01rem;
}
.personid{
    width: 1.87rem;
    margin-left: 0.09rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
}
.audlt{
    font-size: 0.12rem;
    color: #61aaf6;
    margin-right: 0.18rem;
}
.hardsite{
    font-size: 0.12rem;
    color: #61aaf6;
    margin-right: 0.3rem;
}
.shanchu{
    width: 0.15rem;
    height: 0.3rem;
}
.shanchu img{
    width: 0.15rem;
    height: 0.17rem;
    margin-top: 0.08rem;
}
.addperson{
    width: 100%;
    height: 0.46rem;
    display: flex;
}
.addperson div:nth-of-type(1){
    width: 49%;
    margin-right: 1%;
    height: 0.46rem;
    text-align: center;
    background-color: #fff;
}
.addperson div:nth-of-type(2){
    width: 50%;
    height: 0.46rem;
    text-align: center;
    background-color: #fff;
}

.addperson div img{
    width: 0.18rem;
    height: 0.18rem;
    margin-right: 0.08rem;
    margin-top: 0rem;
    vertical-align: middle;
}
.trainer{
    margin-top: 0.18rem;
    display: inline-block;
    font-size: 0.16rem;
}
.orderknow{
    height: 0.3rem;
    font-size: 0.11rem;
    color: #8f8e93;
    line-height: 0.3rem;
    margin-left: 0.1rem;
}
.orderknow span{
    color: #5fabf9;
}
.handon{
    width: 80%;
    margin-left: 10%;
    height: 0.42rem;
    border-radius: 0.05rem;
    background-color: #3b99fb;
    color: #fff;
    text-align: center;
    line-height: 0.42rem;
    margin-top: 0.1rem;
}
.tip{
    height: 0.74rem;
    border: 0.02rem dashed #dcdbe0;
    margin-top: 0.3rem;
    width: 90%;
    margin-left: 5%;
}
.tiptitle{
    width: 0.9rem;
    height: 0.2rem;
    font-size: 0.14rem;
    margin-top: -0.1rem;
    background-color: #f0eff4;
}
.icon-tishi{
    color: #3b99fb;
}
.tipword{
    font-size: 0.11rem;
    color: #c3c2c7;
    margin-top: 0.26rem;
}
.bgc{
    background-color: orange;
}
</style>