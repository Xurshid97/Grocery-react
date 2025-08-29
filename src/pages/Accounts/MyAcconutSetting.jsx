import React, { useEffect, useState } from "react";
import ScrollToTop from "../ScrollToTop";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { updateBasicInfo } from "../../redux_features/user/user_slicer";
import AccountNavbar from "./AccountNavbar";
import { useNavigate } from "react-router-dom";
import AccountNavbarOffCanvas from "./AccountNavbarOffCanvas";

const MyAcconutSetting = () => {
    const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);
  const [userFormInfo, setUserFormInfo] = useState({
    username: '',
    raqam: '',
  });

    const dispatch = useDispatch();
      useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await axiosInstance.get("/profile");
            const data = response.data;

            dispatch(updateBasicInfo(data));
            setUserFormInfo({
            username: data.username || "",
            raqam: data.raqam || "",
            });
        } catch (err) {
            // send user to login page
            navigate("/MyAccountSignIn");
        }
        };

        fetchUserData();
    }, [dispatch, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        // Example: Send updated userFormInfo to the server
            await axiosInstance.put('/profile/', userFormInfo);
            dispatch(updateBasicInfo(userFormInfo));
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div>
      <>
          <ScrollToTop />
          <div>
              <section>
                  <div className="container">
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

                          <AccountNavbar currentActive="/MyAccountSetting" />
                          <div className="col-lg-9 col-md-8 col-12">
                              <div>
                                  <>
                                          <div className="p-6 p-lg-10">
                                              <div className="mb-6">
                                                  {/* heading */}
                                                  <h2 className="mb-0">Profil Sozlamalari</h2>
                                              </div>
                                              <div>
                                                  {/* heading */}
                                                  <h5 className="mb-4">Xush kelibsiz {userInfo.name}</h5>
                                                  <div className="row">
                                                      <div className="col-lg-5">
                                                          {/* form */}
                                                          <form onSubmit={handleSubmit}>
                                                              {/* Input: Name */}
                                                              <div className="mb-3">
                                                                  <label className="form-label">Ism</label>
                                                                  <input
                                                                      type="text"
                                                                      className="form-control"
                                                                      placeholder="Ismingizni kiriting"
                                                                      onChange={(e) => setUserFormInfo({ ...userFormInfo, username: e.target.value })}
                                                                      value={userFormInfo.username || ''} // Fallback to empty string
                                                                        readOnly
                                                                  />
                                                              </div>
                                                              <div className="mb-5">
                                                                  <label className="form-label">Tel raqami</label>
                                                                  <input
                                                                      type="text"
                                                                      className="form-control"
                                                                      placeholder="Telefon raqamingizni kiriting"
                                                                      onChange={(e) => setUserFormInfo({ ...userFormInfo, raqam: e.target.value })}
                                                                      value={userFormInfo.raqam || ''} // Fallback to empty string
                                                                      readOnly
                                                                  />
                                                              </div>
                                                          </form>
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr className="my-10" />
                                          </div>
                                      </>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasAccount"
                  aria-labelledby="offcanvasAccountLabel"
              >
                  {/* offcanvas header */}
                  <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasAccountLabel">
                          Sizning profilingiz
                      </h5>
                      <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                      />
                  </div>
                  {/* offcanvas body */}
                  <AccountNavbarOffCanvas currentActive="/MyAccountSetting" />
              </div>
          </div>
      </>
    </div>
  );
};

export default MyAcconutSetting;
