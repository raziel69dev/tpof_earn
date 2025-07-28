<template>
    <div class="popup">
        <div class="close" @click="emits('close')">

        </div>
        <div class="popup-body"  @click.stop>
            <slot />
        </div>
        <div class="backdrop"  @click="emits('close')"></div>
    </div>
</template>

<script setup>
const emits = defineEmits(['close'])

</script>

<style scoped lang="scss">
.popup {
  background: rgba(2, 44, 84, 0.50);
  backdrop-filter: blur(2.5px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 30px;

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }


  .close {
    width: 68px;
    height: 7px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;

  }
  &-body {
    border-radius: 20px 20px 0 0 ;
    background: #FFF;
    padding: 30px;
    width: 100%;

    box-sizing: border-box;
  }
}
</style>