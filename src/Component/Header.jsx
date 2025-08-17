import React, { useState } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import productimage2 from '../images/product-img-2.jpg'
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
const shopCartItems = useSelector(state => state.shopCart.list);
const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: 'shop_cart/removeFromCart',
      payload: productId
    });
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
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                to="#offcanvasExample"
                role="button"
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
      {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">

          </div> */}
    </div>
      </nav >
      <>
        <div className="container  displaydesign d-flex align-items-center">
          <div className="row g-4"
            style={{ width: "100%" }}
          >
            <div className="col-8 col-sm-4 col-lg-9 py-2 ">
              <input
                className="form-control "
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
            </div>
          </div>

          {/* <li className="nav-item"
            style={{ display: "flex", alignItems: "center" }}
            >
            <div className="list-inline-item">
                <Link
                className="nav-link position-relative d-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                to="#offcanvasExample"
                role="button"
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
          </li> */}
        </div>
      </>
  <>
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email address"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                  <small className="form-text">
                    By Signup, you agree to our{" "}
                    <Link to="#!">Terms of Service</Link> &amp;{" "}
                    <Link to="#!">Privacy Policy</Link>
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Already have an account? <Link to="/MyAccountSignIn">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              Savat
            </h5>
            {/* <small>Location in 382480</small> */}
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-danger" role="alert">
            {/* Sizda tekin yetkazib berish mavjud! */}
          </div>
          <div>
            <div className="py-3">
              <ul className="list-group list-group-flush">

                {
                    shopCartItems.map((item, index) => (
                        <li key={index} className="list-group-item py-3 px-0 border-top">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <img
                                        src={item.image || productimage2}
                                        alt="Ecommerce"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-5">
                                    <h6 className="mb-0">{item.name}</h6>
                                    <span>
                                        <small className="text-muted">{
                                                item.weight
                                            } kg</small>
                                    </span>
                                    <div className="mt-2 small">
                                        <Link className="text-decoration-none"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <span className="me-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-trash-2"
                                                >
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                    <line x1={10} y1={11} x2={10} y2={17} />
                                                    <line x1={14} y1={11} x2={14} y2={17} />
                                                </svg>
                                            </span>
                                            Remove
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="input-group flex-nowrap justify-content-center ">
                                        <input
                                            type="button"
                                            defaultValue="-"
                                            className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                                            data-field="quantity"
                                        />
                                        <input
                                            type="number"
                                            step={1}
                                            max={10}
                                            defaultValue={item.quantity || 1}
                                            name="quantity"
                                            className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                                        />
                                        <input
                                            type="button"
                                            defaultValue="+"
                                            className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                                            data-field="quantity"
                                        />
                                    </div>
                                </div>
                                <div className="col-2 text-end">
                                    <span className="fw-bold">
                                        {item.cost} so'm
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className="d-grid">
              <Link
                to="/ShopCart"
                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                type="submit"
              >
                {" "}
                Savatga o'tish
                <span className="fw-bold">
                  {shopCartItems.reduce((total, item) => total + (item.cost || 0) * (item.quantity || 1), 0).toFixed(2)} So'm
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between align-items-start ">
                <div>
                  <h5 className="mb-1" id="locationModalLabel">
                    Choose your Delivery Location
                  </h5>
                  <p className="mb-0 small">
                    Enter your address and we will specify the offer you
                    area.{" "}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="my-5">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search your area"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Select Location</h6>
                <Link
                  to="#"
                  className="btn btn-outline-gray-400 text-muted btn-sm"
                >
                  Clear All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    </div >
  );
};

export default Header;
