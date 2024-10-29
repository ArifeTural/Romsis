import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../css/web.css"
import yalin from "../assets/istockphoto-85406187-1024x1024.jpg"
import { yalinuretim } from '../helper/data';

function Yalin() {

  const [showExamples, setShowExamples] = useState({});

  const toggleExample = (index) => {
    setShowExamples((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Helmet>
        <title>Yalın Üretim - Verimlilik ve Süreç İyileştirme</title>
        <meta name="description" content="Yalın üretim süreçleri ile üretim verimliliğinizi artırın. Eksik süreçleri tamamlayın, gereksiz süreçleri kaldırın." />
      </Helmet>
      <div className='w-100 d-flex justify-content-center'>
      <img style={{width:"90%", maxHeight: "80vh"}} src={yalin} alt="" />
      </div>
 
      <Container className="">
      
        <h1 className="yalin-baslik text-center mb-4">Yalın Üretim</h1>
        <p className=" yalin-par text-center mb-5">
          Yalın üretim, israfı minimize ederek, değer yaratmaya odaklanan bir üretim felsefesidir. Hedefimiz, üretim süreçlerini optimize ederek işletmenizin verimliliğini artırmaktır.
        </p>
        <Row className='yalin-cont'>
          {yalinuretim.map((item, index) => (
            <Col sm={12} md={6} key={index}>
              <Card className="mb-3 shadow-lg border-0 text-center">
                <Card.Body>
                  <Card.Title className='fs-3 fw-bold'>{item.title}</Card.Title>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                  <Button variant="primary" onClick={() => toggleExample(index)}>
                    {showExamples[index] ? "Örneği Kapat" : "Örneği Aç"}
                  </Button>
                  {showExamples[index] && (
                    <div className="mt-2">
                      <strong>{item.example}</strong>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Yalin;












