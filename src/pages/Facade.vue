<template>
  <div class="Facade">
    <div class="mian">
        <router-view />
    </div>
    <Bottom />
  </div>
</template>

<script>

import home from '@/pages/home.vue';
import Arder from '@/pages/Arder.vue';
import Mine from '@/pages/Mine.vue';
import Bottom from '@/components/Bottom.vue';

export default {
  name: 'Facade',
  components: {
    Bottom,
    home,
    Arder,
    Mine
  }
}
</script>

<style>
.Facade{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.mian{
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
