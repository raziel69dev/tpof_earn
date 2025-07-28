<template>
    <div v-if="loading.loaded" class="tokens-wrapper">
        <h2>Main token</h2>
        <div class="tokens">
            <TokenCardMain v-for="token of allTokens"
                           v-show="token.level === 'main'"
                           :token="token"
                           :key="token"/>
        </div>
        <h2 id="rewards_level_one">Token Rewards LVL 1</h2>
        <div class="tokens">
            <TokenCardMain v-for="token of allTokens"
                           v-show="token.level === 'reward_first'"
                           :token="token"
                           :key="token"/>
        </div>
    </div>

  <TheLoader v-else />


</template>

<script setup>
import TokenCardMain from "../components/TokenCardMain.vue";
import {allTokens} from  '../stores/Tokens.js'
import PopupWrapper from "../components/PopupWrapper.vue";
import {onMounted, reactive} from "vue";
import TheLoader from "@/elements/TheLoader.vue";

const loading = reactive({
  loaded: false
})

onMounted(() => {
  setTimeout(() => {
    loading.loaded = true
  }, 2000)
})
</script>

<style scoped lang="scss">
h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.tokens {
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: .3s ease;
}

</style>