import {Link} from "react-router-dom";

export default function AccountNavbarOffCanvas({currentActive}) {

    return(
        <div className="offcanvas-body">
                      <ul className="nav flex-column nav-pills nav-pills-dark">
                          {/* nav item */}
                          <li className="nav-item">
                              <Link
                                  className={`nav-link ${currentActive === '/MyAccountOrder' ? 'active' : ''}`}
                                  aria-current="page"
                                  to="/MyAccountOrder"
                              >
                                  <i className="fas fa-shopping-bag me-2" />
                                  Sizning Buyurtmalaringiz
                              </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                              <Link className={`nav-link ${currentActive === '/MyAccountSetting' ? 'active' : ''}`} to="/MyAccountSetting">
                                  <i className="fas fa-cog me-2" />
                                  Profil
                              </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                              <Link className={`nav-link ${currentActive === '/MyAccountAddress' ? 'active' : ''}`} to="/MyAccountAddress">
                                  <i className="fas fa-map-marker-alt me-2" />
                                  Manzil
                              </Link>
                          </li>
                      </ul>
                      <hr className="my-6" />
                      <div>
                          {/* nav  */}
                          <ul className="nav flex-column nav-pills nav-pills-dark">
                            <li className="nav-item">
                                <Link className={`nav-link ${currentActive === '/MyAccountSignUp' ? 'active' : ''}`} to="/MyAccountSignUp">
                                    Ro'yxatdan o'tish
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${currentActive === '/MyAccountSignIn' ? 'active' : ''}`} to="/MyAccountSignIn">
                                    Kirish
                                </Link>
                            </li>
                              {/* nav item */}
                              <li className="nav-item">
                                  <Link className="nav-link " to="/MyAccountSignIn" onClick={() => {
                                        // Clear user data from local storage or cookies
                                        localStorage.removeItem('accessToken');
                                        // Optionally, you can also clear any user-related state in your app
                                    }}>
                                      <i className="fas fa-sign-out-alt me-2" />
                                      Chiqish
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
    )
}
