import Carousel from 'react-bootstrap/Carousel';
import {data} from "../helper/data";
import referans from "../helper/referans"
import { Card,Row,Col,Form, InputGroup, Button  } from 'react-bootstrap';
import { yazilim } from "../helper/data"
import { byon } from "../helper/data"
import ListGroup from 'react-bootstrap/ListGroup';


function Home() {
  return (
    <div>
      {/* SLAYT */}
      <Carousel>
    {data.map((item) => {
      const { image, id } = item;
      return (
        <Carousel.Item interval={10000} key={id} className='cr-home'>
          <video autoPlay muted loop controls className='h-video'>
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
      );
    })}
  </Carousel>




<Row className='by-yazi-container '>
        {/* BUY ON BOARD */}

        <Col className="byon-card">
  {byon.map((y) => {
    const { id, title, text, image } = y;
    return (
        <Card className="by-card-yapi" key={id} >
          <Card.Img src={image} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='by-card-tit'>{title}</Card.Title>
            <Card.Text className='card-tex'>
              {text}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
    );
  })}
      </Col>

{/* YAZILIM */}

      <Col className="yazilim-card">
  {yazilim.map((y) => {
    const { id, title, text, image } = y;
    return (
     
        <Card className="card-yapi col-lg-6" key={id}>
          <Card.Img src={image} alt="Card image" className='w-100 h-100' />
          <Card.ImgOverlay>
            <Card.Title className='card-tit'>{title}</Card.Title>
            <Card.Text className='card-text'>
              {text}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
    );
  })}
      </Col>

</Row>



      {/* REFERANS */}
      <div className='r-container'>
      <h1>REFERANSLARIMIZ</h1>

      <div className='referans '>
      {referans.map((a)=>{
        const {image, id}= a
        return(
          <div key={id} className='r-card' >
          <img src={image} alt="referans" className='referans-card ' />
          </div> 
        )
        })}
         </div>

      </div>

   
     <footer>
     <Row className='f-container'>
      <Col className='cözümler'>

      <Card.Body>
        <h3 className='text-decoration-none text-slate-500'>Çözümler</h3>
        <Card.Link  className='text-decoration-none  text-slate-500'  href="#">By On Board</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Mobil Uygulama</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">UI & UX</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Web Tasarım</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Web Yazılım</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">E-Ticaret</Card.Link> <br />
        <Card.Link   className='text-decoration-none text-slate-500' href="#">Dijital Pazarlama</Card.Link> <br />
      </Card.Body>
  
      </Col>

      <Col className='kurumsal'>
     
      
        <h3 className='text-decoration-none text-slate-500'>Kurumsal</h3>
        <Card.Body>
        <Card.Link className='text-decoration-none text-slate-500' href="#">Hakkımızda</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Başarılarımız</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Bizden kareler</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Ödüllerimiz</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Basında Biz</Card.Link> <br />
        <Card.Link  className='text-decoration-none text-slate-500'  href="#">Fuarlarımız</Card.Link>

        </Card.Body>
       
       
    

      

      </Col>
      <Col className='iletisimm'>
      <h3 className='text-decoration-none text-slate-500'>Bize Yazın</h3>
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

  <Button variant="danger" type="submit" className='i-button' >
    Gönder
  </Button>
</Form>


      </Col>
     </Row>




     
  <div className='fa'>
  <i className="fa-brands fa-instagram" />
  <i className="fa-brands fa-youtube" />
  <i className="fa-brands fa-facebook" />
  <i className="fa-brands fa-twitter" />
  </div>
</footer>



      


  </div>
 
 
  );
}

export default Home;

