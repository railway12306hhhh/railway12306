<template>
  <div id="vip">
    <div id="top">
      <h3>铁路会员</h3>
      <img class="top_img" src="../assets/Vip_img/icon.png" alt />
    </div>
    <div class="banner"></div>
    <div class="footer">
      <ul class="footer_box" >
        <li class="box1 box2 li1"><div class="libox1"><img src="../assets/Vip_img/1.png" alt=""><p>会员信息</p></div></li>
        <li class="box1 li2"><div class="libox2"><img src="../assets/Vip_img/2.png" alt=""><p>我的积分</p></div></li>
        <li class="box2 box3 li3"><div class="libox3"><img src="../assets/Vip_img/3.png" alt=""><p>受让人</p></div></li>
        <li class="box3 li4"><div class="libox4"><img src="../assets/Vip_img/4.png" alt=""><p>消费密码</p></div></li>
      </ul>
      <div class="last"><img src="../assets/Vip_img/last.png" alt=""><a href="" class="a1">会员需知</a><a class="a2" href="">会员手册</a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bottom"
  //   data() {}
};
</script>
<style scoped>
#vip {
  display: flex;
  flex-direction: column;
  background-color: #f0eff4;
  height: 100%;
}
#top {
  height: 40px;
  background-color: #3b99fb;
  display: flex;
}
h3 {
  font-size: 0.17rem;
  color: white;
  font-weight: normal;
  line-height: 0.4rem;
  margin: auto;
}
.top_img {
  width: 0.19rem;
  top: 0.13rem;
  height: 0.17rem;
  right: 0.16rem;
  position: absolute;
}
.banner {
  width: 100%;
  height: 1.96rem;
  background-image: url(../assets/Vip_img/banner.png);
  background-size: 3.6rem 1.96rem;
}
.footer {
  flex: 1;
  width: 100%;
  background-color: #f0eff4;
  height: 366px;
  overflow: hidden;
}
.footer_box {
  width: 325px;
  height: 261px;
  background-color: #fff;
  margin:19px auto;
  display:flex ;
  flex-wrap: wrap;
}
.footer_box li{
    width: 139px;
    height: 116px;
    /* background-color: violet; */
}
.footer_box .box1{
    margin-top: 16px;
}
.footer_box .box2{
    margin-left: 24px;
}
.footer_box .box3{
    margin-top: -13px;
}
li{
    padding: 0;
    margin: 0;
    
}
.li1{
    border-right: 1px solid #f2f2f2;
}
/* .li2{
    border-bottom: 1px solid #f2f2f2;
} */

.li3{
    border-top: 1px solid #f2f2f2;
}
.li4{
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
}
.footer_box img{
    width: 50px;
    height: 50px;
}
.footer_box div{
    text-align: center;
    width: 56px;
}
.footer_box p{
    font-size: 12px;
    color: #444444;
    margin-top: 7px;
}
.libox1{
    margin-left: 30px;
    margin-top: 15px;
}
.libox2{
    margin-left: 54px;
    margin-top: 15px;
}
.libox3{
    margin-left: 30px;
    margin-top: 27px;
}
.libox4{
    margin-left: 54px;
    margin-top: 27px;
}
.last{
  width: 3.25rem;
  margin: auto;
  margin-top: -0.16rem;
}
.last img{
  width: 0.15rem;
  height:0.15rem;
}
.last a{
  font-size: 0.12rem;
  color: #499ff9;
  text-decoration-line: underline;
}
.a1{
  margin-left: 0.04rem;
}
.a2{
  margin-left: 0.12rem;
}
</style>