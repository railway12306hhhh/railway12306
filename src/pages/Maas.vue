<template>
  <div id="app">
    <div  class="top-box">
      <Maas_top/>
    </div>
    <div class="center-box">
      <Maas_center1/>
      <Maas_center2/>
      <Maas_center3/>
      <Maas_center4/>
      <Maas_center5/>
      <Maas_center6/>
      <Maas_center6/>
    </div>
  </div>
</template>

<script>
    import Maas_top from "../components/Maas_top"
    import Maas_center1 from "../components/Maas_center1"
    import Maas_center2 from "../components/Maas_center2"
    import Maas_center3 from "../components/Maas_center3"
    import Maas_center4 from "../components/Maas_center4"
    import Maas_center5 from "../components/Maas_center5"
    import Maas_center6 from "../components/Maas_center6"

export default {
  name: 'Maas',
  components: {
    Maas_top,Maas_center1,Maas_center2,Maas_center3,Maas_center4,Maas_center5,Maas_center6
  },
  data(){
    return {
      msg:"hello"
    }
  }
}
</script>

<style>
.top-box{
  position: fixed;
  width: 100%;
  top:0;
  left:0;
}

.center-box{
  margin-top:0.5rem;
  margin-bottom:0.5rem; 
}
</style>