// react
import React from "react";
// css
import "./App.css";
// browserrouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from './Component/Header';
import Footer from "./Component/Footer";
// pages
import Home from "./pages/Home";
// About pages
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import BlogCategory from "./pages/About/BlogCategory";
// import Contact from "./pages/About/Contact";
// Shop pages
import Shop from "./pages/Shop/Shop";
import ShopGridCol3 from "./pages/Shop/ShopGridCol3";
import ShopListCol from "./pages/Shop/ShopListCol";
import ShopCart from "./pages/Shop/ShopCart";
import ShopCheckOut from "./pages/Shop/ShopCheckOut";
// import ShopWishList from "./pages/Shop/ShopWishList";
// Store pages
import StoreList from "./pages/store/StoreList";
import SingleShop from "./pages/store/SingleShop";
// Account pages
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
// import MyAcconutNotification from "./pages/Accounts/MyAcconutNotification";
// import MyAccountPaymentMethod from "./pages/Accounts/MyAccountPaymentMethod";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
// import MyAccountForgetPassword from "./pages/Accounts/MyAccountForgetPassword";
import MyAccountSignIn from "./pages/Accounts/MyAccountSignIn";
import MyAccountSignUp from "./pages/Accounts/MyAccountSignUp";
// import FAQ from "./pages/FooterElements/Faq";
// import Coupons from "./pages/FooterElements/Coupons";
// import Careers from "./pages/FooterElements/Careers";
// import HelpCenter from "./pages/FooterElements/HelpCenter";

import { getProducts } from "./utils/api";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux_features/products/product_slice";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        async function fetchProducts() {
        try {
            const response = await getProducts();
            dispatch(setProducts(response.results));
        } catch (err) {
            console.error(err.message);
        }
        }
        fetchProducts();
    }, [dispatch]);
  return (
    <div>
      <Router>
        <Header/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Grocery-react/" element={<Home />} />
          {/* Shop pages */}
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShopGridCol3" element={<ShopGridCol3 />} />
          <Route path="/ShopListCol" element={<ShopListCol />} />
          {/* <Route path="/ShopWishList" element={<ShopWishList />} /> */}
          <Route path="/ShopCheckOut" element={<ShopCheckOut />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          {/* Store pages */}
          <Route path="/StoreList" element={<StoreList />} />
          <Route path="/SingleShop" element={<SingleShop />} />
          {/* Accounts pages */}
          <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
          <Route path="/MyAccountSetting" element={<MyAccountSetting />} />
          {/* <Route path="/MyAccountNotification" element={<MyAccountNotification />} /> */}
          {/* <Route path="/MyAccountPaymentMethod" element={<MyAccountPaymentMethod />} /> */}
          <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
          {/* <Route path="/MyAccountForgetPassword" element={<MyAccountForgetPassword />} /> */}
          <Route path="/MyAccountSignIn" element={<MyAccountSignIn />} />
          <Route path="/MyAccountSignUp" element={<MyAccountSignUp />} />
          {/* About pages */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogCategory" element={<BlogCategory />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* Footer Elements */}
          {/* <Route path="/Faq" element={<FAQ />} /> */}
          {/* <Route path="/Coupons" element={<Coupons />} /> */}
          {/* <Route path="/Careers" element={<Careers />} /> */}
          {/* <Route path="/helpcenter" element={<HelpCenter />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
