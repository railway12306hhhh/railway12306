<template>
  <div class="HotelReservation clearfix">
    <h3>酒店预订</h3>
    <p>更多></p>
    <ul class="clearfix">
        <li v-for="(hotel,index) in hotelList" :key="'li'+index" :class="{mgl10:index%2}">
            <img :src="hotel.imgLink" alt="">
            <h3 v-text="hotel.hotelName"></h3>
            <p class="publicity" v-text="hotel.hotelPublicity"></p>
            <p class="minPrice">￥<span>{{hotel.minPrice}}</span>起</p>
        </li>
    </ul>
    <div class="lookMore">查看更多酒店></div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'HotelReservation',
  data() {
      return {
         hotelList:[
             {
                hotelName:"国力O酒店（西安太奥广场店）",
                hotelPublicity:"大促优惠",
                minPrice:209.0,
                imgLink:"/homePage/hotelImg1.png"
            },
             {
                 hotelName:"全季酒店（西安龙首原地铁站店）",
                 hotelPublicity:"舒适型大促优惠",
                 minPrice:"267.0",
                 imgLink:"/homePage/hotelImg2.png"
             },
             {
                 hotelName:"尚品怡家酒店（西安高新外事学院店）",
                 hotelPublicity:"经济型大促优惠",
                 minPrice:"188.0",
                 imgLink:"/homePage/hotelImg3.png"
             },
             {
                 hotelName:"锦江之星（西安幸福路建筑科技大学华清学院店）",
                 hotelPublicity:"经济型大促优惠",
                 minPrice:"122.0",
                 imgLink:"/homePage/hotelImg4.png"
             },
             {
                 hotelName:"如家派柏·云酒店（西安长安广场店）",
                 hotelPublicity:"经济型大促优惠|双十二大型优惠",
                 minPrice:"90.0",
                 imgLink:"/homePage/hotelImg5.png"
             },
             {
                 hotelName:"宜必思酒店（西安临潼兵马俑景区房",
                 hotelPublicity:"舒适型大促优惠",
                 minPrice:"138.0",
                 imgLink:"/homePage/hotelImg6.png"
             },
             {
                 hotelName:"百事特威酒店（西安曲江大雁塔店）",
                 hotelPublicity:"高档",
                 minPrice:"329.0",
                 imgLink:"/homePage/hotelImg7.png"
             },
             {
                 hotelName:"汉庭酒店（西安高新区大都荟店）",
                 hotelPublicity:"经济型大促优惠",
                 minPrice:"174.0",
                 imgLink:"/homePage/hotelImg8.png"
             }
         ]
      }
  },
  created() {
      axios({
          url:"/api/getRecomHotel",
        //   method:'post',
        //   headers: {'Content-Type': 'application/json'},
        //   data:{
        //     userAccount:"我的钱呀",
        //     userPwd:"a123456"
        //     }
        params:{
            city:"西安"
        }
      }).then(res=>{
              console.log(res.data.info);
          }
      )
  }
}
</script>

<style scoped>
.HotelReservation{
    width: 3.36rem;
    margin: 0 auto;
    padding-bottom: 0.6rem;
    position: relative;
}
.HotelReservation>h3{
    height: 0.56rem;
    width: 0.9rem;
    float: left;
    font: normal bold 0.2rem/0.56rem "微软雅黑";
}
.HotelReservation>p{
    float: right;
    height: 0.56rem;
    font: 0.12rem/0.56rem "微软雅黑";
}
.HotelReservation ul{
    width: 3.36rem;
    float: left;
}
.HotelReservation li{
    width: 1.63rem;
    height: 2.73rem;
    float: left;
}
.HotelReservation .mgl10{
    margin-left: 0.1rem;
}
.HotelReservation li img{
    widows: 1.63rem;
    height: 1.63rem;
}
.HotelReservation li h3{
    font: normal bold 0.13rem/0.13rem "微软雅黑";
    margin: 0.13rem 0 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.HotelReservation li .publicity{
    font: 0.1rem/0.1rem "微软雅黑";
    color: #656565;
    margin-bottom: 0.15rem;
}
.HotelReservation li .minPrice{
    font: 0.1rem/0.14rem "微软雅黑";
    color: #ea382b;
}
.HotelReservation li .minPrice span{
    font: normal bold 0.14rem/0.14rem "微软雅黑";
}
.lookMore{
    margin: 0 auto;
    width: 1.08rem;
    height: 0.26rem;
    border: 0.01rem solid #f0f0f0;
    border-radius: 0.13rem;
    color: #000;
    font: 0.12rem/0.26rem "微软雅黑";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.2rem;
    text-align: center;
}
</style>
