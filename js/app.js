'use strict';
const update = {
    date: '22 июля',
    usd: {
        buyRate: '73.76',
        sellRate: '75.64',
    },
    eur:{
        buyRate: '86.70',
        sellRate: '88.74',
    }
};
function updateExchangeRates(getupdate){
    document.getElementById('date').textContent=getupdate.date;
    document.getElementById('usd-buy-rate').textContent=getupdate.usd.buyRate;
    document.getElementById('usd-sell-rate').textContent=getupdate.usd.sellRate;
    document.getElementById('eur-buy-rate').textContent=getupdate.eur.buyRate;
    document.getElementById('eur-sell-rate').textContent=getupdate.eur.sellRate;
}
updateExchangeRates(update);
