import React from 'react';
import { Col, Container, Row, Form, Button, InputGroup } from 'react-bootstrap';

const Teklif = () => {
  const phoneNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';

  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  return (
    <Container>
      <Row>

     

        <Col>
        <h1 className='fw-bold' style={{fontSize: "2.5rem"}}>Size Nasıl Yardımcı OLabiliriz?</h1>
        <br /> <br />
        <div className="whatsapp-yardim ">
    
            <a
          
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-link text-light text-bg-success p-2"
              onClick={handleClick}
            >
              <i className="fab fa-whatsapp w-100 fs-5 "> Whatsapp  Destek  Hatti </i> 
            
            </a>
          </div>
          <Form>
            <Row>
              <Col>
              <br />
                <Form.Group controlId="formFirstName">
                  <Form.Label>Ad</Form.Label>
                  <Form.Control type="text" placeholder="İsim" />
                </Form.Group>
              </Col>
              <Col>
              <br />
                <Form.Group controlId="formLastName">
                  <Form.Label>Soyad</Form.Label>
                  <Form.Control type="text" placeholder="Soyisim" />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Telefon</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Form.Select defaultValue="+90">
                    <option>+90</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+49</option>
                    <option>+33</option>
                  </Form.Select>
                </InputGroup.Text>
                <Form.Control type="tel" placeholder="555-123-4567" />
              </InputGroup>
            </Form.Group>
                 {/* Seçenek menüsü burada yer alıyor */}
          <select className="form-select" aria-label="Default select example" defaultValue="">
            <option value="" disabled>Bize Ulaşmak İstediğiniz Konuyu Seçiniz.</option>
            <option value="1">Buy On Board Hizmetleri</option>
            <option value="2">Yalın Üretim ve Üretim Sistemleri</option>
            <option value="3">Wms Depo Yönetim Sistemleri</option>
            <option value="4">Mobil Uygulama</option>
            <option value="5">UI & UX</option>
            <option value="6">Web Yazılım</option>
          </select>
          <br />

            <Form.Group className="mb-3" controlId="formNotes">
              <Form.Label>Not Ekleyiniz</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder='Bize yazınız..' />
            </Form.Group>

            <Form.Check
              aria-label="option 1"
              label="Verilerimin Romsis tarafından saklanmasına ve iletişim kurulmasına izin veriyorum."
            />
            <Form.Check
              aria-label="option 2"
              label="Kişisel verilerimin işlenmesine ve üçüncü kişilerle paylaşılmasına onay veriyorum."
            />
            <br />

            <Button variant="danger" type="submit" className="i-button">
              Gönder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Teklif;
