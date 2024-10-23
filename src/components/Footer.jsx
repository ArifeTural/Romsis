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
          <p>bilgi@romsis.com.tr</p>

        </Col>
        <Col>
        <p>Merkez Adres: Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye
          </p>
          <p>Ar-Ge Adres: Trakya Üniversitesi Ayşekadın Yerleşkesi, 22100 Edirne Türkiye</p>
        </Col>
        
        <Col>
        <p><i className="fa-solid fa-location-dot"></i> 
          Ankara Esenboğa Havalimanı Şubesi
         Adres: Ankara Esenboğa Havalimanı Romsis Ofis Ankara Türkiye
        </p>
          <p>Sabiha Gökçen Havalimanı Şubesi
          Adres: İstanbul Sabiha Gökçen Uluslararası Havalimanı Romsis Ofis İstanbul Türkiye</p>
     
        </Col>
        <Col>
        <p>Antalya Havalimanı Şubesi
        Adres: Fraport TAV Antalya Havalimanı Romsis Ofis Antalya Türkiye</p>
        <p>Azerbaycan Ofisi
        Adres: Elmler Akademiyasi Ehmed Cemil kucesi, Mothercare-den Forte Fashion-nin binasi 4-cu kat</p>
     
 
        </Col>
        <Col>
        <ul>
            <li><Link className="fs-5" to="/dashboard/byOnBoard">By On Board</Link></li>
          </ul>

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
            <li><Link to="/dashboard/kurumsal">Referanslarımız</Link></li>
            <li><Link to="/dashboard/sorular">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </Col>
        <Col>
        <ul>
        <li><Link to="/dashboard/teklif">Size Nasıl yardımcı Olabiriz?</Link></li>
        </ul>
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
