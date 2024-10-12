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




{/* <Row className='by-yazi-container '>
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

</Row> */}



      {/* REFERANS */}
      {/* <div className='r-container'>
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

      </div> */}




      


  </div>
 
 
  );
}

export default Home;

