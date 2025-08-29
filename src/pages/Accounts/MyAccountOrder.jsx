import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "../ScrollToTop";
import AccountNavbar from "./AccountNavbar";
import React, { useEffect, useState } from "react";
import AccountNavbarOffCanvas from "./AccountNavbarOffCanvas";

const MyAccountOrder = () => {
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
        {/* section */}
        <section>
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
              <AccountNavbar currentActive="/MyAccountOrder" />

              <div className="col-lg-9 col-md-8 col-12">
                <div>

                    <>
                      <div className="p-6 p-lg-10">
                        {/* heading */}
                        <h2 className="mb-6">Sizning buyurtmalaringiz</h2>
                        <div className="table-responsive border-0">
                          {/* Table */}
                          <table className="table mb-0 text-nowrap">
                            {/* Table Head */}
                            <thead className="table-light">
                              <tr>
                                <th className="border-0">&nbsp;</th>
                                <th className="border-0">Mahsulot</th>
                                <th className="border-0">Buyurtma</th>
                                <th className="border-0">Sana</th>
                                <th className="border-0">Holat</th>
                                <th className="border-0">Miqdor</th>
                                <th className="border-0" />
                              </tr>
                            </thead>
                            <tbody>
                              {/* <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg1}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Haldiram's Nagpur Aloo Bhujia
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">400g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #14899
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  March 5, 2023
                                </td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-warning">
                                    Processing
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $15.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
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
          <AccountNavbarOffCanvas currentActive="/MyAccountOrder" />
        </div>
      </>
    </div>
  );
};

export default MyAccountOrder;
