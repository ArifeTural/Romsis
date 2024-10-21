import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Modal, Button } from 'react-bootstrap';
import ucak from "../assets/romsisucak.png"
import { services } from '../helper/yazilim';
import infli from "../assets/inflightgiriss.jpg"
import { board } from '../helper/referans';

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
      <h2 className='text-center hizmet'>Hizmetlerimiz</h2>   
      <Container className="">
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={service.imageUrl} style={{height:"300px"}} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(service)}>Detaylar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    
      <Container>
      <Row className="align-items-center">
        {/* Resim Kolonu */}
        <Col xs={12} sm={6} className="text-center mb-3 mb-sm-0">
          <img src={ucak} alt="romsisucak" className="img-fluid" />
        </Col>

        {/* SSS Kolonu */}
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <ul className="list-unstyled mt-3">
            <li className='fs-4'><strong>Uçuş sırasında Wi-Fi mevcut mu?</strong> <br/> Evet, uçuşlarımızda Wi-Fi hizmeti bulunmaktadır.</li>
            <li className='fs-4'><strong>Yiyecek ve içecek servisi nasıl yapılıyor?</strong>
            <br/> Uçuş sırasında menümüzden seçtiğiniz yiyecek ve içecekleri sunuyoruz.</li>
            <li className='fs-4'><strong>Uçuş süresince eğlence seçenekleri var mı?</strong>
            <br/> Evet, uçuş süresince birçok film, dizi ve müzik seçeneği sunuyoruz.</li>
          </ul>
        </Col>
      </Row>
    </Container>



      {/* Modal Bölümü */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService ? selectedService.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Açıklama:</strong> {selectedService ? selectedService.details : ''}</p>
          <p><strong>Avantajlar:</strong></p>
          <ul>
            {selectedService && selectedService.advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

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


