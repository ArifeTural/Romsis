import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Teklif = () => {
  const phoneNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';

  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  return (
    
    <Row>
    <Col>
    
    <p><i className="fa-solid fa-phone"></i> +90 850 260 19 09</p>
          <p><i className="fa-solid fa-phone"></i> +90 542 646 75 51</p>
          <p><i className="fa-solid fa-envelope"></i> bilgi@romsis.com.tr</p>

          <div className="whatsapp-yardim">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
          onClick={handleClick} 
        >
          <i className="fab fa-whatsapp "></i> 
          <p className=''>Whatsapp Destek Hattı</p>
        </a>
      </div>
    </Col>
    <Col>
    <div className="mb-3 w-100">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">Buy On Board Hizmetleri</option>
  <option value="2">Yalın Üretim ve Üretim Sistemleri</option>
  <option value="3">Wms Depo Yönetim Sistemleri</option>
  <option value="1">Mobil Uygulama</option>
  <option value="2">UI & UX</option>
  <option value="3">Web Yazılım</option>
</select>
    <div className="mb-3 w-100">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Example textarea
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
        defaultValue={""}
      />
    </div>
    <button type="button" class="btn btn-outline-danger">Gönder</button>
    </Col>
 

  </Row>
  
  )
}

export default Teklif