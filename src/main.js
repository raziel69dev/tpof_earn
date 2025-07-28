import './assets/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import {userWallet} from "@/stores/User.js";


const app = createApp(App)
app.use(router)

app.mount('#app')


if(localStorage.getItem('userWallet')){
    userWallet.wallet = localStorage.getItem('userWallet')
}