<template>
  <div class="data">
    <nav>
      <div v-on:click="backClick" class="retour">
          <svg id="keyboard_backspace-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Tracé_374" data-name="Tracé 374" d="M0,0H24V24H0Z" fill="none"/>
            <path id="Tracé_375" data-name="Tracé 375" d="M21,11H6.83l3.58-3.59L9,6,3,12l6,6,1.41-1.41L6.83,13H21Z" fill="#fff"/>
          </svg>
          <span>Voir le spécimen</span>
        </div>
      <div class="questions">
        <span v-for="(stat, key) in data[id].stats" v-bind:key="key" :class="[key === activeStat ? 'active' : '', 'link']" v-on:click="activeStat = key">
          <span>{{ stat.question }}</span>
        </span>
      </div>
      <div class="category">
        <span>{{ data[id].name }}</span>
        <div class="bubblePlaceholder"></div>
      </div>
    </nav>
    <div class="dataviz">
      <div class="phrase">{{ data[id].stats[activeStat].phrase }} {{ data[id].stats[activeStat].values[0].display }}.</div>
      <Emoji v-if="activeStat === 'emoji'" v-bind:data="data[id].stats[activeStat]" />
    </div>
    <canvas class='main-canvas'></canvas>
  </div>
</template>

<script>
import Emoji from '../components/Emoji.vue'
import router from '../router'
import * as THREE from 'three'
import wfrag from '../shaders/wave-reverse.frag'
import wvert from '../shaders/wave.vert'
import Easing from '../utils/easing.js'
const { keys, lowerFirst } = require('lodash')

export default {
  name: 'Data',
  data () {
    return {
      animeStart: false,
      activeStat: keys(this.$props.data[this.$props.id].stats)[0]
    }
  },
  props: {
    id: String,
    data: Object
  },
  mounted () {
    this.$props.id = lowerFirst(this.$props.id)
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
  },
  components: {
    Emoji
  }
}
</script>

<style scoped lang="scss">
.data {
  font-family: 'Gilroy Semi Bold';
  color: white;
  width: 100%;
  padding: 48px 96px;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .retour {
      padding: 8px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & svg {
        height: 20px;
        margin-right: 8px;
        transition: all 1s ease;
      }

      & span {
        transition: all 1s ease;
      }

      &:hover {
        svg {
          animation: arrow-back 1.5s ease forwards infinite;
        }
      }
    }

    .questions {
      & .link {
        margin: 0 8px;
        padding: 12px 8px;
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.5s ease;

        & span {
          position: relative;
          padding: 4px 0;

          &::before {
            content: '';
            width: 100%;
            height: 1px;
            background-image: linear-gradient(to right, rgba(255,255,255,0) 50%,  rgba(255,255,255,1) 50%);
            background-position: 0% 0%;
            background-size: 200%;
            position: absolute;
            bottom: 0;
            transition: all 0.5s ease;
          }
        }

        &.active, &:hover {
          opacity: 1;
          & span::before {
            background-position: -100%;
          }
        }
      }
    }

    .category {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      & span {
        margin-right: 8px;
      }

      & .bubblePlaceholder {
        width: 80px;
        height: 80px;
      }
    }
  }
  .dataviz {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 16px;
    flex-grow: 1;
    & .phrase {
      font-family: 'Gilroy Regular';
      font-size: 2rem;
      text-align: left;
    }
  }
}

@keyframes arrow-back {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
