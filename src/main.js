import './assets/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import {addWallet, setBalances, userWallet} from "./stores/User.js";


const app = createApp(App)
app.use(router)

app.mount('#app')


if(localStorage.getItem('userWallet')){
    setBalances(JSON.parse(localStorage.getItem('userBalance')))
    userWallet.balance = JSON.parse(localStorage.getItem('userBalance'))
    userWallet.wallet = localStorage.getItem('userWallet').toString()
} else {
    localStorage.clear()
}

