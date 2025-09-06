import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import groceryshop from "../images/Grocerylogo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { categories } = useSelector(
    state => state.products
  );
  let categoryList = categories.slice(0, 5).map((category) => {
    return (
      <li key={category.id}>
        <Link to="/Shop">
          <span>
            <i className="fa fa-angle-right" />
          </span>{" "}
          {category.name}
        </Link>
      </li>
    );
  });
  const classNames = "col-sm-6 col-lg-3 mb-4 mb-lg-0";
  return (
    <div>
      <>
        <footer className="footer mt-4">
          <div className="overlay" />
          <div className="container">
            <div className="row footer-row">
              <div className={classNames}>
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        src={groceryshop}
                        style={{ width: 250, padding: 10, marginLeft: "-30px" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={classNames}>
                <div className="footer-widget mb-0">
                  <h4>Bo'limlar</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        {
                          categoryList.length > 0 ? (
                            categoryList
                          ) : (
                            <li>Bo'limlar mavjud emas</li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNames}>
                <div className="footer-widget mb-0">
                  <h4>Xaridorlar uchun</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>
                            Yetkazib berish
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Mahsulotlarni qaytarish
                          </Link>
                        </li>
                        <li>
                          <Link to="/Grocery-react">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNames}>
                <div className="footer-widget mb-0">
                  <h4>Get to know us</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Kompaniya
                          </Link>
                        </li>
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Biz haqimizda
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
