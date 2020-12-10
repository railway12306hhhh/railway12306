<template>
    <div class="pwdChange">
        <div class="title">
            <div>
                <router-link to="/mineList" class="returnUp">
                    <img src="@/assets/minePage/leftArrow.png" alt="">
                </router-link>
            </div>
            <p>
                密码修改
             </p>
        </div>
        <div class="container">
            <div>
                <span class="span1">原 密 码</span>
                <input type="password" placeholder="请输入原密码" v-model="password">
            </div>
            <div>
                <span class="span1">新 密 码</span>
                <input type="password" placeholder="不少于6位" v-model="newpwd">
            </div>
            <div>
                <span class="span1">密码确认</span>
                <input type="password" placeholder="请再次输入密码">
            </div>
            <div class="checkcode">
                <input type="text"  placeholder="输入获取短信验证码">
                <p> 获取验证码</p>
            </div>
        </div>
        <div class="headon" >确定</div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:"pwdChange",
    components:{
         
    },
    data(){
         return {password:"",newpwd:""}
    },
    methods:{
    //     pwdcheck(){
    //            axios({
    //             url:'http://localhost:3004/pwd',
    //             method:'get'
    //   }).then(res=>{
    //        console.log(res.data[0].password)
    //       if( !(res.data[0].password==this.password)){
    //            console.log("原密码输入错误");
    //       }else{
    //            axios({
    //                 method:'put',
    //                 url:'http://localhost:3004/pwd/001n',
    //                 data:{
    //                      password:this.newpwd,
    //                      id:"001"
    //                 }
    //            }).then(res=>console.log(res));
    //       }
    //            });
    //     }
     
    }
}
</script>
<style scoped>
.title{
    height:0.46rem;
    width: 100%;
    display: flex;
    background-color: #3b99fb;
    color: #edf3f8;
}
.returnUp{
    color: #fff;
}
.title div{
    width: 0.44rem;
    height: 0.46rem;
    text-align: center;
    line-height: 0.46rem;
}
.title div img{
    display: block;
    height: 0.2rem;
    margin-top: 13px;
    margin-left: 13px;
}
.title p{
    width: 0.82rem;
    height: 0.46rem;
    line-height: 0.46rem;
    margin-left: 1rem;
}
.container{
    height: 204px;
    width: 100%;
    margin-top: 20px;
     font-size: 14px;
}
.container div{
    height: 49px;
    width: 100%;
    border-top: 1px solid #f3f3f3;
    margin-bottom: 1px;
    display: flex;
}
.container div .span1{
    width: 66px;
    height: 49px;
    line-height: 49px;
    color: #b3b3b3;
    margin-left: 24px;
    letter-spacing: 2px;
}
.container div input{
    width: 240px;
    height: 49px;
    line-height: 49px;
    outline: none;
    border: 0;
    padding: 0;
    margin-left: 12px;
    color: #3a3a3a;
}
.container .checkcode input{
    width: 158px;
    height: 49px;
    line-height: 49px;
    color: #919191;
    margin-left: 24px;
    outline: none;
    padding: 0;
    border: 0;
    float: left;
}
.container .checkcode p{
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 5px;
    background-color: #3b99fb;
    color: #fcfffc;
    margin-left: 28px;
    float: left;
}
 input::-webkit-input-placeholder{
    color: #8f8f8f;
    font-size:0.14rem
 }

.headon{
    width: 90%;
    height: 40px;
    margin-left: 5%;
    color: #fcfffc;
    line-height: 40px;
    text-align: center;
    background-color: #3b99fb;
    margin-top: 16px;
    border-radius: 5px;
}
</style>