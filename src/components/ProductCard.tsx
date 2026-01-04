import type {ProductInterface} from "@/types/ProductInterface.ts";

interface ProductProps {
  product: ProductInterface
}

function ProductCard({
                   product:
                     {id, title, image, price, category, rating  }
                 }: ProductProps) {
  return (
    <li key={id} className="product-card">
      <img
        src={image ? image : '/no-product.png'}
        alt={title}
      />

      <h3>{title}</h3>
      <p>{price}$</p>
      <p>{category}</p>
      <p>{rating.rate} {rating.count}</p>
    </li>
  )
}

export default ProductCard;