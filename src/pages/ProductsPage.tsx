import {useEffect, useState} from "react";
import type {ProductInterface} from "@/types/ProductInterface.ts";
import Spinner from "@/components/Spinner.tsx";
import ProductCard from "@/components/ProductCard.tsx";

type ErrorMessage = string | null

const BASE_API_URL = "https://fakestoreapi.com"

function ProductsPage() {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${BASE_API_URL}/products`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const products: ProductInterface[] = await response.json();
      setProducts(products);

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <main className="wrapper">
      <section className="section">
        <h1>We <span className="text-gradient">offer you</span> best quality</h1>

        <h2>Popular:</h2>

        <div>
          {
            loading ? (
             <Spinner/>
            ) : errorMessage ? (
              <p className="py-10 text-red-800 text-center text-xl font-semibold">{errorMessage}</p>
            ) : (
              <ul className="py-6 lg:py-10 all-products">
                {products.map((product: ProductInterface) => (
                  <ProductCard product={product}/>
                ))}
              </ul>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default ProductsPage;