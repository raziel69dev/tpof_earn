<template>
    <button class="btn primary" :disabled="props.disabled">
        <span><slot /></span>
    </button>
</template>

<script setup>
const props = defineProps(['disabled'])
</script>

<style scoped lang="scss">
.btn:disabled {
  opacity: .5;
}
</style>