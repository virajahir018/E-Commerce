import { Link } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="rounded-lg border bg-white shadow-sm transition hover:shadow-lg">

        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-full rounded-t-lg object-cover"
        />

        <div className="p-4">

          <h3 className="font-bold">{product.brand}</h3>

          <p className="text-gray-600 text-sm">
            {product.title}
          </p>

          <div className="mt-2 flex items-center gap-2">

            <span className="font-bold">
              ₹{product.price}
            </span>

            <span className="text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>

            <span className="text-green-600 text-sm">
              {product.discount}
            </span>

          </div>

          <p className="mt-2 text-sm">
            ⭐ {product.rating}
          </p>

        </div>

      </div>
    </Link>
  );
}