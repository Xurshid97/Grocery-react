export default function AccountNavbarOffCanvas({currentActive}) {

    return(
        <div className="offcanvas-body">
                      <ul className="nav flex-column nav-pills nav-pills-dark">
                          {/* nav item */}
                          <li className="nav-item">
                              <a
                                  className={`nav-link ${currentActive === '/MyAccountOrder' ? 'active' : ''}`}
                                  aria-current="page"
                                  href="/MyAccountOrder"
                              >
                                  <i className="fas fa-shopping-bag me-2" />
                                  Sizning Buyurtmalaringiz
                              </a>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                              <a className={`nav-link ${currentActive === '/MyAccountSetting' ? 'active' : ''}`} href="/MyAccountSetting">
                                  <i className="fas fa-cog me-2" />
                                  Profil
                              </a>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                              <a className={`nav-link ${currentActive === '/MyAccountAddress' ? 'active' : ''}`} href="/MyAccountAddress">
                                  <i className="fas fa-map-marker-alt me-2" />
                                  Manzil
                              </a>
                          </li>
                      </ul>
                      <hr className="my-6" />
                      <div>
                          {/* nav  */}
                          <ul className="nav flex-column nav-pills nav-pills-dark">
                            <li className="nav-item">
                                <a className={`nav-link ${currentActive === '/MyAccountSignUp' ? 'active' : ''}`} href="/MyAccountSignIn">
                                    Ro'yxatdan o'tish
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${currentActive === '/MyAccountSignIn' ? 'active' : ''}`} href="/MyAccountSignIn">
                                    Kirish
                                </a>
                            </li>
                              {/* nav item */}
                              <li className="nav-item">
                                  <a className="nav-link " href="/MyAccountSignIn" onClick={() => {
                                        // Clear user data from local storage or cookies
                                        localStorage.removeItem('accessToken');
                                        // Optionally, you can also clear any user-related state in your app
                                    }}>
                                      <i className="fas fa-sign-out-alt me-2" />
                                      Chiqish
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
    )
}
