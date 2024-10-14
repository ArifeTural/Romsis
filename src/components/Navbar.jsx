import React, { useState } from 'react';
import logo from "../assets/romsisko.png";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigation = [
        { title: "Anasayfa", path: "/dashboard" },
        { title: "Buy On Board", path: "/dashboard/byOnBoard" },
        { title: "Özel Yazılım Hizmetleri", subpages: [
            { title: "Mobil Uygulama", path: "/dashboard/ozelYazilim/MobilUygulama" },
            { title: "UI & UX", path: "/dashboard/ozelYazilim/UIUX" },
            { title: "Web Tasarım", path: "/dashboard/ozelYazilim/WebTasarim" },
            { title: "Web Yazılım", path: "/dashboard/ozelYazilim/WebYazilim" },
            { title: "Wms Depo Yönetim Sistemleri", path: "/dashboard/ozelYazilim/Wms" }
        ]},
        { title: "Referanslarımız", path: "/dashboard/kurumsal" },
        { title: "Hakkımızda", path: "/dashboard/hakkımızda" },
        { title: "İletişim", path: "/dashboard/iletisim" },
        { title: "Teklif Al", path: "/dashboard/teklif" },
    ];

    const [show, setShow] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md navbar-light">
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
                            <li className={`nav-item ${item.subpages ? "dropdown" : ""}`} key={item.title}>
                                {!item.subpages ? (
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
                                ) : (
                                    <>
                                        <a 
                                            className="nav-link dropdown-toggle nav-text text-secondary fw-bolder fs-5" 
                                            href="#"  // Menüyü açmak için sadece "#" kullanıyoruz, sayfaya yönlendirme yapmıyor.
                                            id="navbarDropdown" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            {item.title}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {item.subpages.map((subitem) => (
                                                <li key={subitem.title}>
                                                    <NavLink 
                                                        className={`dropdown-item ${
                                                            location.pathname === subitem.path 
                                                                ? "active text-decoration-underline text-danger-emphasis" 
                                                                : ""
                                                        }`} 
                                                        to={subitem.path}
                                                    >
                                                        {subitem.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </nav>
    );
}

export default Navbar;




