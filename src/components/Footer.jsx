import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col>
          <p><i className="fa-solid fa-phone"></i> +90 850 260 19 09</p>
          <p><i className="fa-solid fa-phone"></i> +90 542 646 75 51</p>
          <p><i className="fa-solid fa-envelope"></i> bilgi@romsis.com.tr</p>
        </Col>
        <Col>
          <p><i className="fa-solid fa-location-dot"></i> Adres: Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye</p>
        </Col>
        
        <Col>
          <ul>
            <li><Link className="fs-5" to="/dashboard/byOnBoard">By On Board</Link></li>
            <li><Link className="fs-5" to="/dashboard/inflight">In-Flight</Link></li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><Link to="/dashboard/ozelYazilim/MobilUygulama">Mobil Uygulama</Link></li>
            <li><Link to="/dashboard/ozelYazilim/UIUX">UI & UX</Link></li>
            <li><Link to="/dashboard/ozelYazilim/WebTasarim">Web Tasarım</Link></li>
            <li><Link to="/dashboard/ozelYazilim/WebYazilim">Web Yazılım</Link></li>
            <li><Link to="/dashboard/ozelYazilim/Wms">WMS Depo</Link></li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><Link to="/dashboard/hakkımızda">Hakkımızda</Link></li>
            <li><Link to="/dashboard/sorular">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </Col>
        <Col>
          <Link className="fs-5" to="/dashboard/teklif">Teklif Al</Link>
        </Col>
        <Col>
          <div className="fa d-flex align-items-center h-100">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
