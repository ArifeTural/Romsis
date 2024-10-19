import React, {useState} from 'react';
import { tekno} from '../helper/yazilim';
import girisimg from "../assets/web-tasarim-giris.jpg"
import soru from "../assets/question-mark.png"
import { steps } from '../helper/yazilim';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import "../css/web.css"

const WebTasarim = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };


  const hizmetler = [
    'Kullanıcı Deneyimi (UX) ve Arayüz Tasarımı (UI)',
    'Mobil Uyumluluk ve Responsive Tasarım',
    'Özel Tasarım Çözümleri',
    'E-Ticaret Tasarımı',
    'SEO Uyumlu Web Tasarım',
    'Hız ve Performans Optimizasyonu',
    'Entegrasyon ve Yönetim Sistemleri',
    'İçerik Yönetim Sistemleri (CMS)',
    'Web Uygulama Geliştirme'
  ];

  return (
<div>
<div>
  <img src={girisimg} alt="" className='w-100 ' />
</div>
 <div>
  <h1 className='text-center fs-1  p-5 tasarim-baslik'>Dijital Başarınız için Modern ve Kullanıcı Odaklı Web Tasarım Hizmetleri</h1>
  <p className='fs-2 text-center tasarim-par'>Markanızın dijitaldeki yüzünü güçlü kılmak için modern, kullanıcı odaklı ve mobil uyumlu web tasarımlarımızla fark yaratıyoruz. SEO uyumlu çözümlerimizle, hedef kitlenize kolayca ulaşmanızı sağlıyoruz.</p>
 </div>


 <div className="container my-4  ">
 <h2 className='fs-1 fw-bolder text-center tasarim-baslikk '> Nasıl Çalışıyoruz ?</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
            <div className="card border-0">
              <img 
               className="nasil-img " 
                src={step.img} 
                alt={step.alt} 
                loading="lazy" 
              />
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold text-secondary">{step.title}</h5>
                <ul className="list-unstyled ">
                  {step.content.map((item, i) => (
                    <li key={i} className="text-muted ">
                      * {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


 <div className='mt-5 d-flex flex-wrap justify-content-center align-items-center gap-5'>
<div>
<h2 className='fs-1 fw-bolder mb-4 tasarim-baslikk' >Neler Yapıyoruz?</h2>
  <img src={soru} alt="soruisareti" width={200}/>
</div>
   
      <ul>
        {hizmetler.map((hizmet, index) => (
          <li key={index} className='fs-4 ml-5 neler-ul' >{hizmet}</li>
        ))}
      </ul>
    </div>



    <Container className="my-5">
  <h2 className="text-center tasarim-baslikk fw-bold fs-1 mb-4">Proje Özellikleri</h2>
  <Row className='justify-content-center gap-2'>
    <Col md={3} className="text-center border  border-3 border-black ">
   
      <h5 className="font-weight-bold">Mobil Uyumlu Tasarım</h5>
      <p>Responsive tasarım prensipleriyle web sitenizin tüm cihazlarda mükemmel bir kullanıcı deneyimi sunmasını sağlıyoruz. Mobil uyumlu web siteleri ile daha fazla ziyaretçi çekebilir ve SEO performansınızı artırabilirsiniz.</p>
    </Col>
    <Col md={3} className="text-center border border-3  border-warning">
    
      <h5 className="font-weight-bold ">Web Hızı Optimizasyonu</h5>
      <p>Özgün ve optimize edilmiş kodlama yöntemlerimizle web sitenizin yükleme hızını en üst seviyeye çıkarıyoruz. Hızlı yükleme süreleri, kullanıcı memnuniyetini artırırken arama motoru sıralamalarınızı olumlu yönde etkiler.</p>
    </Col>
    <Col md={3} className="text-center border border-3 border-info">
 
      <h5 className="font-weight-bold">Özgün ve Yenilikçi Tasarım</h5>
      <p>Web sitenizi benzersiz bir tasarım anlayışı ile oluşturuyor, kullanıcıların ilgisini çekecek özgün içeriklerle zenginleştiriyoruz. Özgün tasarımlar, markanızın imajını güçlendirir ve dönüşüm oranlarını artırır.</p>
    </Col>
    <Col md={3} className="text-center border border-3 border-danger">
   
      <h5 className="font-weight-bold">Web Standartlarına Uygunluk</h5>
      <p>Web tasarım ve geliştirme süreçlerimizi uluslararası web standartlarına uygun bir şekilde gerçekleştiriyoruz. Bu, sitenizin daha güvenilir olmasını ve SEO uyumlu hale gelmesini sağlar.</p>
    </Col>
  
    <Col md={3} className="text-center border border-3 border-success">
  
      <h5 className="font-weight-bold">Temiz ve Okunabilir Kodlama</h5>
      <p>Web sitenizde karmaşık kodlamalardan kaçınarak, okunabilir ve sürdürülebilir bir kod yapısı oluşturuyoruz. Temiz kodlama, web sitenizin performansını artırır ve SEO çalışmalarını kolaylaştırır.</p>
    </Col>
    <Col md={3} className="text-center border border-3 border-secondary">
  
      <h5 className="font-weight-bold">SEO Odaklı Yaklaşım</h5>
      <p>SEO stratejilerimizi projenizin başlangıcından itibaren entegre ediyoruz. SEO odaklı bir yaklaşım, arama motorlarıyla görünürlüğünüzü artırır ve organik trafiğinizi önemli ölçüde yükseltir.</p>
    </Col>
    </Row>

</Container>

<div>
  <h2 className='tasarim-baslikk m-5 pt-4 fs-1 text-center'>Hangi Teknolojileri Kullanıyoruz:</h2>
</div>
<div className='web-teknoloji-container d-flex flex-column align-items-center justify-content-center flex-wrap gap-3 w-75 mx-auto'>
  <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="carousel-custom tek-ana w-100" indicators={false}>
    {tekno.map((tech) => (
      <Carousel.Item key={tech.id} className="carousel-item-custom">
        <div className="carousel-image-container d-flex justify-content-center">
          <img
            className="carousel-image d-block mb-3"
            src={tech.image}
            alt={tech.title}
            style={{ height: '200px', objectFit: 'cover', maxWidth: '100%' }}
          />
        </div>
        <div className="carousel-card border-5 text-center mt-1"> 
          <h3 className='carousel-card-title fs-4 fw-bold'>{tech.title}</h3>
          <p className='carousel-card-description'>{tech.description}</p>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  {/* Carousel indicators */}
  <div className="carousel-indicators-custom d-flex flex-wrap justify-content-center mt-3">
    {tekno.map((tech, index) => (
      <div
        key={tech.id}
        className={`indicator-image ${activeIndex === index ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${tech.image})`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '0 5px',
          backgroundSize: 'cover',
          cursor: 'pointer',
          border: activeIndex === index ? '2px solid #007bff' : 'none',
        }}
        onClick={() => handleSelect(index)}
      />
    ))}
  </div>
</div>


 




</div>
  );
}

export default WebTasarim;










