import React, { useEffect, useState } from 'react';
import "../css/kurumsal.css"
import { Col, Container, Row, Form, Button, InputGroup } from 'react-bootstrap';
import wp from "../assets/whatsapp.png"
import Swal from 'sweetalert2';

const Teklif = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Topic, setTopic] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError('Kişisel verilerimin işlenmesini kabul etmeniz gerekiyor.');
      return;
    }
    try {
      const response = await fetch('https://onlytalent.romsis.com/post/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FirstName, LastName, Email, PhoneNumber, Topic }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message || 'Başarıyla gönderildi!');
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setTopic("");
        setIsChecked(false);
        setError('');
        Swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Mail başarıyla kaydedildi!',
        });
      } else {
        setError('Gönderim sırasında bir sorun oluştu.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Bir hata oluştu.');
    }
  };

  const telNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';
  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='fw-bold mt-4 text-center' style={{fontSize: "2.5rem"}}>Size Nasıl Yardımcı Olabiliriz?</h1>
          <br /> <br />
          <div className="whatsapp-yardim">
            <a
              href={`https://wa.me/${telNumber}?text=${encodeURIComponent(message)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-link"
              onClick={handleClick}
            >
              <i className="w-100 text-success fw-bold fs-4"> 
                <img style={{width: "8%", borderRadius: "50%", cursor: "pointer"}} src={wp} alt="whatsapp" /> Whatsapp Destek Hattı
              </i> 
            </a>
          </div>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <br />
                <Form.Group controlId="formFirstName">
                  <Form.Label>Ad</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                    placeholder="İsim" 
                  />
                </Form.Group>
              </Col>
              <Col>
                <br />
                <Form.Group controlId="formLastName">
                  <Form.Label>Soyad</Form.Label>
                  <Form.Control 
                    type="text"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                    placeholder="Soyisim" 
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                value={Email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder="name@example.com" 
              />
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
                <Form.Control 
                  type="tel" 
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required 
                  placeholder="555-123-4567" 
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNotes">
              <Form.Label>Not Ekleyiniz</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                value={Topic}
                onChange={(e) => setTopic(e.target.value)}
                required 
                placeholder='Bize yazınız..' 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                id="flexCheckChecked" 
                label="Kişisel verilerimin, belirtilen kapsam ve amaçlarla işlenmesini kabul ediyorum."
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)} 
                required 
              />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

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

