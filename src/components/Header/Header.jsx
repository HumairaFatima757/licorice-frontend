import { useState } from "react";
import Logo from "../../assets/logo.svg";

import { 
  HeartIcon, 
  XMarkIcon, 
  Bars3Icon 
} from "@heroicons/react/24/outline";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import { headerStyles as styles } from "./Header-Styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.nav} relative`}>
      
      {/* LOGO */}
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="Licorice 4 Good" className={styles.logo} />
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex space-x-12">
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/shop" className={styles.link}>Shop</Link>
        <Link to="/fundraising" className={styles.link}>Fundraising</Link>
        <Link to="/blog" className={styles.link}>Blog</Link>
      </div>

      {/* ICONS + HAMBURGER */}
      <div className="flex items-center space-x-4">
        <Link to="/cart">
          <ShoppingCartIcon className={styles.cartIcon} />
        </Link>
        <Link to="/wishlist">
          <HeartIcon className={styles.heartIcon} />
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-2 rounded hover:bg-orange-500 transition"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-white" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="
          absolute top-full left-0 w-full 
          bg-orange-600 
          flex flex-col items-center 
          py-6 
          space-y-6 
          md:hidden 
          z-50 
          animate-slideDown
        ">
          <Link to="/" 
            className={styles.link} 
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link to="/shop" 
            className={styles.link} 
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link to="/fundraising" 
            className={styles.link} 
            onClick={toggleMenu}
          >
            Fundraising
          </Link>
          <Link to="/blog" 
            className={styles.link} 
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
