<template>
  <div class="home">
    <div class="title">
      <h1>Le Specimen</h1>
      <div class="logo">BDDI</div>
    </div>
    <div class="start">Commencer<img src="../assets/arrow-right.svg" alt="Flèche vers la droite"></div>
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

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    margin-top: calc(10% + 16px);
     h1 {
      font-family: 'KG Happy Solid';
      text-transform: uppercase;
      color: black;
      letter-spacing: 1.2rem;
      margin-bottom: 16px;
    }
    .logo {
      font-family: 'KG Happy';
      font-size: 12rem;
      color: black;
      line-height: 11rem;
      margin: 16px 0;
    }
  }
  .start {
    font-family: 'KG Happy Solid';
    margin-bottom: 5%;
    font-size: 1rem;
    cursor: pointer;
    padding: 8px;

    img {
      height: 0.8rem;
      margin-left: 16px;
    }
  }
}
</style>
