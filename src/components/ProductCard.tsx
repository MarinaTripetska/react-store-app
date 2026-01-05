import type {ProductInterface} from "@/types/ProductInterface.ts";
import {useCart} from "@/context/CartContext.tsx";
import DeleteIcon from "@/assets/icons/DeleteIcon.tsx";
import AddToCartIcon from "@/assets/icons/AddToCartIcon.tsx";

interface ProductProps {
  product: ProductInterface
  className?: string
}

function ProductCard({
                       product:
                         {id, title, image, price, category, rating},
                       className
                     }: ProductProps) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const cartItem = cartItems.find(
    (item) => item.productId === id
  );

  const quantity = cartItem?.quantity ?? 0;

  return (
    <div className={"product-card " + className }>
      <img
        src={image ? image : '/no-product.png'}
        alt={title}
      />

      <h3>{title}</h3>
      <p>{price}$</p>
      <p>{category}</p>
      <p>{rating.rate} {rating.count}</p>

      {quantity === 0 ? (
        <button type="button" title="Add to Cart" onClick={() => addToCart(id)}>
          <AddToCartIcon/>
        </button>
      ) : (
        <div>
          <button type="button" onClick={() => decreaseQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => increaseQuantity(id)}>+</button>

          <button type="button" title="Remove" onClick={() => removeFromCart(id)}><DeleteIcon/></button>
        </div>
      )}
    </div>
  )
}

export default ProductCard;