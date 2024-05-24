
export const formatCurrencies = ( currencyName, currencies, amount = 1) => {

    return currencies ? (amount/ currencies[currencyName]).toFixed(2) : "0.00";

}