import {useEffect, useState} from "react";
import type {ProductInterface} from "@/types/ProductInterface";
import {fetchProducts} from "@/api/products";
import Spinner from "@/components/Spinner";
import ProductCard from "@/components/ProductCard";

type ErrorMessage = string | null

function HomePage() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadRandomProduct = async () => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const products = await fetchProducts();
        const randomIndex = Math.floor(Math.random() * products.length);
        setProduct(products[randomIndex]);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed fetch products. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadRandomProduct();
  }, []);

  return (
    <main className="wrapper">
      <section className="section">
        <h1>
          Home <span className="text-gradient">Page</span>
        </h1>

        <div className="py-6">
          {
            loading ? (
              <Spinner/>
            ) : errorMessage ? (
              <p className="py-10 text-red-800 text-center text-xl font-semibold">{errorMessage}</p>
            ) : (
              product ?
              <ProductCard key={product.id} product={product} className="mx-auto max-w-[450px]"/>
                : null
            )
          }
        </div>
      </section>
    </main>
  )
}

export default HomePage;