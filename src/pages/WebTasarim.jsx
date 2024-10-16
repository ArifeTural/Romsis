import React, { useEffect, useState } from 'react';
import web from "../assets/webtasarım.jpg";
import "../css/web.css";
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import { tekno,  webtasarim } from '../helper/yazilim';
import { gsap } from 'gsap'; // GSAP importunu ekleyin



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
        <h4 className='fs-2'>İnternet dünyasında markanızın güçlü bir izlenim bırakmasını sağlayacak bir web sitesi tasarlamak, uzmanlık ve stratejik bir süreç gerektirir.</h4>
      </div>
      <div className='web-tas-surec-title m-5 pt-4'>
        <h2 className='fs-1'>Web sitenizi tasarlarken izleyeceğimiz süreç:</h2>
      </div>

      {/* SÜREÇ */}
      <Carousel interval={5000} className='carousel-container d-flex align-items-center '>
            {webtasarim.map((item, index) => (
                <Carousel.Item key={item.id}>
                    <div className="d-flex justify-content-around">
                        <div className="card" style={{ width: '45%' }}>
                            <div className="card-body">
                            <h5 className="card-title fs-2">{item.id}.</h5>
                                <h5 className="card-title fs-2">{item.title}</h5>
                                <p className="card-text ">{item.text}</p>
                                <ul>
                                    <li>{item.li1}</li>
                                    <li>{item.li2}</li>
                                    {item.li3 && <li>{item.li3}</li>}
                                    {item.li4 && <li>{item.li4}</li>}
                                </ul>
                                <p className="card-text">{item.text2}</p>
                            </div>
                        </div>
                        {index + 1 < webtasarim.length && (
                            <div className="card sonraki-card" style={{ width: '30%' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{webtasarim[index + 1].title}</h5>
                                    <p className="card-text">{webtasarim[index + 1].text}</p>
                                    <ul>
                                        <li>{webtasarim[index + 1].li1}</li>
                                        <li>{webtasarim[index + 1].li2}</li>
                                        {webtasarim[index + 1].li3 && <li>{webtasarim[index + 1].li3}</li>}
                                        {webtasarim[index + 1].li4 && <li>{webtasarim[index + 1].li4}</li>}
                                    </ul>
                                    <p className="card-text">{webtasarim[index + 1].text2}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>

      {/* Hangi Teknolojileri Kullanıyoruz Bölümü */}
      
      <div className='web-teknoloji-container mt-5 p-5'>
      <h2 className='web-tas-surec-title m-5 pt-4 fs-1'> Hangi Teknolojileri Kullanıyoruz:</h2>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="carousel-custom tek-ana">
        {tekno.map((tech) => (
          <Carousel.Item key={tech.id} className="carousel-item-custom ">
            <div className="carousel-image-container d-flex justify-content-center">
              <img
                className="carousel-image d-block"
                src={tech.image}
                alt={tech.title}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
            </div>
            <div className="carousel-card border-5 p-4 text-center mt-2">
              <h3 className='carousel-card-title fs-1 fw-bold'>{tech.title}</h3>
              <p className='carousel-card-description fs-4'>{tech.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-indicators-custom d-flex justify-content-center mt-5">
        {tekno.map((tech, index) => (
          <div
            key={tech.id}
            className={`indicator-image ${activeIndex === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${tech.image})`,
              width: '100px', 
              height: '100px', 
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

export default WebTasarim;









