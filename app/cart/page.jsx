"use client";

import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {

  const dispatch = useDispatch();
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
              width={162}
              height={62}
              className="rounded object-cover"
            />

            <div>
              <h2 className="text-xl font-bold">
                {item.brand}
              </h2>

              <p>{item.title}</p>

              <p>₹{item.price}</p>


              <div className="flex items-center gap-3 mt-4">

                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>

              </div>

              <button
                onClick={()=>dispatch(removeFromCart(item.id))}
                className="px-8 bg-pink-500 text-white"
              >Remove</button>

            </div>
          </div>
        ))
      )}
    </section>
  );
}