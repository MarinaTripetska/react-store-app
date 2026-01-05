import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Cart from "@/components/Cart.tsx";

function Layout() {
	return (
		<>
			<header className="wrapper flex justify-between">
				<Navbar />
				<Cart />
			</header>

			<Outlet />
		</>
	);
}

export default Layout;
