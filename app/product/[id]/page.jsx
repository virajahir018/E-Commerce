import products from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/components/product/AddToCartButton";
import WishlistButton from "@/components/product/WishlistButton";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid grid-cols-2 gap-10">

        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={600}
            className="rounded-xl object-cover"
          />

          <WishlistButton product={product}/>
        </div>

        <div>
          <h2 className="text-4xl font-bold">{product.brand}</h2>

          <p className="mt-2 text-xl text-gray-500">
            {product.title}
          </p>

          <p className="mt-5">⭐ {product.rating}</p>

          <div className="mt-5 flex gap-3">
            <span className="text-3xl font-bold">₹{product.price}</span>

            <span className="line-through text-gray-400">
              ₹{product.originalPrice}
            </span>

            <span className="font-bold text-green-600">
              {product.discount}
            </span>

          </div>

          <AddToCartButton product={product} />
        </div>

      </div>
    </section>
  );
}