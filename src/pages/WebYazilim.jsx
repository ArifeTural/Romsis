import React from 'react';
import { Helmet } from 'react-helmet';
import { bilgiKartlari } from '../helper/yazilim';
import { Carousel, Card } from 'react-bootstrap';
import { tekno, teknoloji } from '../helper/yazilim';
import webt from "../assets/w-yazilim.jpg";

const WebYazilim = () => {
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
        <p className="lead">
          İşletmeniz için modern ve ölçeklenebilir web yazılım çözümleri sunuyoruz. Profesyonel web geliştirme, frontend ve backend teknolojileriyle güçlü, güvenilir ve hızlı dijital platformlar oluşturuyoruz.
        </p>
      </header>

      <div className=' '>
    <img src={webt} alt="" className='web-yazilim-img'  />
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

 
      <section className="mb-5">
        <h2 className="wt-teknoloji text-center">Hangi Teknolojileri Kullanıyoruz?</h2>
        <div className="web-teknoloji-container d-flex justify-content-center">
          <Carousel className="carousel-custom">
            {tekno.map((tech) => (
              <Carousel.Item key={tech.id} className="carousel-item-custom">
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block"
                    src={tech.image}
                    alt={tech.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card border-5 p-4 text-center mt-2">
                  <h3 className='fs-1 fw-bold'>{tech.title}</h3>
                  <p className='fs-5'>{tech.description}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>


      <section className="mb-5">
        <div className="d-flex flex-wrap gap-5 justify-content-center">
          {teknoloji.map((tekno) => {
            const { id, image } = tekno;
            return (
              <Card style={{ width: '5rem' }} key={id} className='border-0'>
                <Card.Img variant="top" src={image} />
              </Card>
            );
          })}
        </div>
      </section>

  
    </div>
  );
}

export default WebYazilim;
