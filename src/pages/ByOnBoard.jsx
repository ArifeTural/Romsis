import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import { bob, buyOnCarousel } from '../helper/yazilim';
import '../css/byOnBoard.css';
import { Col, Container, Row } from 'react-bootstrap';
import { board } from '../helper/referans';
import retail from "../assets/byreatil.jpg"

const ByOnBoard = () => {
  return (
    <div> 
      <Helmet>
        <title>Buy on Board Hizmetleri | Romsis</title>
        <meta name="description" content="Romsis olarak modern havayolu deneyimini zenginleştiriyoruz. Buy on Board hizmetleri ile yolculara çeşitli yiyecek ve içecek seçenekleri sunuyoruz." />
      </Helmet>

      <Carousel interval={5000}>
  {buyOnCarousel.map((buy) => (
    <Carousel.Item key={buy.id} className="carousel-item-custom">
      <div className="d-flex justify-content-center align-items-center">
        <img src={buy.image} alt={`Uçak İçi Hizmet: ${buy.h1}`} className="buy-car" />
      </div>
      <Carousel.Caption className="buyon-caption">
        <h3 className="byon-h3">{buy.h1}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>




      <Container>
        <p className='buyon-par'>
          Romsis olarak, "Buy on Board" (BOB) hizmetleri ile modern havayolu deneyimini zenginleştiriyoruz. Uçuş sırasında yolcularımıza çeşitli yiyecek ve içecek seçenekleri sunarak konforlarını artırıyor, aynı zamanda havayolu şirketlerine ek gelir imkanı sağlıyoruz. Yolcular, tercih ettikleri ürünleri kolayca seçerken, biz de etkin bir şekilde uçak içi hizmetlerini yönetiyor ve satış işlemlerini sorunsuz bir şekilde gerçekleştiriyoruz. Romsis, "Buy on Board" sistemi ile yolcuların seyahatlerini daha keyifli hale getirirken, havayolu şirketlerinin operasyonel verimliliğini artırmayı hedefliyoruz.
        </p>
      </Container>
      

      <Container className='p-3'>
      <h2 className='buy-title'>BUY ON BOARD YAZILIM HİZMETLERİ</h2>
        {bob.map((bobb, index) => {
          const { id, image, h3, description } = bobb;

         
          const isSecondCard = index === 1;

          return (
            <Row className="g-3  mb-4 justify-content-between align-items-center" key={id}>
              {isSecondCard ? (
                <>
                  <Col className=" col-12 col-md-8 ">
                    <div className="card-body">
                      <h5 className="card-title fw-bold fs-2 text-center bob-title">{h3}</h5>
                      <p className="card-text fs-5 text-center bob-par">{description}</p>
                    </div>
                  </Col>
                  <Col className="col-12 col-md-4 ">
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
                  <Col className="col-12 col-md-8">
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

      <Container>
        <h2  className='buy-title'>BUY ON BOARD RETAIL HİZMETLERİ</h2>
    
        <Row className='d-flex align-items-center '>
        <Col className="col-12 col-lg-4  ">
                    <img 
                      src={retail}
                      className="img-fluid" 
                      alt="reatil"
                    />
                  </Col>
                  <Col className="col-12 col-lg-8">
                    <div className="card-body">
                    
                      <p className='fs-4 text-secondary fw-bold'>Her uçuş için özel yükleme adetleri, kabin ve yolcu bilgileri ile özel fiyatlandırmaların girilebildiği retail hizmetimizle, uçuş öncesi, uçuş esnası ve sonrasında tüm ihtiyaçlarınızı karşılıyoruz.</p>
                    </div>
                  </Col>

        </Row>
      </Container>



      <div className='text-center mt-5'>
        <h2>
          <a href="#" className='h-refe font-monospace fw-bolder fs-1 text-secondary '>İş Ortaklarımız</a>
        </h2>
      </div>
      <div className='referans'>
        {board.map((arife) => {
          const { id, image } = arife;
          return (
            <div className="referans-card" style={{ width: "8rem" }} key={id}>
              <img src={image} className="card-img-top rounded-pill" alt="İş ortağı logosu" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ByOnBoard;






