<template>
  <div id="app">
    <router-view/>
    <canvas class='main-canvas'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import frag from './shaders/screen.frag'
import vert from './shaders/screen.vert'
import Easing from './utils/easing.js'

export default {
  name: 'App',
  mounted () {
    init()
  }
}

const init = () => {
  const canvas = document.querySelector('.main-canvas')
  canvas.style.display = 'none'
  const start = document.querySelector('.start')

  let time = 0.0

  let animeStart = false

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
  })

  const geometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
  const material = new THREE.RawShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      rez: { type: 'v2', value: [canvas.width, canvas.height] },
      easing: { value: Easing.easeInOutCubic(time * 0.1 + 1.0) }
    },
    vertexShader: vert,
    fragmentShader: frag
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer.render(scene, camera)

  start.addEventListener('click', () => {
    animeStart = true
  })

  const update = () => {
    requestAnimationFrame(update)

    if (animeStart === true) {
      time += 0.1
      material.uniforms.time.value = time
      canvas.style.display = 'block'
      material.uniforms.easing.value = Easing.easeInOutCubic(time * 0.1 + 1.0)
      if (material.uniforms.easing.value > 13.0) {
        animeStart = false
      }
      console.log(animeStart)
    }

    renderer.render(scene, camera)
  }
  requestAnimationFrame(update)
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
body {
  position: relative;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
