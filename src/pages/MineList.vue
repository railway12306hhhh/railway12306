<template>
    <div class="minelist">
        <div class="head">
            <div>
                <router-link to="/mine" class="returnUp">
                    <img src="@/assets/minePage/leftArrow.png" alt="">
                </router-link>
            </div>
            <p>{{userName}} </p>
        </div>
        <div class="container">
             <ul>
                <li>
                    <router-link to="/personalData">
                        <span class="sl">个人资料</span>
                        <span class="iconfont icon-xiangyou"></span>
                    </router-link>
                </li>
                <li>
                     <span class="sl">学生机制查询</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li >
                     <span class="sl">乘车人</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li>
                    <router-link to="/pwdChange">
                        <span class="sl">密码修改</span>
                        <span class="iconfont icon-xiangyou"></span> 
                    </router-link>
                </li>
                <li>
                     <span class="sl">邮箱修改</span>
                     <span class="iconfont icon-xiangyou"></span> 
                </li>
                <li>
                     <span class="sl">邮箱验证</span>
                     <span class="iconfont icon-xiangyou"></span> 
                </li>
                <li>
                     <span class="sl">地址管理</span>
                     <span class="iconfont icon-xiangyou"></span> 
                </li>
            </ul>
            <ul>
                 <li>
                    <span class="sl">指纹登录</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li>
                     <span class="sl">通知设置</span><span class="iconfont icon-xiangyou"></span>
                </li>
                <li class="last">
                     <span class="sl">权限设置</span><span class="iconfont icon-xiangyou"></span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="sl">注销账户</span><span class="iconfont icon-xiangyou"></span>
                </li>
            </ul>
            <div class="exit">
                退出当前用户
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Mine",
    data() {
        return {
            userName:"用户名",
        }
    },
}
</script>
<style src="@/assets/minePage/iconfont.css"></style>
<style scoped>
.minelist{
    background-color: #f0eff4;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.minelist .head{
    height:0.46rem;
    width: 100%;
    background-color: #3b99fb;
    color: #edf3f8;
    display: flex;
}
.head p{
    width: 0.82rem;
    height: 0.46rem;
    line-height: 0.46rem;
    margin-left: 1rem;
}
.head div{
    width: 0.44rem;
    height: 0.46rem;
    text-align: center;
    line-height: 0.46rem;
}
.head div img{
    display: block;
    height: 0.2rem;
    margin-top: 13px;
    margin-left: 13px;
}
.minelist .container{
    width:100%;
    flex: 1;
    overflow-y: scroll;
    padding-top: 0.23rem;
    padding-bottom: 0.23rem;
}
.minelist .container::-webkit-scrollbar{
    display: none;
}
.container ul{
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 0.23rem;
}
.container ul li{
    width: 90%;
    margin-left: 5%;
    height: 0.485rem;
    line-height: 0.485rem;
    border-bottom: 0.01rem solid #e1e1e1;
    position: relative;
}
.container ul li .sl{
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
.exit{
    width: 98%;
    height: 0.4rem;
    margin: 0 auto;
    font-size: 0.14rem;
    line-height: 0.4rem;
    background-color: #999999;
    text-align: center;
    color: black;
    border-radius: 3px;
}
</style>