import {useEffect, useState} from 'react'
import Preloader from "./components/Preloader/Preloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAOS from "./hook/useAOS";
import Navbar from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Fundraising from "./pages/Fundraising/Fundraising";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";

function App() {
 useAOS();

 const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); // 2.5 sec
  }, []);
 
  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/fundraising" element={<Fundraising />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>

          <Footer />
        </Router>
      )} </>
  )
}

export default App;
