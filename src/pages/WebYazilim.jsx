import React, {useState} from 'react';
import { tekno} from '../helper/yazilim';
import { Helmet } from 'react-helmet';
import { bilgiKartlari } from '../helper/yazilim';
import webt from "../assets/webt.jpg";
import { Carousel, Col, Row } from 'react-bootstrap';
import steps from "../assets/strategy.png"

const WebYazilim = () => {
  const surec = [
    'Müşteri Talebinin Alınması',
    'Proje Tanımlama ve Gereksinim Analizi',
    'Planlama ve Zaman Çizelgesi',
    'Tasarım (UI/UX)',
    'Prototip Oluşturma',
    'Geliştirme (Kodlama)',
    'Test ve Hata Ayıklama',
    'Uygulama Yaygınlaştırma (Deployment)',
    'Eğitim ve Dokümantasyon',
    'Bakım ve Destek',
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div>
  
      <Helmet>
        <title>Web Yazılım Hizmetleri</title>
        <meta name="description" content="Modern web yazılım hizmetlerimiz ile işletmeniz için frontend, backend ve veritabanı çözümleri sunuyoruz. Profesyonel ve ölçeklenebilir yazılım geliştirme hizmetleri hakkında detaylı bilgiler edinin." />
        <meta name="keywords" content="web yazılım, frontend, backend, veritabanı yönetimi, web geliştirme, yazılım çözümleri, web tasarım" />
      </Helmet>


      <header className="">
      <h1 className='wy-baslik'>MODERN WEB YAZILIM ÇÖZÜMLERİ</h1>
      <div className='w-100 text-center'>
      <img src={webt} alt="webt" className='web-yazilim-img '  />
      </div>
       
     
      
      </header>

      <div className=' '>
      <p className="lead ">
          İşletmeniz için modern ve ölçeklenebilir web yazılım çözümleri sunuyoruz. Profesyonel web geliştirme, frontend ve backend teknolojileriyle güçlü, güvenilir ve hızlı dijital platformlar oluşturuyoruz.
        </p>
  
    </div>

      <section className="mt-5">
        <h2 className="wy-bilesenler">Web Yazılımının Ana Bileşenleri</h2>
        <Row className='d-flex flex-wrap w-100 p-2'>
          {bilgiKartlari.map((kart) => (
            <Col key={kart.id} className="col-12 col-md-4  mb-5">
              <div className="card border-0 h-100 shadow-sm text-center">
                <div className="card-body">
                  <h3 className="wy-card-title card-title">{kart.title}</h3>
                  <p className="wy-card-text">{kart.description}</p>
                  <button className="wy-card-buton btn" data-bs-toggle="modal" data-bs-target={`#modal${kart.id}`}>
                    Detaylı Bilgi
                  </button>
                </div>
              </div>

              {/* Modal Penceresi */}
              <div className="modal fade" id={`modal${kart.id}`} tabIndex="-1" aria-labelledby={`modalLabel${kart.id}`} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title wy-card-title" id={`modalLabel${kart.id}`}>{kart.modalTitle}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body wy-card-text">
                      {kart.modalContent}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn wy-card-buton" data-bs-dismiss="modal">Kapat</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <div className="container ">
  <div className="row justify-content-center align-items-center">
    <div className="col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center text-center align-items-center ">
      <h2 className="fs-1 fw-bold">
        Web Yazılım Geliştirme Aşamaları
      </h2>
      <img src={steps} alt="Geliştirme Aşamaları" width={200} />
    </div>
    <div className="col-12 col-lg-6 mt-5 ">
      <ul className="list-group">
        {surec.map((surec, index) => (
          <li key={index} className="fs-4 wy-card-text">
            {surec}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  <div>
  <h2 className='m-5 pt-4 fs-1 text-center wt-teknoloji'>Hangi Teknolojileri Kullanıyoruz:</h2>
</div>
<div className='web-teknoloji-container d-flex flex-column align-items-center justify-content-between flex-wrap gap-3 w-75 mx-auto '>
  <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="carousel-custom tek-ana w-100" indicators={false}>
    {tekno.map((tech) => (
      <Carousel.Item key={tech.id} className="carousel-item-custom">
        <div className="carousel-image-container d-flex justify-content-center">
          <img
            className="carousel-image d-block mb-3"
            src={tech.image}
            alt={tech.title}
            style={{ height: '200px', objectFit: 'cover', maxWidth: '100%' }}
          />
        </div>
        <div className="carousel-card border-5 text-center mt-1"> 
          <h3 className='carousel-card-title fs-4 fw-bold'>{tech.title}</h3>
          <p className='carousel-card-description'>{tech.description}</p>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  {/* Carousel indicators */}
  <div className="carousel-indicators-custom d-flex flex-wrap justify-content-center mt-3">
    {tekno.map((tech, index) => (
      <div
        key={tech.id}
        className={`indicator-image ${activeIndex === index ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${tech.image})`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '0 5px',
          backgroundSize: 'cover',
          cursor: 'pointer',
          border: activeIndex === index ? '2px solid #007bff' : 'none',
        }}
        onClick={() => handleSelect(index)}
      />
    ))}
  </div>
</div>

  
    </div>

  );
}

export default WebYazilim;
