import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-orange-600 mb-2">
        My Wishlist
      </h1>

      {/* Subheading */}
      <p className="text-black text-lg mb-4">
        Save your favorite products for later
      </p>

      {/* Center Big Heart */}
      <HeartIcon className="w-20 h-20 text-gray-300 mb-6" />

      {/* Empty state main text */}
      <p className="text-xl font-semibold text-black mb-2">
        Your wishlist is empty
      </p>

      {/* Sub text */}
      <p className="text-gray-600 mb-6">
        Start adding products to your wishlist while shopping.
      </p>

      {/* Start Shopping Button */}
      <Link
        to="/shop"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow"
      >
        Start Shopping
      </Link>

    </div>
  );
}
