import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";

const Iletisim = () => {
  
  const { t } = useTranslation();


  return (
    <div>
      <Helmet>
        <title>İletişim</title>
        <meta name="description" content="Romsis Yazılım ile iletişim kurun. Ofislerimizin adresleri ve iletişim formu ile bize ulaşabilirsiniz. İstanbul, Edirne, Antalya ve Ankara'daki şubelerimiz." />
        <meta name="keywords" content="Romsis, iletişim, yazılım, ofis adresleri, iletişim formu, yazılım firması" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-03WTTC42DV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03WTTC42DV');
          `}
        </script>
      </Helmet>
      <div>
        <Row className='flex justify-center m-5 p-5 ofis'>
          <Col xs={12} md={6} className='ofis'>
            <h1 className='fs-1 fw-bold'>{t("iletisim.baslik1")}</h1>
            <>
              <p>
                <a href="tel:+908502601909" className='text-decoration-underline'>
                  <i className="fa-solid fa-phone"></i>+90 850 260 19 09
                </a>
              </p>
              <p>
                <a href="tel:+905426467551" className='text-decoration-underline'>
                  <i className="fa-solid fa-phone"></i>+90 542 646 75 51
                </a>
              </p>
              <p>
                <a href="mailto:bilgi@romsis.com.tr" className='text-decoration-underline'>
                  <i className="fa-solid fa-envelope"></i>bilgi@romsis.com.tr
                </a>
              </p>
            </>

            <iframe
              className='harita'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1357534643307!2d29.019095276822235!3d41.10972617133666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab73b567dd1a1%3A0xc89f33a7e4335c1d!2zUm9tc2lzIFlhesSxbMSxbQ!5e0!3m2!1str!2str!4v1728503523996!5m2!1str!2str"
              width="100%" 
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <br />
          </Col>
          <Col xs={12} md={6}>
            <h1>{t("iletisim.baslik2")}</h1>
            <h5>{t("iletisim.altbaslik1")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik1")}</p>
            <h5>{t("iletisim.altbaslik2")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik2")}</p>
            <h5>{t("iletisim.altbaslik3")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik3")}</p>
            <h5>{t("iletisim.altbaslik4")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik4")}</p>
            <h5>{t("iletisim.altbaslik5")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik5")}</p>
            <h5>{t("iletisim.altbaslik6")}</h5>
            <p><span>{t("iletisim.span")}</span> {t("iletisim.icerik6")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Iletisim;
