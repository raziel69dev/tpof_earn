<template>
    <div class="popup">
        <div class="close"
             @touchstart="setPosition"
             @touchmove="popupMoving"
             @touchend="resetPosition"
        >
          <div class="rect"></div>
        </div>
        <div class="popup-body" ref="popupBody" :style="{ marginBottom: dragStyle.move + 'px'}" @click.stop>
            <slot />
        </div>
        <div class="backdrop"  @click="emits('close')"></div>
    </div>
</template>

<script setup>
import {onMounted, onUnmounted, reactive, ref} from "vue";

const emits = defineEmits(['close'])
const popupBody = ref(null)

const dragStyle = reactive({
  move: -250,
  initPosition: 0
})

const setPosition = (e) => {
  dragStyle.initPosition = e.touches[0].clientX
}

const popupMoving = (e) => {
  const x = e.touches[0].clientX
  dragStyle.move = -((dragStyle.initPosition - x) * 7) - 250
}

const resetPosition = () => {
  console.log(dragStyle.move)
  if (dragStyle.move > -320) {
    dragStyle.move = -250
  } else {
    emits('close')
  }


}

onMounted(() => {
  document.body.style.maxHeight = '100vh'
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.maxHeight = 'auto'
  document.body.style.overflow = 'scroll'
})
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
    padding: 20px;
    box-sizing: content-box;
    .rect {
      width: 68px;
      height: 7px;
      flex-shrink: 0;
      border-radius: 20px;
      background: #FFF;
    }

  }
  &-body {
    border-radius: 20px 20px 0 0 ;
    background: #FFF;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 280px;
  }
}
</style>