"use client"

import { toggleWishlist } from '@/redux/slices/wishlistSlice';
import { Heart, } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function WishlistButton({product}) {
    const dispatch = useDispatch();
    const wishlistItem = useSelector((state) => state.wishlist.items);

    const isWishlist = wishlistItem.some(
        (item) => item.id === product.id);
    return (

        // <Link href={`/product/${product.id}`}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(toggleWishlist(product));
                }}
                className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
            >
                {isWishlist ? (
                    <Heart fill="red" color="red" />
                ) : (
                    <Heart />
                )}
            </button>
        // </Link>



    )
}

export default WishlistButton