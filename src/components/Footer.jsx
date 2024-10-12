import React from 'react'
import { Card,Row,Col,Form, InputGroup, Button  } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
              <Row>
        <Col>
      <p> <i class="fa-solid fa-phone"></i>+90 850 260 19 09</p>
      <p><i class="fa-solid fa-phone"></i>+90 542 646 75 51</p>
      <p> <i class="fa-solid fa-envelope"></i>bilgi@romsis.com.tr</p>
        </Col>
        <Col>
        <p> <i class="fa-solid fa-location-dot"></i>Adres:Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye</p>

        </Col>
        <Col>
         <ul>
         <a className='fs-5' href="">By On Board</a>
         </ul>
        </Col>
        <Col>     
        <ul>
         <a  className='fs-5'href="">Özel Yazılım Çözümleri</a>
          <li><a href="">Mobil Uygulama</a></li>
          <li><a href="">UI & UX</a></li>
          <li><a href="">Web Tasarım</a></li>
          <li><a href="">Web Yazılım</a></li>
          <li><a href="">E-Ticaret</a></li>
         </ul></Col>
        <Col><a className='fs-5' href="">Kurumsal</a></Col>
        <Col><a className='fs-5' href="">Teklif Al </a></Col>
        <Col>
        <div className='fa  d-flex align-items-center h-100'>
  <i className="fa-brands fa-instagram" />
  <i className="fa-brands fa-youtube" />
  <i className="fa-brands fa-facebook" />
  <i class="fa-brands fa-x-twitter"></i>
  </div>
        </Col>
      
      </Row>
    </footer>
  )
}

export default Footer