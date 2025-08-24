export default function AccountNavbarOffCanvas({currentActive}) {
    
    return(
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
    )
}
