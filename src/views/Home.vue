<template>
  <div class="home">
    <div class="title">
      <h1><span v-for="(letter, index) in specimen" v-bind:key="index">{{ letter }}</span></h1>
      <img src="../assets/logo.gif" alt="BDDI" class="logo" ref="logo">
      <h1><span v-for="(letter, index) in promo" v-bind:key="index">{{ letter }}</span></h1>
    </div>
    <div class="start" v-on:click="animeStart = true">
      <span>Commencer</span>
      <svg class="button-shadow" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 103.1" style="enable-background:new 0 0 500 103.1;" xml:space="preserve">
        <g id="Calque_2_1_">
          <g id="_11.bouton-commencer">
            <g id="bouton-commencer">
              <path d="M447,89.4L433.3,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L447,89.4z"/>
              <polygon points="439.9,89.4 434.4,89.4 420.5,103 426.1,103"/>
              <path d="M428,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L408,103h6.4
                L428,89.4z"/>
              <path d="M96,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L76,103h6.4
                L96,89.4z"/>
              <path d="M410.2,89.4L396.5,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L410.2,89.4z"/>
              <polygon points="403.1,89.4 397.6,89.4 383.7,103 389.3,103"/>
              <path d="M391.2,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L371.2,103h6.4
                L391.2,89.4z"/>
              <path d="M460,88.3l-13.6,14.1h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2l12.8-12.8H460z"/>
              <path d="M116.5,89.4L102.8,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L116.5,89.4z"/>
              <polygon points="109.4,89.4 103.9,89.4 90.1,103 95.6,103 "/>
              <path d="M374.2,88.3l-13.6,14.1h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2l12.8-12.8H374.2z"/>
              <polygon points="270,89.4 264.4,89.4 250.6,103 256.1,103 "/>
              <path d="M258,89.4c-0.4-0.5-1-0.9-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L238,103h6.4
                L258,89.4z"/>
              <path d="M240.3,89.4L226.6,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L240.3,89.4z"/>
              <polygon points="233.2,89.4 227.7,89.4 213.8,103 219.4,103 "/>
              <path d="M221.3,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L201.2,103h6.4
                L221.3,89.4z"/>
              <path d="M204.3,88.3l-13.6,14.1h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2l12.8-12.8H204.3z"/>
              <path d="M349.7,89.4L336.1,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L349.7,89.4z"/>
              <polygon points="342.7,89.4 337.1,89.4 323.3,103 328.8,103 "/>
              <path d="M330.8,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L310.7,103h6.4
                L330.8,89.4z"/>
              <path d="M313,89.4L299.4,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L313,89.4z"/>
              <polygon points="305.9,89.4 300.4,89.4 286.5,103 292.1,103 "/>
              <path d="M294,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L274,103h6.4
                L294,89.4z"/>
              <path d="M362.7,88.3l-13.6,14.1h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2l12.8-12.8H362.7z"/>
              <path d="M277,88.3l-13.6,14.1h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2l12.8-12.8H277z"/>
              <polygon points="196.4,89.4 190.8,89.4 177,103 182.5,103 "/>
              <path d="M184.4,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L164.4,103h6.4
                L184.4,89.4z"/>
              <path d="M166.6,89.4L153,103h2.6c0.7,0,1.3,0,2,0.1c0.7,0,1.5-0.2,2-0.7l12.6-13L166.6,89.4z"/>
              <polygon points="159.6,89.4 154.1,89.4 140.2,103 145.7,103 "/>
              <path d="M147.7,89.4c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-1.1,0-1.6,0.1c-0.6,0.1-1.1,0.5-1.4,1L127.6,103h6.4
                L147.7,89.4z"/>
              <path d="M130.7,88.3L117,102.4h2.1c0.7,0,1.4,0,2.1-0.1c0.8-0.1,1.5-0.5,1.9-1.2L136,88.3H130.7z"/>
              <path d="M67.4,102.4l14.9-14.9h-5.5l-13.7,13.7c0.5,0.4,1.2,0.6,1.8,0.6c0.7,0,1.3,0.3,1.8,0.6H67.4z"/>
              <path d="M71.2,86.8c-0.4-0.5-1-0.8-1.6-1c-0.6-0.1-1.2-0.1-1.8-0.1h-1.1L53.1,99.6v0.9h4.5L71.2,86.8z"/>
              <path d="M480,85.7c-1.7,0-3.3,0.4-4.9,1c-1.6,0.6-3.1,1.5-4.3,2.7c-0.4,0.4-1.1,1.1-2,2l-3,3c-1.1,1.1-2.1,2.1-3,3.1
                c-0.7,0.7-1.3,1.4-1.8,2.1h1.5c1-0.3,2.3-0.6,3.9-1.1c0.9-0.2,1.8-0.5,2.7-0.9l11.7-11.9L480,85.7z"/>
              <path d="M46.3,98.7c0.2,0,0.3-0.1,0.4-0.2L61.2,84c-0.1-0.7-0.7-1.1-1.4-1.1h-3.3L42.9,96.8c0.5,0.5,1,0.9,1.5,1.3
                C44.9,98.5,45.6,98.7,46.3,98.7z"/>
              <path d="M38.2,94.9l14.1-13.7v-1c-0.5-0.4-1-0.8-1.5-1.1c-0.4-0.3-0.8-0.5-1.3-0.6c-0.5,0.1-0.9,0.4-1.3,0.6
                c-0.5,0.3-1,0.7-1.5,1.1l-2.3,2.3l-3.6,3.6c-1.3,1.3-2.5,2.5-3.6,3.6l-2.3,2.4L34.5,93c-0.1,0.7,0.4,1.4,1.1,1.6
                c0.6,0.2,1.3,0.3,1.9,0.3L38.2,94.9z"/>
              <path d="M500,78.5c-0.7,0.5-1.4,0.8-2.2,1c-0.8,0.2-1.5,0.4-2.2,0.7c-0.5,0.3-1,0.6-1.5,0.9c-0.6,0.3-1.1,0.6-1.7,0.8
                c-0.6,0.5-1.4,0.8-2.1,1.1c-0.7,0.6-1.5,1.2-2.1,1.8c-1,0.9-2,1.9-3.1,3c-1.1,1.1-2.1,2.1-3,3.1s-1.6,1.7-2,2.1
                c3.8-1.8,7.4-3.9,10.9-6.3C494.2,84.3,497.3,81.6,500,78.5z"/>
              <path d="M30.1,90.2l14.7-14.5c-0.3-0.4-0.8-0.8-1.3-1c-0.5-0.3-1.1-0.6-1.5-1h-0.6L26.4,88.2c0.4,0.6,0.9,1.2,1.5,1.6
                c0.5,0.4,1.2,0.7,1.9,0.8L30.1,90.2z"/>
              <path d="M23,85.7l14.5-14.5l-2.8-2.8L20.3,83L20,83.4l0.2,0.6c0,0.1,0.2,0.5,0.6,1c0.4,0.5,0.8,0.7,1.1,0.7l0.4,0.2L23,85.7z"/>
              <path d="M16.4,79.3l14.7-14.5l-2.8-3L13.6,76.6v0.9l1.1,1.1c0.4,0.4,0.7,0.7,0.9,0.8H16.4z"/>
              <path d="M10.9,73.2l14.9-14.7c-0.1-0.5-0.4-1-0.8-1.4c-0.4-0.5-0.8-1-1.2-1.4H23c-0.2,0.1-0.4,0.2-0.6,0.2
                c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.5,0.2-0.6,0.4L9.2,68.5c-0.3,0.2-0.6,0.6-0.6,1c-0.1,0.3-0.2,0.7-0.2,1
                c0.1,0.6,0.3,1.2,0.7,1.7c0.5,0.7,1,1.1,1.4,1.1L10.9,73.2z"/>
              <path d="M20.3,51v-0.2c0-0.7-0.2-1.3-0.5-1.9c-0.3-0.6-0.8-1.2-1.4-1.5L3.6,61.9l1.9,3.8L20.3,51z"/>
              <path d="M16.4,42.9l0.2-0.7c0-0.7-0.1-1.4-0.3-2c-0.2-0.5-0.5-1.1-0.8-1.8L0.9,52.9v0.8c0.2,0.6,0.4,1.3,0.5,1.9
                c0.1,0.7,0.3,1.3,0.5,1.9L16.4,42.9z"/>
              <polygon points="14.7,26.5 0.9,40.1 0.9,45.4 14.7,31.8 "/>
              <path d="M14.7,20.1v-5.3h-1.1L1.9,26.5c-0.8,0.9-1.3,2.1-1.5,3.3c-0.3,1.3-0.4,2.7-0.4,4h0.9L14.7,20.1z"/>
              <path d="M4.7,12c-0.9,1.1-1.6,2.3-1.9,3.6c-0.5,1.3-0.8,2.6-0.8,4V20L14.7,7.2C14.8,6.8,14.9,6.4,15,6c0.1-0.5,0.3-1,0.5-1.5
                C16,3.8,16.2,3,16.2,2.2c0.1-1.2,0.2-2,0.2-2.2L4.7,12z"/>
            </g>
          </g>
        </g>
        </svg>
    </div>
    <canvas class='main-canvas'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import wfrag from '../shaders/wave.frag'
import wvert from '../shaders/wave.vert'
import Easing from '../utils/easing.js'
import router from '../router'
const { split } = require('lodash')

export default {
  name: 'Home',
  data () {
    return {
      animeStart: false
    }
  },
  computed: {
    specimen: () => split('Le Spécimen', ''),
    promo: () => split('2020 - 2021', '')
  },
  mounted () {
    const canvas = document.querySelector('.main-canvas')
    canvas.style.display = 'none'
    const body = document.querySelector('body')
    body.style.backgroundColor = 'black'

    let time = 0.0

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
        waveColor: { type: 'v3', value: [1.0, 1.0, 1.0] },
        easing: { value: Easing.easeInOutCubic(time * 0.1 + 1.0) }
      },
      vertexShader: wvert,
      fragmentShader: wfrag
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    renderer.render(scene, camera)

    const update = () => {
      requestAnimationFrame(update)

      if (this.animeStart === true) {
        time += 0.1
        material.uniforms.time.value = time
        canvas.style.display = 'block'
        material.uniforms.easing.value = Easing.easeInOutCubic(time * 0.1 + 1.0)
        if (material.uniforms.easing.value > 5.0) {
          this.animeStart = false
          body.style.backgroundColor = 'white'
          router.push('/specimen')
        }
      }

      renderer.render(scene, camera)
    }
    requestAnimationFrame(update)
  }
}

</script>

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10vh 0;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
     h1 {
      position: relative;
      display: block;
      text-transform: uppercase;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;

      & span {
        display: block;
      }
    }
    .logo {
      width: 100%;
      display: block;
      margin: 16px auto;
      line-height: 1rem;
    }
  }
  .start {
    position: relative;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 16px 48px;
    color: black;
    background-color: white;
    border-radius: 48px;
    text-transform: uppercase;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease;

    &:hover {
      transform: translate(-3%, 14%);

      .button-shadow {
        bottom: 0;
        left: 0;
      }
    }

    .button-shadow {
      z-index: 1;
      position: absolute;
      bottom: -14%;
      left: -3%;
      width: 97%;
      transition: all 0.5s ease;
      fill:white;
    }
  }
}

@media (max-width: 800px) {
  .home {
    .title {
      width: 80%;
    }
  }
}
@media (min-width: 2000px) {
  .home {
    .title {
      font-size: 1.7rem;
    }
    .start {
      font-size: 1.7rem;
      padding: 24px 96px;
    }
  }
}
</style>
