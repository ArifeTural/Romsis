import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Row>
        <Col className='cal-1'>
          <p>
            <a href="tel:+908502601909" className='text-decoration-underline'>
              <i className="fa-solid fa-phone"></i>+90 850 260 19 09
            </a>
          </p>
          <p>
            <a href="tel:+905426467551" className='text-decoration-underline'>
              <i className="fa-solid fa-phone"></i>+90 542 646 75 51
            </a>
          </p>
          <p>
            <a href="mailto:bilgi@romsis.com.tr" className='text-decoration-underline'>
              <i className="fa-solid fa-envelope"></i>bilgi@romsis.com.tr
            </a>
          </p>
        </Col>
        <Col className='cal-2'>
          <p><i className="fa-solid fa-location-dot"></i><span>{t("iletisim.altbaslik1")}</span> {t("iletisim.icerik1")}</p>

          <p><i className="fa-solid fa-location-dot"></i> <span>{t("iletisim.altbaslik2")}</span> {t("iletisim.icerik2")}</p>
        </Col>
        <Col className='cal-3'>
          <p><i className="fa-solid fa-location-dot"></i> <span>{t("iletisim.altbaslik3")}</span> {t("iletisim.icerik3")}</p>
          <p><i className="fa-solid fa-location-dot"></i> <span>{t("iletisim.altbaslik4")}</span>{t("iletisim.icerik4")}</p>
        </Col>
        <Col className='cal-4'>
          <p><i className="fa-solid fa-location-dot"></i> <span>{t("iletisim.altbaslik5")}</span> {t("iletisim.icerik5")}</p>
          <p><i className="fa-solid fa-location-dot"></i> <span>{t("iletisim.altbaslik6")}</span> {t("iletisim.icerik6")}</p>
        </Col>
        <Col className='cal-5'>
          <ul>
            <li><Link className="fs-5" to="/dashboard/byOnBoard" onClick={scrollToTop}>{t("nav.tit2")}</Link></li>
          </ul>
          <ul>
            <li><Link to="/dashboard/ozelYazilim/YalinUretim" onClick={scrollToTop}>{t("nav.tit4")}</Link></li>
            <li><Link to="/dashboard/ozelYazilim/Wms" onClick={scrollToTop}>{t("nav.tit5")}</Link></li>
            <li><Link to="/dashboard/ozelYazilim/MobilUygulama" onClick={scrollToTop}>{t("nav.tit6")}</Link></li>
            <li><Link to="/dashboard/ozelYazilim/UIUX" onClick={scrollToTop}>{t("nav.tit7")}</Link></li>
            <li><Link to="/dashboard/ozelYazilim/WebYazilim" onClick={scrollToTop}>{t("nav.tit8")}</Link></li>
          </ul>
        </Col>
        <Col className='cal-6'>
          <ul>
            <li><Link to="/dashboard/hakkımızda" onClick={scrollToTop}>{t("nav.tit10")}</Link></li>
            <li><Link to="/dashboard/kurumsal" onClick={scrollToTop}>{t("nav.tit11")}</Link></li>
            <li><Link to="/dashboard/sorular" onClick={scrollToTop}>{t("nav.tit12")}</Link></li>
          </ul>
        </Col>
        <Col className='cal-7'>
          <ul>
            <li><Link to="/dashboard/teklif" onClick={scrollToTop}>{t("nav.tit14")}</Link></li>
          </ul>
          <div className="fa d-flex align-items-center h-100">
            <a href="https://www.instagram.com/romsisyazilim/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.youtube.com/@Romsis" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.facebook.com/RomsisYazilim/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.linkedin.com/in/romsis-yaz%C4%B1l%C4%B1m-581048115/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://x.com/romsissoft" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
