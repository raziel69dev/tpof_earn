import {reactive} from "vue";
// --- IMPORTS ---

import TPOFEARN_LOGO from '../assets/tokens_logos/tpof_white.svg';
import TPOFEARN_QR from '../assets/qr_codes/TPOFEARN.jpg';
import TRUMPEARN_LOGO from '../assets/tokens_logos/TRUMPEARN.png';
import TRUMPEARN_QR from '../assets/qr_codes/TRUMPEARN.jpg';
import ETRUMP_LOGO from '../assets/tokens_logos/ETRUMP.png';
import ETRUMP_QR from '../assets/qr_codes/ETRUMP.jpg';
import WLFIEARN_LOGO from '../assets/tokens_logos/WLFIEARN.png';
import WLFIEARN_QR from '../assets/qr_codes/WLFIEARN.jpg';
import EWLFI_LOGO from '../assets/tokens_logos/EWLFI.png';
import EWLFI_QR from '../assets/qr_codes/EWLFI.jpg';
import ETHEARN_LOGO from '../assets/tokens_logos/ETHEARN.png';
import ETHEARN_QR from '../assets/qr_codes/ETHEARN.jpg';
import EETH_LOGO from '../assets/tokens_logos/EETH.png';
import EETH_QR from '../assets/qr_codes/EETH.jpg';
import BTCEARN_LOGO from '../assets/tokens_logos/BTCEARN.png';
import BTCEARN_QR from '../assets/qr_codes/BTCEARN.jpg';
import EBTC_LOGO from '../assets/tokens_logos/EBTC.png';
import EBTC_QR from '../assets/qr_codes/EBTC.jpg';
import RLUSDEARN_LOGO from '../assets/tokens_logos/RLUSDEARN.png';
import RLUSDEARN_QR from '../assets/qr_codes/RLUSDEARN.jpg';
import ERLUSD_LOGO from '../assets/tokens_logos/ERLUSD.png';
import ERLUSD_QR from '../assets/qr_codes/ERLUSD.jpg';
import USDEARN_LOGO from '../assets/tokens_logos/USDEARN.png';
import USDEARN_QR from '../assets/qr_codes/USDEARN.jpg';
import EUSD_LOGO from '../assets/tokens_logos/USD.png';
import EUSD_QR from '../assets/qr_codes/EUSDC.jpg';
import DOGEEARN_LOGO from '../assets/tokens_logos/DOGEEARN.png';
import DOGEEARN_QR from '../assets/qr_codes/DOGEEARN.jpg';
import EDOGE_LOGO from '../assets/tokens_logos/EDOGE.png';
import EDOGE_QR from '../assets/qr_codes/EDOGE.jpg';
import HBAREARN_LOGO from '../assets/tokens_logos/HBAREARN.png';
import HBAREARN_QR from '../assets/qr_codes/HBAREARN.jpg';
import EHBAR_LOGO from '../assets/tokens_logos/EHBAR.png';
import EHBAR_QR from '../assets/qr_codes/EHBAR.jpg';
import BNBEARN_LOGO from '../assets/tokens_logos/BNBEARN.png';
import BNBEARN_QR from '../assets/qr_codes/BNBEARN.jpg';
import EBNB_LOGO from '../assets/tokens_logos/EBNB.png';
import EBNB_QR from '../assets/qr_codes/EBNB.jpg';
import TONEARN_LOGO from '../assets/tokens_logos/TONEARN.png';
import TONEARN_QR from '../assets/qr_codes/TONEARN.jpg';
import ETON_LOGO from '../assets/tokens_logos/ETON.png';
import ETON_QR from '../assets/qr_codes/ETON.jpg';
import QNTEARN_LOGO from '../assets/tokens_logos/QNTEARN.png';
import QNTEARN_QR from '../assets/qr_codes/QNTEARN.jpg';
import EQNT_LOGO from '../assets/tokens_logos/EQNT.png';
import EQNT_QR from '../assets/qr_codes/EQNT.jpg';
import IOTAEARN_LOGO from '../assets/tokens_logos/IOTAEARN.png';
import IOTAEARN_QR from '../assets/qr_codes/IOTAEARN.jpg';
import EIOTA_LOGO from '../assets/tokens_logos/eIOTA.png';
import EIOTA_QR from '../assets/qr_codes/EIOTA.jpg';
import ALOGEARN_LOGO from '../assets/tokens_logos/ALGOEARN.png';
import ALOGEARN_QR from '../assets/qr_codes/ALGOEARN.jpg';
import USD1EARN_LOGO from '../assets/tokens_logos/USD1EARN.png';
import USD1EARN_QR from '../assets/qr_codes/USD1EARN.jpg';
import XDCEARN_LOGO from '../assets/tokens_logos/XDCEARN.png';
import XDCEARN_QR from '../assets/qr_codes/XDCEARN.jpg';
import EXDC_LOGO from '../assets/tokens_logos/EXDC.png';
import EXDC_QR from '../assets/qr_codes/EXDC.jpg';
import GOLDEARN_LOGO from '../assets/tokens_logos/GOLDEARN.png';
import GOLDEARN_QR from '../assets/qr_codes/GOLDEARN.jpg';
import EGOLD_LOGO from '../assets/tokens_logos/EGOLD.png';
import EGOLD_QR from '../assets/qr_codes/EGOLD.jpg';
import SOLDEARN_LOGO from '../assets/tokens_logos/SOLEARN.png';
import SOLDEARN_QR from '../assets/qr_codes/SOLEARN.jpg';
import SHXEARN_LOGO from '../assets/tokens_logos/SHXEARN.png';
import SHXEARN_QR from '../assets/qr_codes/SHXEARN.jpg';
import ESHX_LOGO from '../assets/tokens_logos/ESHX.png';
import ESHX_QR from '../assets/qr_codes/ESHX.jpg';
import XLMEARN_LOGO from '../assets/tokens_logos/XLMEARN.png';
import XLMEARN_QR from '../assets/qr_codes/XLMEARN.jpg';
import EXLM_LOGO from '../assets/tokens_logos/EXLM.png';
import EXLM_QR from '../assets/qr_codes/EXML.jpg';
import XRPEARN_LOGO from '../assets/tokens_logos/XRPEARN.png';
import XRPEARN_QR from '../assets/qr_codes/XRPEARN.jpg';
import EXRP_LOGO from '../assets/tokens_logos/EXRP.png';
import EXRP_QR from '../assets/qr_codes/EXRP.jpg';
import USDCEARN_LOGO from '../assets/tokens_logos/USDCEARN.png';
import USDCEARN_QR from '../assets/qr_codes/USDCEARN.jpg';
import EUSDC_LOGO from '../assets/tokens_logos/EUSDC.png';
import EUSDC_QR from '../assets/qr_codes/EUSDC.jpg';
import EALGO_LOGO from '../assets/tokens_logos/EALGO.png';
import EALGO_QR from '../assets/qr_codes/EALGO.jpg';
import EUSD1_LOGO from '../assets/tokens_logos/EUSD1.png';
import EUSD1_QR from '../assets/qr_codes/EUSDC.jpg';
import ESOL_LOGO from '../assets/tokens_logos/ESOL.png';
import ESOL_QR from '../assets/qr_codes/ESOL.jpg';
import {userWallet} from "./User.js";

export const allTokens = reactive([
    {
        asset_code: "TPOFEARN",
        name: "TPOF Earn",
        issuer: "GBV7L7MO6BW5QBOE3EBRZ6W7AW5RFRGR4YWRS6DCGUELFTMVG6STPOFE",
        price: "0.05 XLM",
        domain: "tpofearn.com",
        buyLink: "https://lobstr.co/trade/TPOFEARN:GBV7L7MO6BW5QBOE3EBRZ6W7AW5RFRGR4YWRS6DCGUELFTMVG6STPOFE",
        description: "Biggest Earning Program on Stellar Blockchain.",
        telegram: "https://t.me/TPOF_USA",
        image: TPOFEARN_LOGO,
        qrCode: TPOFEARN_QR
    },
    {
        asset_code: "TRUMPEarn",
        name: "TRUMPEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/TRUMPEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "TRUMPEarn – the gateway asset to earn native TRUMP (eTRUMP)",
        image: TRUMPEARN_LOGO,
        qrCode: TRUMPEARN_QR,
        subreward: {
            asset_code: "ETRUMP",
            name: "eTRUMP",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/ETRUMP:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eTRUMP is the passive income version of TRUMP, distributed every 12 hours to holders of TRUMPEarn. Backed 1:1 by native TRUMP.",
            image: ETRUMP_LOGO,
            qrCode: ETRUMP_QR
        }
    },
    {
        asset_code: "WLFIEarn",
        name: "WLFIEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/WLFIEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "WLFIEarn – the gateway asset to earn native WLFI (eWLFI)",
        image: WLFIEARN_LOGO,
        qrCode: WLFIEARN_QR,
        subreward: {
            asset_code: "EWLFI",
            name: "eWLFI",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EWLFI:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eWLFI is the passive income version of WLFI, distributed every 12 hours to holders of WLFIEarn. Backed 1:1 by native WLFI.",
            image: EWLFI_LOGO,
            qrCode: EWLFI_QR
        }
    },
    {
        asset_code: "ETHEarn",
        name: "ETHEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/ETHEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "ETHEarn – the gateway asset to earn native ETH (eETH)",
        image: ETHEARN_LOGO,
        qrCode: ETHEARN_QR,
        subreward: {
            asset_code: "EETH",
            name: "eETH",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EETH:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eETH is the passive income version of ETH, distributed every 12 hours to holders of ETHEarn. Backed 1:1 by native ETH.",
            image: EETH_LOGO,
            qrCode: EETH_QR
        }
    },
    {
        asset_code: "BTCEarn",
        name: "BTCEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/BTCEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "BTCEarn – the gateway asset to earn native BTC (eBTC)",
        image: BTCEARN_LOGO,
        qrCode: BTCEARN_QR,
        subreward: {
            asset_code: "EBTC",
            name: "eBTC",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EBTC:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eBTC is the passive income version of BTC, distributed every 12 hours to holders of BTCEarn. Backed 1:1 by native BTC.",
            image: EBTC_LOGO,
            qrCode: EBTC_QR
        }
    },
    {
        asset_code: "RLUSDEarn",
        name: "RLUSDEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/RLUSDEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "RLUSDEarn – the gateway asset to earn native RLUSD (eRLUSD)",
        image: RLUSDEARN_LOGO,
        qrCode: RLUSDEARN_QR,
        subreward: {
            asset_code: "ERLUSD",
            name: "eRLUSD",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/ERLUSD:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eRLUSD is the passive income version of RLUSD, distributed every 12 hours to holders of RLUSDEarn. Backed 1:1 by native RLUSD.",
            image: ERLUSD_LOGO,
            qrCode: ERLUSD_QR
        }
    },
    {
        asset_code: "USDEarn",
        name: "USDEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/USDEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "USDEarn – the gateway asset to earn native USD (eUSD)",
        image: USDEARN_LOGO,
        qrCode: USDEARN_QR,
        subreward: {
            asset_code: "EUSD",
            name: "eUSD",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EUSD:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eUSD is the passive income version of USD, distributed every 12 hours to holders of USDEarn. Backed 1:1 by native USD.",
            image: EUSD_LOGO,
            qrCode: EUSD_QR
        }
    },
    {
        asset_code: "DOGEEarn",
        name: "DOGEEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/DOGEEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "DOGEEarn – the gateway asset to earn native DOGE (eDOGE)",
        image: DOGEEARN_LOGO,
        qrCode: DOGEEARN_QR,
        subreward: {
            asset_code: "EDOGE",
            name: "eDOGE",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EDOGE:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eDOGE is the passive income version of DOGE, distributed every 12 hours to holders of DOGEEarn. Backed 1:1 by native DOGE.",
            image: EDOGE_LOGO,
            qrCode: EDOGE_QR
        }
    },
    {
        asset_code: "HBAREarn",
        name: "HBAREarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/HBAREARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "HBAREarn – the gateway asset to earn native HBAR (eHBAR)",
        image: HBAREARN_LOGO,
        qrCode: HBAREARN_QR,
        subreward: {
            asset_code: "EHBAR",
            name: "eHBAR",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EHBAR:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eHBAR is the passive income version of HBAR, distributed every 12 hours to holders of HBAREarn. Backed 1:1 by native HBAR.",
            image: EHBAR_LOGO,
            qrCode: EHBAR_QR
        }
    },
    {
        asset_code: "BNBEarn",
        name: "BNBEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/BNBEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "BNBEarn – the gateway asset to earn native BNB (eBNB)",
        image: BNBEARN_LOGO,
        qrCode: BNBEARN_QR,
        subreward: {
            asset_code: "EBNB",
            name: "eBNB",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EBNB:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eBNB is the passive income version of BNB, distributed every 12 hours to holders of BNBEarn. Backed 1:1 by native BNB.",
            image: EBNB_LOGO,
            qrCode: EBNB_QR
        }
    },
    {
        asset_code: "TONEarn",
        name: "TONEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/TONEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "TONEarn – the gateway asset to earn native TON (eTON)",
        image: TONEARN_LOGO,
        qrCode: TONEARN_QR,
        subreward: {
            asset_code: "ETON",
            name: "eTON",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/ETON:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eTON is the passive income version of TON, distributed every 12 hours to holders of TONEarn. Backed 1:1 by native TON.",
            image: ETON_LOGO,
            qrCode: ETON_QR
        }
    },
    {
        asset_code: "QNTEarn",
        name: "QNTEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/QNTEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "QNTEarn – the gateway asset to earn native QNT (eQNT)",
        image: QNTEARN_LOGO,
        qrCode: QNTEARN_QR,
        subreward: {
            asset_code: "EQNT",
            name: "eQNT",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EQNT:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eQNT is the passive income version of QNT, distributed every 12 hours to holders of QNTEarn. Backed 1:1 by native QNT.",
            image: EQNT_LOGO,
            qrCode: EQNT_QR
        }
    },
    {
        asset_code: "IOTAEarn",
        name: "IOTAEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/IOTAEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "IOTAEarn – the gateway asset to earn native IOTA (eIOTA)",
        image: IOTAEARN_LOGO,
        qrCode: IOTAEARN_QR,
        subreward: {
            asset_code: "EIOTA",
            name: "eIOTA",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EIOTA:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eIOTA is the passive income version of IOTA, distributed every 12 hours to holders of IOTAEarn. Backed 1:1 by native IOTA.",
            image: EIOTA_LOGO,
            qrCode: EIOTA_QR
        }
    },
    {
        asset_code: "ALOGEarn",
        name: "ALOGEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/ALOGEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "ALOGEarn – the gateway asset to earn native ALOG (eALOG)",
        image: ALOGEARN_LOGO,
        qrCode: ALOGEARN_QR
    },
    {
        asset_code: "USD1Earn",
        name: "USD1Earn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/USD1EARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "USD1Earn – the gateway asset to earn native USD1 (eUSD1)",
        image: USD1EARN_LOGO,
        qrCode: USD1EARN_QR
    },
    {
        asset_code: "XDCEarn",
        name: "XDCEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/XDCEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "XDCEarn – the gateway asset to earn native XDC (eXDC)",
        image: XDCEARN_LOGO,
        qrCode: XDCEARN_QR,
        subreward: {
            asset_code: "EXDC",
            name: "eXDC",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EXDC:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eXDC is the passive income version of XDC, distributed every 12 hours to holders of XDCEarn. Backed 1:1 by native XDC .",
            image: EXDC_LOGO,
            qrCode: EXDC_QR
        }
    },
    {
        asset_code: "GOLDEarn",
        name: "GOLDEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/GOLDEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "GOLDEarn – the gateway asset to earn native GOLD (eGOLD)",
        image: GOLDEARN_LOGO,
        qrCode: GOLDEARN_QR,
        subreward: {
            asset_code: "EGOLD",
            name: "eGOLD",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/EGOLD:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eGOLD is the passive income version of GOLD, distributed every 12 hours to holders of GOLDEarn. Backed 1:1 by native GOLD",
            image: EGOLD_LOGO,
            qrCode: EGOLD_QR
        }
    },
    {
        asset_code: "SOLEarn",
        name: "SOLEarn",
        issuer: "GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        price: "1 XLM",
        domain: "https://tpofearn-trust.com",
        buyLink: "https://lobstr.co/trade/SOLEARN:GCFCMGDHDEWLRFAOPJYWSIDQM7S4MEQOR5WLNYIG2BKSSQLLEHVBEARN",
        description: "SOLDEarn – the gateway asset to earn native SOL (eSOL)",
        image: SOLDEARN_LOGO,
        qrCode: SOLDEARN_QR,
        subreward: {
            asset_code: "ESOL",
            name: "eSOL",
            issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            price: "1 XLM",
            domain: "https://tpofearn-etrust.com",
            buyLink: "https://lobstr.co/trade/ESOL:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
            description: "eSOL is the passive income version of SOL, distributed every 12 hours to holders of SOLEarn. Backed 1:1 by native SOL",
            image: ESOL_LOGO,
            qrCode: ESOL_QR
        }
    },
    {
        asset_code: "SHXEarn",
        name: "SHXEarn",
        issuer: "GBQEP5I5ILKA6HN4R3O2GRTLAPPFMINSE7Q7MZBDX2NLLGVF7QOS5SHX",
        price: "1 XLM",
        domain: "https://shxearn.io",
        buyLink: "https://lobstr.co/trade/SHXEARN:GBQEP5I5ILKA6HN4R3O2GRTLAPPFMINSE7Q7MZBDX2NLLGVF7QOS5SHX",
        description: "SHXEarn – the gateway asset to earn native SHX (eSHX)",
        image: SHXEARN_LOGO,
        qrCode: SHXEARN_QR,
        subreward: {
            asset_code: "eSHX",
            name: "eSHX",
            issuer: "GBQEP5I5ILKA6HN4R3O2GRTLAPPFMINSE7Q7MZBDX2NLLGVF7QOS5SHX",
            price: "1 XLM",
            domain: "https://shxearn.io",
            buyLink: "https://lobstr.co/trade/ESHX:GBQEP5I5ILKA6HN4R3O2GRTLAPPFMINSE7Q7MZBDX2NLLGVF7QOS5SHX",
            description: "eSHX is the passive income version of SHX, distributed every 12 hours to holders of SHXEarn. Backed 1:1 by native SHX.",
            image: ESHX_LOGO,
            qrCode: ESHX_QR
        }
    },
    {
        asset_code: "XLMEarn",
        name: "XLMEarn",
        issuer: "GDKN6S264372QJZASILGFJGAXZPITTVF3X2IJC44KX6KEYWA3JGEQXLM",
        price: "1 XLM",
        domain: "https://xlmearn.io",
        buyLink: "https://lobstr.co/trade/XLMEARN:GDKN6S264372QJZASILGFJGAXZPITTVF3X2IJC44KX6KEYWA3JGEQXLM",
        description: "XLMEarn – the gateway asset to earn native XLM (eXLM)",
        image: XLMEARN_LOGO,
        qrCode: XLMEARN_QR,
        subreward: {
            asset_code: "eXLM",
            name: "eXLM",
            issuer: "GDM65EM2WFV4I3X6542C2652H73UAI2247YJDHVNIGQ6CR3Y4QRFEXLM",
            price: "1 XLM",
            domain: "https://exlm.io",
            buyLink: "https://lobstr.co/trade/EXLM:GDM65EM2WFV4I3X6542C2652H73UAI2247YJDHVNIGQ6CR3Y4QRFEXLM",
            description: "eXLM is the passive income version of XLM, distributed every 12 hours to holders of XLMEarn. Backed 1:1 by native XLM.",
            image: EXLM_LOGO,
            qrCode: EXLM_QR
        }
    },
    {
        asset_code: "XRPEarn",
        name: "XRPEarn",
        issuer: "GCGUYYDXLZGM77ID2PTAXOLRCLTQZCHJUB5KT4VO27TWDHWLCZPGTXRP",
        price: "1 XLM",
        domain: "https://xrpearn.io",
        buyLink: "https://lobstr.co/trade/XRPEARN:GCGUYYDXLZGM77ID2PTAXOLRCLTQZCHJUB5KT4VO27TWDHWLCZPGTXRP",
        description: "XRPEarn – the gateway asset to earn native XRP (eXRP)",
        image: XRPEARN_LOGO,
        qrCode: XRPEARN_QR,
        subreward: {
            asset_code: "eXRP",
            name: "eXRP",
            issuer: "GCGUYYDXLZGM77ID2PTAXOLRCLTQZCHJUB5KT4VO27TWDHWLCZPGTXRP",
            price: "1 XLM",
            domain: "https://xrpearn.io",
            buyLink: "https://lobstr.co/trade/EXRP:GCGUYYDXLZGM77ID2PTAXOLRCLTQZCHJUB5KT4VO27TWDHWLCZPGTXRP",
            description: "eXRP is the passive income version of XRP, distributed every 12 hours to holders of XRPEarn. Backed 1:1 by native XRP.",
            image: EXRP_LOGO,
            qrCode: EXRP_QR
        }
    },
    {
        asset_code: "USDCEarn",
        name: "USDCEarn",
        issuer: "GDOF3NKGLSXH3UVLZI3TJRRXAGOYSVCQBLOAL3GKZG3JH34CBRT6USDC",
        price: "1 XLM",
        domain: "https://usdcearn.org",
        buyLink: "https://lobstr.co/trade/USDCEARN:GDOF3NKGLSXH3UVLZI3TJRRXAGOYSVCQBLOAL3GKZG3JH34CBRT6USDC",
        description: "USDCEarn – the gateway asset to earn native USDC (eUSDC)",
        image: USDCEARN_LOGO,
        qrCode: USDCEARN_QR,
        subreward: {
            asset_code: "eUSDC",
            name: "eUSDC",
            issuer: "GDOF3NKGLSXH3UVLZI3TJRRXAGOYSVCQBLOAL3GKZG3JH34CBRT6USDC",
            price: "1 XLM",
            domain: "https://usdcearn.io",
            buyLink: "https://lobstr.co/trade/EUSDC:GDOF3NKGLSXH3UVLZI3TJRRXAGOYSVCQBLOAL3GKZG3JH34CBRT6USDC",
            description: "eUSDC is the passive income version of USDC, distributed every 12 hours to holders of USDCEarn. Backed 1:1 by native USDC.",
            image: EUSDC_LOGO,
            qrCode: EUSDC_QR
        }
    },
    {
        asset_code: "EALGO",
        name: "eALGO",
        issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
        price: "1 XLM",
        domain: "https://tpofearn-etrust.com",
        buyLink: "https://lobstr.co/trade/EALGO:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
        description: "eALGO is the passive income version of ALGO, distributed every 12 hours to holders of ALGOEarn. Backed 1:1 by native ALGO .",
        image: EALGO_LOGO,
        qrCode: EALGO_QR
    },
    {
        asset_code: "eUSD1",
        name: "eUSD1",
        issuer: "GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
        price: "1 XLM",
        domain: "https://tpofearn-etrust.com",
        buyLink: "https://lobstr.co/trade/EUSD1:GC2IEXKXIZPGQLRDRSSPJVTUNC34Z7ALKABCVRDWLNI6TMH2QDWQR77E",
        description: "eUSD1 is the passive income version of USD1, distributed every 12 hours to holders of USD1Earn. Backed 1:1 by native USD1.",
        image: EUSD1_LOGO,
        qrCode: EUSD1_QR
    },

])
