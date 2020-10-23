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
    data: Object
  },
  computed: {
    wordCLoudList: function () {
      return map(this.$props.data.values, (val) => {
        const rotation = Math.random() * 0.2 - 0.1
        return { text: val.name, rotation, weight: val.value }
      })
    }
  },
  components: {
    VueWordCloud
  },
  mounted () {
    this
      .$anime
      .timeline()
      .add({
        targets: [this.$refs.emoji],
        opacity: [0, 1],
        duration: 500,
        delay: 500,
        easing: 'easeInOutCubic'
      })
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
