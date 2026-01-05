import type { ProductInterface } from "@/types/ProductInterface";

const BASE_API_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<ProductInterface[]> {
	const response = await fetch(`${BASE_API_URL}/products`);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response.json();
}
