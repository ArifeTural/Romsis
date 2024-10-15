import React from 'react'
import web from "../assets/webtasarım.jpg"
import "../css/web.css"
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import { tekno, teknoloji, webtasarim } from '../helper/yazilim';



const WebTasarım = () => {
  return (
    <div>
    <div className='w-100 d-flex justify-content-center'>
    <img src={web} alt="" className='web-tasarim-img'  />
    </div>
    <div className='web-tas-giris m-5 p-5 text-center'>
      <h4 className='fs-2'>İnternet dünyasında markanızın güçlü bir izlenim bırakmasını sağlayacak bir web sitesi tasarlamak, uzmanlık ve stratejik bir süreç gerektirir. Romsis olarak, işletmenizin ihtiyaçlarına ve hedef kitlenizin beklentilerine uygun, modern ve etkileyici web siteleri tasarlıyoruz.</h4>
    </div>
    <div className='web-tas-surec-title m-5 pt-4'>
      <h2 className='fs-1'>Web sitenizi tasarlarken izleyeceğimiz süreç:</h2>
    </div>
    <div className='web-tas-surec d-flex flex-wrap gap-5 justify-content-center '>
  {webtasarim.map((tasarim) => {
    const { id, text, text2, title, li1, li2, li3, li4 } = tasarim;
    return (
      <Card style={{ width: '19rem' }} key={id} className=' web-tas-surec border-0'>
        <Card.Body>
          <Card.Title className='fs-1'>{id}.</Card.Title>
          <Card.Title className="mb-2  fs-2">{title}</Card.Title>
          <Card.Text className=''>{text}</Card.Text>

          <ul>
            {li1 && <li>{li1}</li>}
            {li2 && <li>{li2}</li>}
            {li3 && <li>{li3}</li>}
            {li4 && <li>{li4}</li>}
          </ul>

          <Card.Text className=''>{text2}</Card.Text>
        </Card.Body>
      </Card>
    );
  })}
</div>
 <div >
 <div className='web-tas-surec-title m-5'>
      <h2 className='fs-1'>Hangi Teknolojileri Kullanıyoruz:</h2>
    </div>
    <div className='web-teknoloji-container d-flex justify-content-center'>
    <Carousel className="carousel-custom">
  {tekno.map((tech) => (
    <Carousel.Item key={tech.id} className="carousel-item-custom">
      <div className="d-flex justify-content-center ">
        <img
          className="d-block"
          src={tech.image}
          alt={tech.title}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
      </div>
      <div className="card border-5 p-4 text-center mt-2">
        <h3 className='fs-1 fw-bold'>{tech.title}</h3>
        <p className='fs-5'>{tech.description}</p>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
    </div>
 </div>
    <div className='d-flex flex-wrap gap-5 justify-content-center' >
    {teknoloji.map((tekno)=>{
      const {id, image} = tekno
      return(
        <Card style={{ width: '5rem' }} key={id} className='border-0' >
      <Card.Img variant="top" src={image} />
   
    </Card>

      )
    })}


</div>

   






    </div>
  )
}

export default WebTasarım