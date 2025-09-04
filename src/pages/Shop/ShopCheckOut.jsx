import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ShopCheckOut = () => {
    const shopCartItems = useSelector((state) => state.shopCart.list);
    const address = useSelector((state) => state.user.deliveryAddress);
    // console.log("addresses", address);
    const dispatch = useDispatch();
    const [newAddress, setNewAddress] = useState({
        delivery_instructions: '',
        street: '',
        district: '',
        region: '',
        city: '',
        postal_code: '',
    });

    function onSubmitNewAddress() {
        dispatch({
            type: 'user/addDeliveryAddress',
            payload: newAddress
        });
        setNewAddress({
            street: '',
            city: '',
            state: '',
            zip: '',
            country: '',
        });
        // close modal
        const modal = document.getElementById('addAddressModal');
        modal.classList.remove('show');
    }

  return (
    <>
         <>
            <ScrollToTop/>
            </>
      <>
        {/* section */}
        <section className="mb-lg-14 mb-8 mt-8">
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="col-12">
                <div>
                  <div className="mb-8">
                    {/* text */}
                    <h1 className="fw-bold mb-0">To'lov bo'limi</h1>
                    <p className="mb-0">
                      Sizda allaqachon akkaunt bormi{" "}
                      <Link to="/MyAccountSignIn">Login</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* row */}
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  {/* accordion */}
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <div className="d-flex justify-content-between align-items-center">
                        {/* heading one */}
                        <Link
                          to="#"
                          className="fs-5 text-inherit collapsed h4"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="true"
                          aria-controls="flush-collapseOne"
                        >
                          <i className="feather-icon icon-map-pin me-2 text-muted" />
                          Yetkazib berish uchun manzil
                        </Link>
                        {/* btn */}
                        <Link
                          to="#"
                          className="btn btn-outline-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#addAddressModal"
                        >
                          Manzil qo'shish
                        </Link>
                        {/* collapse */}
                      </div>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mt-5">
                          <div className="row">
                            {
                                address.street.length > 0 && (
                                    <div className="col-lg-6 col-12 mb-4">
                                    {/* input */}
                                    <div className="border p-6 rounded-3">
                                        <div className="form-check mb-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="officeRadio"
                                        />
                                        <label
                                            className="form-check-label text-dark"
                                            htmlFor="officeRadio"
                                        >
                                            Manzil
                                        </label>
                                        </div>
                                        <address>
                                        {" "}
                                        <strong>{address.street}</strong> <br /> {address.delivery_instructions}
                                        <br />
                                        {address.city}, {address.state}, {address.postal_code}, {address.country}
                                        <br />
                                        <abbr title="Pochta kodi">P: {address.postal_code}</abbr>
                                        </address>
                                    </div>
                                    </div>
                                )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <Link
                        to="#"
                        className="text-inherit h5"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <i className="feather-icon icon-credit-card me-2 text-muted" />
                        To'lov usuli
                        {/* collapse */}{" "}
                      </Link>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mt-5">
                          <div>
                            <div className="card card-bordered shadow-none mb-2">
                              {/* card body */}
                              <div className="card-body p-6">
                                <div className="d-flex">
                                  <div className="form-check">
                                    {/* checkbox */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="click"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="click"
                                    ></label>
                                  </div>
                                  <div>
                                    {/* title */}
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Click bilan to'lash
                                    </h5>
                                    <p className="mb-0 small">
                                      Siz Click tizimi orqali to'lovni amalga
                                      oshirasiz.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* card */}
                            <div className="card card-bordered shadow-none mb-2">
                              {/* card body */}
                              <div className="card-body p-6">
                                <div className="d-flex mb-4">
                                  <div className="form-check ">
                                    {/* input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="creditdebitcard"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="creditdebitcard"
                                    ></label>
                                  </div>
                                  <div>
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Humo yoki UZ cart
                                    </h5>
                                    <p className="mb-0 small">
                                      Humo yoki UZ cart orqali to'lovni
                                      amalga oshirasiz.
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    {/* input */}
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Karta raqami{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="1234 4567 6789 4321"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    {/* input */}
                                    <div className="mb-3 mb-lg-0">
                                      <label className="form-label">
                                        Kartadagi ism{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ismingizni kiriting"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3  mb-lg-0 position-relative">
                                      <label className="form-label">
                                        Amal qilish muddati{" "}
                                      </label>
                                      <input
                                        className="form-control flatpickr "
                                        type="text"
                                        placeholder="Sana tanlang"
                                      />
                                      <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                                        <i className="bi bi-calendar text-muted" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3  mb-lg-0">
                                      <label className="form-label">
                                        CVV kod{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={312}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card card-bordered shadow-none">
                              <div className="card-body p-6">
                                {/* check input */}
                                <div className="d-flex">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="cashonDelivery"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="cashonDelivery"
                                    ></label>
                                  </div>
                                  <div>
                                    {/* title */}
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Naqd pul bilan to'lash
                                    </h5>
                                    <p className="mb-0 small">
                                      Buyurtmangiz yetkazib berilganda naqd pul bilan
                                      to'lang.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Button */}
                            <div className="mt-5 d-flex justify-content-end">
                              <Link
                                to="#"
                                className="btn btn-outline-gray-400 text-muted"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                Oldingi
                              </Link>
                              <Link to="#" className="btn btn-primary ms-2">
                                Buyurtma berish
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
                  <div className="mt-4 mt-lg-0">
                    <div className="card shadow-sm">
                      <h5 className="px-6 py-4 bg-transparent mb-0">
                        Buyurtma
                      </h5>
                      <ul className="list-group list-group-flush">
                        {
                            shopCartItems.map((item, index) => (
                                <li className="list-group-item px-4 py-3" key={index}>
                                    <div className="row align-items-center">
                                        <div className="col-2 col-md-2">
                                            <img
                                                src={item.image}
                                                alt="Ecommerce"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-5 col-md-5">
                                            <h6 className="mb-0">{item.name}</h6>
                                            <span>
                                                <small className="text-muted">{item.weight} kg</small>
                                            </span>
                                        </div>
                                        <div className="col-2 col-md-2 text-center text-muted">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                            <span className="fw-bold">{item.cost} so'm</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="d-flex align-items-center justify-content-between fw-bold">
                            <div>Umumiy</div>
                            <div>{shopCartItems.reduce((acc, item) => acc + item.cost * item.weight, 0)} so'm</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <div>
          <div
            className="modal fade"
            id="addAddressModal"
            tabIndex={-1}
            aria-labelledby="addAddressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* modal body */}
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between mb-5">
                    {/* heading */}
                    <div>
                      <h5 className="h6 mb-1" id="addAddressModalLabel">
                        Manzil qo'shish
                      </h5>
                      <p className="small mb-0">
                        Buyurtma yetkazib berish uchun manzil qo'shing.
                      </p>
                    </div>
                    <div>
                      {/* button */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div className="row g-3">
                    <div className="col-12">
                        <textarea
                            className="form-control"
                            id="DeliveryInstructions"
                            rows={3}
                            placeholder="Yetkazib berish bo'yicha ko'rsatmalar"
                            value={newAddress.delivery_instructions}
                            onChange={(e) =>
                            setNewAddress({ ...newAddress, delivery_instructions: e.target.value })
                            }
                          />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Manzil"
                        aria-label="Manzil"
                        value={newAddress.street}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, street: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tuman"
                        value={newAddress.district}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, district: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Viloyat"
                        value={newAddress.region}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, region: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Shahar"
                        value={newAddress.city}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, city: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pochta indeksi"
                        value={newAddress.postal_code}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, postal_code: e.target.value })
                        }
                        required
                      />
                    </div>
                    {/* button */}
                    <div className="col-12 text-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-dismiss="modal"
                      >
                        Bekor qilish
                      </button>
                      <button className="btn btn-primary" type="button" onClick={onSubmitNewAddress}>
                        Qo'shish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
     </>
  );
};

export default ShopCheckOut;
