<script setup>
import logo from '@/assets/loading_logo.svg'
</script>

<template>
  <div class="loading">
    <img :src="logo" alt="">
    <span class="loader"></span>
  </div>
</template>

<style scoped lang="scss">
.loading {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 50px;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #022C54;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>