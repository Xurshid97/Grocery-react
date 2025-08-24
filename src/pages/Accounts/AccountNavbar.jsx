import React from 'react';
import { Link } from 'react-router-dom';
export default function AccountNavbar({currentActive}) {

    return(
        <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block mt-12">
            <div className="pt-10 pe-lg-10">
            {/* nav item */}
            <ul className="nav flex-column nav-pills nav-pills-dark">
                <li className="nav-item">
                <Link
                    className={`nav-link ${currentActive === '/MyAccountOrder' ? 'active' : ''}`}
                    aria-current="page"
                    to="/MyAccountOrder"
                >
                    <i className="fas fa-shopping-bag me-2" />
                    Sizning buyurtmalaringiz
                </Link>
                </li>
                {/* nav item */}
                <li className="nav-item">
                <Link
                    className={`nav-link ${currentActive === '/MyAccountSetting' ? 'active' : ''}`}
                    to="/MyAccountSetting"
                >
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
                {/* nav item */}
                <li className="nav-item">
                <Link className={`nav-link ${currentActive === '/MyAccountPaymentMethod' ? 'active' : ''}`} to="/MyAccountPaymentMethod">
                    <i className="fas fa-credit-card me-2" />
                    To'lov usuli
                </Link>
                </li>
                {/* nav item */}
                <li className="nav-item">
                <hr />
                </li>
                {/* nav item */}
                <li className="nav-item">
                <Link className={`nav-link ${currentActive === '/MyAccountSignUp' ? 'active' : ''}`} to="/MyAccountSignUp">
                    Ro'yxatdan o'tish
                </Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${currentActive === '/MyAccountSignIn' ? 'active' : ''}`} to="/MyAccountSignIn">
                    Log in
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/Grocery-react/">
                    <i className="fas fa-sign-out-alt me-2" />
                    Log out
                </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}
