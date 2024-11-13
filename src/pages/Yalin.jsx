import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../css/web.css"
import yalin from "../assets/yalin.jpg"
import mrp from "../assets/mrp.jpg"
import mrp2 from "../assets/liste.jpg"
import { useTranslation } from "react-i18next";

function Yalin() {
  const { t } = useTranslation();

  const [showExamples, setShowExamples] = useState({});

  const toggleExample = (index) => {
    setShowExamples((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const yalinuretim=[ 
    {
      title:t("yalin.tit1"),
      text:t("yalin.text1"),
      example:t("yalin.ex1"),
    },
    {
      title:t("yalin.tit2"),
      text: t("yalin.text2"),
      example:t("yalin.ex2"),
    },
    {
      title: t("yalin.tit3"),
      text: t("yalin.text3"),
      example:t("yalin.ex3"),
    },
    {
      title:t("yalin.tit4"),
      text:t("yalin.text4"),
      example:t("yalin.ex4"),
    },
    {
      title:t("yalin.tit5"),
      text:t("yalin.text5"),
      example:t("yalin.ex5"),
    },
    {
      title:t("yalin.tit6"),
      text:t("yalin.text6"),
      example:t("yalin.ex6"),
  
  
    }
  ]

  return (
    <>
      <Helmet>
        <title>Yalın Üretim - Verimlilik ve Süreç İyileştirme</title>
        <meta name="description" content="Yalın üretim süreçleri ile üretim verimliliğinizi artırın. Eksik süreçleri tamamlayın, gereksiz süreçleri kaldırın." />
      </Helmet>
      
      <Row className='p-5 w-100 d-flex flex-wrap align-items-center justify-content-center '>
      <Col sm={12} lg={6} className='text-center'>
      <img className='yaling-img' src={yalin} alt="" />
      </Col>
      <Col sm={12} lg={6}>
      <h1 className="yalin-baslik text-center mb-4 mt-5">{t("yalin.baslik1")}</h1>
        <p className=" yalin-par text-center mb-5">
        {t("yalin.par1")}
        </p>

      </Col>
      
      </Row>
 
      <Container className="">
      
     
        <Row className='yalin-cont'>
          {yalinuretim.map((item, index) => (
            <Col sm={12} md={6} key={index}>
              <Card className="mb-3 shadow-lg border-0 text-center yalin-kart">
                <Card.Body>
                  <Card.Title className='fs-3 fw-bold text-secondary'>{item.title}</Card.Title>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                  <Button className='yalin-but' variant="primary" onClick={() => toggleExample(index)}>
                    {showExamples[index] ? t("yalin.kapat") :  t("yalin.ornek") }
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

        <div>
        <div>
          <h2 className='m-5 yalin-baslik text-center'>{t("yalin.baslik2")}</h2>
        </div>
         <Row className='d-flex flex-wrap justify-content-between align-items-center'>
          <Col sm={12} md={6} >
            <img className='w-100' src={mrp} alt="" />
          </Col>
          <Col sm={12} md={6} className=''> 
          <p className='mrp-par'>{t("yalin.par2")}</p>
          </Col>
          <Col sm={12} md={8} className='mt-5'>
          <h2 className='mrp-altbaslik'>{t("yalin.altbaslik")}</h2>
          <ul className='mrp-list'>
            <li><span>{t("yalin.span1")}</span>{t("yalin.liste1")}</li>
            <li><span>{t("yalin.span2")}</span>{t("yalin.liste2")}</li>
            <li><span>{t("yalin.span3")}</span> {t("yalin.liste3")}</li>
          </ul>
            
          </Col>
          <Col sm={12} md={4}>
          <img className=' mrpikiimg w-100' src={mrp2} alt="" />
          </Col>
         </Row>
        </div>
      </Container>
    </>
  );
}

export default Yalin;












