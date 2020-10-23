<template>
  <div class="computer-dataviz" ref="computer">
    <div class="screen">
      <div v-for="(answer, key) in data.values" v-bind:key="key" :ref="answer.name" :class="[key % 2 === 0 ? 'left' : 'right', 'block']" :style="{ height: `${answer.value}%`, 'background-color': colors[answer.name]}">
        <span class="percent" v-if="key < 2">{{ Math.round(answer.value * 100) / 100 }}%</span>
        <div v-if="key < 2" class="brand"><div class="trait"></div><img :src="require(`../assets/computer/${idComputer[answer.name]}.svg`)" :alt="answer.name"></div>
        <div v-else class="brand small"><div class="trait"><div class="percent">{{ Math.round(answer.value * 100) / 100 }}%</div></div><img v-if="answer.name !== 'Fait maison'" :src="require(`../assets/computer/${idComputer[answer.name]}.svg`)" :alt="answer.name"><span class="diy" v-else>Fait maison</span></div>
        </div>
    </div>
    <div class="screenFoot"></div>
  </div>
</template>

<script>
const { lowerCase, forEach } = require('lodash')

export default {
  name: 'Computer',
  props: {
    data: Object,
    animeData: Boolean
  },
  data () {
    return {
      colors: {
        Apple: '#F3DE7D',
        ASUS: '#4F80F7',
        Dell: '#9FE7ED',
        HP: '#E58D91',
        Lenovo: '#9596E9',
        'Fait maison': '#ECBE92',
        Razer: '#8DE5A2'
      }
    }
  },
  computed: {
    idComputer: function () {
      const ids = {}
      forEach(this.$props.data.values, (answer, key) => {
        ids[answer.name] = lowerCase(answer.name)
      })
      return ids
    }
  },
  watch: {
    animeData: function (newVal, oldVal) {
      if (newVal === true && this.$refs) {
        this
          .$anime
          .timeline()
          .add({
            targets: [this.$refs.computer],
            opacity: [0, 1],
            duration: 500,
            delay: this.$anime.stagger(200),
            easing: 'easeInOutCubic',
            complete: () => {
              this.animeData = true
            }
          })
      }
    }
  },
  mounted () {
    if (this.$props.animeData === false) {
      this.$refs.computer.style.opacity = 0
    }
  }
}
</script>

<style scoped lang="scss">
.computer-dataviz {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  & .screen {
    position: relative;
    width: 70%;
    max-width: 880px;
    height: 100%;
    border-radius: 16px;
    border: 6px solid black;
    color: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.8);

    & .block {
      position: relative;
      border-top: 3px solid black;

      &:hover .brand.small {
        opacity: 1;
      }

      & .brand {
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row-reverse;

        &.small {
          opacity: 0;
          transition: all 0.2s ease;
        }

        & .trait {
          width: 48px;
          height: 3px;
          background-color: white;
          position: relative;
        }

        &.small .trait .percent {
          color: white;
          position: absolute;
          top: -2px;
          right: 0;
          left: auto;
          transform: translateY(-100%);
          font-size: 0.8rem;
        }

        & img {
          object-fit: contain;
          object-position: right;
          width: 10vw;
          max-height: 5vh;
        }

        & .diy {
          color: white;
        }
      }

      &.left {
        text-align: left;

        & .percent {
          left: 16px;
        }

        & .brand {
          left: -5%;
          transform: translate(-100%, -50%);

          & .trait {
            margin-left: 16px;
          }
        }
      }
      &.right {
        text-align: right;

        & .percent {
          right: 16px
        }

        & .brand {
          flex-direction: row;
          right: -5%;
          transform: translate(100%, -50%);

          &.small .trait .percent {
            right: auto;
            left: 0;
          }

          & img {
            object-position: left;
          }

          & .trait {
            margin-right: 16px;
          }
        }
      }
      & .percent {
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
      }
      &:first-child {
        border-radius: 10px 10px 0 0;
        border-top: none;
      }
      &:last-child {
        border-radius: 0 0 10px 10px;
      }
    }
  }

  & .screenFoot {
    z-index: -1;
    position: absolute;
    width: 20%;
    max-width: 280px;
    height: 50%;
    bottom: -48px;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(to bottom right, #808080, #cecece);
  }
}
</style>
