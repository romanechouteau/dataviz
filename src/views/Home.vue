<template>
  <div class="home">
    <div class="title">
      <h1>Le Specimen</h1>
      <div class="logo">BDDI</div>
    </div>
    <div class="start">
      <span>Commencer</span>
      <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="59.139" height="16.847" viewBox="0 0 59.139 16.847">
        <g id="arrow-right" transform="translate(0 -0.053)">
            <path id="Tracé_3" data-name="Tracé 3" d="M49.7,8.6a1.285,1.285,0,0,1-1,1,99.143,99.143,0,0,1-12.1,1.2c-2,.1-4.1.1-6.1.2-2,0-4.1,0-6.1-.1C18.1,10.7,6.6,10,2,9.7A2.165,2.165,0,0,1,0,7.6H0A2.2,2.2,0,0,1,2.1,5.4c4.7,0,16.1-.1,22.4,0,4,0,8.1.2,12.1.5s8.1.7,12.1,1.4A1.044,1.044,0,0,1,49.7,8.6Z"/>
            <path id="Tracé_4" data-name="Tracé 4" d="M57.8,5.9A12.9,12.9,0,0,1,55,5.1a15.95,15.95,0,0,1-2.7-1.2A18.007,18.007,0,0,1,47.6.4L47.5.3a1.127,1.127,0,0,0-1.6.2,1.127,1.127,0,0,0,.2,1.6h0c1.7,1.3,3.3,2.6,5,3.9l2.5,1.8A30.127,30.127,0,0,0,50.8,10a14.463,14.463,0,0,0-2.2,2.1A13.052,13.052,0,0,0,46.9,15h0a.9.9,0,0,0-.1.5,1.43,1.43,0,0,0,1.4,1.4,7.458,7.458,0,0,0,3.4-.9,12.705,12.705,0,0,0,2.7-1.8,29.039,29.039,0,0,0,4.3-4.9l.4-.6c0-.3.1-.5.1-.7A1.752,1.752,0,0,0,57.8,5.9Z"/>
          <path id="Tracé_5" data-name="Tracé 5" d="M0,9.6v0" fill="none"/>
        </g>
      </svg>
    </div>
    <canvas class='main-canvas'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import frag from '../shaders/screen.frag'
import vert from '../shaders/screen.vert'
import Easing from '../utils/easing.js'

import router from '../router'

export default {
  name: 'Home',
  mounted () {
    init()
  }
}

const init = () => {
  const canvas = document.querySelector('.main-canvas')
  canvas.style.display = 'none'
  const start = document.querySelector('.start')
  const body = document.querySelector('body')
  body.style.backgroundColor = 'black'

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
        body.style.backgroundColor = 'white'
        router.push('/specimen')
      }
    }

    renderer.render(scene, camera)
  }
  requestAnimationFrame(update)
}

</script>

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  .title {
    margin-top: calc(10% + 16px);
     h1 {
      text-transform: uppercase;
      letter-spacing: 1.2rem;
      margin-bottom: 16px;
    }
    .logo {
      font-family: 'KG Happy';
      font-size: 12rem;
      line-height: 11rem;
      margin: 16px 0;
    }
  }
  .start {
    margin-bottom: 5%;
    font-size: 1rem;
    cursor: pointer;
    padding: 8px;

    .arrow-right {
      height: 0.8rem;
      margin-left: 16px;

      & path {
        fill: white;
      }
    }
  }
}
</style>
