import Link from "next/link";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-white px-10 shadow-md">
      
      <Link href="/">
        <h1 className="text-3xl font-bold text-pink-600 cursor-pointer">
          MYNTRA
        </h1>
      </Link>

      <ul className="flex gap-8 font-semibold text-sm uppercase">
        <li><Link href="/">Men</Link></li>
        <li><Link href="/">Women</Link></li>
        <li><Link href="/">Kids</Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Beauty</Link></li>
      </ul>

      <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search for products, brands and more"
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

        <div className="flex cursor-pointer flex-col items-center text-xs">
          <ShoppingBag size={20} />
          <span>Bag</span>
        </div>

      </div>

    </nav>
  );
}