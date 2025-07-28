<template>
    <button class="btn top-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
        <path d="M7.99999 13.5H15M1 13.5H2.30242C2.6829 13.5 2.87314 13.5 3.05216 13.458C3.21089 13.4208 3.36262 13.3595 3.5018 13.2762C3.65878 13.1823 3.7933 13.051 4.06234 12.7883L13.8334 3.24962C14.4777 2.62061 14.4777 1.60077 13.8334 0.97176C13.189 0.342746 12.1444 0.342747 11.5 0.97176L1.72898 10.5105C1.45994 10.7731 1.32543 10.9044 1.22923 11.0577C1.14394 11.1936 1.08109 11.3417 1.04298 11.4966C1 11.6714 1 11.8571 1 12.2286V13.5Z" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <span>For wallet: {{ userWallet.wallet.substring(0, 4) }}...{{ userWallet.wallet.slice(-4) }}</span>
    </button>
</template>

<script setup>

import {userWallet} from "../stores/User.js";
</script>

<style scoped lang="scss">
.top-menu {
  span {
    display: inline-block;
    overflow: clip;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>