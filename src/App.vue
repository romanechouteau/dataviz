<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import json from './assets/data.json'
const data = json
console.log(data)

export default {
  name: 'App',
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss">
@font-face {
 font-family: "KG Happy";
 src: url("./assets/fonts/KGHAPPY.ttf") format("truetype");
}
@font-face {
 font-family: "KG Happy Shadows";
 src: url("./assets/fonts/KGHAPPYShadows.ttf") format("truetype");
}
@font-face {
 font-family: "KG Happy Solid";
 src: url("./assets/fonts/KGHAPPYSolid.ttf") format("truetype");
}
*, body, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  position:fixed;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100%;
}
body {
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
#app {
  font-family: 'KG Happy Solid';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  position: relative;
  height: 100%;
  z-index: 1;
}
.main-canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
