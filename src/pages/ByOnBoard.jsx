import React from 'react'
import board1 from "../assets/board1.jpg"
import board2 from "../assets/ucakkredikarti.jpg"
import board3 from "../assets/board3.webp"
import { Card,Row,Col,Form, InputGroup, Button  } from 'react-bootstrap';
import { board } from '../helper/referans';
import Teklif from './Teklif';



const ByOnBoard = () => {
  return (
    <div>
      <div className='text-center mt-5 '>
        <h1>BY ON BOARD SERVIS</h1>
      </div>

      <div className='by-container  p-5'>

        {/* 1. Kart */}
        <div className="card1 mb-5 p-5 d-flex align-items-center justify-content-center border border-0">
          <div className="row g-5 align-items-center">
            <div className="col-md-4">
              <img src={board1} className="board-img img-fluid rounded-start" alt="board" />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <div className="card-body text-center text-secondary">
                <h3 className="card-title fs-1">Uçak içi yükleme</h3>
                <p className="card-text fs-5">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis quis. Quae repellat modi voluptatum recusandae iure nesciunt aperiam necessitatibus blanditiis voluptatibus odio, beatae eligendi harum! Voluptas eum quia, veniam corrupti a quidem enim deserunt at corporis molestias. Eaque ab est, debitis possimus impedit velit reiciendis ipsam libero excepturi quos!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Kart */}
        <div className="card2 mb-5 p-5 d-flex align-items-center justify-content-center border border-0">
          <div className="row g-5 align-items-center">
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <div className="card-body text-center text-secondary">
                <h3 className="card-title fs-1">Uçak içi satış ve stok yönetimi</h3>
                <p className="card-text fs-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident debitis fugit nobis sit quisquam, atque similique rerum sequi soluta recusandae quae nihil, quod aperiam. Ab unde, dolor iusto quaerat reiciendis, sit quae mollitia cupiditate modi officia pariatur dignissimos vel nulla dicta corporis. Facere repellendus expedita totam pariatur, ad sunt vero.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={board2} className="board-img img-fluid rounded-end" alt="board" />
            </div>
          </div>
        </div>

        {/* 3. Kart */}
        <div className="card1 mb-5 p-5 d-flex align-items-center justify-content-center border border-0">
          <div className="row g-5 align-items-center">
            <div className="col-md-4">
              <img src={board3} className="board-img img-fluid rounded-start" alt="board" />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <div className="card-body text-center text-secondary">
                <h3 className="card-title fs-1">Uçuş sonrası muhasebe ve raporlama işlemi</h3>
                <p className="card-text fs-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos labore quasi quo ab ex aliquam voluptatum ducimus aliquid? Perspiciatis vero sapiente molestiae obcaecati voluptatibus accusamus modi tempora aliquam mollitia. Id incidunt fuga reprehenderit ut, dignissimos dolore laboriosam ex saepe beatae distinctio possimus deserunt quam consequatur, atque, corrupti sit aliquid minima!
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* REFERANSLARIMIZ */}

      <h2 className='text-center fw-bold fs-2 text-secondary'>By On Board Hizmeti Verdiğimiz İş Ortaklarımız:</h2>
      <div className='d-flex justify-content-center gap-5'>
      {board.map((b) => {
    const { id, image,title } = b;
    console.log(image);
    return (
      <Card key={id} className='boardrefe' style={{ width: '14rem' }}>
      <Card.Img variant="top" src={image} />
    
    </Card>
    
    );
  })}

      </div>
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
    </div>
  )
}

export default ByOnBoard;
