import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/shopAssets/imgi_2_svndmb1wkabqfumoirur.jpg";
import img2 from "../../assets/shopAssets/imgi_3_qwv0712qucwxqydxjhoj.jpg";
import img3 from "../../assets/shopAssets/imgi_4_jyaydhvsee7jtlp3oces.jpg";
import img4 from "../../assets/shopAssets/imgi_5_fotx76og4fq9rxunzjyq.jpg";
import img5 from "../../assets/shopAssets/imgi_6_aatmup1iqrm5k0av8ddd.jpg";
import img6 from "../../assets/shopAssets/imgi_7_xmbeuxofnq9o8fanfagb.jpg";
import img7 from "../../assets/shopAssets/imgi_8_lajoiwgexzexiviwtijv.jpg";
import img8 from "../../assets/shopAssets/imgi_9_o579kxvz6lzzhh1jsjfw.jpg";
import img9 from "../../assets/shopAssets/imgi_9_slider.png";

const packages = [
  {
    name: "3 Pack Traditional Bronze",
    type: "Traditional",
    price: "$24.00",
    description:
      "Traditional – 3 Red Twist Ropes (Cherry). Classic cherry-flavored twist ropes, perfectly chewy and sweet.",
    stock: 996,
    image: img1,
  },
  {
    name: "4 Pack Traditional Silver",
    type: "Traditional",
    price: "$30.00",
    description:
      "Traditional – 4 Red Twist Ropes (Cherry). A timeless treat for candy lovers of all ages.",
    stock: 1000,
    image: img2,
  },
  {
    name: "4 Pack Sweet Silver",
    type: "Sweet",
    price: "$30.00",
    description:
      "Sweet Best Sellers – Fruit Rainbow · Cotton Candy · Strawberry–Banana · Watermelon.",
    stock: 1000,
    image: img3,
  },
  {
    name: "3 Pack Sweet Bronze",
    type: "Sweet",
    price: "$24.00",
    description:
      "Sweet Best Sellers – Fruit Rainbow, Cotton Candy, Strawberry–Banana. Juicy and sweet trio.",
    stock: 999,
    image: img4,
  },
  {
    name: "12 Pack Best Seller and Classic Platinum",
    type: "Sweet",
    price: "$84.00",
    description:
      "Sweet & Sour 3-Pack Sampler. Featuring all Best Sellers and all Classics.",
    stock: 999,
    image: img5,
  },
  {
    name: "7 Pack Sweet and Sour Collection Gold",
    type: "Sour",
    price: "$58.00",
    description:
      "Build Your Own Candy Pack. Pick any one 3-pack and any one 4-pack.",
    stock: 989,
    image: img6,
  },
  {
    name: "4 Pack Sour Silver",
    type: "Sour",
    price: "$30.00",
    description:
      "Sour Best Sellers – Blue Raspberry · Fruit Rainbow · Apple · Watermelon.",
    stock: 1000,
    image: img7,
  },
  {
    name: "3 Pack Sour Bronze",
    type: "Sour",
    price: "$24.00",
    description:
      "Sour Best Sellers – Blue Raspberry · Fruit Rainbow · Apple.",
    stock: 1000,
    image: img8,
  },
  {
    name: "Sweet – Watermelon, Berry Delight, Cherry",
    type: "Sweet",
    price: "$27.00",
    description: "Contains: Watermelon, Berry Delight, Cherry",
    stock: 100,
    image: img9,
  },
  {
    name: "Sweet – Fruit Rainbow, Cotton Candy, Strawberry – Banana",
    type: "Sweet",
    price: "$27.00",
    description: "Contains: Fruit Rainbow, Cotton Candy, Strawberry – Banana",
    stock: 234,
    image: img9,
  },
  {
    name: "Custom Pack",
    type: "Custom",
    price: "$27.00",
    description:
      "Choose exactly 3 flavors to create your own custom pack.",
    stock: "Custom",
    image: "/images/custom.jpg",
    isCustom: true,
  },
];

export default function Shop() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 bg-orange-600">
      {/* Heading */}
      <h1
        className="text-4xl font-bold mb-2 text-white text-center"
        data-aos="fade-up"
      >
        Shop Packages
      </h1>
      <p
        className="text-center mb-8 max-w-2xl text-white mx-auto"
        data-aos="fade-up"
      >
        Choose from our carefully curated licorice rope packages.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12 mb-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow rounded-lg overflow-hidden group flex flex-col justify-between hover:scale-95 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative px-3">
              {pkg.isCustom ? (
                <div className="w-full h-50 bg-pink-100 flex items-center justify-center mt-4 my-2 rounded">
                  <span className="text-6xl text-pink-500 font-bold">+</span>
                  <span className="absolute top-1 mt-2 left-3 px-2 py-1 text-xs font-bold rounded-xl bg-orange-600 text-white">
                    Custom
                  </span>
                </div>
              ) : (
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-50 object-cover mx-auto mt-4 mb-2 rounded transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
                />
              )}

              {/* Type Label */}
              {pkg.type !== "Custom" && (
                <span
                  className={`absolute top-1 left-3 mt-2 px-2 py-1 text-xs font-bold rounded-2xl ${
                    pkg.type === "Traditional"
                      ? "bg-gray-700 text-white"
                      : pkg.type === "Sweet"
                      ? "bg-pink-500 text-white"
                      : "bg-orange-700 text-white"
                  }`}
                >
                  {pkg.type}
                </span>
              )}

              {/* Price */}
              <span className="absolute top-1 right-3 mt-2 bg-gray-800 text-white px-2 py-1 text-xs font-bold rounded-2xl">
                {pkg.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between grow">
              <h2 className="font-bold text-lg mb-2 line-clamp-1">{pkg.name}</h2>

              {pkg.isCustom ? (
                <ul className="text-sm text-gray-700 mb-2 list-disc pl-5">
                  <li>Choose any 3 flavors</li>
                  <li>Same great price</li>
                  <li>Perfect for you</li>
                  <li>Start Building</li>
                </ul>
              ) : (
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                  {pkg.description}
                </p>
              )}

              {/* Buttons */}
              {pkg.isCustom ? (
                <button className="w-full h-12 text-white rounded bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition">
                  Start Building
                </button>
              ) : (
                <>
                  <p className="mt-auto mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-xl text-sm font-bold">
                      In Stock ({pkg.stock})
                    </span>
                  </p>

                  <div className="space-y-2">
                    <button className="w-full h-10 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      Buy Now
                    </button>
                    <button className="w-full h-10 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                      View Details
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-white mb-4">
        Each package contains 3 carefully selected licorice rope flavors.
      </p>

      <div className="text-center">
        <Link to="/">
          <button className="bg-white border border-gray-300 py-2 px-6 rounded hover:bg-gray-100 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
