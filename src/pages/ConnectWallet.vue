<script setup>

import ButtonPrimary from "../elements/ButtonPrimary.vue";
import {reactive} from "vue";
import {userWallet} from "../stores/User.js";
import {addWallet} from "../stores/User.js";
const emits = defineEmits('close')
const error = reactive({
  isError: false,
  message: ''
})

const data = reactive({
  userWallet: '',
    disabled: false
})

const saveUserWallet = (wallet) => {
    data.disabled = true
    addWallet(wallet).then(() => {
        if(wallet.length < 20) {
            error.isError = true
            error.message = 'This wallet is wrong, try again'
        } else {
            userWallet.wallet = data.userWallet
            error.isError = false
            emits('close')
        }
        data.disabled = false
    }). catch(() => {data.disabled = false})

}
</script>

<template>
  <div class="connect-wallet">
    <h2>Enter your wallet</h2>
    <form @submit.prevent>
      <input type="text" :class="{ error: false }" placeholder="Your wallet" v-model="data.userWallet">
      <div class="err" v-if="error.isError">
        {{ error.message }}
      </div>
      <span>
        By continuing, you accept you are 18+ years of age and agree to the Terms and Condition
      </span>
      <ButtonPrimary :disabled="data.disabled" @click="saveUserWallet(data.userWallet)">
        Save
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