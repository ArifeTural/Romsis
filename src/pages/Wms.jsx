import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { referanswms } from '../helper/referans';
import wmsgiris from "../assets/wms-giris.jpg";
import wmshedef from "../assets/wms-hedefler.jpg";
import tablo from "../assets/wms-tablo.png";
import { useTranslation } from "react-i18next";


const Wms = () => {
 
  const { t } = useTranslation();

  const features = [
    t("wms.liste1"),
    t("wms.liste2"),
    t("wms.liste3"),
    t("wms.liste4"),
    t("wms.liste5"),
    t("wms.liste6"),
    t("wms.liste7"),
  ];

  return (
    <div>
      <Helmet>
        <title>Romsis WMS - Depo Yönetim Sistemleri</title>
        <meta name="description" content="WMS Depo Yönetim Sistemleri ile uluslararası depolama süreçlerinizi optimize edin, müşteri ihtiyaçlarına göre özelleştirilebilir çözümler sunun." />
        <meta name="keywords" content="WMS, Depo Yönetimi, Romsis, Akıllı Depo Çözümleri, Depo Sevkiyatı, Depo Yönetim Yazılımı" />
        <meta name="author" content="Romsis" />
        <link rel="canonical" href="https://www.romsis.com.tr/dashboard/ozelYazilim/Wms" />
      </Helmet>

      <div>
        <h1 className='wms-title'>{t("wms.baslik1")}</h1>
      </div>
      <img src={wmsgiris} alt="WMS Giriş" className='wmsgimg w-100 p-3' />

      <div>
        <p className='wms-par'>
        {t("wms.par")}
        </p>
      </div>

      <Container className="text-center">
        <h2 className='wms-title'>{t("wms.baslik2")}</h2>
        <Row className='justify-content-center align-items-center'>
          <Col sm={12} md={4} className="mb-4">
            <img src={wmshedef} alt="Hedefler" className="wmshedefimg img-fluid rounded-pill" />
          </Col>
          <Col sm={12} md={8}>
            <Row>
              {features.map((feature, index) => (
                <Col key={index} sm={12} className="mb-4">
                  <Card className='border-0'>
                    <Card.Text className=' text-secondary fw-bold hedeftext'>
                      {index + 1}. {feature}
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className='wms-title'>{t("wms.baslik3")}</h2>
        <img src={tablo} alt="Tablo" className='wms-tablo' />
      </Container>

      <div className='text-center'>
        <h2>
          <a href="" className='h-refe font-monospace fw-bolder fs-1 text-secondary'>
          {t("giris.baslik3")}
          </a>
        </h2>
      </div>
      <div className='referans'>
        {referanswms.map((arife) => {
          const { id, image } = arife;
          return (
            <div className="referans-card wms-ref" style={{ width: "5rem" }} key={id}>
              <img src={image} className="card-img-top" alt="Referans" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wms;
