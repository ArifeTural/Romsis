import React, { useState } from 'react';
import logo from "../assets/romsisko.png";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const navigation = [
        { title: t("nav.tit1"), path: "/" },
        { title: t("nav.tit2"), path: "/byOnBoard" },
        { title: t("nav.tit3"), subpages: [
            { title: t("nav.tit4"), path: "/ozelYazilim/YalinUretim" },
            { title: t("nav.tit5"), path: "/ozelYazilim/Wms" },
            { title: t("nav.tit6"), path: "/ozelYazilim/MobilUygulama" },
            { title: t("nav.tit7"), path: "/ozelYazilim/UIUX" },
            { title: t("nav.tit8"), path: "/ozelYazilim/WebYazilim" },
        ]},
        { title: t("nav.tit9"), subpages: [
            { title: t("nav.tit10"), path: "/hakkımızda" },
            { title: t("nav.tit11"), path: "/Kurumsal" },
            { title: t("nav.tit12"), path: "/sorular" },
        ]},
        { title: t("nav.tit13"), path: "/iletisim" },
        { title: t("nav.tit14"), path: "/teklif" },
    ];

    const [show, setShow] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-xl navbar-light">
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
                                            item.title === t("nav.tit14") 
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
                                            href="#"  
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







