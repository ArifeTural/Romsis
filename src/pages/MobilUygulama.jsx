import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import girisTr from "../assets/mobil-giris.png"
import girisEn from "../assets/ingmobil.png"
import { mobilgif } from '../helper/data';
import { referans } from '../helper/referans';
import { useTranslation } from "react-i18next";
import "../css/web.css"

const MobilUygulama = () => {
  const { t, i18n } = useTranslation();
    const [openIos, setOpenIos] = useState(false);
    const [openAndroid, setOpenAndroid] = useState(false);
    const [openCrossPlatform, setOpenCrossPlatform] = useState(false);
    const [openWatch, setOpenWatch] = useState(false);
    const [openUiux, setOpenUiux] = useState(false);
    const selectedImage = i18n.language === 'en' ? girisEn : girisTr;
  

    return (
      <div>
        <Helmet>
          <title>Mobil Uygulama</title>
          <meta
            name="description"
            content="Mobil uygulama geliştirme hizmetleri: iOS, Android, çapraz platform uygulamaları, akıllı saat uygulamaları ve mobil arayüz tasarımları. Kullanıcı odaklı çözümler."
          />
          <meta name="keywords" content="mobil uygulama, iOS uygulama, Android uygulama, çapraz platform, akıllı saat uygulaması, UI UX mobil, mobil arayüz, mobil yazılım" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-03WTTC42DV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03WTTC42DV');
          `}
        </script>
        </Helmet>

  
        <section>
<Container className="first-img-text mt-5">
    <Row className="row-img-text d-flex flex-wrap justify-content-between text-center align-items-center">
        {/* Resim */}
        <Col md={6} className="d-flex justify-content-center">
            <img className="first-img" src={selectedImage} alt="Mobil uygulama resmi" />
        </Col>

        {/* Metin */}
        <Col md={6} className="first-text">
            <h2 className="fs-1">{t("mobil.baslik1")}</h2>
            <p className="first-par text-center text-secondary">
                {t("mobil.par")}
            </p>
        </Col>
    </Row>
</Container>
</section>

  
      
        <section className="py-5 ">
        <h2 className='hizmet-bas text-center mt-3'>{t("mobil.baslik2")}</h2>
        <Container>
  <Row className='d-flex flex-wrap justify-content-center'>
    <Col md={6} className="mb-4">
      <Card id="ios" style={{ opacity: openIos ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">{t("mobil.altbaslik1")}</Card.Title>
          <Card.Text className="fs-5">
          {t("mobil.text1")}
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenIos(!openIos)}
            aria-controls="ios-details"
            aria-expanded={openIos}
            variant="secondary"
          >
            {t("mobil.d")}
          </Button>
          <Collapse in={openIos}>
            <div id="ios-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>{t("mobil.dt")}</strong>{t("mobil.detay1")}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>

 
    <Col md={6} className="mb-4">
      <Card id="android" style={{ opacity: openAndroid ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center text-white">{t("mobil.altbaslik2")}</Card.Title>
          <Card.Text className="fs-5 text-white">
          {t("mobil.text2")}
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenAndroid(!openAndroid)}
            aria-controls="android-details"
            aria-expanded={openAndroid}
            variant="secondary"
          >
            {t("mobil.d")}
          </Button>
          <Collapse in={openAndroid}>
            <div id="android-details" className="mt-3">
              <Card.Text className="fs-5 text-white">
                <strong>{t("mobil.dt")}</strong>{t("mobil.detay2")}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>

    </Col>
    <Col md={6} className="mb-4">
      <Card id="cross-platform" style={{ opacity: openCrossPlatform ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">{t("mobil.altbaslik3")}</Card.Title>
          <Card.Text className="fs-5">
          {t("mobil.text3")}
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenCrossPlatform(!openCrossPlatform)}
            aria-controls="cross-platform-details"
            aria-expanded={openCrossPlatform}
            variant="secondary"
          >
            {t("mobil.d")}
          </Button>
          <Collapse in={openCrossPlatform}>
            <div id="cross-platform-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>{t("mobil.dt")}</strong> {t("mobil.detay3")}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card id="watch" style={{ opacity: openWatch ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">{t("mobil.altbaslik4")}</Card.Title>
          <Card.Text className="fs-5">
          {t("mobil.text4")}
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenWatch(!openWatch)}
            aria-controls="watch-details"
            aria-expanded={openWatch}
            variant="secondary"
          >
            {t("mobil.d")}
          </Button>
          <Collapse in={openWatch}>
            <div id="watch-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>{t("mobil.dt")}</strong> {t("mobil.detay4")}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card id="uiux" style={{ opacity: openUiux ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">{t("mobil.altbaslik5")}</Card.Title>
          <Card.Text className="fs-5">
          {t("mobil.text5")}
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenUiux(!openUiux)}
            aria-controls="uiux-details"
            aria-expanded={openUiux}
            variant="secondary"
          >
            {t("mobil.d")}
          </Button>
          <Collapse in={openUiux}>
            <div id="uiux-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>{t("mobil.dt")}</strong> {t("mobil.detay5")}
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


        </section>

        <Row className='d-flex flex-wrap justify-content-center align-items-center gap-3  w-100'>
      <Col>
        <h2 className="hizmet-bas text-center">{t("mobil.baslik3")}</h2>
        <div className='referans'>
{referans.map((arife)=>{
  const {id, image} = arife
  return(
    <div className="referans-card wms-ref" style={{ width: "5rem" }} key={id}>
  <img src={image} className="card-img-top" alt="..." />

</div>

  )
})}

</div>
      </Col>

      <Col className='videomobil'>
      {mobilgif.map((inItem) => {
  const { id, video } = inItem; 

  return (
    <div className="videomobil  text-center" key={id}>
    <video autoPlay muted loop controls
        height="400" >
       <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    </div>
  );
})}
        
      </Col>
     


  

    </Row>


      </div>
    );
};

export default MobilUygulama;




