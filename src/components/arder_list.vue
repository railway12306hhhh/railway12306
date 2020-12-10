<template>
    <div class="list">
        <ul>
            <li>
                <div>
                    <span class="s1 iconfont icon-canyin"></span>
                </div>
                <span>餐饮·特产</span>
            </li>
            <li>
                <div>
                    <span class="s2 iconfont icon-baoxian"></span>
                </div>
                <span>保险订单</span>
            </li>
            <li>
                <div>
                    <span class="s3 iconfont icon-xiuxiting"></span>
                </div>
                <span>休息厅·接送</span>
            </li>
            <li>
                <div>
                    <span class="s4 iconfont icon-fangzi"></span>
                </div>
                <span>酒店订单</span>
            </li>
            <li>
                <div>
                    <span class="s5 iconfont icon-jiaotongchuhang-jiesongji"></span>
                </div>
                <span>空铁联运订单</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"list",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.list li{
    height: 0.5rem;
    line-height:0.5rem;
}
.list li div{
    width: 0.6rem;
    height: 0.5rem;
    float: left;
}
.list div span{
    width: 0.27rem;
    height: 0.27rem;
    border-radius: 0.05rem;
    display: block;
    margin-left: 0.15rem;
    margin-top: 0.12rem;
    color: #fff;
    line-height: 0.27rem;
    text-align: center;
}
.s1{
    background-color: #87dd60;
}
.s2{
    background-color: #f6824b;
}
.s3{
    background-color: #7ce5e2;
}
.s4{
    background-color: #b9e986;
}
.s5{
    background-color: #79b8ff;
}
.list li>span{
    font-size: 0.14rem;
    color: #282828;
    float: right;
    width: 3rem;
    border-bottom:0.01rem solid #ededef ;
}

</style>