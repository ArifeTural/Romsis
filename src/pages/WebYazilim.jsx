import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import webt from "../assets/webt.jpg";
import { Carousel, Col, Row } from 'react-bootstrap';
import steps from "../assets/strategy.png"
import { useTranslation } from "react-i18next";

const WebYazilim = () => {

  const { t } = useTranslation();

  const surec = [
    t("web.liste1"),
    t("web.liste2"),
    t("web.liste3"),
    t("web.liste4"),
    t("web.liste5"),
    t("web.liste6"),
    t("web.liste7"),
    t("web.liste8"),
    t("web.liste9"),
    t("web.liste10"),
  
  ];

  const tekno = [
    {
      id: 1,
      image: "/image/teknoloji/html.png",
      title: 'HTML',
      description:  t("web.html")
    },
    {
      id: 2,
      image: "/image/teknoloji/social.png",
      title: 'CSS',
      description:  t("web.css")
    },
    {
      id: 3,
      image: "/image/teknoloji/atom.png",
      title: 'React',
      description: t("web.react")
    },
    {
      id: 4,
      image: "/image/teknoloji/wordpress.png",
      title: 'WordPress',
      description:  t("web.word")
    },
    {
      id: 5,
      image: "/image/teknoloji/js.png",
      title: 'JavaScript',
      description:  t("web.js")
    },
    {
      id: 6,
      image: "/image/teknoloji/document.png",
      title: 'Vue.js',
      description:  t("web.vue")
    },
    {
      id: 7,
      image: "/image/teknoloji/figma.png",
      title: 'Figma',
      description:  t("web.figma")
    },
    {
      id: 8,
      image: "/image/teknoloji/mysql.png",
      title: 'MySQL',
      description: t("web.sql")
    },
    {
      id: 9,
      image: "/image/teknoloji/nodejs.png",
      title: 'Node.js',
      description: t("web.node")
    },
    {
      id: 10,
      image: "/image/teknoloji/php.png",
      title: 'PHP',
      description:  t("web.php")
    },
    {
      id: 11,
      image: "/image/teknoloji/bootstrap.png",
      title:'Bootstrap',
      description:  t("web.boot")
    },
    {
      id: 12,
      image: "/image/teknoloji/word-image-720-1.png",
      title: 'ASP.NET',
      description:  t("web.asp")
    },
    {
      id: 13,
      image: "/image/teknoloji/csharp.png",
      title: 'C#',
      description:  t("web.c")
    },
    {
      id: 14,
      image: "/image/teknoloji/python.jpg",
      title: 'Python',
      description:  t("web.payton")
    },
    {
      id: 15,
      image: "/image/teknoloji/Oracle-Logo.jpg",
      title: 'Oracle',
      description:  t("web.oracle")
    },
    {
      id: 16,
      image: "/image/teknoloji/tailwind.png",
      title: 'Tailwind CSS',
      description:  t("web.tailwind")
    },
    {
      id: 17,
      image: "/image/teknoloji/flutter-icon-2048x2048-ufx4idi8.png",
      title: 'Flutter',
      description:  t("web.flutter")
    },
    {
      id: 18,
      image: "/image/teknoloji/docker.png",
      title: 'Docker',
      description:  t("web.docker")
    },
    {
      id: 19,
      image: "/image/teknoloji/Untitled.png",
      title: 'MongoDB',
      description:  t("web.mongo")
    },
    {
      id: 20,
      image: "/image/teknoloji/ruby-icon-1024x1024-u3yoql71.png",
      title: 'Ruby',
      description:  t("web.ruby")
    }
  ];


    const bilgiKartlari = [
    {
      id: 1,
      title: t("web.altbaslik1"),
      description:t("web.icerik1"),
      modalTitle: t("web.altbasli1"),
      modalContent: t("web.modul1"),
    },
    {
      id: 2,
      title: t("web.altbaslik2"),
      description:t("web.icerik2"),
      modalTitle: t("web.altbaslik2"),
      modalContent: t("web.modul2"),
    },
    {
      id: 3,
      title: t("web.altbaslik3"),
      description: t("web.icerik3"),
      modalTitle: t("web.altbaslik3"),
      modalContent: t("web.modul3")
    }
  ];

  


  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div>
  
      <Helmet>
        <title>Web Yazılım Hizmetleri</title>
        <meta name="description" content="Modern web yazılım hizmetlerimiz ile işletmeniz için frontend, backend ve veritabanı çözümleri sunuyoruz. Profesyonel ve ölçeklenebilir yazılım geliştirme hizmetleri hakkında detaylı bilgiler edinin." />
        <meta name="keywords" content="web yazılım, frontend, backend, veritabanı yönetimi, web geliştirme, yazılım çözümleri, web tasarım" />
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


      <header className="">
      <h1 className='wy-baslik'>{t("web.baslik1")}</h1>
      <div className='w-100 text-center'>
      <img src={webt} alt="webt" className='web-yazilim-img '  />
      </div>
       
     
      
      </header>

      <div className=' '>
      <p className="lead ">
      {t("web.par")}
        </p>
  
    </div>

      <section className="mt-5">
        <h2 className="wy-bilesenler">{t("web.baslik2")}</h2>
        <Row className='d-flex flex-wrap w-100 p-2'>
          {bilgiKartlari.map((kart) => (
            <Col key={kart.id} className="col-12 col-md-4  mb-5">
              <div className="card border-0 h-100 shadow-sm text-center">
                <div className="card-body">
                  <h3 className="wy-card-title card-title">{kart.title}</h3>
                  <p className="wy-card-text">{kart.description}</p>
                  <button className="wy-card-buton btn" data-bs-toggle="modal" data-bs-target={`#modal${kart.id}`}>
                  {t("web.detay")}
                  </button>
                </div>
              </div>

              {/* Modal Penceresi */}
              <div className="modal fade" id={`modal${kart.id}`} tabIndex="-1" aria-labelledby={`modalLabel${kart.id}`} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title wy-card-title" id={`modalLabel${kart.id}`}>{kart.modalTitle}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body wy-card-text">
                      {kart.modalContent}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn wy-card-buton" data-bs-dismiss="modal">{t("web.kapat")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <div className="container ">
  <div className="row justify-content-center align-items-center">
    <div className="col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center text-center align-items-center ">
      <h2 className="fs-1 fw-bold">
      {t("web.baslik3")}
      </h2>
      <img src={steps} alt="Geliştirme Aşamaları" width={200} />
    </div>
    <div className="col-12 col-lg-6 mt-5 ">
      <ul className="list-group">
        {surec.map((surec, index) => (
          <li key={index} className="fs-4 wy-card-text">
            {surec}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  <div>
  <h2 className='m-5 pt-4 fs-1 text-center wt-teknoloji'>{t("web.baslik4")}</h2>
</div>
<div className='web-teknoloji-container d-flex flex-column align-items-center justify-content-between flex-wrap gap-3 w-75 mx-auto '>
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

export default WebYazilim;
