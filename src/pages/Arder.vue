<template>
  <div id="arder">
    <atop class="header"/>
    <div class="content1">
      <atitle/>
      <anews/>
      <abanner/>
      <alist/>
    </div>
  </div>
</template>

<script>
import atop from "../components/arder_top"
import atitle from "../components/arder_title"
import anews from "../components/arder_news"
import abanner from "../components/arder_banner"
import alist from "../components/arder_list"

export default{
  name:"arder",
  components:{
    atop,atitle,anews,abanner,alist
  },
  data(){
    return {
    }
  }
}
</script>
<style src="@/assets/arder/iconfont.css"></style>
<style scoped>
.header{
  height: 0.5rem;
}
</style>