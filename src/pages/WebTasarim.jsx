import React from 'react'
import web from "../assets/webtasarım.jpg"
import "../css/web.css"
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import { tekno, webtasarim } from '../helper/yazilim';



const WebTasarım = () => {
  return (
    <div>
    <div>
      <img src={web} alt=""  />
    </div>
    <div className='web-tas-giris'>
      <h4>İnternet dünyasında markanızın güçlü bir izlenim bırakmasını sağlayacak bir web sitesi tasarlamak, uzmanlık ve stratejik bir süreç gerektirir. Romsis olarak, işletmenizin ihtiyaçlarına ve hedef kitlenizin beklentilerine uygun, modern ve etkileyici web siteleri tasarlıyoruz.</h4>
    </div>
    <div className='web-tas-surec-title'>
      <h2>Web sitenizi tasarlarken izleyeceğimiz süreç:</h2>
    </div>
    <div className='web-tas-surec d-flex flex-wrap gap-5 justify-content-center'>
  {webtasarim.map((tasarim) => {
    const { id, text, text2, title, li1, li2, li3, li4 } = tasarim;
    return (
      <Card style={{ width: '19rem' }} key={id}>
        <Card.Body>
          <Card.Title>{id}.</Card.Title>
          <Card.Title className="mb-2 text-muted">{title}</Card.Title>
          <Card.Text>{text}</Card.Text>

          <ul>
            {li1 && <li>{li1}</li>}
            {li2 && <li>{li2}</li>}
            {li3 && <li>{li3}</li>}
            {li4 && <li>{li4}</li>}
          </ul>

          <Card.Text>{text2}</Card.Text>
        </Card.Body>
      </Card>
    );
  })}
</div>
    <div className='web-tas-surec-title'>
      <h2>Hangi Teknolojileri Kullanıyoruz</h2>
    </div>
    <div>
    <Carousel>
      {tekno.map((tech) => (
        <Carousel.Item key={tech.id}>
       
          <div className="card p-4 text-center">
          <img src="" alt="" />
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    </div>

   






    </div>
  )
}

export default WebTasarım