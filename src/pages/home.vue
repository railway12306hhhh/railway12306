<template>
  <div id="home">
    <div class="mian">
      <search-box />
      <Banner />
      <TicketInquiry />
      <Nav-list/>
      <hotNews /> 
      <helpPoor />
      <HotelReservation />
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/home_SearchBox.vue'
import Banner from '@/components/home_Banner.vue'
import TicketInquiry from '@/components/home_TicketInquiry.vue'
import NavList from '@/components/home_NavList.vue';
import hotNews from '@/components/home_hotNews.vue'
import helpPoor from '@/components/home_helpPoor.vue'
import HotelReservation from '@/components/home_HotelReservation.vue'
export default {
  name: 'home',
  components: {
    searchBox,
    Banner,
    TicketInquiry,
    NavList,
    hotNews,
    helpPoor,
    HotelReservation,
  }
}
</script>

<style>
#home{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.mian{
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
.searchBox{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>
