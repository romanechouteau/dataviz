<template>
  <div class="home">
    <div v-for="(answer, name) in data" :key="name">
      {{ name }} : {{ answer }}
    </div>
  </div>
</template>

<script>
import json from '../assets/data.json'
const data = json
console.log(data)

export default {
  name: 'Home',
  data () {
    return {
      data
    }
  }
}
</script>
