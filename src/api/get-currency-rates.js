export const getCurrencyRates = async () => {
    
    try {
        const response = await fetch(`${import.meta.env.VITE_FRANKFURTER_API_URL}/latest?from=TRY`);
        const data = await response.json();
        return { currencyRates: data };
    } catch (error) {
        console.log(error);
    }
}