<template>
  <div class="dataviz-comp">
    <!-- <div class="emoji" v-for="(value, key) in data.values" v-bind:key="key" :style="{ 'font-size': 1 * value.value + 'vw', left: Math.random() * 50 + '%', top: Math.random() * 50 + '%', transform: 'translate(-50%, -50%)'}">{{ value.name }}</div> -->
    <!-- <wordcloud
      :data="data.values"
      nameKey="name"
      valueKey="value"
      fontScale="sqrt"
      :fontSize="[30, 200]"
      font="Gilroy Regular"
      :showTooltip="false"
      :margin="{top: 0, right: 0, bottom: 0, left: 0 }"
      class="wordcloud">
      </wordcloud> -->
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
  }
}
</script>

<style scoped lang="scss">
.dataviz-comp {
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
