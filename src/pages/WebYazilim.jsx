import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { bilgiKartlari } from '../helper/yazilim';
import { Carousel, Card } from 'react-bootstrap';
import { tekno} from '../helper/yazilim';
import webt from "../assets/w-yazilim.jpg";

const WebYazilim = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div className="container mt-2">
    


      {/* SEO Meta Tag'ler */}
      <Helmet>
        <title>Web Yazılım Hizmetleri | Frontend, Backend ve Veritabanı Çözümleri</title>
        <meta name="description" content="Modern web yazılım hizmetlerimiz ile işletmeniz için frontend, backend ve veritabanı çözümleri sunuyoruz. Profesyonel ve ölçeklenebilir yazılım geliştirme hizmetleri hakkında detaylı bilgiler edinin." />
        <meta name="keywords" content="web yazılım, frontend, backend, veritabanı yönetimi, web geliştirme, yazılım çözümleri, web tasarım" />
      </Helmet>



      {/* Başlık Bölümü */}
      <header className="text-center mb-3">
        <h1 className='wt-baslik'>MODERN WEB YAZILIM ÇÖZÜMLERİ</h1>
        <img src={webt} alt="" className='web-yazilim-img'  />
      
      </header>

      <div className=' '>
      <p className="lead text-center">
          İşletmeniz için modern ve ölçeklenebilir web yazılım çözümleri sunuyoruz. Profesyonel web geliştirme, frontend ve backend teknolojileriyle güçlü, güvenilir ve hızlı dijital platformlar oluşturuyoruz.
        </p>
  
    </div>

      <section className="m-5">
        <h2 className="wt-bilesenler text-center mb-4">Web Yazılımının Ana Bileşenleri</h2>
        <div className="row">
          {bilgiKartlari.map((kart) => (
            <div key={kart.id} className="col-md-4 mb-4">
              <div className="card border-0 h-100 shadow-lg text-center">
                <div className="card-body">
                  <h3 className="wt-card-title card-title">{kart.title}</h3>
                  <p className="wt-card-text">{kart.description}</p>
                  <button className="btn" data-bs-toggle="modal" data-bs-target={`#modal${kart.id}`}>
                    Detaylı Bilgi
                  </button>
                </div>
              </div>

              {/* Modal Penceresi */}
              <div className="modal fade" id={`modal${kart.id}`} tabIndex="-1" aria-labelledby={`modalLabel${kart.id}`} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`modalLabel${kart.id}`}>{kart.modalTitle}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {kart.modalContent}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

 
      <div>
  <h2 className='web-tas-surec-title m-5 pt-4 fs-1 text-center'>Hangi Teknolojileri Kullanıyoruz:</h2>
</div>
<div className='web-teknoloji-container d-flex flex-column align-items-center justify-content-center flex-wrap gap-3 w-75 mx-auto'>
  <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="carousel-custom tek-ana w-100" indicators={false}>
    {tekno.map((tech) => (
      <Carousel.Item key={tech.id} className="carousel-item-custom">
        <div className="carousel-image-container d-flex justify-content-center">
          <img
            className="carousel-image d-block"
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
