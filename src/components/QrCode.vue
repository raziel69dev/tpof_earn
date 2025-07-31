<template>
  <img :src="props.qrCode" alt="qr" style="width: 100%;">
</template>
<script setup>
const props = defineProps(['qrCode'])
</script>