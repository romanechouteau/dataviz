<template>
  <div class="">
    <div class="bubble id" ref="bubbleId"><img src="../assets/id.svg" alt="Identité"></div>
  </div>
</template>

<style scoped lang="scss">
.bubble {
  width: 80px;
  height: auto;
  padding: 8px;
  position: absolute;
  right: 96px;
  top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 90%;
  }
}

@media (max-width: 640px) {
  .bubble {
    right: 5vw;
    top: 4vh;
  }
}
</style>
