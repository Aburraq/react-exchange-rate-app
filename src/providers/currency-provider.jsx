import { CurrencyContext } from "@/store/store";
import { Outlet, useLoaderData } from "react-router-dom";

export default function CurrencyProvider() {

    const data = useLoaderData();
    console.log(data);

  return (
    <CurrencyContext.Provider value={data}>
        <Outlet />
    </CurrencyContext.Provider >
  )
}
