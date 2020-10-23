<template>
  <div class="emoji-dataviz" ref="emoji">
      <vue-word-cloud
        :words="wordCLoudList"
        font-family="Gilroy Regular"
        color="white"
        :spacing="2"
      />
  </div>
</template>

<script>
import VueWordCloud from 'vuewordcloud'
const { map } = require('lodash')

export default {
  name: 'Emoji',
  props: {
    data: Object,
    animeData: Boolean
  },
  computed: {
    wordCLoudList: function () {
      return map(this.$props.data.values, (val) => {
        const rotation = Math.random() * 0.2 - 0.1
        return { text: val.name, rotation, weight: val.value }
      })
    }
  },
  watch: {
    animeData: function (newVal, oldVal) {
      if (newVal === true && this.$refs) {
        this
          .$anime
          .timeline()
          .add({
            targets: [this.$refs.emoji],
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
  components: {
    VueWordCloud
  },
  mounted () {
    if (this.$props.animeData === false) {
      this.$refs.emoji.style.opacity = 0
    }
  }
}
</script>

<style scoped lang="scss">
.emoji-dataviz {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 48px;
  .wordcloud {
    width: 100%;
    height: 100%;
  }
}
</style>
