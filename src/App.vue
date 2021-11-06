<template>
  <div id="app">
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/info">Info</router-link>
    </div>
	<router-view/>
      <!-- <nav class="header" id="myHeader">
		<ul>
		<li><a><router-link to = "/">Home</router-link></a></li>
		<li><a><router-link to = "/info">Info</router-link></a></li>
      
		</ul>
    </nav> -->
   
     <!-- <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition> -->

   
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

#nav 
{
	position: fixed;
	background: rgb(238, 238, 238);
	padding-top: 16px;
	padding-bottom: 16px; 
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999px;
	box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    }

#nav a 
{
	display:inline;
    padding:16px;
    font-weight: bold;
    color: #19b1b6;
}

#nav a:hover {
	color:#04441f;
	border-radius: 6px;
	background-color:#C4FAD2;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

/* .header {
   position: fixed;
  background: rgb(238, 238, 238);
   padding-top: 16px;
  padding-bottom: 16px; 
   top: 0;
   left: 0;
   width: 100%;
   z-index: 999px;
   box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}

ul li
{
    display:inline;
    padding:16px;
	
} */

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
