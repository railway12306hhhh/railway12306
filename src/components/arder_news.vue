<template>
    <div class="news">
        <dl>
            <dt><span class="iconfont icon-dingdangdaiyinxingqiashouquan"></span></dt>
            <dd>未完成</dd>
        </dl>
        <dl>
            <dt><span class="iconfont icon-dingdan"></span></dt>
            <dd>已支付</dd>
        </dl>
        <dl>
            <dt><span class="iconfont icon-ziyuan35"></span></dt>
            <dd>候补车票</dd>
        </dl>
        <dl>
            <dt><span class="iconfont icon-suitcase"></span></dt>
            <dd>本人车票</dd>
        </dl>
    </div>
</template>

<script>
    export default{
        name:"news",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.news{
    height:0.78rem;
    border-bottom: 0.01rem solid #f0f0f0;
    /* background-color: #3b99fb; */
    padding: 0 0.25rem;
    display: flex;
    justify-content: space-between;
}
.news dl{
    width: 0.48rem;
    height: 0.78rem;
    text-align: center;
}
.news dt{
    margin: 0.15rem 0 0.1rem 0;
}
.news dt span{
    font-size: 0.22rem;
    color: #1489f9;
}
.news dd{
    font-size: 0.12rem;
    color: #3f3f3f;
}
</style>