import { get } from 'axios';

// Fonction pour récupérer le prix du Bitcoin
async function fetchBitcoinPrice(Symbol) {
    try {
        var response = await get ('https://api.binance.com/api/v3/ticker/price?symbol='+Symbol) ;
        // const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        // const bitcoinPrice = response.data.bitcoin.usd;
        const bitcoinPrice = response.data.price;
        return bitcoinPrice;
    } catch (error) {
        console.error('Erreur lors de la récupération du prix du Bitcoin :', error);
        return null;
    }
}

// Exemple d'utilisation de la fonction

