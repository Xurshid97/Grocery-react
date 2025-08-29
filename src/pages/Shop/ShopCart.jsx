import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ShopCart = () => {
    const shopCartItems = useSelector(state => state.shopCart.list);
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        dispatch({ type: 'shop_cart/removeFromCart', payload: id });
    };

  return (
    <div>
      <div>
      <>
         <>
            <ScrollToTop/>
            </>
      <>
        <div>
          {/* section*/}

          {/* section */}
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-12">
                  {/* card */}
                  <div className="card py-1 border-0 mb-8">
                    <div>
                      <h1 className="fw-bold">Sotuv Savatchasi</h1>
                      {/* <p className="mb-0">Shopping in 382480</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    {/* alert */}
                    {/* <div className="alert alert-danger p-2" role="alert">
                      Sizda tekin yetkazib berish mavjud.{" "}
                      <Link to="#!" className="alert-link">
                        To'lovni davom ettirish
                      </Link>
                    </div> */}
                    <ul className="list-group list-group-flush">
                      {/* list group */}

                      {
                        shopCartItems.map((item, index) => (
                            <li className="list-group-item py-3 py-lg-0 px-0 border-top">

                        <br />
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src={item.image}
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">{item.name}</h6>
                            <span>
                              <small className="text-muted">{item.weight} kg</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
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
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                {/* button without border and outline and background */}
                                <button className="text-muted border-0 bg-transparent" onClick={() => handleRemoveItem(item.id)}>Olib tashlash</button>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                                onClick={() => dispatch({ type: 'shop_cart/decrementQuantity', payload: { productId: item.id, weight: 1 } })}
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                                onClick={() => dispatch({ type: 'shop_cart/incrementQuantity', payload: { productId: item.id, weight: 1 } })}
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">{item.cost} so'm</span>
                          </div>
                        </div>
                      </li>
                        ))}
                    </ul>
                    {/* btn */}
                    <div className="d-flex justify-content-end mt-4">
                      {/* <Link to="/ShopCheckOut" className="btn btn-primary">
                        Sotuvni davom ettirish
                      </Link> */}
                      {/* <Link to="#!" className="btn btn-dark">
                        Savatchani bo'shatish
                      </Link> */}
                    </div>
                  </div>
                </div>

                {/* sidebar */}
                <div className="col-12 col-lg-4 col-md-5">
                  {/* card */}
                  <div className="mb-5 card mt-6">
                    <div className="card-body p-6">
                      {/* heading */}
                      <h2 className="h5 mb-4">Jami</h2>
                      <div className="card mb-2">
                        {/* list group */}
                        <ul className="list-group list-group-flush">
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Umumiy narx</div>
                            </div>
                            <span>{
                                    shopCartItems.reduce((total, item) => total + (item.cost * item.weight), 0)
                                } so'm</span>
                          </li>
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Xizmat ko'rsatish narxi</div>
                            </div>
                            <span>0 so'm</span>
                          </li>
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div className="fw-bold">Jami</div>
                            </div>
                            <span className="fw-bold">{
                                    shopCartItems.reduce((total, item) => total + (item.cost * item.weight), 0)
                                } so'm</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-grid mb-1 mt-4">
                        {/* btn */}
                        <Link
                          className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                          type="submit"
                            to="/ShopCheckOut"
                        >
                        To'lov qilish <span className="fw-bold">{
                                    shopCartItems.reduce((total, item) => total + (item.cost * item.weight), 0)
                                } so'm</span>
                        </Link>
                      </div>
                      {/* text */}
                      <p>
                        <small>
                          Buyurtma berish orqali siz bizning <Link to
                          ="#!">Foydalanish shartlari</Link>
                          and <Link to
                          ="#!">Maxfiylik siyosati.</Link>{" "} ga rozisiz
                        </small>
                      </p>
                      {/* heading */}
                      {/* <div className="mt-8">
                        <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                        <form>
                          <div className="mb-2">
                            <label
                              htmlFor="giftcard"
                              className="form-label sr-only"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="giftcard"
                              placeholder="Promo or Gift Card"
                            />
                          </div>
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-outline-dark mb-1"
                            >
                              Redeem
                            </button>
                          </div>
                          <p className="text-muted mb-0">
                            {" "}
                            <small>Terms &amp; Conditions apply</small>
                          </p>
                        </form>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  </div>
    </div>
  );
};

export default ShopCart;
