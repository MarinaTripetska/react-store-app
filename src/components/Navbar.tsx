import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="text-light-100">
			<ul className="flex flex-col gap-1 md:flex-row md:gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
