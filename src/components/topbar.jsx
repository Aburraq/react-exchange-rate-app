import { CurrencyContext } from "@/store/store";
import { formatCurrencies } from "@/utils/format-currencies";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Topbar() {

    const centralState = useContext(CurrencyContext);
    const {currencyRates} = centralState;

    const usd = formatCurrencies("USD", currencyRates?.rates);
    const eur = formatCurrencies("EUR", currencyRates?.rates);

  return (
    <Navbar bg="dark" className="text-light p-3">

        <Container>
            <Navbar.Brand className="text-light" as={Link} to={"/"}>
                Exchange Rate
            </Navbar.Brand>
            <Nav>
                <Nav.Item className="me-2 ">
                    $: {usd}
                </Nav.Item>
                <Nav.Item className="me-2 ">
                    €: {eur}
                </Nav.Item>
            </Nav>
        </Container>
    </Navbar>
  )
}
