<template>
  <div class="games-dataviz" ref="games">
    <div v-for="(answer, key) in consoles" v-bind:key="key" :ref="answer.name" :class="'line'">
      <div class="img"><img :src="require(`../assets/games/${idGames[answer.name]}.png`)" :alt="answer.name" ref="imgBar"></div>
      <div class="barWrapper"><div class="bar" ref="bar" :id="answer.name" :style="{ width: 0, 'background-color': colors[answer.name]}"><div class="percent" ref="percent" :style="{'color': colors[answer.name]}">{{ answer.value }}%</div></div><div class="percent-placeholder"></div></div>
    </div>
  </div>
</template>

<script>
const { lowerCase, forEach, filter } = require('lodash')

export default {
  name: 'Games',
  props: {
    data: Object
  },
  data () {
    return {
      colors: {
        PC: '#F3DE7D',
        Switch: '#4F80F7',
        PlayStation: '#9596E9',
        Xbox: '#E58D91',
        Gamecube: '#ECBE92',
        Wii: '#9FE7ED'
      }
    }
  },
  computed: {
    idGames: function () {
      const ids = {}
      forEach(this.$props.data.values, (answer, key) => {
        ids[answer.name] = lowerCase(answer.name)
      })
      return ids
    },
    consoles: function () {
      return filter(this.$props.data.values, (answer, key) => {
        return answer.name !== 'null'
      })
    },
    size: function () {
      const sizes = {}
      forEach(this.consoles, (answer, key) => {
        sizes[answer.name] = answer.value / this.consoles[0].value * 100
      })
      return sizes
    }
  },
  mounted () {
    this
      .$anime({
        targets: [this.$refs.imgBar],
        opacity: [0, 1],
        duration: 500,
        delay: this.$anime.stagger(200, { start: 500 }),
        easing: 'easeInOutCubic'
      })
    this
      .$anime({
        targets: [this.$refs.percent],
        opacity: [0, 1],
        duration: 500,
        delay: this.$anime.stagger(200, { start: 500 }),
        easing: 'easeInOutCubic'
      })
    this
      .$anime
      .timeline()
      .add({
        targets: [this.$refs.bar],
        width: (el) => {
          return this.size[el.id] + '%'
        },
        duration: 500,
        delay: this.$anime.stagger(200, { start: 500 }),
        easing: 'easeOutBounce'
      })
  }
}
</script>

<style scoped lang="scss">
.games-dataviz {
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 48px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-between;
  & .line {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .img {
      width: 5vw;
      height: 5vw;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        max-width: 90%;
        max-height: 90%;
      }
    }

    & .barWrapper {
      width: 100%;
      height: 25%;
      margin: 16px 0 16px 48px;
      display: flex;
      flex-direction: row;

      & .bar {
        height: 100%;
        border-radius: 24px;
        position: relative;
      }

      & .percent {
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translate(100%, -50%);
      }

      & .percent-placeholder {
        width: 5%;
      }
    }
  }
}
</style>
