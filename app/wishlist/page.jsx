"use client";

import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function page() {
    const wishlistItems = useSelector(
        (item) => item.wishlist.items
    );
    return (
        <section className="mx-auto max-w-6xl p-6">
            <h1 className="mb-8 text-4xl font-bold">
                Wishlist
            </h1>

            {wishlistItems.length === 0 ? (
                <h2>Your wishlist is Empty 😢</h2>
            ) : (
                wishlistItems.map((item) => (
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

                        </div>
                    </div>
                ))
            )}
        </section>
    )
}

export default page