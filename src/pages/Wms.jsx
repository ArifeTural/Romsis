import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { referanswms } from '../helper/referans';
import wmsgiris from "../assets/wms-giris.jpg";
import wmshedef from "../assets/wms-hedefler.jpg";
import tablo from "../assets/wms-tablo.png";

const Wms = () => {
  const features = [
    "Kullanıcı dostu bir arayüz tasarlanması",
    "Kullanıcılara uygun görüntülenmek üzere web sitesinin oluşturulması",
    "Android ve IOS tabanlı mobil uygulamanın oluşturulması",
    "Müşteri istek ve önerilerinin test edilebileceği bir ön dizinleme sisteminin geliştirilmesi",
    "Müşteri geri bildirim ve ek istek tekliflerinin onay süreçlerinin takibi ve sonucun bildirimi",
    "Kişiselleştirilebilir bir yazılım olması",
    "Faturalandırma ve ödeme sistemlerinin geliştirilmesi ve takibi",
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
        <h1 className='wms-title'>WMS Depo Yönetim Sistemleri: Verimli ve Akıllı Depo Çözümleri</h1>
      </div>
      <img src={wmsgiris} alt="WMS Giriş" className='wmsgimg w-100 p-3' />

      <div>
        <p className='wms-par'>
          "WMS Depo Yönetim Sistemleri ile uluslararası depolama alanınızı bir şehir mimarı gibi planlayarak adresleyin, tedarik zincirinizi ve tedarikçilerinizi anında kontrol edip değerlendirin. Doğru zamanda doğru ürünü müşterilerinize gönderirken, üretimden gelen girişlerinizi ve sevklerinizi zamanında ve kontrollü bir şekilde yönetin. Depolar arası sevkiyatlarınızı güvenli ve verimli hale getirirken, kullanıcı dostu ve kolay arayüzümüzle işlemlerinizi sorunsuzca gerçekleştirin. Ek ihtiyaçlarınıza göre özelleştirilmiş çözümler sunarak, iş süreçlerinizi optimize ediyoruz."
        </p>
      </div>

      <Container className="text-center">
        <h2 className='wms-title'>Nasıl Çalışıyoruz: Süreçlerimiz ve Yaklaşımımız</h2>
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
        <h2 className='wms-title'>Romsis WMS, MRP Depo Çözüm Modülleri</h2>
        <img src={tablo} alt="Tablo" className='wms-tablo' />
      </Container>

      <div className='text-center'>
        <h2>
          <a href="" className='h-refe font-monospace fw-bolder fs-1 text-secondary'>
            İş Ortaklarımız
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
