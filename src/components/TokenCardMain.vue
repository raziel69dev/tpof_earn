<template>
    <div class="token" :class="props.levelClass">
        <div class="token-header">
            <div class="token-header-info">
                <div class="token-header_name">
                    <p>{{ token.name }}</p>
                </div>
                <div class="token-header_description">
                    {{ token.description }}
                </div>
                <div class="token-header-summ">
                    <div class="token-header-summ_price">
                        <span>Token price</span>
                        <p>{{ token.price }}</p>
                    </div>
                    <div class="token-header-summ_balance" v-if="userWallet.wallet">
                        <span>Your balance</span>
                        <p>{{ token.balance ? parseFloat(token.balance).toFixed(2) : '0.00' }}</p>
                    </div>
                </div>
            </div>
            <div class="token-header-logo">
                <img :src="token.image" alt="">
            </div>
        </div>
        <div class="token-links">
            <div class="token-links_issuer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.6943 4.98914V10.3297M5.6943 4.98914V10.3297M9.02763 4.98914V10.3297M12.0276 4.98914V10.3297M1.36096 11.3978L1.36096 11.9319C1.36096 12.3058 1.36096 12.4927 1.43362 12.6355C1.49754 12.7611 1.59953 12.8632 1.72497 12.9272C1.86758 13 2.05426 13 2.42763 13H12.2943C12.6677 13 12.8543 13 12.997 12.9272C13.1224 12.8632 13.2244 12.7611 13.2883 12.6355C13.361 12.4927 13.361 12.3058 13.361 11.9319V11.3978C13.361 11.024 13.361 10.837 13.2883 10.6942C13.2244 10.5686 13.1224 10.4665 12.997 10.4025C12.8543 10.3297 12.6677 10.3297 12.2943 10.3297H2.42763C2.05426 10.3297 1.86758 10.3297 1.72497 10.4025C1.59953 10.4665 1.49754 10.5686 1.43362 10.6942C1.36096 10.837 1.36096 11.024 1.36096 11.3978ZM7.12957 1.03521L2.19624 2.13299C1.8982 2.19931 1.74918 2.23247 1.63794 2.31272C1.53982 2.3835 1.46278 2.47967 1.41506 2.59094C1.36096 2.71708 1.36096 2.86994 1.36096 3.17567L1.36096 3.92103C1.36096 4.2949 1.36096 4.48184 1.43362 4.62464C1.49754 4.75025 1.59953 4.85238 1.72497 4.91638C1.86758 4.98914 2.05426 4.98914 2.42763 4.98914H12.2943C12.6677 4.98914 12.8543 4.98914 12.997 4.91638C13.1224 4.85238 13.2244 4.75026 13.2883 4.62464C13.361 4.48184 13.361 4.2949 13.361 3.92103V3.17567C13.361 2.86994 13.361 2.71708 13.3069 2.59094C13.2591 2.47967 13.1821 2.3835 13.084 2.31272C12.9727 2.23247 12.8237 2.19931 12.5257 2.13299L7.59235 1.03521C7.506 1.01599 7.46283 1.00638 7.4192 1.00255C7.38045 0.999149 7.34147 0.999149 7.30272 1.00255C7.2591 1.00638 7.21592 1.01599 7.12957 1.03521Z" stroke="#B5C4D3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ token.issuer.substring(0, 6) }}...{{ token.issuer.slice(-6) }}</span>
            </div>
            <div class="token-links_domain">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7.01605 1C8.51682 2.64301 9.3697 4.77522 9.41605 7C9.3697 9.22478 8.51682 11.357 7.01605 13M7.01605 1C5.51528 2.64301 4.6624 4.77522 4.61605 7C4.6624 9.22478 5.51528 11.357 7.01605 13M7.01605 1C3.70234 1 1.01605 3.68629 1.01605 7C1.01605 10.3137 3.70234 13 7.01605 13M7.01605 1C10.3298 1 13.0161 3.68629 13.0161 7C13.0161 10.3137 10.3298 13 7.01605 13M1.31606 5.2H12.7161M1.31605 8.8H12.7161" stroke="#B5C4D3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span><a :href="token.domain">{{ token.domain }}</a></span>
            </div>
        </div>
        <div class="token-footer">
            <a class="btn buy" :href="token.buyLink" target="_blank">
                Buy now
            </a>
            <button class="btn outline" @click="openTiers()" v-if="props.levelClass === 'main'">
                Tiers
            </button>
            <button class="btn outline" @click="routeUser(token.asset_code)" v-if="props.levelClass !== 'reward_second' && token.subreward">
                Rewards
            </button>
            <a class="btn outline square" :href="token.telegram" v-if="token.telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M14.4891 0.5429L1.68512 5.19652C1.27034 5.34719 1.29548 5.90233 1.72246 6.01974L4.97604 6.91574L6.19021 10.5091C6.31706 10.8845 6.82709 10.9981 7.12219 10.7171L8.80451 9.11531L12.105 11.3749C12.509 11.6515 13.0841 11.4459 13.1868 10.9885L15.3732 1.24112C15.4802 0.763661 14.9766 0.365889 14.4893 0.5429H14.4891ZM12.8838 2.70609L6.93647 7.61106C6.87711 7.65994 6.83953 7.72757 6.83068 7.80101L6.60163 9.69947C6.59421 9.7613 6.50111 9.76956 6.48148 9.71018L5.53944 6.8789C5.49636 6.74922 5.55261 6.60881 5.6761 6.53738L12.6993 2.47484C12.8608 2.38131 13.0262 2.58868 12.8838 2.70609Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <a class="btn outline square" @click="openQrCode()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.8877 4.5H4.8977M15.8877 4.5H15.8977M4.8877 15.5H4.8977M11.3877 11H11.3977M15.8877 15.5H15.8977M15.3877 19H19.3877V15M12.3877 14.5V19M19.3877 12H14.8877M13.9877 8H17.7877C18.3477 8 18.6278 8 18.8417 7.89101C19.0298 7.79513 19.1828 7.64215 19.2787 7.45399C19.3877 7.24008 19.3877 6.96005 19.3877 6.4V2.6C19.3877 2.03995 19.3877 1.75992 19.2787 1.54601C19.1828 1.35785 19.0298 1.20487 18.8417 1.10899C18.6278 1 18.3477 1 17.7877 1H13.9877C13.4276 1 13.1476 1 12.9337 1.10899C12.7455 1.20487 12.5926 1.35785 12.4967 1.54601C12.3877 1.75992 12.3877 2.03995 12.3877 2.6V6.4C12.3877 6.96005 12.3877 7.24008 12.4967 7.45399C12.5926 7.64215 12.7455 7.79513 12.9337 7.89101C13.1476 8 13.4276 8 13.9877 8ZM2.9877 8H6.7877C7.34775 8 7.62777 8 7.84169 7.89101C8.02985 7.79513 8.18283 7.64215 8.2787 7.45399C8.3877 7.24008 8.3877 6.96005 8.3877 6.4V2.6C8.3877 2.03995 8.3877 1.75992 8.2787 1.54601C8.18283 1.35785 8.02985 1.20487 7.84169 1.10899C7.62777 1 7.34775 1 6.7877 1H2.9877C2.42764 1 2.14762 1 1.9337 1.10899C1.74554 1.20487 1.59256 1.35785 1.49669 1.54601C1.3877 1.75992 1.3877 2.03995 1.3877 2.6V6.4C1.3877 6.96005 1.3877 7.24008 1.49669 7.45399C1.59256 7.64215 1.74554 7.79513 1.9337 7.89101C2.14762 8 2.42764 8 2.9877 8ZM2.9877 19H6.7877C7.34775 19 7.62777 19 7.84169 18.891C8.02985 18.7951 8.18283 18.6422 8.2787 18.454C8.3877 18.2401 8.3877 17.9601 8.3877 17.4V13.6C8.3877 13.0399 8.3877 12.7599 8.2787 12.546C8.18283 12.3578 8.02985 12.2049 7.84169 12.109C7.62777 12 7.34775 12 6.7877 12H2.9877C2.42764 12 2.14762 12 1.9337 12.109C1.74554 12.2049 1.59256 12.3578 1.49669 12.546C1.3877 12.7599 1.3877 13.0399 1.3877 13.6V17.4C1.3877 17.9601 1.3877 18.2401 1.49669 18.454C1.59256 18.6422 1.74554 18.7951 1.9337 18.891C2.14762 19 2.42764 19 2.9877 19Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>

        <Teleport to="main">
            <PopupWrapper v-if="popup.open" @close="popup.open = false">
              <component :is="popup.component" :qrCode="token.qrCode" />
            </PopupWrapper>
        </Teleport>

    </div>
</template>

<script setup>
import {userWallet} from "../stores/User.js";
import PopupWrapper from "./PopupWrapper.vue";
import {reactive, shallowRef} from "vue";
import {useRouter} from "vue-router";
import ConnectWallet from "@/pages/ConnectWallet.vue";
import QrCode from "@/components/QrCode.vue";
import TierList from "../pages/TierList.vue";

const props = defineProps(['token', 'levelClass'])

const popup = reactive({
    open: false,
    component: null
})
const router = useRouter()
const routeUser = (code) => {
  if (props.token.level === 'main') {
    router.push('/#rewards_level_one')
  } else {
    router.push('/rewards_level_two?coin=' + code)
  }

}

const balance = userWallet.balance.find(item => item.asset_code === props.token.asset_code)  || 0.00
const tokenBalance = (parseFloat(balance.balance)) || 0

const openTiers = () => {
    popup.component = shallowRef(TierList)
    popup.open = true
}

const openQrCode = () => {
  popup.component = shallowRef(QrCode)
  popup.open = true
}

</script>

<style scoped lang="scss">

.token {
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;

  &.main {
    border-radius: 20px;
    background: linear-gradient(116deg, rgba(2, 44, 84, 0.90) 43.38%, rgba(190, 37, 49, 0.90) 100%);
  }
  &.reward_first {
    border-radius: 20px;
    background: linear-gradient(116deg, rgba(2, 44, 84, 0.90) 0%, rgba(42, 100, 156, 0.90) 100%);
  }
  &.reward_second {
    border-radius: 20px;
    background: linear-gradient(116deg, rgba(42, 100, 156, 0.90) 43.38%, rgba(166, 203, 239, 0.90) 100%);
  }

  &-header {
    display: flex;
    gap: 20px;
    justify-content: space-between;

    &_name {
      color: #FFF;
      font-family: Poppins, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
    }
    &_description {
      color: rgba(255, 255, 255, 0.60);

      /* Caption/1/Regular */
      font-family: Poppins, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
    }
    &-logo {
      width: 80px;
      border-radius: 50px;
      height: 80px;
      padding: 0;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      display: flex;

      img {
        width: 90px;
        height: 90px;
      }
    }
    &-summ {
      display: flex;
      gap: 20px;
      margin-top: 20px;

      &_price, &_balance {
        font-family: Poppins, sans-serif;
        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          opacity: .5;
          margin-bottom: -10px;
        }
        p {
          color: #FFF;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
        }
      }
    }
  }
  &-links {
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255,255,255, .2);
    display: flex;
    justify-content: space-between;
    width: 100%;

    &_issuer, &_domain {
      display: flex;
      gap: 5px;
      align-items: center;
      span, a {
        font-family: Poppins, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        opacity: .5;
        line-height: 16px;
        text-decoration: none;
        color: #fff;
      }
    }

  }

  &-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

}

</style>