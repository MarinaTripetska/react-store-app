import type { ProductInterface } from "@/types/ProductInterface.ts";
import { useCart } from "@/context/useCart";
import DeleteIcon from "@/assets/icons/DeleteIcon.tsx";
import AddToCartIcon from "@/assets/icons/AddToCartIcon.tsx";

interface ProductProps {
	product: ProductInterface;
	className?: string;
}

function ProductCard({ product: { id, title, image, price, category, rating }, className }: ProductProps) {
	const { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

	const cartItem = cartItems.find(item => item.productId === id);

	const quantity = cartItem?.quantity ?? 0;

	return (
		<div className={"product-card " + className}>
			<div className="flex h-52 items-center justify-center rounded-lg bg-gray-50">
				<img src={image ? image : "/no-product.png"} alt={title} />
			</div>

			<h3 className="min-h-10 line-clamp-2 text-sm text-light-100 font-semibold">{title}</h3>

			<p className="text-lg font-bold">${price}</p>

			<p className="text-xs text-gray-100 capitalize">{category}</p>

			<p className="text-xs text-gray-100">
				⭐ {rating.rate} ({rating.count})
			</p>

			{quantity === 0 ? (
				<button
					type="button"
					onClick={() => addToCart(id)}
					className="
          mt-2 flex items-center justify-center gap-2
          rounded-lg bg-dark-200 px-3 py-2 text-sm font-medium text-white
          hover:bg-light-200 transition duration-150 ease-in-out
        "
				>
					<AddToCartIcon />
					Add to cart
				</button>
			) : (
				<div className="mt-2 flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={() => decreaseQuantity(id)}
							className="h-8 w-8 rounded-md bg-dark-200 text-lg hover:bg-light-200 transition duration-150 ease-in-out"
						>
							–
						</button>

						<span className="min-w-6 text-center text-sm font-semibold">{quantity}</span>

						<button
							type="button"
							onClick={() => increaseQuantity(id)}
							className="h-8 w-8 rounded-md bg-dark-200 text-lg hover:bg-light-200 transition duration-150 ease-in-out"
						>
							+
						</button>
					</div>

					<button
						type="button"
						title="Remove"
						onClick={() => removeFromCart(id)}
						className="rounded-md p-2 hover:bg-light-200"
					>
						<DeleteIcon />
					</button>
				</div>
			)}
		</div>
	);
}

export default ProductCard;
