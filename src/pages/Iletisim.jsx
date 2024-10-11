import React from 'react'
import { Col,Form, Row, InputGroup, Button } from 'react-bootstrap';
import { MapIcon } from "../helper/icons";



const Iletisim = () => {
  return (
    <div >
    <div className='w-[100%] h-[18vh] bg-gray-200' >
    </div>


    <div>
   

    <Row  className='flex justify-center m-5 p-5'>
      
      <Col className='ofis' >
      <h1>Ofislerimiz</h1>
      <p>+90 850 260 19 09</p>
      <p> +90 542 646 75 51</p>
      <p>bilgi@romsis.com.tr
</p>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1357534643307!2d29.019095276822235!3d41.10972617133666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab73b567dd1a1%3A0xc89f33a7e4335c1d!2zUm9tc2lzIFlhesSxbMSxbQ!5e0!3m2!1str!2str!4v1728503523996!5m2!1str!2str"
  width={600}
  height={350}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
<br />
    <h4> Merkez</h4>
    <p><span>Adres:</span>Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye</p>
    <h4>Ar-Ge</h4>
    <p><span>Adres:</span>Trakya Üniversitesi Ayşekadın Yerleşkesi, 22100 Edirne Türkiye</p>
    <h4>Sabiha Gökçen Havalimanı Şubesi</h4>
    <p><span>Adres:</span>İstanbul Sabiha Gökçen Uluslararası Havalimanı Romsis Ofis İstanbul Türkiye</p>
    <h4>Ankara Esenboğa Havalimanı Şubesi</h4>
    <p><span>Adres:</span>Ankara Esenboğa Havalimanı Romsis Ofis Ankara Türkiye</p>
    <h4>Antalya Havalimanı Şubesi</h4>
    <p><span>Adres:</span>Fraport TAV Antalya Havalimanı Romsis Ofis Antalya Türkiye</p>
    <h4>Azerbaycan Ofisi</h4>
    <p><span>Adres:</span> Elmler Akademiyasi Ehmed Cemil kucesi, Mothercare-den Forte Fashion-nin binasi 4-cu kat</p>

      </Col>

      <Col className='i-form' >
      <h1 className='text-center '>İletişim Formu</h1>
      <br />

      <Form>
  <Row>
    <Col>
    <Form.Label>Ad</Form.Label>
      <Form.Control placeholder="İsim" />
     
    </Col>
    <Col>
     <Form.Label>Soyad</Form.Label>
      <Form.Control placeholder="Soyisim" />
    </Col>
  </Row>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3">
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

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Not Ekleyiniz..</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Check aria-label="option 1"
  label="  Rıza Metninde geçen koşullarda verilerimin Romsis ve Romsis Şirketleri tarafından saklanmasına ve Rıza Metnindeki durumlarda iletişim kurulmasına izin veriyorum. 6698 sayılı KANUN Aydınlatma Metnini okudum. Buna göre üyeliğimin oluşturulmasını kabul ediyorum." />
  <Form.Check aria-label="option 1"
  label="  www.romsis.com.tr web Sitesindeki işlemlerim ve/veya üyelik işlemlerim sırasında verdiğim tüm kişisel verilerimin Romsis Yazılım tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında ve işbu Web Sitesi’nde yayınlanan Aydınlatma Metni’nde belirtilen amaçlarla sınırlı olarak işlenmesine, muhafaza edilmesine ve ürün/hizmet/faaliyetlerini yürütebilmek için işbirliği içerisinde olduğu üçüncü kişiler ile paylaşılmasına açık rızam ile onay veriyorum." />
  <Button variant="danger" type="submit" className='i-button' >
    Gönder
  </Button>
</Form>


 




      </Col>




    </Row>
      
    </div>
     
    </div>
  )
}

export default Iletisim