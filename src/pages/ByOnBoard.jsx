import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import { bob, buyOnCarousel } from '../helper/yazilim';
import '../css/byOnBoard.css'; // CSS dosyanızı ekleyin
import { Col, Container, Row } from 'react-bootstrap';
import { board } from '../helper/referans';
import menu from "../assets/menu.png";

const ByOnBoard = () => {
  return (
    <div> 
      <Helmet>
        <title>Buy on Board Hizmetleri | Romsis</title>
        <meta name="description" content="Romsis olarak modern havayolu deneyimini zenginleştiriyoruz. Buy on Board hizmetleri ile yolculara çeşitli yiyecek ve içecek seçenekleri sunuyoruz." />
      </Helmet>

      <div className="carousel-buyon">
        <Carousel>
          {buyOnCarousel.map((buy) => {
            const { id, image, h1 } = buy;
            return (
              <Carousel.Item interval={10000} key={id}>
                <img src={image} alt={`Uçak İçi Hizmet: ${h1}`} style={{ width: "90%", height: "80vh", display: 'block', margin: 'auto', borderRadius: '3rem' }} />
                <Carousel.Caption className="buyon-caption">
                  <h3 className='byon-h3'>{h1}</h3> 
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <Container>
        <p className='buyon-par'>
          Romsis olarak, "Buy on Board" (BOB) hizmetleri ile modern havayolu deneyimini zenginleştiriyoruz. Uçuş sırasında yolcularımıza çeşitli yiyecek ve içecek seçenekleri sunarak konforlarını artırıyor, aynı zamanda havayolu şirketlerine ek gelir imkanı sağlıyoruz. Yolcular, tercih ettikleri ürünleri kolayca seçerken, biz de etkin bir şekilde uçak içi hizmetlerini yönetiyor ve satış işlemlerini sorunsuz bir şekilde gerçekleştiriyoruz. Romsis, "Buy on Board" sistemi ile yolcuların seyahatlerini daha keyifli hale getirirken, havayolu şirketlerinin operasyonel verimliliğini artırmayı hedefliyoruz.
        </p>
      </Container>

      <Container className='p-3'>
        {bob.map((bobb, index) => {
          const { id, image, h3, description } = bobb;

          // İkinci kart için özel bir stil belirleyelim
          const isSecondCard = index === 1;

          return (
            <Row className="g-3 mb-4 justify-content-between align-items-center" key={id}>
              {isSecondCard ? (
                <>
                  <Col className="col-md-8 ">
                    <div className="card-body">
                      <h5 className="card-title fw-bold fs-2 text-center bob-title">{h3}</h5>
                      <p className="card-text fs-5 text-center bob-par">{description}</p>
                    </div>
                  </Col>
                  <Col className="col-md-4">
                    <img 
                      src={image} 
                      className="img-fluid rounded-5 bob-image" 
                      alt={`Hizmet: ${h3}`} 
                    />
                  </Col>
                </>
              ) : (
                <>
                  <Col className="col-md-4">
                    <img 
                      src={image} 
                      className="img-fluid rounded-5 bob-image" 
                      alt={`Hizmet: ${h3}`} 
                    />
                  </Col>
                  <Col className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold fs-2 text-center bob-title">{h3}</h5>
                      <p className="card-text fs-5 text-center bob-par">{description}</p>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          );
        })}
      </Container>
      <Container className="p-2">
        <p className='inflight-par p-5'>En Iyi In-Flight Deneyimi | Uçuş sırasında yolculara sunulan konforlu ve kaliteli yiyecek ve içeceklerseyahat deneyimini daha keyifli hale getirir."</p>
    
      </Container>
      <div className='mb-5 pb-5'>
        <h2 className='text-center hizmet-kart-baslik fs-2'>Örnek Menümüz</h2>
        <img src={menu} alt="menu" className='w-100' />
      </div>


      <div className='text-center'>
        <h2>
          <a href="#" className='h-refe font-monospace fw-bolder fs-1 text-secondary'>İş Ortaklarımız</a>
        </h2>
      </div>
      <div className='referans'>
        {board.map((arife) => {
          const { id, image } = arife;
          return (
            <div className="referans-card" style={{ width: "8rem" }} key={id}>
              <img src={image} className="card-img-top" alt="İş ortağı logosu" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ByOnBoard;






