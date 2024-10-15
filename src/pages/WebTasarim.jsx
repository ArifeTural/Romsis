import React from 'react'
import web from "../assets/webtasarım.jpg"
import "../css/web.css"
import Card from 'react-bootstrap/Card';


const WebTasarım = () => {
  return (
    <div>
    <div>
      <img src={web} alt=""  />
    </div>
    <div className='web-tas-giris'>
      <h4>İnternet dünyasında markanızın güçlü bir izlenim bırakmasını sağlayacak bir web sitesi tasarlamak, uzmanlık ve stratejik bir süreç gerektirir. Romsis olarak, işletmenizin ihtiyaçlarına ve hedef kitlenizin beklentilerine uygun, modern ve etkileyici web siteleri tasarlıyoruz.</h4>
    </div>
    <div>
      <h2>Web sitenizi tasarlarken izleyeceğimiz süreç:</h2>
    </div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>




    </div>
  )
}

export default WebTasarım