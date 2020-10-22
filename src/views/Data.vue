<template>
  <div class="">
    <div v-on:click="backClick" class="retour">Retour</div>
    <canvas class='main-canvas'></canvas>
  </div>
</template>

<script>
import router from '../router'
import * as THREE from 'three'
import wfrag from '../shaders/wave-reverse.frag'
import wvert from '../shaders/wave.vert'
import Easing from '../utils/easing.js'

export default {
  name: 'Data',
  data () {
    return {
      animeStart: false
    }
  },
  props: {
    id: String,
    data: Object
  },
  mounted () {
    this.$emit('bubbleClick', this.$props.id)
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
        canvas.style.zIndex = 2
        material.uniforms.easing.value = Easing.easeInOutCubic(time * 0.1 + 1.0)
        if (material.uniforms.easing.value > 5.0) {
          this.animeStart = false
          body.style.backgroundColor = 'white'
          this.$emit('bubbleClick', 'none')
          router.push('/specimen')
        }
      }

      renderer.render(scene, camera)
    }
    requestAnimationFrame(update)
  },
  methods: {
    backClick: function (e) {
      e.preventDefault()
      this.animeStart = true
    }
  }
}
</script>

<style scoped lang="scss">
.retour {
  color: white;
  padding: 8px;
  cursor: pointer;
}
</style>
