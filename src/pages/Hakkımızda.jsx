import React from 'react'
import Card from 'react-bootstrap/Card';
import { ekip, tarih } from '../helper/data';
import foto from "../assets/board1.jpg";
import fare from '../assets/mouse.png';
import user from "../assets/user.jpg";

const Hakkımızda = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='bizkimiz m-5 '>
        <div style={{ width: '100%', height: "45vh" }}>
          <img src={foto} alt="Biz Kimiz" className='w-100 h-100' />
        </div>
        <div className='m-5 text-start'>
          <h1 className='fs-1 font-monospace'>Biz Kimiz?</h1>
          <p className='fs-4 font-monospace'>
            Global ölçekli üretim sağlayan bir yazılım şirketiyiz. Şirketimiz 26 Ağustos 2001 yılında,
            yazılım sektöründe danışmanlık hizmeti vermek üzere mevcut kurucu ortaklarımız tarafından kurulmuş olup,
            birçok uluslararası ve yerel projede danışmanlık ve uygulama görevlerini başarıyla tamamlamıştır.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className='tarihce m-5'>
        <div className='m-5 text-start'>
          <h2 className='fs-1 font-monospace'>Tarihçemiz</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto omnis.</p>
        </div>

        <div className='d-flex flex-wrap gap-3 justify-content-center '>
          {tarih.map((tural) => {
            const { id, text, title } = tural;
            return (
              <Card key={id} style={{ width: '12rem' }} className='border-0'>
                <Card.Body>
                  <Card.Title className='fs-3 fw-bold'>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Support Section */}
      <div className='destek m-5 p-5'>
        <h2 className='fs-1 font-monospace'>Romsis Destek Hizmeti</h2>
        <p>
          Romsis kullanıcılarına yönelik destek ve eğitim hizmetleri, Romsis Akademi ve Yetkili Romsis İş Ortakları
          tarafından sağlanmaktadır. Proje Danışmanlığı, Kullanıcı Eğitimleri, Uzak Bağlantı ve diğer destek hizmetleri ile
          kullanıcıların ihtiyaçlarına hızlı çözümler sunulmaktadır.
        </p>
      </div>

      {/* R&D Section */}
      <div className='arge m-5 d-flex flex-wrap justify-content-center align-items-center'>
        <div className='w-75'>
          <h2 className='text-center fs-1 font-monospace'>AR-GE</h2>
          <p>
            Şirketimiz kazancının %65'ini AR-GE çalışmalarına yatırarak, müşteri ihtiyaçlarına göre yeni ürünler
            geliştirip inovasyonel bir firma olma yolunda ilerlemektedir. AR-GE çalışmalarımız sayesinde
            ürünlerimizde en güncel yazılım teknolojilerini kullanarak fark yaratıyoruz.
          </p>
        </div>
        <img src={fare} alt="AR-GE" />
      </div>

      {/* Investor Relations Section */}
      <div className='yatırımcı m-5 p-5'>
        <h2 className='fs-1 font-monospace'>Yatırımcı İlişkileri</h2>
        <p>
          Şirketimiz, 2012 yılından itibaren dünya çapında çeşitli yazılım firmalarıyla ortaklıklar yapmaktadır.
          Ancak %100 yerli yazılım firması olarak bağımsızlığını korumaktadır.
        </p>
      </div>

      {/* Team Section */}
      <div className='ekip'>
        <h2 className='text-center fs-1 font-monospace'>Ekibimiz</h2>
        <div className='d-flex justify-content-center'>
          <div className="card mb-3 border-0" style={{ maxWidth: 900 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={user} className="img-fluid rounded-pill" alt="Kadir Kartal" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Kadir Kartal</h3>
                  <h5 className="card-title">Kurucu, Genel Müdür</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, incidunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className='d-flex flex-wrap gap-4 justify-content-center'>
          {ekip.map((tura) => {
            const { id, title1, title2, image } = tura;
            return (
              <Card key={id} style={{ width: '13rem' }} className='border-0'>
                <img src={image} alt={title1} className='rounded-pill' />
                <Card.Body>
                  <Card.Title>{title1}</Card.Title>
                  <Card.Title>{title2}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hakkımızda;
