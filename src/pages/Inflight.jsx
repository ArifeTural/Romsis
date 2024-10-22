import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Modal, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ucak from "../assets/romsisucak.png";
import { services } from '../helper/yazilim';
import infli from "../assets/inflightgiriss.jpg";
import { board } from '../helper/referans';
import menu from "../assets/menu.png";

const Inflight = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const aboutText = "Uçuşlarımızda siz değerli yolcularımıza en iyi hizmeti sunmayı amaçlıyoruz. Yenilikçi yaklaşımlarımızla seyahatinizi daha keyifli hale getiriyoruz.";

  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Uçuş Hizmetleri</title>
        <meta name="description" content="Romsis, uçuş sırasında konforunuzu ön planda tutarak en iyi in-flight hizmetleri sunar. Yiyecek içecek servisi, eğlence seçenekleri, Wi-Fi hizmeti ve daha fazlası ile uçuşlarınız keyifli geçsin." />
        <meta name="keywords" content="uçuş hizmetleri, in-flight deneyimi, Wi-Fi uçuş, eğlence uçuş, Romsis, yiyecek içecek uçuş" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Romsis - Uçuş Hizmetleri" />
        <meta property="og:description" content="Romsis uçuşlarında en iyi hizmetleri sunarak seyahatinizi daha konforlu hale getiriyor." />
        <meta property="og:image" content={infli} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <img src={infli} alt="inflightgiris" style={{width: "100%"}} />
      </div>

      <Container className="p-2">
        <h1 className='inflight-h1'>Uçuş Hizmetleri | En Iyi In-Flight Deneyimi</h1>
        <p className='inflight-par p-5'>Uçuş sırasında konforunuzu ön planda tutarak sunduğumuz kaliteli hizmetlerle seyahatinizi daha keyifli hale getiriyoruz. Yiyecek ve içecek servisi, eğlence seçenekleri ve Wi-Fi erişimi gibi birçok imkan ile siz değerli yolcularımızın memnuniyetini sağlamak için buradayız.</p>
      </Container>

      {/* Hakkında Bölümü */}
      <Container className="mt-5">
        <p className='about-par'>{aboutText}</p>
      </Container>

      {/* Hizmetler Bölümü */}
      <h2 className='text-center hizmet-h2'>Hizmetlerimiz</h2>   
      <Container className="">
        <Row className=' mx-auto '>
          {services.map((service, index) => (
            <Col key={index} md={4} >
              <Card className='hizmet-kart shadow-lg' style={{ width: '20rem', height: '32rem' }}>
                <Card.Img variant="top" src={service.imageUrl} style={{height:"300px"}} />
                <Card.Body>
                  <Card.Title className='hizmet-kart-baslik'>{service.title}</Card.Title>
                  <Card.Text className='hizmet-kart-text' >{service.description}</Card.Text>
                  <Button variant="primary" className='hizmet-kart-buton' onClick={() => handleShow(service)}>Detaylar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h2 className='hizmet-h2'>Sıkça Sorulan Sorular</h2>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center mb-3 mb-sm-0">
            <img src={ucak} alt="romsisucak" style={{height: "300px"}} />
          </Col>
          <Col xs={12} sm={6} className="d-flex justify-content-center">
            <ul className="list-unstyled mt-3">
              <li className='fs-4 text-secondary'><strong>Uçuş sırasında Wi-Fi mevcut mu?</strong> <br/> Evet, uçuşlarımızda Wi-Fi hizmeti bulunmaktadır.</li>
              <li className='fs-4 text-secondary'><strong>Yiyecek ve içecek servisi nasıl yapılıyor?</strong>
              <br/> Uçuş sırasında menümüzden seçtiğiniz yiyecek ve içecekleri sunuyoruz.</li>
              <li className='fs-4 text-secondary'><strong>Uçuş süresince eğlence seçenekleri var mı?</strong>
              <br/> Evet, uçuş süresince birçok film, dizi ve müzik seçeneği sunuyoruz.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Modal Bölümü */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='hizmet-kart-baslik'>{selectedService ? selectedService.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='hizmet-kart-text'><strong>Açıklama:</strong> {selectedService ? selectedService.details : ''}</p>
          <p className='hizmet-kart-text'><strong>Avantajlar:</strong></p>
          <ul className='hizmet-kart-text'>
            {selectedService && selectedService.advantages.map((advantage, index) => (
              <li key={index} >{advantage}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='hizmet-kart-buton'>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='mb-5 pb-5'>
        <h2 className='text-center hizmet-kart-baslik fs-2'>Örnek Menümüz</h2>
        <img src={menu} alt="menu" className='w-100' />
      </div>

      {/* REFERANSLARIMIZ */}
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
};

export default Inflight;


