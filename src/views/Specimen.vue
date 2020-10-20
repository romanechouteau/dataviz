<template>
  <div class="specimen">
    <div class="bonhomme">Bonhomme</div>
  </div>
</template>

<style scoped lang="scss">
.specimen {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  animation: 3s ease 0.5s 1 both float-in;
}
@keyframes float-in {
  from {
    transform: translateX(-60%);
  }
  to {
    transform: unset;
  }
}
</style>
