<template>
  <div class="social-dataviz" ref="social">
  <div v-for="(answer, key) in lessBlocks" v-bind:key="key" :ref="answer.name" :class="[key < lessBlocks.length - 1 ? 'block' : 'blockWrapper', answer.name]" :style="key < lessBlocks.length - 1 ? { height: `calc(${size[answer.name]} * 30vw)`, width: `calc(${size[answer.name]} * 30vw)`, 'background-color': colors[answer.name]} : {height: `calc(${size[answer.name]} * 30vw)`}">
      <div v-if="key === lessBlocks.length - 1" class="block" :style="{ height: `100%`, width: `calc(${size[data.values[data.values.length - 1].name]} * 30vw)`, 'background-color': colors[answer.name]}"><img :src="require(`../assets/social/${idSocial[answer.name]}.svg`)" :alt="answer.name"><span>{{ answer.value }}%</span></div>
      <div v-if="key === lessBlocks.length - 1" class="block" :style="{ height: `100%`, width: `calc(${size[data.values[data.values.length - 1].name]} * 30vw)`, 'background-color': colors[data.values[data.values.length - 1].name]}"><img :src="require(`../assets/social/${idSocial[data.values[data.values.length - 1].name]}.svg`)" :alt="data.values[data.values.length - 1].name"><span>{{ data.values[data.values.length - 1].value }}%</span></div>
      <div v-else>
        <span>{{ answer.value }}%</span>
        <img :src="require(`../assets/social/${idSocial[answer.name]}.svg`)" :alt="answer.name">
      </div>
  </div>
  </div>
</template>

<script>
const { lowerFirst, forEach, slice } = require('lodash')

export default {
  name: 'Social',
  props: {
    data: Object,
    animeData: Boolean
  },
  data () {
    return {
      colors: {
        Instagram: '#F3DE7D',
        Twitter: '#4F80F7',
        Facebook: '#ECBE92',
        Snapchat: '#9FE7ED',
        Reddit: '#9596E9'
      }
    }
  },
  computed: {
    idSocial: function () {
      const ids = {}
      forEach(this.$props.data.values, (answer, key) => {
        ids[answer.name] = lowerFirst(answer.name)
      })
      return ids
    },
    size: function () {
      const sizes = {}
      forEach(this.$props.data.values, (answer, key) => {
        sizes[answer.name] = answer.value / this.$props.data.values[0].value
      })
      return sizes
    },
    lessBlocks: function () {
      return slice(this.$props.data.values, 0, this.$props.data.values.length - 1)
    }
  },
  watch: {
    animeData: function (newVal, oldVal) {
      if (newVal === true && this.$refs) {
        this
          .$anime
          .timeline()
          .add({
            targets: [this.$refs.social],
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
      this.$refs.social.style.opacity = 0
    }
  }
}
</script>

<style scoped lang="scss">
.social-dataviz {
  position: relative;
  height: calc(35vw + 48px);
  padding-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  .block {
    color: rgba(0,0,0,0.7);
    text-align: left;
    margin: 8px;
    border-radius: 8px;
    position: relative;

    & span {
      position: absolute;
      left: 8px;
      top: 8px;
    }

    & img {
      position: absolute;
      width: 50%;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      fill: white;
    }

    &.Facebook img {
      top: auto;
      left: auto;
      height: 70%;
      width: auto;
      bottom: 0;
      right: 5%;
      transform: none;
    }
  }
  .blockWrapper {
    display: flex;
    flex-direction: row;
  }
}
</style>
