import React from 'react';
import { Helmet } from 'react-helmet';
import { techTools } from '../helper/yazilim';
import giris from "../assets/ui-giris.jpg"
import pc from "../assets/mobile.png"

const UIUX = () => {
  return (
    <div className="">
      <Helmet>
        <title>UI/UX Tasarımı | Kullanıcı Deneyimini Yeniden Tanımlayın</title>
        <meta name="description" content="UI/UX tasarım sürecimiz ile kullanıcı deneyimini en üst düzeye çıkarın. Projeleriniz için en iyi tasarım çözümlerini sunuyoruz." />
        <meta name="keywords" content="UI/UX, kullanıcı deneyimi, tasarım, prototipleme, kullanıcı testleri, tasarım araçları" />
      </Helmet>


      <section className='uiux-cont'>

      <img src={giris} alt="" className='ui-giris-img' />

      <h1 className="display-4 text-center m-3">UI/UX tasarımında en iyi sonuçlar için bizimle çalışın</h1>
      
      <div className='row d-flex flex-wrap justify-content-center align-items-center m-5 pt-5'>
  <div className='col-12 col-md-6 d-flex justify-content-center'>
    <img src={pc} alt="pc" style={{ width: '300px', height: '300px' }} />
  </div>
  
  <div className='col-12 col-md-6 '>
    <h2 className="fs-3">Güncel Tasarım Trendleri:</h2>
    <ul className='fs-5'>
      <li> Minimalist Tasarım</li>
      <li> Karanlık Mod</li>
      <li> Mikro Etkileşimler</li>
      <li> Sesli Arayüzler</li>
      <li> Kişiselleştirilmiş Deneyimler</li>
    </ul>
  </div>
</div>

  
      </section>

      {/* UI/UX Süreci */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-5 mb-4">UI/UX Sürecimiz</h2>
          <div className="row">
            {/* Kullanıcı Araştırması Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">1. Kullanıcı Araştırması</h5>
                  <ul className="card-text">
                    <li>Kullanıcı profilleri oluşturma</li>
                    <li>Anket ve görüşmelerle veri toplama</li>
                    <li>Kullanıcı ihtiyaçlarını belirleme</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tanımlama ve Analiz Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">2. Tanımlama ve Analiz</h5>
                  <ul className="card-text">
                    <li>Kullanıcı ihtiyaçlarını belirlemek için veri analizi</li>
                    <li>Kullanıcı profilleri  oluşturma</li>
                    <li>Yolculuk haritaları oluşturma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Prototipleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">3. Prototipleme</h5>
                  <ul className="card-text">
                    <li>Wireframe tasarımları oluşturma</li>
                    <li>Interaktif prototipler geliştirme</li>
                    <li>Kullanıcı geri bildirimlerine göre revize etme</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tasarım Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">4. Tasarım</h5>
                  <ul className="card-text">
                    <li>Renk paletleri ve tipografi belirleme</li>
                    <li>Tasarımın estetik yönlerini oluşturma</li>
                    <li>Tasarımın işlevsel yönlerini oluşturma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Kullanıcı Testleri Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">5. Kullanıcı Testleri</h5>
                  <ul className="card-text">
                    <li>Prototiplerle kullanıcı testleri yapma</li>
                    <li>Geri bildirim toplama ve analiz etme</li>
                    <li>Tasarımı son kullanıcıya göre optimize etme</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* İterasyon Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">6. İterasyon</h5>
                  <ul className="card-text">
                    <li>Geri bildirimlere dayanarak tasarımı geliştirme</li>
                    <li>Sürekli revizyon süreçleri</li>
                    <li>Sürekli iyileştirme süreçleri</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Geliştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">7. Geliştirme</h5>
                  <ul className="card-text">
                    <li>Tasarımın geliştirilmesi ve kodlama süreci</li>
                    <li>Kodlama süreci</li>
                    <li>Nihai ürünün oluşturulması</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Yayınlama ve İzleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">8. Yayınlama ve İzleme</h5>
                  <ul className="card-text">
                    <li>Ürünün pazara sürülmesi</li>
                    <li>Ürünün pazarda izlenmesi</li>
                    <li>Kullanıcı geri bildirimlerinin izlenmesi</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Sürekli İyileştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">9. Sürekli İyileştirme</h5>
                  <ul className="card-text">
                    <li>Yeni kullanıcı ihtiyaçlarına göre güncellemeler</li>
                    <li>Ürünü sürekli olarak geliştirme</li>
                    <li>Ürünü sürekli destek sağlama</li>
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
    <h2 className="display-5 mb-4">Kullanılan Teknolojiler ve Araçlar</h2>
    <div className="row justify-content-center text-center">
      {techTools.map(tool => (
        <div key={tool.id} className="col-md-4">
          <div className="card shadow-sm border-0"> {/* Border'i kaldırdık */}
            <div className="d-flex justify-content-center"> {/* Resmi ortalamak için ekledik */}
              <img
                src={tool.imgSrc}
                className="card-img-top"
                alt={tool.name}
                style={{ width: '100px', height: '100px' }} // Genişlik ve yükseklik 100px
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{tool.name}</h5>
              <p className="card-text">{tool.description}</p>
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




