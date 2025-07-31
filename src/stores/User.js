import {reactive} from "vue";
import {allTokens} from "./Tokens.js";

export const userWallet = reactive({
    wallet: null,
    balance: []
})

export const addWallet = (wallet) => {
    return fetch('https://test.tpofearn.com/api/balances', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            init_data: null,
            wallet: wallet
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Преобразуем ответ в JSON
        })
        .then(data => {
            if(data.status === 'Success') {
                setBalances(data.result)
                localStorage.setItem('userWallet', wallet)
                localStorage.setItem('userBalance', JSON.stringify(data.result))
            }

        })
        .catch(error => {
            userWallet.wallet = null
            localStorage.clear()
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export const setBalances = (balances) => {
    for (let balance of balances ) {
        const tokenBalance = allTokens.find(item => item.asset_code.toUpperCase() === balance.asset_code.toUpperCase())
        tokenBalance ? tokenBalance.balance = balance.balance : null
    }
}