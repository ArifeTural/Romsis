import React from 'react';
import girisimg from "../assets/web-tasarim-giris.jpg"
import soru from "../assets/question-mark.png"
import { steps } from '../helper/yazilim';
import "../css/web.css"

const WebTasarim = () => {
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
  <h1 className='text-center fs-1  p-5'>Dijital Başarınız için Modern ve Kullanıcı Odaklı Web Tasarım Hizmetleri</h1>
  <p className='fs-2 text-center'>Markanızın dijitaldeki yüzünü güçlü kılmak için modern, kullanıcı odaklı ve mobil uyumlu web tasarımlarımızla fark yaratıyoruz. SEO uyumlu çözümlerimizle, hedef kitlenize kolayca ulaşmanızı sağlıyoruz.</p>
 </div>


 <div className='mt-5 d-flex flex-wrap justify-content-center align-items-center gap-5'>
<div>
<h2 className='fs-1 fw-bolder mb-4' >Neler Yapıyoruz?</h2>
  <img src={soru} alt="soruisareti" width={200}/>
</div>
   
      <ul>
        {hizmetler.map((hizmet, index) => (
          <li key={index} className='fs-4 ml-5 ' >{hizmet}</li>
        ))}
      </ul>
    </div>

 <div className="container my-4 m-5 border border-5 ">
 <h2 className='fs-1 fw-bolder text-center '> Nasıl Yapıyoruz ?</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0">
              <img 
               className="nasil-img " 
                src={step.img} 
                alt={step.alt} 
                loading="lazy" 
              />
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold">{step.title}</h5>
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




</div>
  );
}

export default WebTasarim;










