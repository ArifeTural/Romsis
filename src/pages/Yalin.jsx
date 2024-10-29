import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // SEO için
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Yalin() {
  // Açılır kapanır içerikler için durum
  const [showExamples, setShowExamples] = useState({});

  // Örneklerin açılıp kapanması için bir fonksiyon
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
      <Container className="mt-5">
        <h1 className="text-center mb-4">Yalın Üretim</h1>
        <p className="text-center mb-5">
          Yalın üretim, israfı minimize ederek, değer yaratmaya odaklanan bir üretim felsefesidir. Hedefimiz, üretim süreçlerini optimize ederek işletmenizin verimliliğini artırmaktır.
        </p>
        <Row>
          {[ 
            {
              title: "Uçtan Uca Üretim Proses Analizi",
              text: "Müşterilerimizin tüm üretim süreçlerini baştan sona analiz ediyoruz. Bu analiz, mevcut durumun değerlendirilmesi ve iyileştirme alanlarının belirlenmesidir.",
              example: "Örnek: Bir otomotiv üreticisi için, montaj hattındaki her adımı gözden geçirerek zaman kayıplarını ve darboğazları belirliyoruz."
            },
            {
              title: "Eksik Süreçlerin Tamamlanması",
              text: "Eksik süreçleri tamamlayarak üretimdeki aksaklıkları gideriyoruz. Bu süreç, çalışanların eğitimini ve ekipman güncellemelerini içerir.",
              example: "Örnek: Geri bildirimlerden yola çıkarak, ekipman kullanımında yaşanan sorunları çözüyoruz ve gerekli eğitimleri sağlıyoruz."
            },
            {
              title: "Gereksiz Süreçlerin Kaldırılması",
              text: "Gereksiz süreçleri kaldırarak maliyetleri azaltıyor ve daha verimli bir üretim sağlıyoruz. Bu, sadece zaman tasarrufu değil, aynı zamanda kaynakların daha etkili kullanılmasına yardımcı olur.",
              example: "Örnek: Depolama süreçlerini optimize ederek, envanterdeki ürünlerin daha hızlı hareket etmesini sağlıyoruz."
            },
            {
              title: "Verimlilik Artışı Sağlama",
              text: "Verimliliği artırmak için sürekli iyileştirme çalışmalarını yürütüyoruz. Bu, süreçlerin analiz edilmesi, çalışanların motivasyonunu artıracak stratejiler geliştirilmesi ve teknoloji kullanımını içerir.",
              example: "Örnek: Yapay zeka destekli süreç izleme sistemleri kurarak, anlık verimlilik oranlarını takip ediyoruz."
            },
            {
              title: "İzlenebilir ve Yönetilebilir İş Akışları",
              text: "İş akışlarını detaylandırarak izlenebilir ve yönetilebilir üretim süreçleri sunuyoruz. Bu, yöneticilerin süreçleri daha iyi yönetmesine ve performansı artırmasına olanak tanır.",
              example: "Örnek: Üretim hatlarımızda gerçek zamanlı izleme sistemleri kurarak, her aşamanın verimliliğini anlık olarak raporluyoruz."
            },
            {
              title: " Sürekli İyileştirme ve Güncelleme",
              text: "Sürekli iyileştirme felsefesi ile, süreçlerimizi sürekli olarak gözden geçirir ve geliştirmeye yönelik adımlar atıyoruz.",
              example: "Örnek: Takım üyeleriyle düzenli geri bildirim toplantıları yaparak, önerilen iyileştirmeleri hayata geçiriyoruz."


            }
          ].map((item, index) => (
            <Col sm={12} md={6} key={index}>
              <Card className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
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












