import React, { useEffect, useState } from 'react';
import web from "../assets/webtasarım.jpg";
import "../css/web.css";
import { Carousel } from 'react-bootstrap';
import { tekno, webtasarim } from '../helper/yazilim';
import { gsap } from 'gsap';

const WebTasarim = () => {
  useEffect(() => {
    const rotateRing = gsap.timeline({ repeat: -1 });
    rotateRing.to('.ring-container', {
      rotateY: 360,
      duration: 8,
      ease: 'none',
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <div className='web-tasarim-header w-100 d-flex justify-content-center'>
        <img src={web} alt="" className='web-tasarim-img' />
      </div>

      <div className='web-tas-giris m-5 p-5 text-center'>
        <h4 className='fs-2'>
          İnternet dünyasında markanızın güçlü bir izlenim bırakmasını sağlayacak bir web sitesi tasarlamak, uzmanlık ve stratejik bir süreç gerektirir.
        </h4>
      </div>

      <div className='web-tas-surec-title m-5 p-5'>
        <h2 className='fs-1'>Web sitenizi tasarlarken izleyeceğimiz süreç:</h2>
      </div>

      {/* Kart Yapısı */}
      <div className="row m-5 justify-content-center  ">
        {webtasarim.map((item, index) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div className="card border-0" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title fs-2">{item.id}.</h5>
                <h5 className="card-title fs-2">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <ul>
                  <li>{item.li1}</li>
                  <li>{item.li2}</li>
                  {item.li3 && <li>{item.li3}</li>}
                  {item.li4 && <li>{item.li4}</li>}
                </ul>
                <p className="card-text">{item.text2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hangi Teknolojileri Kullanıyoruz Bölümü */}
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
};

export default WebTasarim;










