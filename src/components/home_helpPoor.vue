<template>
  <div class="helpPoor">
    <h3>扶贫商城</h3>
    <p>更多></p>
    <ul>
        <li v-for="(Mail,index) in Mails" :key="'Mail'+index">
            <img :src="Mail.img" alt="">
            <p>{{Mail.commodityName}}</p>  
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'helpPoor',
  data() {
      return {
          Mails:[
              {
                  commodityName:"河南扶贫馆",
                  img:require("@/assets/homePage/heloPoorMailLiImg1.png")
              },
              {
                  commodityName:"陕西扶贫馆",
                  img:require("@/assets/homePage/heloPoorMailLiImg2.png")
              },
              {
                  commodityName:"湖北扶贫馆",
                  img:require("@/assets/homePage/heloPoorMailLiImg3.png")
              },
              {
                  commodityName:"宁夏扶贫馆",
                  img:require("@/assets/homePage/heloPoorMailLiImg4.png")
              }
          ]
      }
  },
}
</script>

<style scoped>
.helpPoor{
    height: 2.15rem;
    width: 3.36rem;
    margin: 0 auto;
}
.helpPoor h3{
    height: 0.56rem;
    width: 0.9rem;
    float: left;
    font: normal bold 0.2rem/0.56rem "微软雅黑";
}
.helpPoor>p{
    float: right;
    height: 0.56rem;
    font: 0.12rem/0.56rem "微软雅黑";
}
.helpPoor ul{
    height: 1.59rem;
    width: 3.36rem;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
}
.helpPoor ul::-webkit-scrollbar{
    display: none;
}
.helpPoor ul li{
    width: 1.26rem;
    height: 1.59rem;
    margin-right: 0.1rem;
}
.helpPoor ul li:last-of-type{
    margin-right: 0;
}
.helpPoor ul li img{
    width: 1.26rem;
    height: 1.26rem;
}
.helpPoor ul li p{
    height: 0.33rem;
    text-align: center;
    font: 0.12rem/0.33rem "微软雅黑";
}
</style>
