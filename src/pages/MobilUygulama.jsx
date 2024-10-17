import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { Helmet } from 'react-helmet'; // Meta bilgileri için ekleme

const MobilUygulama = () => {
    const [openIos, setOpenIos] = useState(false);
    const [openAndroid, setOpenAndroid] = useState(false);
    const [openCrossPlatform, setOpenCrossPlatform] = useState(false);
    const [openWatch, setOpenWatch] = useState(false);
    const [openUiux, setOpenUiux] = useState(false);
  
    return (
      <div>
        <Helmet>
          <title>Mobil Uygulama Hizmetleri | iOS, Android, Çapraz Platform ve Daha Fazlası</title>
          <meta
            name="description"
            content="Mobil uygulama geliştirme hizmetleri: iOS, Android, çapraz platform uygulamaları, akıllı saat uygulamaları ve mobil arayüz tasarımları. Kullanıcı odaklı çözümler."
          />
          <meta name="keywords" content="mobil uygulama, iOS uygulama, Android uygulama, çapraz platform, akıllı saat uygulaması, UI UX mobil, mobil arayüz, mobil yazılım" />
        </Helmet>

        <header >
          <Container  className="mobil-giris-cont" >
            <Row className='mobil-giris-row' >
              <Col >
                <h1 className='mobil-giris-cont-bas text-center'>Mobil Uygulama Hizmetleri</h1>
              </Col>
              {/* <Col className="d-flex justify-content-end">
                <nav className='d-flex flex-column gap-1 text-center '>
                  <a href="#ios" className="mobil-giris-nav">iOS Uygulama</a>
                  <a href="#android" className="mobil-giris-nav">Android Uygulama</a>
                  <a href="#cross-platform" className="mobil-giris-nav">Çapraz Platform</a>
                  <a href="#watch" className="mobil-giris-nav">Akıllı Saat</a>
                  <a href="#uiux" className="mobil-giris-nav">Mobil Sistemler & Arayüz</a>
                </nav>
              </Col> */}
            </Row>
          </Container>
        </header>
  
       
        <section className="first-img-text">

        <Container>
          <img src="" alt="" />
        </Container>
          <Container className='first-text'>
            <h2 className='fs-1'>Geleceğin Mobil Uygulamaları</h2>
            <p className='fs-4 text-center text-secondary'>
              Hem iOS hem Android platformlarında mükemmel performans gösteren,
              kullanıcı dostu ve yenilikçi mobil uygulamalar geliştiriyoruz.
            </p>
          </Container>
        </section>
  
      
        <section className="py-5">
          <Container>
            <Row className='d-flex flex-wrap justify-content-center' >
              <Col id="ios" md={6} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="fs-3 text-center">iOS Mobil Uygulama Hizmetleri</Card.Title>
                    <Card.Text className="fs-5">
                      Apple'ın App Store standartlarına uygun, kullanıcı odaklı ve yüksek performanslı iOS uygulamaları geliştiriyoruz.
                    </Card.Text>
                    <Button
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
                          <strong>Detaylı Bilgi:</strong> iOS uygulama geliştirme sürecimizde, kullanıcı deneyimi ön planda
                          tutulur. Swift ve Objective-C dillerinde uzman ekibimiz, performansı yüksek, güvenli ve etkili uygulamalar üretir.
                        </Card.Text>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="android" md={6} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="fs-3 text-center">Android Mobil Uygulama Hizmetleri</Card.Title>
                    <Card.Text className="fs-5">
                      Android cihazlar için genişletilebilir, ölçeklenebilir ve güvenli uygulamalar sunuyoruz.
                    </Card.Text>
                    <Button
                      onClick={() => setOpenAndroid(!openAndroid)}
                      aria-controls="android-details"
                      aria-expanded={openAndroid}
                      variant="secondary"
                    >
                      Detaylar
                    </Button>
                    <Collapse in={openAndroid}>
                      <div id="android-details" className="mt-3">
                        <Card.Text className="fs-5">
                          <strong>Detaylı Bilgi:</strong> Android uygulamaları, Java ve Kotlin ile geliştirilmektedir. Uygulamalarımız geniş bir cihaz yelpazesinde sorunsuz çalışır ve Google Play Store standartlarına uygun olarak tasarlanır.
                        </Card.Text>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="cross-platform" md={6} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="fs-3 text-center">Çapraz Platform Uygulama Hizmetleri</Card.Title>
                    <Card.Text className="fs-5">
                      Tek bir kod tabanı ile hem iOS hem Android cihazlarda mükemmel performans gösteren uygulamalar oluşturuyoruz.
                    </Card.Text>
                    <Button
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
              <Col id="watch" md={6} className="mb-4">
             <Card>
                  <Card.Body>
                    <Card.Title className="fs-3 text-center">Akıllı Saat Uygulama Sistemleri</Card.Title>
                    <Card.Text className="fs-5">
                      Akıllı saatlerde kullanıcı deneyimini ön planda tutan modern ve yenilikçi uygulamalar geliştiriyoruz.
                    </Card.Text>
                    <Button
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
                          <strong>Detaylı Bilgi:</strong> Akıllı saat uygulamalarında, kullanıcı dostu arayüzler ve enerji verimliliği ön plandadır. Giyilebilir teknolojiler için optimize edilmiş uygulamalar sunuyoruz.
                        </Card.Text>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
  
     
              <Col id="uiux" md={6} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="fs-3 text-center">Mobil Sistem & Arayüz Geliştirme</Card.Title>
                    <Card.Text>
                      Mobil arayüzlerinizi modern ve kullanıcı dostu tasarımlarla güçlendiriyoruz.
                    </Card.Text>
                    <Button 
                      onClick={() => setOpenUiux(!openUiux)}
                      aria-controls="uiux-details"
                      aria-expanded={openUiux}
                      variant="secondary"
                    >
                      Detaylar
                    </Button>
                    <Collapse in={openUiux}>
                      <div id="uiux-details" className="mt-3">
                        <Card.Text>
                          <strong>Detaylı Bilgi:</strong> Mobil uygulamalarda arayüz tasarımı, kullanıcıların uygulamayı etkili bir şekilde kullanabilmesi için son derece önemlidir. Tasarımlarımız kullanıcı deneyimi odaklıdır.
                        </Card.Text>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <div>
        <div>
        <h2 className='text-center'>
Yaptığımız İşler
        </h2>
        </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
};

export default MobilUygulama;

