import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">

      <h2 className="mb-10 text-center text-4xl font-bold">
        Trending Products
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}