<script setup>
import ButtonPrimary from "@/elements/ButtonPrimary.vue";
import {onMounted, reactive} from "vue";
import {userWallet} from "@/stores/User.js";
import ButtonDelete from "@/elements/ButtonDelete.vue";

const emits = defineEmits('back', 'remove')



const removeUserWallet = () => {
  emits('remove')
}

</script>

<template>
  <div class="connect-wallet">
    <h2>Are you sure want to remove wallet?</h2>
    <form @submit.prevent>
      <ButtonDelete @click="removeUserWallet()">
        Yes, remove wallet
      </ButtonDelete>
      <ButtonPrimary @click="emits('back')">
        No, back to edit
      </ButtonPrimary>

    </form>
  </div>
</template>

<style scoped lang="scss">
.connect-wallet {
  h2 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .err {
    color: #BE2531;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    height: 20px;
  }
  span {
    color: #022C54;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    display: inline-block;
    width: 100%;
    line-height: 1;
    opacity: .5;
  }
  input {
    border-radius: 10px;
    background: #F0F0F0;
    padding: 8px 12px;
    border: 1px solid transparent;
    width: 100%;
    box-sizing: border-box;

    &.error {
      border: 1px solid #BE2531;
    }
  }
}
</style>