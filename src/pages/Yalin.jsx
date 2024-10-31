import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../css/web.css"
import yalin from "../assets/istockphoto-85406187-1024x1024.jpg"
import { yalinuretim } from '../helper/data';
import mrp from "../assets/istockphoto-1477516505-1024x1024.jpg"
import mrp2 from "../assets/liste.jpg"

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
      <Row className='p-5 w-100 d-flex flex-wrap align-items-center justify-content-center '>
      <Col sm={12} lg={6} className='text-center'>
      <img className='yaling-img' src={yalin} alt="" />
      </Col>
      <Col sm={12} lg={6}>
      <h1 className="yalin-baslik text-center mb-4 mt-5">Yalın Üretim</h1>
        <p className=" yalin-par text-center mb-5">
          Yalın üretim, israfı minimize ederek, değer yaratmaya odaklanan bir üretim felsefesidir. Hedefimiz, üretim süreçlerini optimize ederek işletmenizin verimliliğini artırmaktır.
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

        <div>
        <div>
          <h2 className='m-5 yalin-baslik text-center'>MRP(Malzeme İhtiyaç Planlaması)</h2>
        </div>
         <Row className='d-flex flex-wrap justify-content-between align-items-center'>
          <Col sm={12} md={6} >
            <img className='w-100' src={mrp} alt="" />
          </Col>
          <Col sm={12} md={6} className=''> 
          <p className='mrp-par'>Malzeme İhtiyaç Planlaması (MRP - Material Requirements Planning), bir işletmenin üretim sürecinde ihtiyaç duyduğu malzemeleri planlamak ve doğru zamanda tedarik etmek için kullanılan bir yöntemdir. MRP sistemi, talep edilen ürün miktarına ve üretim planına bağlı olarak, gerekli hammadde ve bileşen miktarını belirleyerek stok ve tedarik sürecini optimize etmeyi hedefler. Bu sayede, işletmeler üretim için ihtiyaç duyulan malzemeleri fazla ya da eksik tedarik etme riskini azaltarak maliyetlerini kontrol altına alabilir ve üretim sürekliliğini sağlar.</p>
          </Col>
          <Col sm={12} md={8} className='mt-5'>
          <h2 className='mrp-altbaslik'>MRP sistemi şu üç temel unsura dayanır:</h2>
          <ul className='mrp-list'>
            <li><span>1.Ürün Ağacı (BOM - Bill of Materials): </span>Üretilecek ürünlerin hangi malzemelerden oluştuğunu gösteren bir listedir. Bu liste, ürünlerin tüm bileşenlerini ve alt bileşenlerini içerir.</li>
            <li><span>2.Ana Üretim Programı (MPS - Master Production Schedule):</span> Üretilmesi planlanan ürünlerin miktar ve üretim zamanlamasını gösterir. Bu program, müşteri taleplerine ve işletmenin üretim kapasitesine göre belirlenir.</li>
            <li><span>3.Stok Durumu:</span>  Mevcut stok seviyeleri, sipariş durumları ve bekleme süreleri hakkında bilgi içerir. Stok durumları dikkate alınarak, ihtiyaç duyulan malzemeler zamanında sipariş edilir.</li>
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












