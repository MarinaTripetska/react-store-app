import CartIcon from "@/assets/icons/CartIcon.tsx";
import {useCart} from "@/context/useCart.ts";

function Cart() {
  const {cartItems} = useCart();

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="relative">
      <CartIcon/>
      <div
        className="absolute -top-1/4 -right-1/4 min-w-6 w-fit h-6 p-1 rounded-full flex items-center justify-center bg-dark-100 opacity-90 text-xs text-white">{totalQuantity}</div>
    </div>
  )
}

export default Cart;