
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Iletisim = () => {
  return (
    <div>
      <Helmet>
        <title>İletişim</title>
        <meta name="description" content="Romsis Yazılım ile iletişim kurun. Ofislerimizin adresleri ve iletişim formu ile bize ulaşabilirsiniz. İstanbul, Edirne, Antalya ve Ankara'daki şubelerimiz." />
        <meta name="keywords" content="Romsis, iletişim, yazılım, ofis adresleri, iletişim formu, yazılım firması" />
      </Helmet>

      

      <div>
        <Row className='flex justify-center m-5 p-5 ofis'>
          <Col className='ofis'>
            <h1>İletişim</h1>
            <h2>Ofislerimiz</h2>
            <>
  <p>
    <a href={+908502601909} className='text-decoration-underline'>
    <i className="fa-solid fa-phone"></i>+90 850 260 19 09</a>
  </p>
  <p>
    <a href={+905426467551} className='text-decoration-underline'>
    <i className="fa-solid fa-phone"></i>+90 542 646 75 51</a>
  </p>
  <p>
  <a href="mailto:bilgi@romsis.com.tr" className='text-decoration-underline'>
  <i className="fa-solid fa-envelope"></i>bilgi@romsis.com.tr</a>
</p>

</>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1357534643307!2d29.019095276822235!3d41.10972617133666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab73b567dd1a1%3A0xc89f33a7e4335c1d!2zUm9tc2lzIFlhesSxbMSxbQ!5e0!3m2!1str!2str!4v1728503523996!5m2!1str!2str"
              width={600}
              height={350}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <br />

          </Col>
          <Col>
          <h3>Merkez</h3>
            <p><span>Adres:</span> Maslak Mahallesi Maslak Meydanı Sok. No:3 Veko Giz Plaza Kat:2 D:1-2 Maslak Sarıyer İstanbul Türkiye</p>
            <h3>Ar-Ge</h3>
            <p><span>Adres:</span> Trakya Üniversitesi Ayşekadın Yerleşkesi, 22100 Edirne Türkiye</p>
            <h3>Sabiha Gökçen Havalimanı Şubesi</h3>
            <p><span>Adres:</span> İstanbul Sabiha Gökçen Uluslararası Havalimanı Romsis Ofis İstanbul Türkiye</p>
            <h3>Ankara Esenboğa Havalimanı Şubesi</h3>
            <p><span>Adres:</span> Ankara Esenboğa Havalimanı Romsis Ofis Ankara Türkiye</p>
            <h3>Antalya Havalimanı Şubesi</h3>
            <p><span>Adres:</span> Fraport TAV Antalya Havalimanı Romsis Ofis Antalya Türkiye</p>
            <h3>Azerbaycan Ofisi</h3>
            <p><span>Adres:</span> Elmler Akademiyasi Ehmed Cemil kucesi, Mothercare-den Forte Fashion-nin binasi 4-cu kat</p>
          </Col>


        </Row>
      </div>
    </div>
  );
}

export default Iletisim;