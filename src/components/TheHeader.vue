<template>
    <header class="header">
        <div class="logotype">
          <div class="back" v-if="route.path !== '/'" @click="router.back()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15 8L1 8M1 8L8 15M1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <router-link to="/">
            TPOF Earn
          </router-link>

        </div>
        <div class="menu">
            <ButtonConnect
                v-if="!userWallet.wallet"
                @click="setComponent(ConnectWallet)" />
          <ButtonEditWallet
                v-else
                @click="setComponent(EditWallet)" />
        </div>

      <Teleport to="#app">
        <PopupWrapper v-if="popup.open" @close="popup.open = false">
          <Component :is="popup.component"
                     @removeWallet="setComponent(RemoveWallet)"
                     @back="setComponent(EditWallet)"
                     @remove="removeWallet()"
                     @close="popup.open = false"/>
        </PopupWrapper>
      </Teleport>
    </header>
</template>

<script setup>
import ButtonConnect from "../elements/ButtonConnect.vue";
import PopupWrapper from "@/components/PopupWrapper.vue";
import {reactive, shallowRef} from "vue";
import ConnectWallet from "@/pages/ConnectWallet.vue";
import {userWallet} from "@/stores/User.js";
import ButtonEditWallet from "@/elements/ButtonEditWallet.vue";
import {useRoute, useRouter} from "vue-router";
import EditWallet from "@/pages/EditWallet.vue";
import RemoveWallet from "@/pages/RemoveWallet.vue";

const popup = reactive({
  open: false,
  component: null
})

const setComponent = (component) => {
  popup.open = true
  popup.component = shallowRef(component)
}

const removeWallet = () => {
  localStorage.removeItem('userWallet')
  userWallet.wallet = ''
  popup.open = false
}

const route = useRoute()
const router = useRouter()
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
    display: flex;
    gap: 5px;
    /* Roboto/Headline/Semibold */
    font-family: Poppins, sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>