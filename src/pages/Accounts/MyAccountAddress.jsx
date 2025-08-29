import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import AccountNavbar from "./AccountNavbar";

import { useSelector } from "react-redux";
import AccountNavbarOffCanvas from "./AccountNavbarOffCanvas";
import React, { useEffect, useState } from "react";

const MyAccountAddress = () => {
    const userAddress = useSelector((state) => state.user);

    const { homeAddress } = userAddress;
const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div>
       <>
            <ScrollToTop/>
            </>
      <>
        <div>
          {/* section */}
          <section>
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row pt-5">
                {
                    width < 765 && (
                                <div className="d-lg-none mb-1 d-flex justify-content-end">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAccount"
                                    aria-controls="offcanvasAccount"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                            )
                }
                <AccountNavbar currentActive="/MyAccountAddress" />
                <div className="col-lg-9 col-md-8 col-12">
                  <div>
                    <>
                        <div className="p-6 p-lg-10">
                          <div className="d-flex justify-content-between mb-6">
                            <h2 className="mb-0">Manzil</h2>
                          </div>
                          {
                            homeAddress.street !== "" && (
                                <div className="row">
                                    {/* col */}
                                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                                    {/* form */}
                                    <div className="border p-6 rounded-3">
                                        <div className="form-check mb-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="homeRadio"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label text-dark fw-semi-bold"
                                            htmlFor="homeRadio"
                                        >
                                            Uy manzili
                                        </label>
                                        </div>
                                        {/* address */}
                                        <p className="mb-6">
                                        {homeAddress.street}
                                        <br />
                                        {homeAddress.city} {homeAddress.state} {homeAddress.zip} {homeAddress.country}
                                        <br />
                                        </p>
                                        {/* btn */}
                                        <Link to="#" className="btn btn-info btn-sm">
                                        Doimiy manzil
                                        </Link>
                                        <div className="mt-4">
                                        <Link to="#" className="text-inherit">
                                            Edit{" "}
                                        </Link>
                                        <Link
                                            to="#"
                                            className="text-danger ms-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        >
                                            Delete
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                          }

                        </div>
                      </>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Modal */}
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex={-1}
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              {/* modal content */}
              <div className="modal-content">
                {/* modal header */}
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">
                    Delete address
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* modal body */}
                <div className="modal-body">
                  <h6>Are you sure you want to delete this address?</h6>
                  <p className="mb-6">
                    Jitu Chauhan
                    <br />
                    4450 North Avenue Oakland, <br />
                    Nebraska, United States,
                    <br />
                    402-776-1106
                  </p>
                </div>
                {/* modal footer */}
                <div className="modal-footer">
                  {/* btn */}
                  <button
                    type="button"
                    className="btn btn-outline-gray-400"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="addAddressModal"
            tabIndex={-1}
            aria-labelledby="addAddressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              {/* modal content */}
              <div className="modal-content">
                {/* modal body */}
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between mb-5">
                    <div>
                      {/* heading */}
                      <h5 className="h6 mb-1" id="addAddressModalLabel">
                        New Shipping Address
                      </h5>
                      <p className="small mb-0">
                        Add new shipping address for your order delivery.
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
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form select */}
                      <select className="form-select">
                        <option selected> India</option>
                        <option value={1}>UK</option>
                        <option value={2}>USA</option>
                        <option value={3}>UAE</option>
                      </select>
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form select */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Gujarat</option>
                        <option value={1}>Northern Ireland</option>
                        <option value={2}> Alaska</option>
                        <option value={3}>Abu Dhabi</option>
                      </select>
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form check */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Set as Default
                        </label>
                      </div>
                    </div>
                    {/* col */}
                    <div className="col-12 text-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button className="btn btn-primary" type="button">
                        Save Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasAccount"
            aria-labelledby="offcanvasAccountLabel"
          >
            {/* offcanvas header */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasAccountLabel">
                My Account
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {/* offcanvas body */}
            <AccountNavbarOffCanvas currentActive="/MyAccountAddress" />
          </div>
        </div>
      </>
    </div>
  );
};

export default MyAccountAddress;
