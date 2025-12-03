
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // outline cart icon

export default function EmptyCart() {
  return (
    <div className="w-full bg-white py-20 px-6 flex flex-col items-center text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-orange-600 mb-4">
        Shopping Cart
      </h2>

      {/* Subtext with icon */}
      <div className="flex items-center justify-center text-black mb-8 space-x-2">
      
        <span className="text-base">
          Review your items and proceed to checkout
        </span>
      </div>
      <ShoppingCartIcon  className="w-20 h-20 text-gray-300 mb-6" />

      {/* Empty Cart Message */}
      <p className="text-black text-lg font-semibold mb-1">
        Your cart is empty
      </p>

      <p className="text-gray-600 text-sm mb-8 max-w-md">
        Looks like you haven't added any items to your cart yet.
      </p>

      {/* Button */}
      <button className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition">
        Start Shopping
      </button>
    </div>
  );
}
