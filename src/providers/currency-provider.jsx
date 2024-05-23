import { Outlet, useLoaderData } from "react-router-dom";

export default function CurrencyProvider() {

    const data = useLoaderData();
    console.log(data);

  return (
    <div>
        <Outlet />
    </div>
  )
}
