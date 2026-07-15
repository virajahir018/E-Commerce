"use client";

import { Image } from "lucide-react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  return (
    <section className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <h2>Your Cart is Empty 😢</h2>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="mb-5 flex items-center gap-5 rounded-lg border p-4"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="h-32 w-24 rounded object-cover"
            />

            <div>
              <h2 className="text-xl font-bold">
                {item.brand}
              </h2>

              <p>{item.title}</p>

              <p>₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}