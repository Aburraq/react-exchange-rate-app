import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home';
import CurrencyProvider from '@/providers/currency-provider';
import { getCurrencyRates } from '@/api/get-currency-rates';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <CurrencyProvider />,
        loader: getCurrencyRates,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);