<template>
  <div class="box">
    <h4>出行服务
    <span class="iconfont icon-xiaoxi1"></span></h4>
  </div>
</template>

<script>
export default {
  name: "Maas_top",
};
</script>

<style scoped>
@import url("../assets/fontt/iconfont.css");
.box {
  width: 100%;
  height: 0.5rem;
  background-color: #3b99fb;
  /* display: flex; */
  /* justify-content: space-between; */
}

.box h4 {
  color: #fff;
  line-height: 0.5rem;
  text-align: center;
  font-size: 20px;
  position: relative;

}

span {
    position: absolute;
    right: 0.15rem;
    top: 0;
}
</style>

