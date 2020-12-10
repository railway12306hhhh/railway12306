<template>
    <div class="top">
        <h1>订单
        <span class="iconfont icon-xiaoxi"></span>
        </h1>
    </div>
</template>

<script>
    export default{
        name:"top",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.top{
    width:100%;
    height:0.5rem;
    background-color: #3b99fb;
}
.top h1{
    width: 100%;
    font-size: 0.18rem;
    color: #fff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: normal;
    position: relative;
}
.top span{
    position: absolute;
    right: 0.15rem;
    font-size: 0.2rem;
}
</style>