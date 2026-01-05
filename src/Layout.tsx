import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Cart from "@/components/Cart.tsx";
import { useCart } from "@/context/useCart";

function Layout() {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <header className="wrapper flex justify-between">
        <Navbar/>
        <Cart value={totalQuantity}/>
      </header>

      <Outlet/>
    </>
  )
}

export default Layout