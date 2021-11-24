<template>
  <div id="app">
    <NavBar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: "App",
  components: {NavBar},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Oswald");

</style>
