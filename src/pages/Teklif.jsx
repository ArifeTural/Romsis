import React, { useEffect, useState } from 'react';
import "../css/kurumsal.css"
import { Col, Container, Row, Form, Button, InputGroup } from 'react-bootstrap';
import wp from "../assets/whatsapp.png"
import Swal from 'sweetalert2';

const Teklif = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Topic, setTopic] = useState('')
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
        body: JSON.stringify({ FirstName: FirstName, LastName:LastName, Email: Email, PhoneNumber:PhoneNumber, Topic:Topic }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message || 'Başarıyla gönderildi!');
        setFirstName("");
        setLastName("");
        setEmail(""); 
        setPhoneNumber("");
        setTopic("");
        Swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Mail başarıyla kaydedildi!',
        });
      } else {
        console.log('Başarıyla kaydedildi!');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      console.log('Bir hata oluştu.');
    }
  };

 
  

  // useEffect(() => {
  //   fetch('https://onlytalent.romsis.com/get/contacts')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setMails(data))
  //     .catch(error => console.error('Fetch error:', error));
  // }, []);


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
        <div className="whatsapp-yardim ">
    
            <a
          
              href={`https://wa.me/${telNumber}?text=${encodeURIComponent(message)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-link "
              onClick={handleClick}
            >
              <i className=" w-100 text-success fw-bold fs-4 "> 
              <img style={{width: "8%", borderRadius: "50%", cursor: "pointer"}} src={wp} alt="whatsapp" /> Whatsapp  Destek  Hattı </i> 
            
            </a>
          </div>
          <Form>

            <Row onSubmit={handleSubmit}>
              <Col>
              <br />
                <Form.Group controlId="formFirstName">
                  <Form.Label>Ad</Form.Label>
                  <Form.Control type="text" 
                  value={FirstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                  required 
                  placeholder="İsim" />
                </Form.Group>
              </Col>
              <Col>
              <br />
                <Form.Group controlId="formLastName">
                  <Form.Label>Soyad</Form.Label>
                  <Form.Control type="text"
                  value={LastName}
                  onChange={(e)=> setLastName(e.target.value)}
                  required 
                   placeholder="Soyisim" />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" 
               value={Email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
             placeholder="name@example.com" />
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
                <Form.Control type="tel" 
                value={PhoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)}
                required 
                placeholder="555-123-4567" />
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
              <Form.Control as="textarea" rows={5} 
              value={Topic}
              onChange={(e)=> setTopic(e.target.value)}
              required 
              placeholder='Bize yazınız..' />
            </Form.Group>
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="flexCheckChecked" 
            checked={isChecked} 
            onChange={(e) => setIsChecked(e.target.checked)} 
          />
          <label className="form-check-label w-75" htmlFor="flexCheckChecked">
            Kişisel verilerimin, belirtilen kapsam ve amaçlarla işlenmesini kabul ediyorum.
          </label>
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
