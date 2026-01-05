export interface CartItem {
	productId: number;
	quantity: number;
}

export interface CartContextType {
	cartItems: CartItem[];
	addToCart: (productId: number) => void;
	removeFromCart: (productId: number) => void;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
}
