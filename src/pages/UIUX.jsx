import React from 'react';
import { Helmet } from 'react-helmet';
import "../css/web.css"
import uiiii from "../assets/uiux4.jpg"
import pc from "../assets/mobile.png"
import { useTranslation } from "react-i18next";

const UIUX = () => {
  const { t } = useTranslation();


const techTools = [
    {
      id: 1,
      name: "Figma",
      description:  t("uiux.figma"),
      imgSrc: "/image/teknoloji/figma.png",
    },
    {
      id: 2,
      name: "Adobe XD",
      description: t("uiux.adobe"),
      imgSrc: "/image/teknoloji/adobe.png",
    },
    {
      id: 3,
      name: "Zeplin",
      description: t("uiux.zeplin"),
      imgSrc: "/image/teknoloji/zeplinn.jpg",
    },
  ];
  return (
    <div className="">
      <Helmet>
        <title>UI/UX Tasarımı</title>
        <meta name="description" content="UI/UX tasarım sürecimiz ile kullanıcı deneyimini en üst düzeye çıkarın. Projeleriniz için en iyi tasarım çözümlerini sunuyoruz." />
        <meta name="keywords" content="UI/UX, kullanıcı deneyimi, tasarım, prototipleme, kullanıcı testleri, tasarım araçları" />
      </Helmet>


      <section className='uiux-cont '>
      <div className="card mb-3 " >
  <div className="row g-0 ui-kart">
    
    <div className="col-md-6">
      <div className="card-body">
        <h1 className="card-title ui-kart-bas">{t("uiux.baslik1")}</h1>
        <p className="card-text ui-kart-par ">
        {t("uiux.par")}
        </p>
       
      </div>
    </div>
    <div className="col-md-6">
      <img src={uiiii} className="ui-kart-img img-fluid " alt="..." />
    </div>


  </div>
</div>

      


      <div className='row d-flex flex-wrap justify-content-center align-items-center m-5 pt-5'>
  <div className='col-12 col-md-6 d-flex justify-content-center'>
    <img src={pc} alt="pc" className='pcimg'  />
  </div>
  
  <div className='col-12 col-md-6 '>
    <h2 className="guncel-baslik fs-3">{t("uiux.baslik2")}</h2>
    <ul className='fs-5 text-success'>
      <li> {t("uiux.liste1")}</li>
      <li> {t("uiux.liste2")}</li>
      <li> {t("uiux.liste3")}</li>
      <li> {t("uiux.liste4")}</li>
      <li> {t("uiux.liste5")}</li>
    </ul>
  </div>
</div>

  
      </section>

      {/* UI/UX Süreci */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="ui-baslik display-5 mb-4">{t("uiux.baslik3")}</h2>
          <div className="row">
            {/* Kullanıcı Araştırması Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.la1")}</li>
                  <li>{t("uiux.la2")}</li>
                  <li>{t("uiux.la3")}</li>
                  </ul>
                </div>

              </div>
            </div>
            {/* Tanımlama ve Analiz Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik2")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.lb1")}</li>
                  <li>{t("uiux.lb2")}</li>
                  <li>{t("uiux.lb3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Prototipleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik3")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.lc1")}</li>
                  <li>{t("uiux.lc2")}</li>
                  <li>{t("uiux.lc3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tasarım Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik4")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.ld1")}</li>
                  <li>{t("uiux.ld2")}</li>
                  <li>{t("uiux.ld3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Kullanıcı Testleri Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik5")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.le1")}</li>
                  <li>{t("uiux.le2")}</li>
                  <li>{t("uiux.le3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* İterasyon Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik6")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.lf1")}</li>
                  <li>{t("uiux.lf2")}</li>
                  <li>{t("uiux.lf3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Geliştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik7")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.lg1")}</li>
                  <li>{t("uiux.lg2")}</li>
                  <li>{t("uiux.lg3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Yayınlama ve İzleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik8")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.lk1")}</li>
                  <li>{t("uiux.lk2")}</li>
                  <li>{t("uiux.lk3")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Sürekli İyileştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title alt-baslik">{t("uiux.altbaslik9")}</h5>
                  <ul className="card-text surec-ul text-start">
                  <li>{t("uiux.ll1")}</li>
                  <li>{t("uiux.ll2")}</li>
                  <li>{t("uiux.ll3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Kullanılan Teknolojiler ve Araçlar */}
 
      <section className="py-5 text-center">
  <div className="container">
    <h2 className="display-5 mb-4 ui-baslik">Kullanılan Teknolojiler ve Araçlar</h2>
    <div className="row justify-content-center text-center gap-2">
      {techTools.map(tool => (
        <div key={tool.id} className="col-md-4">
          <div className="card shadow-lg border-0"> 
            <div className="d-flex justify-content-center"> 
              <img
                src={tool.imgSrc}
                className="card-img-top"
                alt={tool.name}
                style={{ width: '100px', height: '100px' }} 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title alt-baslik">{tool.name}</h5>
              <p className="card-text text-secondary">{tool.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    </div>
  );
};

export default UIUX;




