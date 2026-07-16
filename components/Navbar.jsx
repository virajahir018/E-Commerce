"use client"

import Link from "next/link";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/redux/slices/searchSlice";

export default function Navbar() {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  const search = useSelector((state) => state.search.value)


  const clearSearch = () => {
    dispatch(setSearch(""));
  }

  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-white px-10 shadow-md">

      <Link href="/">
        <h1 onClick={clearSearch} className="text-3xl font-bold text-pink-600 cursor-pointer">
          MYNTRA
        </h1>
      </Link>

      <ul className="flex gap-8 font-semibold text-sm uppercase">
        <li onClick={clearSearch}><Link href="/">Men</Link></li>
        <li onClick={clearSearch}><Link href="/">Women</Link></li>
        <li onClick={clearSearch}><Link href="/">Kids</Link></li>
        <li onClick={clearSearch}><Link href="/">Home</Link></li>
        <li onClick={clearSearch}><Link href="/">Beauty</Link></li>
      </ul>

      <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
        <Search size={18} />
        <input
          type="text"
          value={search}
          placeholder="Search for products, brands and more"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-72 bg-transparent outline-none"
        />
      </div>

      <div className="flex gap-6">

        <div className="flex cursor-pointer flex-col items-center text-xs">
          <User size={20} />
          <span>Profile</span>
        </div>

        <div className="flex cursor-pointer flex-col items-center text-xs">
          <Heart size={20} />
          <span>Wishlist</span>
        </div>

        <Link href="/cart">
          <div className="flex cursor-pointer flex-col items-center text-xs">
            <ShoppingBag size={20} />
            <span>Bag ({items.length})</span>
          </div>
        </Link>

      </div>

    </nav>
  );
}