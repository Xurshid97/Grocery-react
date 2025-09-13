import React from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const shopCartItems = useSelector((state) => state.shopCart.list);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-none d-lg-block" to="/Grocery-react/">
            <img
              src={Grocerylogo}
              style={{ width: 150, marginBottom: 10 }}
              alt="eCommerce Logo"
            />
          </Link>

          {/* Nav items */}
          <ul className="navbar-nav d-flex flex-row flex-lg-column align-items-center justify-content-around w-100">
            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/Grocery-react/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                <span className="d-none d-lg-inline mt-1">Asosiy sahifa</span>
              </Link>
            </li>

            {/* Shop */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/Shop"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span className="d-none d-lg-inline mt-1">
                  Barcha bo'limlar
                </span>
              </Link>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/AboutUs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-clipboard2-data"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
                </svg>
                <span className="d-none d-lg-inline mt-1">Biz haqimizda</span>
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/ShopCart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {shopCartItems.length > 0 && (
                  <span className="cart-badge">{shopCartItems.length}</span>
                )}
                <span className="d-none d-lg-inline mt-1">Savat</span>
              </Link>
            </li>

            {/* Profile */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/MyAccountSetting"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
                <span className="d-none d-lg-inline mt-1">Profil</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
