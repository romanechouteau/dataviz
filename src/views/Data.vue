<template>
  <div class="">
    <div v-on:click="backClick" class="retour">Retour</div>
  </div>
</template>

<script>
import router from '../router'

const body = document.querySelector('body')
body.style.backgroundColor = 'black'

export default {
  name: 'Data',
  props: {
    id: String,
    data: Object
  },
  mounted () {
    this.$emit('bubbleClick', this.$props.id)
  },
  methods: {
    backClick: function (e) {
      e.preventDefault()
      this.$emit('bubbleClick', 'none')
      router.push('/specimen')
    }
  }
}
</script>

<style scoped lang="scss">
.retour {
  color: white;
}
</style>
