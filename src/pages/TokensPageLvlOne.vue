<template>
    <div class="">
        <h2>Main token</h2>
        <div class="tokens">
            <TokenCardMain v-for="token of allTokens"
                           v-show="token.level === 'main'"
                           :token="token"
                           :key="token"/>
        </div>
        <h2>Token Rewards LVL 1</h2>
        <div class="tokens">
            <TokenCardMain v-for="token of allTokens"
                           v-show="token.level === 'reward_first'"
                           :token="token"
                           :key="token"/>
        </div>
    </div>


</template>

<script setup>
import TokenCardMain from "../components/TokenCardMain.vue";
import {allTokens} from  '../stores/Tokens.js'
import PopupWrapper from "../components/PopupWrapper.vue";

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
}

</style>