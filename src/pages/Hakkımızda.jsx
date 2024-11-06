import React from 'react'
import Card from 'react-bootstrap/Card';
import { ekip, tarih } from '../helper/data';
import fare from '../assets/mouse.png';
import kkartal from "../assets/kkartal.jpeg" 
import foto from "../assets/hakkimizda.png"



const Hakkımızda = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='bizkimiz m-5 '>
        <div style={{ width: '100%',  }}>
          <img src={foto} alt="Biz Kimiz" className='w-100 h-100' />
        </div>
        <div className='m-5 text-start'>
          <h1 className='fs-1 '>Biz Kimiz?</h1>
          <p className='fs-4 '>
          Romsis Yazılım olarak, global ölçekte üretim sağlayan ve yazılım teknolojilerinde fark yaratan bir yazılım şirketiyiz. Kuruluşumuzdan bu yana, çeşitli uluslararası ve yerel projelerde danışmanlık ve uygulama hizmetleri sunarak müşterilerimizin iş süreçlerini güçlendirdik. Uzman ekibimizle, ticari işletmelere yönelik stok, depo, ve satış çözümleri sunarak hayatı kolaylaştırmayı amaçlıyoruz. Aynı zamanda yazılım sektöründe yenilikçi teknolojiler geliştirip dünya standartlarında ürünler üretiyoruz. Hedefimiz, teknolojiyi ileriye taşıyan, değer üreten ve küresel ölçekte tercih edilen bir Türk yazılım markası olmaktır.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className='tarihce m-5'>
        <div className='m-5 text-start'>
          <h2 className='fs-1'>Tarihçemiz</h2>
          <p>1997'den günümüze uzanan yolcuğumuz;</p>
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
        <h2 className='fs-1 '>Romsis Destek Hizmeti</h2>
        <p>
        Romsis kullanıcılarına yönelik destek ve eğitim hizmetleri, Romsis Akademi ve Yetkili Romsis İş Ortakları tarafından sunulmaktadır. Kullanıcıların bilgi altyapılarında karşılaştıkları sorunlara ve ihtiyaçlarına hızlı çözümler üretebilmek amacıyla verilen bu hizmetler; Proje Danışmanlığı, Kullanıcı Eğitimleri, Uzak Bağlantı, Yerinde Destek, Tele-Destek, Veri Bakımı ile Network ve Veritabanı Danışmanlığı gibi geniş bir kapsamda uygulanmaktadır.
        </p>
      </div>

      {/* R&D Section */}
      <div className='arge m-5 d-flex flex-wrap justify-content-center align-items-center'>
        <div className='w-75'>
          <h2 className='text-center fs-1 '>AR-GE</h2>
          <p>
          Şirketimiz, kazancının %65'ini AR-GE'ye yatırarak ürünlerini yenilikçi teknolojilerle geliştiriyor ve müşteri ihtiyaçlarına yönelik yeni ürünler sunuyor. Hindistan, Romanya, İrlanda, Rusya, Azerbaycan, Amerika ve Estonya'da partner gruplarıyla işbirliği yaparak en güncel teknolojileri ürünlerimize entegre ediyoruz. Ürünlerin arayüz tasarımlarında üniversitelerden ve kurumsal kimlik uzmanlarından destek alarak kolektif bir yaklaşım sergiliyoruz. Arka plan yazılımında ise en yeni teknolojilerle veri akışını güvenli ve verimli hale getiriyoruz.
          </p>
        </div>
        <img src={fare} alt="AR-GE" />
      </div>

      {/* Investor Relations Section */}
      <div className='yatırımcı m-5 p-5'>
        <h2 className='fs-1 '>Yatırımcı İlişkileri</h2>
        <p>
        Şirketimiz, 2012 yılından itibaren dünya çapında kendini kanıtlamış yazılım firmalarıyla partnerlik yapmaktadır. Hem yurt içi hem de yurt dışında bayi ve çözüm ortaklarıyla gerçekleştirdiği projelerle müşteri memnuniyetini en üst seviyede tutmaktadır. 2017 yılında birçok yabancı yatırımcıdan ilgi görmesine rağmen, ekosistemine ve iç yapısına uygun bir yatırımcı bulamayan şirketimiz, %100 yerli yazılım firması olarak faaliyet göstermeye devam etmektedir.
        </p>
      </div>

      {/* Team Section */}
      <div className='ekip'>
        <h2 className='text-center fs-1 '>Ekibimiz</h2>
        <div className=''>
          <div className="card mb-3 border-0" >
            <div className="row g-0 kkartal">
              <div className="col-md-6 ">
                <img src={kkartal} className="kartal-img -fluid rounded-pill" alt="Kadir Kartal" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title">Kadir Kartal</h3>
                  <h5 className="card-title">CEO</h5>
              
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
              <Card key={id} style={{ width: '13rem' }} className='border-0 d-flex justify-content-center text-center align-items-center'>
                <img src={image} alt={title1} className='rounded-pill ekip-img' />
                <Card.Body>
                  <Card.Title>{title1}</Card.Title>
                  <Card.Text>{title2}</Card.Text>
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
