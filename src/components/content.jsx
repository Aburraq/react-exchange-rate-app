import { CurrencyContext } from '@/store/store';
import { formatCurrencies } from '@/utils/format-currencies';
import { useContext, useState } from 'react';
import { Alert, Container, Form } from 'react-bootstrap';

export default function Content() {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const centralState = useContext(CurrencyContext);
    const { currencyRates } = centralState;

    const handleChange = (e) => {
        if (e.target.name === "amount") {
            setAmount(e.target.value);
        } else if (e.target.name === "currency") {
            setCurrency(e.target.value);
        }
    };

    return (
        <Container>
            <Form.Group className="d-flex my-3">
                <Form.Control
                    type="text"
                    placeholder="Enter amount"
                    name="amount"
                    className="w-100"
                    value={amount}
                    onChange={handleChange}
                />
                <Form.Select
                    name="currency"
                    value={currency}
                    onChange={handleChange}
                    className="w-25"
                >
                    {currencyRates &&
                        currencyRates.rates &&
                        Object.keys(currencyRates.rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                </Form.Select>
            </Form.Group>
            <Alert>
                <strong>Entered Amount:</strong>{' '}
                {formatCurrencies(currency, currencyRates?.rates, amount)} TRY
            </Alert>
        </Container>
    );
}