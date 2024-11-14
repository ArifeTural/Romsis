import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import { buyOnCarousel } from '../helper/data';
import '../css/byOnBoard.css';
import { Col, Container, Row } from 'react-bootstrap';
import { board } from '../helper/data';
import retail from "../assets/byreatil.jpg"
import { useTranslation } from "react-i18next";




const ByOnBoard = () => {
  const { t } = useTranslation();

 const bob = [
    {
      id: 1,
      image:"/image/yazilim/bob1.jpg",
      h3:t("buyon.altbaslik1"),
      description:t("buyon.par1"),
  
    },
    {
      id: 2,
      image:"/image/yazilim/ucakkredikarti.jpg",
      h3:t("buyon.altbaslik2"),
      description:t("buyon.par2"),
   
    },
    {
      id: 3,
      image:"/image/yazilim/board3.jpg",
      h3:t("buyon.altbaslik3"),
      description:t("buyon.par3"),
   
    }
  ];

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
   
    </Carousel.Item>
  ))}
</Carousel>




<Container>
  <p className='buyon-par'>{t("buyon.giris")}</p>
</Container>

      

      <Container className='p-3'>
      <h2 className='buy-title'>{t("buyon.baslik1")}</h2>
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
                      <p className="card-text text-center bob-par">{description}</p>
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
                      <p className="card-text  text-center bob-par">{description}</p>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          );
        })}
      </Container>

      <Container>
        <h2  className='buy-title'>{t("buyon.baslik2")}</h2>
    
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
                    
                      <p className='fs-4 text-secondary fw-bold'>{t("buyon.par4")}</p>
                    </div>
                  </Col>

        </Row>
      </Container>



      <div className='text-center mt-5'>
        <h2>
          <a href="#" className='h-refe font-monospace fw-bolder fs-1 text-secondary '>{t("giris.baslik3")}</a>
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






