<script setup>
import ButtonPrimary from "@/elements/ButtonPrimary.vue";
import {onMounted, reactive} from "vue";
import {userWallet} from "@/stores/User.js";
import ButtonDelete from "@/elements/ButtonDelete.vue";

const emits = defineEmits('close')
const error = reactive({
  isError: false,
  message: ''
})

const data = reactive({
  userWallet: ''
})

const saveUserWallet = (wallet) => {
  if(wallet.length < 20) {
    error.isError = true
    error.message = 'This wallet is wrong, try again'
  } else {
    localStorage.setItem('userWallet', data.userWallet)
    userWallet.wallet = data.userWallet
    error.isError = false
    emits('close')
  }
}

const removeUserWallet = (wallet) => {
  emits('removeWallet')
}

onMounted(() => {
  data.userWallet = localStorage.getItem('userWallet')
})
</script>

<template>
  <div class="connect-wallet">
    <h2>Change your wallet</h2>
    <form @submit.prevent>
      <input type="text" :class="{ error: false }" placeholder="Your wallet" v-model="data.userWallet">
      <div class="err" v-if="error.isError">
        {{ error.message }}
      </div>
      <span>
        By continuing, you accept you are 18+ years of age and agree to the Terms and Condition
      </span>
      <ButtonPrimary @click="saveUserWallet(data.userWallet)">
        Save
      </ButtonPrimary>
      <ButtonDelete @click="removeUserWallet(data.userWallet)">
        Remove wallet
      </ButtonDelete>
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