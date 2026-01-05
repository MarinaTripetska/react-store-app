import {useEffect, useState} from "react";
import type {ProductInterface} from "@/types/ProductInterface.ts";
import Spinner from "@/components/Spinner.tsx";
import ProductCard from "@/components/ProductCard.tsx";
import {fetchProducts} from "@/api/products.ts";

type ErrorMessage = string | null
type SortOption = "default" | "title" | "price";

function ProductsPage() {
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortOption === "price") {
      return a.price - b.price;
    }

    return 0;
  });

  const loadProducts  = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Nie udało się pobrać produktów.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <main className="wrapper">
      <section className="section">
        <h1>We <span className="text-gradient">offer you</span> best quality</h1>

        <h2>Popular:</h2>

        <div className="py-4 text-white">
          <label>
            Sort:&nbsp;
            <select
              className="bg-dark-100"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
            >
              <option value="default">Default</option>
              <option value="title">By title</option>
              <option value="price">By price</option>
            </select>
          </label>
        </div>

        <div>
          {
            loading ? (
             <Spinner/>
            ) : errorMessage ? (
              <p className="py-10 text-red-800 text-center text-xl font-semibold">{errorMessage}</p>
            ) : (
              <ul className="py-6 lg:py-10 all-products">
                {sortedProducts.map((product: ProductInterface) => (
                  <ProductCard key={product.id} product={product}/>
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