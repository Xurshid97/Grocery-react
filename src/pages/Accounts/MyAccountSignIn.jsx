import { useState, useEffect } from "react";
// import signinimage from "../../images/signin-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { loginUser } from "../../utils/api"; // Import your loginUser function
import { useDispatch } from 'react-redux';
import { login } from '../../redux_features/user/user_slicer';
import AccountNavbar from "./AccountNavbar";
import AccountNavbarOffCanvas from "./AccountNavbarOffCanvas";


const MyAccountSignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
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
const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
                      <div className="row pt-3">
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
                        <AccountNavbar  currentActive="/MyAccountSignIn" />
                        <div className="col-lg-9 col-md-8 col-12">
                          <div>

                              <>
                                <div className="col-12 col-md-6 offset-lg-1 col-lg-8 order-lg-2 order-1">
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
                        Mening akkauntim
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    {/* offcanvas body */}
                    <AccountNavbarOffCanvas currentActive="/MyAccountSignIn" />
                  </div>
                </div>
              </>
            </div>
      </>
    </div>
  );
};

export default MyAccountSignIn;
