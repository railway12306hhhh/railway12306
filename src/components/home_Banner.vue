<template>
  <div class="banner">
    <ul>
        <li>
            <img src="../assets/homePage/Banner1.png" alt="">
        </li>
        <li>
            <img src="../assets/homePage/Banner2.png" alt="">
        </li>
        <li>
            <img src="../assets/homePage/Banner3.png" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Banner',

}
</script>

<style scoped>
.banner{
    width: 3.6rem;
    height: 1.6rem;
    overflow-x: scroll;
    margin: 0 auto;
}
.banner::-webkit-scrollbar{
    display: none;
}
.banner ul{
    width: 300%;
    height: 1.6rem;
}
.banner ul li{
    widows: 3.6rem;
    height: 1.6rem;
    float: left;
}
.banner ul li img{
    width: 3.6rem;
    height: 1.6rem;
}
</style>
