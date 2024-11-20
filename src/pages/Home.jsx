import React from 'react';
import { Helmet } from 'react-helmet'; // Helmet kütüphanesini import et
import Carousel from 'react-bootstrap/Carousel';

import { referans } from '../helper/referans';
import { Link } from 'react-router-dom';
import wp from "../assets/whatsapp.png";
import { useTranslation } from "react-i18next";

function Home() {
  const phoneNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';

  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Dil bilgisine göre video datasını belirle
  const data = currentLanguage === "tr"
    ? [
        { id: 1, image: "./video/giris.mp4" },
        { id: 2, image: "./video/yazilimvideo.mp4" }
      ]
    : [
        { id: 1, image: "./video/giris.mp4" },
        { id: 2, image: "./video/uygulamagiff.mp4" }
      ];

  // Diğer çevirilerin yapıldığı veriler
  const yazilim = [
    {
      id: 1,
      image: "./image/yazilim/car3.jpg",
      title: t("yazilim.titles"),
      link: "/byOnBoard"
    }
  ];

  const yazilim2 = [
    {
      id: 2,
      image: "./image/yazilim/yalinuretmek.jpg",
      title: t("yazilim2.titlel"),
      link: "/ozelYazilim/YalinUretim"
    },
    {
      id: 3,
      image: "./image/yazilim/wms.jpg",
      title: t("yazilim2.titlew"),
      link: "/ozelYazilim/Wms"
    }
  ];

  const yazilim3 = [
    {
      id: 4,
      image: "./image/yazilim/webbyazilim.jpg",
      title: t("yazilim3.titleww"),
      link: "/ozelYazilim/WebYazilim"
    },
    {
      id: 6,
      image: "./image/yazilim/mobiluygulama.jpg",
      title: t("yazilim3.titlem"),
      link: "/ozelYazilim/MobilUygulama"
    },
    {
      id: 7,
      image: "./image/yazilim/ui-ux-tasarim.png",
      title: t("yazilim3.titleu"),
      link: "/ozelYazilim/UIUX"
    }
  ];

  const steps = [
    {
      title: t("steps.titlep"),
      content: [
        t("steps.contentp1"),
        t("steps.contentp2"),
        t("steps.contentp3")
      ],
      img: "/image/planning.png",
      alt: "Planlama ve Araştırma",
    },
    {
      title: t("steps.titled"),
      content: [
        t("steps.contentd1"),
        t("steps.contentd2")
      ],
      img: "/image/software.png",
      alt: "Tasarım",
    },
    {
      title: t("steps.titlec"),
      content: [
        t("steps.contentc1"),
        t("steps.contentc2")
      ],
      img: "/image/web-development.png",
      alt: "Geliştirme",
    },
    {
      title: t("steps.titlet"),
      content: [
        t("steps.contentt1"),
        t("steps.contentt2"),
        t("steps.contentt3")
      ],
      img: "/image/design-software.png",
      alt: "Test Etme",
    },
    {
      title: t("steps.titlew"),
      content: [
        t("steps.contentw1"),
        t("steps.contentw2")
      ],
      img: "/image/ux.png",
      alt: "Yayınlama",
    },
    {
      title: t("steps.titlemm"),
      content: [
        t("steps.contentmm1"),
        t("steps.contentmm2")
      ],
      img: "/image/app-development.png",
      alt: "Bakım ve Güncelleme",
    },
  ];

  return (
    <div>
      {/* Helmet Etiketleri */}
      <Helmet>
        <title>Romsis - Buy On Board Hizmetleri | Yazılım ve Web Çözümleri</title>
        <meta name="description" content="Romsis Yazılım, web tasarım ve buy on board hizmetleri ile dijital çözümler sunuyor." />
        <meta name="keywords" content="buy on board hizmetleri, yazılım, web tasarım, mobil uygulama, özel yazılım, WMS, UI/UX" />
        <meta name="author" content="Romsis" />
        <link rel="canonical" href="https://www.romsis.com" />
      </Helmet>

      {/* SLAYT */}
      <div className='carousel dusukcarousel'>
        <div className='carousel-bg'></div>
        <Carousel className='carousel-content'>
          {data.map((item) => {
            const { image, id } = item;
            return (
              <Carousel.Item interval={5000} key={id}>
                <video autoPlay muted loop className='h-video'>
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      {/* NELER YAPIYORUZ */}
      <div className='neler'>
        <h2 className='text-center neler-baslik fw-bold mt-5 pt-5'>{t("giris.baslik")}</h2>
      </div>

      <div className='container'>
        {yazilim.map((yz, index) => {
          const { image, id, title, link } = yz;
          return (
            <div key={id} className={`content content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <div className='container'>
        {yazilim2.map((yz, index) => {
          const { image, id, title, link } = yz;
          return (
            <div key={id} className={`content2 content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <div className='container'>
        {yazilim3.map((yz, index) => {
          const { image, id, title, link } = yz;
          return (
            <div key={id} className={`content3 content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      {/* NASIL ÇALIŞIYORUZ? */}
      <div className="container nasil-cont">
        <h2 className='fs-1 fw-bolder text-center text-danger tasarim-baslikk'>{t("giris.baslik2")}</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
              <div className="card border-0">
                <img className="nasil-img" src={step.img} alt={step.alt} loading="lazy" />
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold text-secondary">{step.title}</h5>
                  <ul className="list-unstyled">
                    {step.content.map((item, i) => (
                      <li key={i} className="text-muted">
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

      {/* REFERANSLAR */}
      <div className='text-center'>
        <h2>
          <a href="#" className='h-refe fw-bolder fs-1 text-danger'>{t("giris.baslik3")}</a>
        </h2>
      </div>
      <div className='home-referans'>
        <div className='home-referans-content'>
          {referans.map((arife) => {
            const { id, image } = arife;
            return (
              <div className="home-referans-card" style={{ width: "7rem" }} key={id}>
                <img src={image} className="card-img-top border rounded-2" alt="Referans" />
              </div>
            );
          })}
          {/* Kartları tekrar etmek için */}
          {referans.map((arife) => {
            const { id, image } = arife;
            return (
              <div className="home-referans-card" style={{ width: "7rem" }} key={id + "-copy"}>
                <img src={image} className="card-img-top border rounded-2" alt="Referans" />
              </div>
            );
          })}
        </div>
      </div>

      {/* WhatsApp Destek */}
      <div className="whatsapp-support">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
          onClick={handleClick} 
        >
          <i className="home-whatsapp"><img src={wp} alt="" style={{ width: 80 }} className='rounded-pill' /></i> 
          <br />
          <p className='whatsapp-par'>{t("giris.baslik4")}</p>
        </a>
      </div>
    </div>
  );
}

export default Home;




