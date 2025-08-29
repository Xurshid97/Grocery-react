import React, { useState } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
const shopCartItems = useSelector(state => state.shopCart.list);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
    }}>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/Grocery-react/">
            <img
              src={Grocerylogo}
              style={{ width: 200, marginBottom: 10, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>
          <input
            className="form-control responsivesearch "
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            fdprocessedid="9icrif"
            style={{ width: "30%" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className={`containerr ${isOpen ? 'change' : ''}`} onClick={handleClick}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
      </button>

      <div className="collapse navbar-collapse" id="mobile_nav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
        <ul className="navbar-nav navbar-light">
          <li className="nav-item">
            <Link className="nav-link" to="/Grocery-react/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                {" "}
            Asosiy sahifa
            </Link>
          </li>
          <li className="nav-item">
            <li className="nav-item dmenu">
              <Link
                className="nav-link"
                to="/Shop"
                // id="navbarDropdown"
                role="button"
                // data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </span>{" "}
                Barcha bo'limlar
              </Link>
            </li>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link "
              to="/AboutUs"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data" viewBox="0 0 16 16">
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                    <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
                </svg>
                {" "}
              Biz haqimizda
            </Link>
          </li>

          <li className="nav-item"
            style={{ display: "flex", alignItems: "center" }}
            >
            <div className="list-inline-item">
                <Link
                className="nav-link position-relative d-flex align-items-center"
                to="/ShopCart"
                aria-controls="offcanvasRight"
                >
                <div className="position-relative me-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-bag"
                    >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {shopCartItems.length}
                    </span>
                </div>
                <>Savat</>
                </Link>
            </div>
            </li>


          <li className="nav-item">
            <Link
              className="nav-link "
              to="/MyAccountSetting"
              style={{ display: "flex", alignItems: "center" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                </svg>
                {" "}
                Profil
            </Link>
          </li>
        </ul>
      </div>
    </div>
      </nav >
    </div >
  );
};

export default Header;
