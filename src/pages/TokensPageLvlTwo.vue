<template>
    <div class="">
        <h2>Token Rewards LVL 2</h2>
        <div class="tokens" v-if="token">
            <TokenCardMain v-if="token.subtoken"
                           :token="token.subtoken"
                           :levelClass="'reward_second'"
            />
        </div>
    </div>


</template>

<script setup>
import TokenCardMain from "../components/TokenCardMain.vue";
import {allTokens} from  '../stores/Tokens.js'
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";

const token = reactive({
  subtoken: null,
    token: null
})

const route = useRoute()

onMounted(() => {
  token.subtoken = allTokens.find(item => item.name === route.query.coin).subreward
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
}

</style>