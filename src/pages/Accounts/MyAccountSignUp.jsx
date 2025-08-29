import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { registerUser } from "../../utils/api";
import { useDispatch } from 'react-redux';
import {login} from '../../redux_features/user/user_slicer';
import AccountNavbar from "./AccountNavbar";
import AccountNavbarOffCanvas from "./AccountNavbarOffCanvas";

const MyAccountSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    raqam: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
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
                        <AccountNavbar currentActive="/MyAccountSignUp" />
                        <div className="col-lg-9 col-md-8 col-12">
                          <div>
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
                    <AccountNavbarOffCanvas currentActive="/MyAccountSignUp" />
                  </div>
                </div>
              </>
            </div>
      </>
    </div>
  );
};

export default MyAccountSignUp;
