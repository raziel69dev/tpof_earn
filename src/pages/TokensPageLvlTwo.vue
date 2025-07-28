<template>
    <div class="">
        <h2>Token Rewards LVL 2</h2>
        <div class="tokens">
            <TokenCardMain v-for="token of allTokens"
                           v-show="token.level === 'reward_second'"
                           :token="token"
                           :key="token"/>
        </div>
    </div>


</template>

<script setup>
import TokenCardMain from "../components/TokenCardMain.vue";
import {allTokens} from  '../stores/Tokens.js'

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