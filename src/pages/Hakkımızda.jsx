import React from 'react'
import Card from 'react-bootstrap/Card';
import fare from '../assets/mouse.png';
import kkartal from "../assets/kkartal.jpeg" 
import foto from "../assets/hakkimizda.png"
import { useTranslation } from "react-i18next";


const Hakkımızda = () => {

  const { t } = useTranslation();

  const tarih =[
    {
      id:1,
      title:"1997",
      text:t("hakkimizda.tarihalt1"),
   
   
     },
    {
      id:2,
      title:"2001",
      text:t("hakkimizda.tarihalt2"),
   
   
     },
    {
      id:3,
      title:"2006",
      text:t("hakkimizda.tarihalt3"),
   
   
     },
    {
      id:4,
      title:"2011",
      text:t("hakkimizda.tarihalt4"),
   
   
     },
    {
      id:5,
      title:"2019",
      text:t("hakkimizda.tarihalt5"),
   
   
     },
    {
      id:6,
      title:"2024",
      text:t("hakkimizda.tarihalt6"),
   
   
     },


  ]

  const ekip = [
    {
      id: 1,
      image: "/image/ekip/esinaltin.jpeg",
      title1: "Esin ALTIN",
      title2: t("hakkimizda.title1"),
      linkedin: "https://www.linkedin.com/in/esin-altin-9b182528/"
    },
    {
      id: 2,
      image: "/image/ekip/engin.jpeg",
      title1: "Engin YILMAZ",
      title2: t("hakkimizda.title2"),
      linkedin: "https://www.linkedin.com/in/romsis-yaz%C4%B1l%C4%B1m-581048115/"
    },
    {
      id: 3,
      image: "/image/ekip/tansu.jpeg",
      title1: "Tansu ÇITLAK",
      title2: t("hakkimizda.title3"),
      linkedin: "https://www.linkedin.com/in/tansu-%C3%A7itlak-131b1520b/"
    },
    {
      id: 4,
      image: "/image/ekip/ayse.jpeg",
      title1: "Ayşe Gül GÜÇLÜ",
      title2: t("hakkimizda.title6"),
      linkedin: "https://www.linkedin.com/in/romsis-yaz%C4%B1l%C4%B1m-581048115/"
     
    },
    {
      id: 5,
      image: "/image/ekip/st.jpeg",
      title1: "Selim TURAL",
      title2: "PMO Director",
      linkedin: "https://www.linkedin.com/in/selim-tural-executive-mba-b34235161/"
    },
    {
      id: 6,
      image: "/image/ekip/abdurrahman.jpeg",
      title1: "Abdurrahman ELIKARA",
      title2: t("hakkimizda.title5"),
      linkedin: "https://www.linkedin.com/in/abdurrahman-e-91276b45/"
    }
  ];  

  return (
    <div>
      {/* Hero Section */}
      <div className='bizkimiz m-5 '>
        <div style={{ width: '100%',  }}>
          <img src={foto} alt="Biz Kimiz" className='w-100 h-100' />
        </div>
        <div className='m-5 text-start'>
          <h1 className='fs-1 '>{t("hakkimizda.baslik1")}</h1>
          <p className='fs-4 '>
          {t("hakkimizda.par1")}
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className='tarihce m-5'>
        <div className='m-5 text-start'>
          <h2 className='fs-1'>{t("hakkimizda.baslik2")}</h2>
          <p>{t("hakkimizda.par2")}</p>
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
        <h2 className='fs-1 '>{t("hakkimizda.baslik3")}</h2>
        <p>
        {t("hakkimizda.par3")}
        </p>
      </div>

      {/* R&D Section */}
      <div className='arge m-5 d-flex flex-wrap justify-content-center align-items-center'>
        <div className='w-75'>
          <h2 className='text-center fs-1 '>{t("hakkimizda.baslik4")}</h2>
          <p>
          {t("hakkimizda.par4")}
          </p>
        </div>
        <img src={fare} alt="AR-GE" />
      </div>

      {/* Investor Relations Section */}
      <div className='yatırımcı m-5 p-5'>
        <h2 className='fs-1 '>{t("hakkimizda.baslik5")}</h2>
        <p>
        {t("hakkimizda.par5")}
        </p>
      </div>

      {/* Team Section */}
      <div className='ekip'>
        <h2 className='text-center fs-1 '>{t("hakkimizda.baslik6")}</h2>
        <div className=''>
          <div className="card mb-3 border-0" >
            <div className="row g-0 kkartal">
              <div className="col-md-6 ">
              <a href="https://www.linkedin.com/in/kadir-kartal-37427477/" target="_blank" rel="noopener noreferrer">
              <img src={kkartal} className="kartal-img -fluid rounded-pill" alt="Kadir Kartal" />
        </a>
               
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title">Kadir Kartal</h3>
                  <p className="card-text">CEO</p>
              
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className='d-flex flex-wrap gap-4 justify-content-center'>
  {ekip.map((tura) => {
    const { id, title1, title2, image, linkedin } = tura;
    return (
      <Card key={id} style={{ width: '13rem' }} className='border-0 d-flex justify-content-center text-center align-items-center'>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title1} className='rounded-pill ekip-img' />
        </a>
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
