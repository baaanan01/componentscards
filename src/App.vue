<template>
  <div id="app">
    <div>
      <router-link to = "/">Home</router-link> |
      <router-link to = "/info">Info</router-link>
    </div>
   
    <router-view/> <!-- обертка для переключения между страницами  -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <InfoPage msg="Personal Card"/> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
#app {
  font-family: Inconsolata, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box1 {
  margin-left: auto;
  font-family: Inconsolata;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  grid-row: 1/2;
  border: 1px solid;
  flex: 1 1 100px;
  margin: 0 5px;
  background: #ffffff;
  box-shadow: 0 4px 38px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}
</style>
