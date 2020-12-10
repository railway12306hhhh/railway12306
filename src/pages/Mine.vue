<template>
    <div class="mine">
        <div class="head">
            <p>
                我的12306
            </p>
            <div>
                <span><img src="@/assets/icon/news.jpg"></span>
            </div>
        </div>
        <div class="container">
             <ul class="msg">
                <li>
                    <router-link to="/mineList" class="toMineList">
                        <span class="sl">迪丽热巴</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </router-link>
                </li>
                <li>
                     <span class="sl">人脸核验</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li >
                     <span class="sl">手机核验<i>(已通过核验)</i></span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li class="last">
                     <span class="sl">我的餐饮·特产</span>
                     <span class="iconfont icon-xiangyou"></span> 
                </li>
            </ul>
            <ul class="nav">
                 <li>
                    <span class="sl">出行向导</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li>
                     <span class="sl">温馨服务</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li class="last">
                     <span class="sl">信息服务</span><span class="iconfont icon-xiangyou"></span>
                </li>
            </ul>
            <ul class="train">
                <li class="last">
                    <span class="sl">旅行休闲</span><span class="iconfont icon-xiangyou"></span>
                </li>
            </ul>
            <ul class="about">
                 <li>
                    <span class="sl">通知消息</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li>
                     <span class="sl">关于</span><span class="iconfont icon-xiangyou"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Mine"
}
</script>
<style src="@/assets/minePage/iconfont.css"></style>
<style scoped>
.mine{
    background-color: #f0eff4;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.mine .head{
    height:0.46rem;
    width: 100%;
    background-color: #3b99fb;
    color: #edf3f8;
    display: flex;
}
.head p{
    width: 0.94rem;
    height: 0.46rem;
    line-height: 0.46rem;
    margin-left: 1.33rem;
}
.head div{
    width: 0.22rem;
    height: 0.46rem;
    margin-left: 0.9rem;
}
.head div span{
    display: inline-block;
    width: 0.22rem;
    height: 0.22rem;
    margin-top: 0.12rem;
}
.head div span img{
    width: 0.22rem;
    height: 0.22rem;
}
.mine .container{
    width:100%;
    flex: 1;
    overflow-y: scroll;
    padding-top: 0.23rem;
}
.mine .container::-webkit-scrollbar{
    display: none;
}
.container .toMineList{
    display: block;
    width: 100%;
    height: 100%;
    color: #111111;
}
.container .msg{
    height: 1.98rem;
    width: 100%;
    background-color: #ffffff;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
}
.container .msg li,
.container .nav li,
.container .about li,
.container .train li,
.container .about li{
    width: 90%;
    margin-left: 5%;
    height: 0.485rem;
    line-height: 0.485rem;
    border-bottom: 0.01rem solid #e1e1e1;
    position: relative;
}
.container .msg li .sl,
.container .nav li .sl,
.container .train li .sl,
.container .about li .sl{
    margin-left: 0.2rem;
    font-size: 0.14rem;
    color: #111111;
}
.icon-xiangyou{
    font-size: 0.16rem;
    position: absolute;
    bottom: 0rem;
    right: 0.08rem;
}
.msg li i{
    font-style: normal;
    color: #2f863c;
}
.nav{
    height: 1.495rem;
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.23rem;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
}
.train{
    height: 0.485rem;
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.23rem;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
}
.about{
    height: 0.97rem;
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.23rem;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
}

.train li{
    width: 90%;
    margin-left: 5%;
    height: 0.485rem;
    line-height: 0.485rem;
    position: relative;
}

</style>