import React from 'react';
import { Helmet } from 'react-helmet'; // Helmet kütüphanesini import et
import Carousel from 'react-bootstrap/Carousel';
import { data, yazilim, yazilim2, yazilim3 } from "../helper/data";
import { referans } from '../helper/referans';
import { steps } from '../helper/yazilim';
import { Link } from 'react-router-dom';
import { Row, Col, Navbar } from 'react-bootstrap';

function Home() {
  const phoneNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';

  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  return (
    <div>
      {/* Helmet Etiketleri */}
      <Helmet>
        <title>Romsis - Buy On Board Hizmetleri | Yazılım ve Web Çözümleri</title>
        <meta name="description" content="Romsis Yazılım, web tasarım ve buy on board hizmetleri ile dijital çözümler sunuyor." />
        <meta name="keywords" content="buy on board hizmetleri, yazılım, web tasarım, mobil uygulama, özel yazılım, WMS, UI/UX" />
        <meta name="author" content="Romsis" />
        <link rel="canonical" href="https://www.romsis.com" />
      </Helmet>

      {/* SLAYT */}
      <div className='carousel'>
   
        <div className='carousel-bg'></div>
        <Carousel className='carousel-content'>
          {data.map((item) => {
            const { image, id } = item;
            return (
              <Carousel.Item interval={5000} key={id}>
                <video autoPlay muted loop controls className='h-video'>
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      {/* NELER YAPIYORUZ */}
      <h2 className='text-center text-danger fs-1 fw-bold mt-5 pt-5'>Neler Yapıyoruz?</h2>
      <div className='container'>
        {yazilim.map((yz, index) => {
          const { image, id, title, title2, link } = yz;
          return (
            <div key={id} className={`content content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}{title2}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='container'>
        {yazilim2.map((yz, index) => {
          const { image, id, title, link } = yz;
          return (
            <div key={id} className={`content2 content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='container'>
        {yazilim3.map((yz, index) => {
          const { image, id, title, link } = yz;
          return (
            <div key={id} className={`content3 content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
        {/* NASIL ÇALIŞIYORUZ? */}
      <div className="container  nasil-cont ">
        <h2 className='fs-1 fw-bolder text-center text-danger tasarim-baslikk'> Nasıl Çalışıyoruz ?</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
              <div className="card border-0">
                <img className="nasil-img" src={step.img} alt={step.alt} loading="lazy" />
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold text-secondary">{step.title}</h5>
                  <ul className="list-unstyled">
                    {step.content.map((item, i) => (
                      <li key={i} className="text-muted">
                        * {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REFERANSLAR */}
      <div className='text-center'>
        <h2>
          <a href="#" className='h-refe fw-bolder fs-1 text-danger'>İş Ortaklarımız</a>
        </h2>
      </div>
      <div className='home-referans'>
        <div className='home-referans-content'>
          {referans.map((arife) => {
            const { id, image } = arife;
            return (
              <div className="home-referans-card" style={{ width: "7rem" }} key={id}>
                <img src={image} className="card-img-top border rounded-2" alt="Referans" />
              </div>
            );
          })}
          {/* Kartları tekrar etmek için */}
          {referans.map((arife) => {
            const { id, image } = arife;
            return (
              <div className="home-referans-card" style={{ width: "7rem" }} key={id + "-copy"}>
                <img src={image} className="card-img-top border rounded-2" alt="Referans" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="whatsapp-support">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
          onClick={handleClick} 
        >
          <i className="fab fa-whatsapp home-whatsapp  "></i> 
          <br />
          <p className='whatsapp-par'>İletişime Geçin</p>
        </a>
      </div>

      <footer>
        <Row>
          <Col>
          <p>
        <a href={+908502601909} className='text-decoration-underline'>
        <i className="fa-solid fa-phone"></i>+90 850 260 19 09</a>
        </p>
        <p>
        <a href={+905426467551} className='text-decoration-underline'>
        <i className="fa-solid fa-phone"></i>+90 542 646 75 51</a>
        </p>
        <p>
        <a href="mailto:bilgi@romsis.com.tr" className='text-decoration-underline'>
        <i className="fa-solid fa-envelope"></i>bilgi@romsis.com.tr</a>
        </p>
          </Col>
          <Col>
            <p><i className="fa-solid fa-location-dot"></i> Merkez Adres: Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye</p>
            <p><i className="fa-solid fa-location-dot"></i> Ar-Ge Adres: Trakya Üniversitesi Ayşekadın Yerleşkesi, 22100 Edirne Türkiye</p>
          </Col>
          <Col>
            <p><i className="fa-solid fa-location-dot"></i> Ankara Esenboğa Havalimanı Şubesi Adres: Ankara Esenboğa Havalimanı Romsis Ofisi</p>
            <p><i className="fa-solid fa-location-dot"></i> Sabiha Gökçen Havalimanı Şubesi Adres: İstanbul Sabiha Gökçen Uluslararası Havalimanı Romsis Ofisi</p>
          </Col>
          <Col>
            <p><i className="fa-solid fa-location-dot"></i> Antalya Havalimanı Şubesi Adres: Fraport TAV Antalya Havalimanı Romsis Ofisi</p>
            <p><i className="fa-solid fa-location-dot"></i> Azerbaycan Ofisi Adres: Elmler Akademiyasi Ehmed Cemil kucesi, Mothercare-den Forte Fashion-nin binasi</p>
          </Col>
          <Col>
            <ul>
            
              <li><Link className="fs-5" to="/dashboard/byOnBoard">By On Board</Link></li>
            </ul>
            <ul>
            <li><Link to="/dashboard/ozelYazilim/YalinUretim">Yalın Üretim|MRP</Link></li>
            <li><Link to="/dashboard/ozelYazilim/Wms">WMS Depo</Link></li>
              <li><Link to="/dashboard/ozelYazilim/MobilUygulama">Mobil Uygulama</Link></li>
              <li><Link to="/dashboard/ozelYazilim/UIUX">UI & UX</Link></li>
            
              <li><Link to="/dashboard/ozelYazilim/WebYazilim">Web Yazılım</Link></li>
            
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
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Home;



