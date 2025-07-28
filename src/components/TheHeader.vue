<template>
    <header class="header">
        <div class="logotype">
            TPOF Earn
        </div>
        <div class="menu">
            <ButtonConnect />
        </div>
    </header>
</template>

<script setup>
import ButtonConnect from "../elements/ButtonConnect.vue";
</script>

<style scoped lang="scss">
.header {
  z-index: 30;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 15px;
  justify-content: space-between;
  align-items: center;
  background: #022C54;
  box-sizing: border-box;

  .logotype {
    overflow: hidden;
    color: #FFF;
    text-overflow: ellipsis;

    /* Roboto/Headline/Semibold */
    font-family: Poppins, sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
  }
}
</style>