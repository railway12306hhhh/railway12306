<template>
    <ul class="bottom">
        <li>
            <router-link active-class="active" to="/home" class="bottomLink">
                <span class="iconfont icon-huoche"></span>
                <span>首页</span>
            </router-link>
        </li>
        <li>
            <router-link active-class="active" to="/maas" class="bottomLink">
                <span class="iconfont icon-hanglixiang"></span>
                <span>出行服务</span>
            </router-link>
        </li>
        <li>
            <router-link active-class="active" to="/arder" class="bottomLink">
                <span class="iconfont icon-dingdanyichenggong"></span>
                <span>订单</span>
            </router-link>
        </li>
        <li>
            <router-link active-class="active" to="/vip" class="bottomLink">
                <span class="iconfont icon-huiyuan"></span>
                <span>铁路会员</span>
            </router-link>
        </li>
        <li>
            <router-link active-class="active" to="/mine" class="bottomLink">
                <span class="iconfont icon-wode2"></span>
                <span>我的</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
        name:"Bottom"
    }
</script>
<style src="@/assets/bottonSide/iconfont.css"></style>
<style scoped>
.bottom{
    width: 100%;
    height: 0.6rem;
    background-color:#ffff;
    display: flex;
}
.bottom li{
    width: 25%;
    height: 0.5rem;
    text-align: center;
    list-style: none;
}
.bottomLink{
    color: #000;
    display: block;
    width: 100%;
    height: 100%;
}
.bottom span{
    display: block;
    font-size: 0.14rem;
}
.bottom .iconfont{
    margin-bottom: 0.04rem;
    margin-top: 0.07rem;
    font-size: 0.2rem;
}
.bottom .active{
  color:rgb(98, 149, 216);
}
</style>

