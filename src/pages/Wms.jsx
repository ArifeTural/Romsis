import React from 'react'
import { Card, Container, Row, Col } from "react-bootstrap";

import wmsgiris from "../assets/wms-giris.jpg"
import wmshedef from "../assets/wms-hedefler.jpg"
import tablo from "../assets/wms-tablo.png"

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

      <div>
        <h1 className='wms-title'>WMS Depo Yönetim Sistemleri: Verimli ve Akıllı Depo Çözümleri</h1>
      </div>
      <img src={wmsgiris} alt="wmsgiris" className='w-100 p-3' />

    <div>
      <p className='wms-par'>"WMS Depo Yönetim Sistemleri ile uluslararası depolama alanınızı bir şehir mimarı gibi planlayarak adresleyin, tedarik zincirinizi ve tedarikçilerinizi anında kontrol edip değerlendirin. Doğru zamanda doğru ürünü müşterilerinize gönderirken, üretimden gelen girişlerinizi ve sevklerinizi zamanında ve kontrollü bir şekilde yönetin. Depolar arası sevkiyatlarınızı güvenli ve verimli hale getirirken, kullanıcı dostu ve kolay arayüzümüzle işlemlerinizi sorunsuzca gerçekleştirin. Ek ihtiyaçlarınıza göre özelleştirilmiş çözümler sunarak, iş süreçlerinizi optimize ediyoruz."</p>
    </div>

    <Container className="text-center">
    <h2 className='wms-title'>Nasıl Çalışıyoruz: Süreçlerimiz ve Yaklaşımımız</h2>
      <Row className='justify-content-center align-items-center'>
        <Col sm={12} md={4} className="mb-4">
          <img src={wmshedef} alt="hedefler" className="img-fluid rounded-pill" />
        </Col>
        <Col sm={12} md={8}>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} sm={12}  className="mb-4 ">
                <Card className='border-0'>
              
                    <Card.Text className='fs-5 text-secondary'>
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
  <h2 className='wms-title' >Romsis WMS, MRP DEPO ÇÖZÜM MODÜLLERİ</h2>
  
    <img src={tablo} alt="tablo" className='wms-tablo' />


</Container>






    </div>
  )
}

export default Wms