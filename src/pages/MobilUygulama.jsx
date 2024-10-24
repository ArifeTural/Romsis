import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import giris from "../assets/mobil-giris.png"
import { mobilgif } from '../helper/data';
import { referans } from '../helper/referans';

const MobilUygulama = () => {
    const [openIos, setOpenIos] = useState(false);
    const [openAndroid, setOpenAndroid] = useState(false);
    const [openCrossPlatform, setOpenCrossPlatform] = useState(false);
    const [openWatch, setOpenWatch] = useState(false);
    const [openUiux, setOpenUiux] = useState(false);
  
    return (
      <div>
        <Helmet>
          <title>Mobil Uygulama</title>
          <meta
            name="description"
            content="Mobil uygulama geliştirme hizmetleri: iOS, Android, çapraz platform uygulamaları, akıllı saat uygulamaları ve mobil arayüz tasarımları. Kullanıcı odaklı çözümler."
          />
          <meta name="keywords" content="mobil uygulama, iOS uygulama, Android uygulama, çapraz platform, akıllı saat uygulaması, UI UX mobil, mobil arayüz, mobil yazılım" />
        </Helmet>

  
       
        <section className="first-img-text">
  <Container>
    <Row className="d-flex flex-wrap justify-content-between text-center align-items-center">
      {/* Resim */}
      <Col md={6} className="d-flex justify-content-center">
        <img className='first-img' src={giris} alt="Mobil uygulama resmi" />
      </Col>

      {/* Metin */}
      <Col md={6} className="first-text">
        <h2 className='fs-1'>Geleceğin Mobil Uygulamaları</h2>
        <p className='fs-4 text-center text-secondary'>
          "Hem iOS hem de Android platformlarında mükemmel performans gösteren, kullanıcı dostu ve yenilikçi mobil uygulamalar geliştiriyoruz. Modern teknolojileri kullanarak, her iki platformda da yüksek verimlilikle çalışan ve kullanıcı deneyimini ön planda tutan çözümler sunuyoruz. Amacımız, müşterilerimizin ihtiyaçlarına tam anlamıyla yanıt veren, etkileyici ve işlevsel uygulamalar oluşturmaktır.
        </p>
      </Col>
    </Row>
  </Container>
</section>

  
      
        <section className="py-5">
        <h2 className='hizmet-bas text-center'> Hizmetlerimiz:</h2>
        <Container>
  <Row className='d-flex flex-wrap justify-content-center'>
    <Col md={6} className="mb-4">
      <Card id="ios" style={{ opacity: openIos ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">iOS Mobil Uygulama Hizmetleri</Card.Title>
          <Card.Text className="fs-5">
            Apple'ın App Store standartlarına uygun, kullanıcı odaklı ve yüksek performanslı iOS uygulamaları geliştiriyoruz.
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenIos(!openIos)}
            aria-controls="ios-details"
            aria-expanded={openIos}
            variant="secondary"
          >
            Detaylar
          </Button>
          <Collapse in={openIos}>
            <div id="ios-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>Detaylı Bilgi:</strong> iOS uygulama geliştirme sürecimizde, kullanıcı deneyimi ön planda tutulur. <br />
                Swift ve Objective-C dillerinde uzman ekibimiz, performansı yüksek, güvenli ve etkili uygulamalar üretir.
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>

 
    <Col md={6} className="mb-4">
      <Card id="android" style={{ opacity: openAndroid ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center text-white">Android Mobil Uygulama Hizmetleri</Card.Title>
          <Card.Text className="fs-5 text-white">
            Android cihazlar için genişletilebilir, ölçeklenebilir ve güvenli uygulamalar sunuyoruz.
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenAndroid(!openAndroid)}
            aria-controls="android-details"
            aria-expanded={openAndroid}
            variant="secondary"
          >
            Detaylar
          </Button>
          <Collapse in={openAndroid}>
            <div id="android-details" className="mt-3">
              <Card.Text className="fs-5 text-white">
                <strong>Detaylı Bilgi:</strong> Android uygulamaları, Java ve Kotlin ile geliştirilmektedir. Uygulamalarımız geniş bir cihaz yelpazesinde sorunsuz çalışır ve Google Play Store standartlarına uygun olarak tasarlanır.
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card id="cross-platform" style={{ opacity: openCrossPlatform ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">Çapraz Platform Uygulama Hizmetleri</Card.Title>
          <Card.Text className="fs-5">
            Tek bir kod tabanı ile hem iOS hem Android cihazlarda mükemmel performans gösteren uygulamalar oluşturuyoruz.
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenCrossPlatform(!openCrossPlatform)}
            aria-controls="cross-platform-details"
            aria-expanded={openCrossPlatform}
            variant="secondary"
          >
            Detaylar
          </Button>
          <Collapse in={openCrossPlatform}>
            <div id="cross-platform-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>Detaylı Bilgi:</strong> React Native ve Flutter gibi teknolojilerle çapraz platform uygulamaları geliştiriyoruz. Bu sayede, tek bir kod tabanı ile hem iOS hem Android cihazlarda mükemmel performans elde edersiniz.
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card id="watch" style={{ opacity: openWatch ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">Akıllı Saat Uygulama Sistemleri</Card.Title>
          <Card.Text className="fs-5">
            Akıllı saatlerde kullanıcı deneyimini ön planda tutan modern ve yenilikçi uygulamalar geliştiriyoruz.
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenWatch(!openWatch)}
            aria-controls="watch-details"
            aria-expanded={openWatch}
            variant="secondary"
          >
            Detaylar
          </Button>
          <Collapse in={openWatch}>
            <div id="watch-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>Detaylı Bilgi:</strong> Akıllı saat uygulamalarında, kullanıcı dostu arayüzler ve enerji verimliliği ön plandadır. <br />
                Giyilebilir teknolojiler için optimize edilmiş uygulamalar geliştiriyoruz ve sunuyoruz.
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card id="uiux" style={{ opacity: openUiux ? 1 : 0.7 }}>
        <Card.Body>
          <Card.Title className="fs-3 text-center">Mobil Sistem & Arayüz Geliştirme</Card.Title>
          <Card.Text className="fs-5">
            Mobil arayüzlerinizi modern ve kullanıcı dostu tasarımlarla güçlendiriyoruz.
          </Card.Text>
          <Button
          className=" buton-detaylar"
            onClick={() => setOpenUiux(!openUiux)}
            aria-controls="uiux-details"
            aria-expanded={openUiux}
            variant="secondary"
          >
            Detaylar
          </Button>
          <Collapse in={openUiux}>
            <div id="uiux-details" className="mt-3">
              <Card.Text className="fs-5">
                <strong>Detaylı Bilgi:</strong> Mobil uygulamalarda arayüz tasarımı, kullanıcıların uygulamayı etkili bir şekilde kullanabilmesi için son derece önemlidir. Tasarımlarımız kullanıcıların talepleri doğrultusunda hazırlanmıştır ve deneyimi odaklıdır.
              </Card.Text>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


        </section>

        <Row className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
      <Col>
        <h2 className="hizmet-bas text-center">Yaptığımız İşler:</h2>
        <div className='referans'>
{referans.map((arife)=>{
  const {id, image} = arife
  return(
    <div className="referans-card" style={{ width: "5rem" }} key={id}>
  <img src={image} className="card-img-top" alt="..." />

</div>

  )
})}

</div>
      </Col>

      <Col>
      {mobilgif.map((inItem) => {
  const { id, video } = inItem; 

  return (
    <div className="video-container text-center" key={id}>
    <video autoPlay muted loop controls
        height="500" >
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

