import { useState } from "react";
// import signinimage from "../../images/signin-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { loginUser } from "../../utils/api"; // Import your loginUser function
import { useDispatch } from 'react-redux';
import { login } from '../../redux_features/user/user_slicer'; // Import the login action
import { MagnifyingGlass } from "react-loader-spinner"; // Import the loader component
import AccountNavbar from "./AccountNavbar";



const MyAccountSignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [loaderStatus, setLoaderStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setLoaderStatus(false); // Set loader status to true
    try {
      const response = await loginUser({
      username: phone, // send phone as username
      password: password,
    });
        dispatch(login({
            name: response.user.name,
            phone: response.user.phone,
            email: response.user.email || '',
            isLoggedIn: true,
            accessToken: response.access,
        }));
      // Redirect or update UI on successful login
      navigate("/Shop"); // Redirect to home or dashboard page
    } catch (err) {
      setError("Login failed. Please check your email and password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                        <AccountNavbar  currentActive="/MyAccountSignIn" />
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
                                <div className="col-6 col-md-6 offset-lg-1 col-lg-8 order-lg-2 order-1">
                                    <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                                    <p>
                                        Welcome back to FreshCart! Enter your email to get started.
                                    </p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        </div>
                                        <div className="col-12">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckDefault"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                            >
                                            Remember me
                                            </label>
                                        </div>
                                        <div>
                                            Forgot password?{" "}
                                            <Link to="/MyAccountForgetPassword">Reset it</Link>
                                        </div>
                                        </div>
                                        <div className="col-12 d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? "Signing In..." : "Sign In"}
                                        </button>
                                        </div>
                                        {error && (
                                        <div className="col-12 mt-2 text-danger">{error}</div>
                                        )}
                                        <div>
                                        Don’t have an account?{" "}
                                        <Link to="/MyAccountSignUp">Sign Up</Link>
                                        </div>
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

export default MyAccountSignIn;
