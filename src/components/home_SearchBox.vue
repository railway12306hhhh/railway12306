<template>
  <div class="searchBox">
    <div class="title">
      <h4>尊敬的用户</h4>
      <p>开通积分会员享积分兑换</p>
    </div>
    <div class="inputBox">
      <span></span>
      <input type="text">
    </div>
    <ul>
      <li>高铁订餐</li>
    </ul>
    <p>
      <span></span>
      <img src="../assets/homePage/saoyisao.png" alt="">
    </p>
    <p>
      <span></span>
      <img src="../assets/homePage/news.png" alt="">
    </p>
  </div>
</template>

<script>
export default {
  name: 'searchBox'
}
</script>

<style scoped>
.searchBox{
  width: 3.36rem;
  height: 0.43rem;
  margin: 0 auto;
}
.searchBox .title{
  width: 1.52rem;
  height: 0.43rem;
  float: left;
  color: #ffffff;
  text-indent: 0.02rem;
}
.title h4{
  height: 0.23rem;
  font: 0.14rem/0.23rem "微软雅黑";
  background: url(../assets/homePage/vip.png) 0.75rem 0.05rem no-repeat;
  background-size: 0.14rem 0.14rem;
}
.title p{
  height: 0.2rem;
  font: 0.1rem/0.2rem "微软雅黑";
}
.searchBox .inputBox{
  width: 1.1rem;
  height: 0.27rem;
  margin: 0.08rem 0;
  float: left;
  color: #fff;
  border-radius: 0.135rem;
  overflow: hidden;
  opacity: .7;
  background-color: #666;
}
.inputBox span{
  display: block;
  height: 0.27rem;
  width: 0.27rem;
  float: left;
  background: url(../assets/homePage/magnifier.png) 0.07rem 0.07rem no-repeat;
  background-size: 0.14rem 0.14rem;
}
.inputBox input{
  border: none;
  width: 0.83rem;
  height: 0.27rem;
  background-color: transparent;
  font: 0.12rem/0.27rem "微软雅黑";
}
.searchBox ul{
  position: absolute;
  widows: 0.83rem;
  height: 0.27rem;
  left: 1.79rem;
  top: 0.08rem;
  color: #fff;
  font: 0.12rem/0.27rem "微软雅黑";
  overflow: hidden;
}
.searchBox ul li{
  widows: 0.83rem;
  height: 0.27rem;
}
.searchBox>p{
  width: 0.27rem;
  height: 0.27rem;
  margin-top: 0.08rem;
  margin-left: 0.1rem;
  border-radius: 50%;
  float: left;
  position: relative;
}
.searchBox>p span{
  display: block;
  width: 100%;
  height: 100%;
  background-color: #666;
  border-radius: 50%;
  opacity: .7;
}
.searchBox>p img{
  position: absolute;
  left: 0.05rem;
  top: 0.06rem;
  height: 0.16rem;
  width: 0.17rem;
}
</style>
