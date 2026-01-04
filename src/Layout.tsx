import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Cart from "@/components/Cart.tsx";

function Layout() {
  return (
    <>
      <Navbar/>
      <Cart/>
      <Outlet/>
    </>
  )
}

export default Layout