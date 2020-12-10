<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import home from '@/pages/home.vue'
import mine from '@/pages/Mine.vue'
import pwdChange from '@/pages/Pwdchange.vue'
import Arder from '@/pages/Arder.vue'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>

</style>
