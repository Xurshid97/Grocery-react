import { useState } from "react";
// import signupimage from "../../images/signup-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { registerUser } from "../../utils/api";
import { useDispatch } from 'react-redux';
import {login} from '../../redux_features/user/user_slicer';
import { MagnifyingGlass } from "react-loader-spinner";
import AccountNavbar from "./AccountNavbar";

const MyAccountSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [loaderStatus, setLoaderStatus] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    raqam: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setLoaderStatus(false)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await registerUser(formData);
      // Redirect to home page or another page after successful registration
        dispatch(login({
            name: response.username,
            phone: response.raqam,
            email: response.email || '',
            isLoggedIn: true,
            accessToken: response.access,
        }));
      navigate("/Shop");
    } catch (err) {
    //   console.error("Registration failed:", err);
      setError(err.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div>
    //   <ScrollToTop />

    // </div>

    <div>
      <>
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
                      <div className="row pt-10">
                        <AccountNavbar currentActive="/MyAccountSignUp" />
                        <div className="col-lg-9 col-md-8 col-12">
                          <div>
                            {loaderStatus ? (
                              <div className="loader-container">
                                {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
                                <MagnifyingGlass
                                  visible={true}
                                  height="100"
                                  width="100"
                                  ariaLabel="magnifying-glass-loading"
                                  wrapperStyle={{}}
                                  wrapperclassName="magnifying-glass-wrapper"
                                  glassColor="#c0efff"
                                  color="#0aad0a"
                                />
                              </div>
                            ) : (
                              <>
                                <div className="col-12 col-md-6 offset-lg-1 col-lg-8 order-lg-2 order-1">
                                    <div className="mb-lg-9 mb-5">
                                        <h1 className="mb-1 h2 fw-bold">Ro'yxatdan o'tish</h1>
                                        <p>Davom etish uchun elektron pochtangizni kiriting.</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                        <div className="col">
                                            <input
                                            type="text"
                                            name="username"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Foydalanuvchi ismi"
                                            aria-label="Foydalanuvchi ismi"
                                            required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                            type="number"
                                            name="raqam"
                                            value={formData.raqam}
                                            onChange={handleChange}
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Telefon raqami"
                                            required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Parol"

                                            required
                                            />
                                        </div>
                                        <div className="col-12 d-grid">
                                            <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                            >
                                            {loading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
                                            </button>
                                            <span className="navbar-text">
                                            Sizda akkaunt bormi?{" "}
                                            <Link to="/MyAccountSignIn">Kirish</Link>
                                            </span>
                                        </div>
                                        {error && (
                                            <div className="col-12">
                                            <small className="text-danger">{error}</small>
                                            </div>
                                        )}
                                        <p>
                                            <small>
                                            Davom etish <Link to="#!">Foydalanish shartlari</Link>{" "}
                                            &amp; <Link to="#!">Maxfiylik siyosati</Link>
                                            </small>
                                        </p>
                                        </div>
                                    </form>
                                    </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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
                    <div className="offcanvas-body">
                      <ul className="nav flex-column nav-pills nav-pills-dark">
                        {/* nav item */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/MyAccountOrder"
                          >
                            <i className="fas fa-shopping-bag me-2" />
                            Your Orders
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link " href="/MyAccountSetting">
                            <i className="fas fa-cog me-2" />
                            Settings
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="/MyAccountAddress">
                            <i className="fas fa-map-marker-alt me-2" />
                            Address
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="/MyAcconutPaymentMethod">
                            <i className="fas fa-credit-card me-2" />
                            Payment Method
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="/MyAcconutNotification">
                            <i className="fas fa-bell me-2" />
                            Notification
                          </a>
                        </li>
                      </ul>
                      <hr className="my-6" />
                      <div>
                        {/* nav  */}
                        <ul className="nav flex-column nav-pills nav-pills-dark">
                          {/* nav item */}
                          <li className="nav-item">
                            <a className="nav-link " href="/Grocery-react/">
                              <i className="fas fa-sign-out-alt me-2" />
                              Log out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
      </>
    </div>
  );
};

export default MyAccountSignUp;
