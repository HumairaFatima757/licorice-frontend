import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Fundraising from "./pages/Fundraising/Fundraising";
import Blog from "./pages/Blog/Blog";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";

import useAOS from "./hook/useAOS";

function AppContent() {
  useAOS();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/"); // now it works
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={loading ? "hidden" : "flex flex-col min-h-screen"}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/fundraising" element={<Fundraising />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;
