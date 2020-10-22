<template>
  <div id="app">
    <router-view v-if="$route.fullPath === '/specimen'" v-bind:scanned="scanned" v-on:isScanned="scanned = true" v-on:bubbleClick="bubble = $event"/>
    <router-view v-else-if="$route.fullPath === '/'" v-bind:data="data" v-bind:scanned="scanned" v-on:isScanned="scanned = true"/>
    <router-view v-else v-bind:data="data" v-on:bubbleClick="bubble = $event"/>
    <template v-if="bubble !== 'none'">
      <div class="tinyBubble id" ref="bubbleId" v-if="/id/i.test(bubble)"><img src="./assets/id.svg" alt="Identité"></div>
      <div class="tinyBubble cine" ref="bubbleCine" v-else-if="/cine/i.test(bubble)"><img src="./assets/cine-series.svg" alt="Cinéma & séries"></div>
      <div class="tinyBubble streaming" ref="bubbleStreaming" v-else-if="/streaming/i.test(bubble)"><img src="./assets/streaming.svg" alt="Streaming"></div>
      <div class="tinyBubble techno" ref="bubbleTechno" v-else-if="/techno/i.test(bubble)"><img src="./assets/techno.svg" alt="Technologies"></div>
      <div class="tinyBubble reseaux" ref="bubbleReseaux" v-else-if="/reseaux/i.test(bubble)"><img src="./assets/reseaux-sociaux.svg" alt="Réseaux sociaux"></div>
      <div class="tinyBubble autre" ref="bubbleAutre" v-else-if="/autre/i.test(bubble)"><img src="./assets/autres.svg" alt="Autre"></div>
    </template>
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
      data,
      scanned: false,
      bubble: 'none'
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
.tinyBubble {
  width: 80px;
  height: auto;
  padding: 8px;
  position: absolute;
  right: 96px;
  top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 90%;
  }
}

@media (max-width: 640px) {
  .bubble {
    right: 5vw;
    top: 4vh;
  }
}
</style>
