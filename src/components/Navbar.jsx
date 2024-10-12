import React, { useState } from 'react';
import logo from "../assets/romsisko.png";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigation = [
        { title: "Anasayfa", path: "/dashboard" },
        { title: "Buy On Board", path: "/dashboard/byOnBoard" },
        { title: "Özel Yazılım Hizmetleri", path: "/dashboard/ozelYazilim" },
        { title: "Kurumsal", path: "/dashboard/kurumsal" },
        { title: "İletişim", path: "/dashboard/iletisim" },
        { title: "Teklif Al", path: "/dashboard/teklif" },
    ];

    const [show, setShow] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md navbar-light  ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="romsis" width={200} />     
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setShow(!show)} 
                    aria-controls="navbarNav" 
                    aria-expanded={show} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navigation.map((item) => (
                            <li className="nav-item" key={item.title}>
                                <NavLink 
                                    className={`nav-link ${
                                        item.title === "Teklif Al"
                                            ? "teklif-nav btn btn-danger text-light px-3 py-2 fw-bolder"
                                            : "nav-text text-secondary fw-bolder fs-5"
                                    } ${
                                        location.pathname === item.path 
                                            ? "active text-decoration-underline text-danger-emphasis" 
                                            : ""
                                    }`} 
                                    to={item.path}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </nav>
    );
}

export default Navbar;






