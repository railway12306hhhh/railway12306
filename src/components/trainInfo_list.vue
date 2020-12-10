
<template>
    <ul class="trainList">
        <li v-for="(trainInfo,index) in trainListInfo" :key="'train'+index">
            <div class="trip">
                <p>{{trainInfo.trainNum}}</p>
                <div class="setOut">
                    <span>始</span>
                    <p class="setOutStation">{{trainInfo.setOutStation}}</p>
                    <p class="setOutTime">{{trainInfo.setOutTime}}</p>
                </div>
                <div class="tripTime">
                    <img src="@/assets/TrainInfo/tripTime.png" alt="">
                    <p>16分钟</p>
                </div>
                <div class="arrive">
                    <span>终</span>
                    <p class="arriveStation">{{trainInfo.arriveStation}}</p>
                    <p class="arriveTime">{{trainInfo.arriveTime}}</p>
                </div>
            </div>
            <div class="votesNum">
                <p>
                    <span>软卧</span>:
                    <span>{{trainInfo.softSleeperNum}}</span>
                </p>
                <p>
                    <span>硬卧</span>:
                    <span>{{trainInfo.hardSleeperNum}}</span>
                </p>
                <p>
                    <span>硬座</span>:
                    <span>{{trainInfo.hardSeatNum}}</span>
                </p>
                <p>
                    <span>软卧</span>:
                    <span>{{trainInfo.standNum}}</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>


export default{
  name:"trainInfo_top",
  data(){
    return {
        trainListInfo:[{
            trainNum:"G437",
            setOutStation:"西安",
            setOutDay:"2020-12-03",
            setOutTime:"06:26",
            arriveStation:"北京",
            arriveTime:"11:02",
            softSleeperNum:"3",//软卧数量
            softSleeperPrice:"600.0",//软卧价格
            hardSleeperNum:"200",//硬卧数量
            hardSleeperPrice:"250",//硬卧价格
            hardSeatNum:"400",//硬座数量
            hardSeatPrice:"98",//硬座价格
            standNum:"0",//无座数量
            standPrice:"98"//无座价格
        },{
            trainNum:"G437",
            setOutStation:"西安",
            setOutDay:"2020-12-03",
            setOutTime:"06:26",
            arriveStation:"北京",
            arriveTime:"11:02",
            softSleeperNum:"3",//软卧数量
            softSleeperPrice:"600.0",//软卧价格
            hardSleeperNum:"200",//硬卧数量
            hardSleeperPrice:"250",//硬卧价格
            hardSeatNum:"400",//硬座数量
            hardSeatPrice:"98",//硬座价格
            standNum:"0",//无座数量
            standPrice:"98"//无座价格
        }]
    }
  }
}
</script>
<style scoped>
.trainList{
    background-color: #f0eff4;
}
.trainList li{
    background-color: #ffffff;
    margin-top: 0.1rem;
}
.trainList li .trip{
    display: flex;
    height: 0.66rem;
    padding-right: 0.3rem;
    justify-content: space-around;
}
.trip>p{
    font: 0.14rem/0.14rem "微软雅黑";
    padding-top: 0.18rem;
    padding-left: 0.16rem;
    box-sizing: border-box;
    width: 0.78rem;
    height: 0.66rem;
    font-weight: bold;
}
.trip .setOut,
.trip .arrive{
    width: 0.69rem;
    height: 0.49rem;
    padding-top: 0.17rem;
}
.trip .setOut span,
.trip .arrive span{
    display: block;
    float: left;
    width: 0.12rem;
    height: 0.12rem;
    background-color: #fd6900;
    font: 0.1rem/0.12rem "微软雅黑";
    text-align: center;
    color: #fff;
    border-radius: 0.02rem;
}
.trip .setOut .setOutStation,
.trip .arrive .arriveStation{
    float: left;
    width: 0.55 rem;
    height: 0.14rem;
    font: 0.12rem/0.14rem "微软雅黑";
    color: #000;
}
.trip .setOut .setOutTime,
.trip .arrive .arriveTime{
    float: left;
    margin-top: 0.09rem;
    height: 0.1rem;
    font: 0.1rem/0.1rem "微软雅黑";
    color: #238af3;
}
.trip .tripTime{
    width: 0.68rem;
    height: 0.66rem;
    padding-top: 0.1rem;
}
.trip .tripTime img{
    width: 0.68rem;
}
.trip .tripTime p{
    font-size: 0.12rem;
    line-height: 0.12rem;
    color: #b0b0b0;
    text-align: center;
    margin-top: 0.06rem;
}

.trainList li .votesNum{
    display: flex;
    justify-content: space-between;
    padding: 0 0.24rem;
    flex-wrap: wrap;
}
.votesNum p{
    flex-shrink: 1;
    width: 30%;
    height: 0.28rem;
    font: 0.12rem/0.28rem "微软雅黑";
    color: #333333;
}
</style>