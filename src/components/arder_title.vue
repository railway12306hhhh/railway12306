<template>
    <div class="title">
        <h2>火车票订单<a>温馨提示</a></h2>
    </div>
</template>


<script>
export default {
    name:"atitle",
    data(){
        return{

        }
    }
}
</script>


<style scoped>
.title{
    height: 0.45rem;
    margin-left:0.16rem;
    border-bottom: 0.01rem solid #f0f0f0;
}
.title h2{
    font-size: 0.16rem;
    line-height: 0.4rem;
}
.title a{
    font-size: 0.12rem;
    color: #3494fb;
    float: right;
    margin-right: 0.15rem;
}
</style>