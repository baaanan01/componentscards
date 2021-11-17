<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="a">Home</router-link>
      <router-link to="/info" id="a">Info</router-link>
    </div>
   
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Oswald");
body{ 
  background: #dbf0eb; 
}
#app {
  font-family: Inconsolata, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 32px;
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

#nav {
  position: fixed;
  background: rgb(78, 122, 139);
  padding-top: 16px;
  padding-bottom: 16px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  font-size: 16px;
}

#nav a {
  display: inline;
  padding: 16px;
  font-weight: bold;
  color: #58d2d6;
}

#nav a:hover {
  color: #04441f;
  border-radius: 6px;
  background-color: #c4fad2;
}

#nav a.router-link-exact-active {
  color: #2fd18b;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
