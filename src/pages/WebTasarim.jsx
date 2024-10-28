import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';

function WebTasarim() {
  const [open, setOpen] = useState({}); 

  const toggleExample = (title) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [title]: !prevOpen[title],
    }));
  };

  return (
    <>
      <Helmet>
        <title>Yalın Üretim - Verimlilik ve Süreç İyileştirme</title>
        <meta name="description" content="Yalın üretim süreçleri ile üretim verimliliğinizi artırın. Eksik süreçleri tamamlayın, gereksiz süreçleri kaldırın." />
      </Helmet>
      <Container className="mt-5 cont-yalin border border-danger">
        <h1 className="text-center mb-4">Yalın Üretim</h1>
        <p className="text-center mb-5">
          Yalın üretim, israfı minimize ederek, değer yaratmaya odaklanan bir üretim felsefesidir. Hedefimiz, üretim süreçlerini optimize ederek işletmenizin verimliliğini artırmaktır.
        </p>
        <Row >
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body >
                <Card.Title>Uçtan Uca Üretim Proses Analizi</Card.Title>
                <Card.Text>
                  Üretim yapan müşterilerimizin tüm üretim süreçlerini baştan sona analiz ediyoruz.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("Uçtan Uca Üretim Proses Analizi")}
                  aria-controls="example-collapse-Uçtan-Uca-Üretim-Proses-Analizi"
                  aria-expanded={open["Uçtan Uca Üretim Proses Analizi"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["Uçtan Uca Üretim Proses Analizi"]}>
                  <div id="example-collapse-Uçtan-Uca-Üretim-Proses-Analizi">
                    <strong>Örnek:</strong> Bir otomotiv üreticisi için, montaj hattındaki her adımı gözden geçirerek zaman kayıplarını ve darboğazları belirliyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm  yalin-card">
              <Card.Body>
                <Card.Title>Eksik Süreçlerin Tamamlanması</Card.Title>
                <Card.Text>
                  Eksik süreçleri tamamlayarak üretimdeki aksaklıkları gideriyoruz.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("Eksik Süreçlerin Tamamlanması")}
                  aria-controls="example-collapse-Eksik-Süreçlerin-Tamamlanması"
                  aria-expanded={open["Eksik Süreçlerin Tamamlanması"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["Eksik Süreçlerin Tamamlanması"]}>
                  <div id="example-collapse-Eksik-Süreçlerin-Tamamlanması">
                    <strong>Örnek:</strong> Geri bildirimlerden yola çıkarak, ekipman kullanımında yaşanan sorunları çözüyoruz ve gerekli eğitimleri sağlıyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
      
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm  yalin-card">
              <Card.Body>
                <Card.Title>Gereksiz Süreçlerin Kaldırılması</Card.Title>
                <Card.Text>
                  Gereksiz süreçleri kaldırarak maliyetleri azaltıyor ve daha verimli bir üretim sağlıyoruz.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("Gereksiz Süreçlerin Kaldırılması")}
                  aria-controls="example-collapse-Gereksiz-Süreçlerin-Kaldırılması"
                  aria-expanded={open["Gereksiz Süreçlerin Kaldırılması"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["Gereksiz Süreçlerin Kaldırılması"]}>
                  <div id="example-collapse-Gereksiz-Süreçlerin-Kaldırılması">
                    <strong>Örnek:</strong> Depolama süreçlerini optimize ederek, envanterdeki ürünlerin daha hızlı hareket etmesini sağlıyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm  yalin-card">
              <Card.Body>
                <Card.Title>Verimlilik Artışı Sağlama</Card.Title>
                <Card.Text>
                  Verimliliği artırmak için sürekli iyileştirme çalışmalarını yürütüyoruz.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("Verimlilik Artışı Sağlama")}
                  aria-controls="example-collapse-Verimlilik-Artışı-Sağlama"
                  aria-expanded={open["Verimlilik Artışı Sağlama"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["Verimlilik Artışı Sağlama"]}>
                  <div id="example-collapse-Verimlilik-Artışı-Sağlama">
                    <strong>Örnek:</strong> Yapay zeka destekli süreç izleme sistemleri kurarak, anlık verimlilik oranlarını takip ediyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
      
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm  yalin-card">
              <Card.Body>
                <Card.Title>İzlenebilir ve Yönetilebilir İş Akışları</Card.Title>
                <Card.Text>
                  İş akışlarını detaylandırarak izlenebilir ve yönetilebilir üretim süreçleri sunuyoruz.Bu, yöneticilerin süreçleri daha iyi yönetmesine ve performansı artırmasına olanak tanır.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("İzlenebilir ve Yönetilebilir İş Akışları")}
                  aria-controls="example-collapse-İzlenebilir-ve-Yönetilebilir-İş-Akışları"
                  aria-expanded={open["İzlenebilir ve Yönetilebilir İş Akışları"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["İzlenebilir ve Yönetilebilir İş Akışları"]}>
                  <div id="example-collapse-İzlenebilir-ve-Yönetilebilir-İş-Akışları">
                    <strong>Örnek:</strong> Üretim hatlarımızda gerçek zamanlı izleme sistemleri kurarak, her aşamanın verimliliğini anlık olarak raporluyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="mb-3 shadow-sm  yalin-card">
              <Card.Body>
                <Card.Title>Enerji Verimliliği</Card.Title>
                <Card.Text>
                  Enerji tüketimini azaltmak için sürdürülebilir yöntemler ve teknolojiler uyguluyoruz.
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => toggleExample("Enerji Verimliliği")}
                  aria-controls="example-collapse-Enerji-Verimliliği"
                  aria-expanded={open["Enerji Verimliliği"]}
                >
                  Örnek
                </Button>
                <Collapse in={open["Enerji Verimliliği"]}>
                  <div id="example-collapse-Enerji-Verimliliği">
                    <strong>Örnek:</strong> Enerji tasarrufu sağlayan ekipmanlar kullanarak, üretim maliyetlerimizi düşürüyoruz.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WebTasarim;













