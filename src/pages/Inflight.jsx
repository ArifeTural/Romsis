import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Modal, Button } from 'react-bootstrap';

const Inflight = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Yiyecek ve İçecek Servisi',
      description: 'Yolcularımıza özel lezzetli ikramlar sunuyoruz.',
      details: 'Uçuş sırasında taze ve sağlıklı yiyecek seçenekleri ile çeşitli içecek alternatifleri sunmaktayız.',
      advantages: [
        'Zengin menü seçenekleri',
        'Diyet ve vegan seçenekleri',
        'Hızlı ve kaliteli servis',
      ],
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Eğlence Seçenekleri',
      description: 'Uçuş boyunca film, dizi ve müzik keyfi.',
      details: 'Geniş bir film ve dizi kütüphanesine erişim sağlayarak, farklı müzik türleri ile eğlenceli bir uçuş deneyimi sunuyoruz.',
      advantages: [
        'Yeni çıkan filmler',
        'Farklı dillerde altyazı seçenekleri',
        'Günlük güncellemeler',
      ],
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Wi-Fi Erişimi',
      description: 'Uçuş sırasında internet erişimi ile bağlantıda kalın.',
      details: 'Uçuş boyunca kesintisiz internet bağlantısı ile sosyal medya hesaplarınızı kontrol edebilir ve işlerinizi halledebilirsiniz.',
      advantages: [
        'Hızlı bağlantı',
        'Düşük gecikme süresi',
        'Güvenli bağlantı',
      ],
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

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
      {/* Başlık ve Giriş Paragrafı */}
      <Container className="mt-5">
        <h1>Uçuş Hizmetleri | En İyi In-Flight Deneyimi</h1>
        <p>Uçuş sırasında konforunuzu ön planda tutarak sunduğumuz kaliteli hizmetlerle seyahatinizi daha keyifli hale getiriyoruz. Yiyecek ve içecek servisi, eğlence seçenekleri ve Wi-Fi erişimi gibi birçok imkan ile siz değerli yolcularımızın memnuniyetini sağlamak için buradayız.</p>
      </Container>

      {/* Hakkında Bölümü */}
      <Container className="mt-5">
        <h2>Hakkında</h2>
        <p>{aboutText}</p>
      </Container>

      {/* Hizmetler Bölümü */}
      <Container className="mt-5">
        <h2 id="services">Hizmetlerimiz</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={service.imageUrl} />
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

      {/* Sıkça Sorulan Sorular (SSS) Bölümü */}
      <Container className="mt-5">
        <h2>?</h2>
        <ul>
          <li><strong>Uçuş sırasında Wi-Fi mevcut mu?</strong> Evet, uçuşlarımızda Wi-Fi hizmeti bulunmaktadır.</li>
          <li><strong>Yiyecek ve içecek servisi nasıl yapılıyor?</strong> Uçuş sırasında menümüzden seçtiğiniz yiyecek ve içecekleri sunuyoruz.</li>
          <li><strong>Uçuş süresince eğlence seçenekleri var mı?</strong> Evet, uçuş süresince birçok film, dizi ve müzik seçeneği sunuyoruz.</li>
        </ul>
      </Container>

      {/* Görsel Galeri Bölümü */}
      <Container className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Görsel 1</h3>
              <p>Açıklama 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Görsel 2</h3>
              <p>Açıklama 2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
    </div>
  );
};

export default Inflight;


