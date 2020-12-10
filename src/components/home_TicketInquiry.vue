<template>
  <div class="TicketInquiry">
    <div class="choiceStation">
        <p>西安</p>
        <img src="../assets/homePage/stationReverse.png" alt="">
        <p>北京</p>
    </div>
    <p class="setOutDay">
        12月4号 <span>周四</span>
    </p>
    <div class="isStuOrUrgent">
        <label>
            只看高铁/快车
            <input type="checkbox">
        </label>
        <label>
            学生票
            <input type="checkbox">
        </label>
    </div>
    <div class="queryButton">
        <router-link to="trainInfo" class="toTrainInfo">
            查询车票
        </router-link>
    </div>
    <div class="historicalRecords">
        <p>北京-西安</p>
        <p>银川-西安</p>
        <p>清楚历史</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketInquiry',
  
}
</script>

<style scoped>
.TicketInquiry{
    width: 2.9rem;
    height: 2.45rem;
    margin: 0 auto;
    padding: 0 0.23rem;
    box-shadow: 0rem 0rem 0.06rem #6e6a6a;
    margin-bottom: 0.13rem;
}
.choiceStation{
    display: flex;
    widows: 100%;
    height: 0.6rem;
    justify-content: space-between;
    border-bottom: 0.02rem solid #f9f9f9;
}
.choiceStation p{
    height: 0.6rem;
    width: 0.5rem;
    font: 0.22rem/0.6rem "微软雅黑";
}
.choiceStation p:last-of-type{
    text-align: right;
}
.choiceStation img{
    width: 0.24rem;
    height: 0.24rem;
    margin-top: 0.18rem;
}
.setOutDay{
    height: 0.57rem;
    font: 0.18rem/0.57rem "微软雅黑";
    border-bottom: 0.02rem solid #f9f9f9;
}
.setOutDay span{
    display: inline-block;
    font-size: 0.12rem;
    text-indent: 0.16rem;
    color: #999999;
}
.isStuOrUrgent{
    height: 0.46rem;
    font: 0.12rem/0.46rem "微软雅黑";
}
.isStuOrUrgent label{
    margin-right: 0.21rem;
}
.isStuOrUrgent label input{
    vertical-align: text-bottom;
    width: 0.12rem;
    height: 0.12rem;
}
.queryButton{
    height: 0.45rem;
    background-color: #3b99fb;
    text-align: center;
    font: 0.16rem/0.45rem "微软雅黑";
}
.queryButton .toTrainInfo{
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}
.historicalRecords{
    height: 0.34rem;
    font: 0.12rem/0.34rem "微软雅黑";
    color: #9e9e9e;
}
.historicalRecords p{
    float: left;
    margin-right: 0.12rem;
}
.historicalRecords p:last-of-type{
    float: right;
    margin-right: 0.1rem;
}
</style>
