import React from 'react';
import { Helmet } from 'react-helmet';

const UIUX = () => {
  return (
    <div className="">
      <Helmet>
        <title>UI/UX Tasarımı | Kullanıcı Deneyimini Yeniden Tanımlayın</title>
        <meta name="description" content="UI/UX tasarım sürecimiz ile kullanıcı deneyimini en üst düzeye çıkarın. Projeleriniz için en iyi tasarım çözümlerini sunuyoruz." />
        <meta name="keywords" content="UI/UX, kullanıcı deneyimi, tasarım, prototipleme, kullanıcı testleri, tasarım araçları" />
      </Helmet>


      <section className='uiux-cont'>

      <h1 className="display-4">UI/UX tasarımında en iyi sonuçlar için bizimle çalışın.</h1>
      
      <h2 className="fs-3">Güncel Tasarım Trendleri:</h2>
      <ul>
        <li>1. Minimalist Tasarım</li>
        <li>2. Karanlık Mod</li>
        <li>3. Mikro Etkileşimler</li>
        <li>4. Sesli Arayüzler</li>
        <li>5. Kişiselleştirilmiş Deneyimler</li>
      </ul>
      </section>

      {/* UI/UX Süreci */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-5 mb-4">UI/UX Sürecimiz</h2>
          <div className="row">
            {/* Kullanıcı Araştırması Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
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
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">2. Tanımlama ve Analiz</h5>
                  <ul className="card-text">
                    <li>Kullanıcı ihtiyaçlarını belirlemek için veri analizi</li>
                    <li>Kullanıcı profilleri ve yolculuk haritaları oluşturma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Prototipleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
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
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">4. Tasarım</h5>
                  <ul className="card-text">
                    <li>Renk paletleri ve tipografi belirleme</li>
                    <li>Tasarımın estetik ve işlevsel yönlerini oluşturma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Kullanıcı Testleri Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
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
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">6. İterasyon</h5>
                  <ul className="card-text">
                    <li>Geri bildirimlere dayanarak tasarımı geliştirme</li>
                    <li>Sürekli revizyon ve iyileştirme süreçleri</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Geliştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">7. Geliştirme</h5>
                  <ul className="card-text">
                    <li>Tasarımın geliştirilmesi ve kodlama süreci</li>
                    <li>Nihai ürünün oluşturulması</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Yayınlama ve İzleme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">8. Yayınlama ve İzleme</h5>
                  <ul className="card-text">
                    <li>Ürünün pazara sürülmesi</li>
                    <li>Kullanıcı geri bildirimlerinin izlenmesi</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Sürekli İyileştirme Kartı */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">9. Sürekli İyileştirme</h5>
                  <ul className="card-text">
                    <li>Yeni kullanıcı ihtiyaçlarına göre güncellemeler</li>
                    <li>Ürünü sürekli olarak geliştirme</li>
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
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img src="path/to/figma-image.jpg" className="card-img-top" alt="Figma" />
          <div className="card-body">
            <h5 className="card-title">Figma</h5>
            <p className="card-text">
              Bulut tabanlı tasarım aracı. Gerçek zamanlı işbirliği imkanı ile ekipler arasında kolayca paylaşım yapılabilir.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img src="path/to/adobe-xd-image.jpg" className="card-img-top" alt="Adobe XD" />
          <div className="card-body">
            <h5 className="card-title">Adobe XD</h5>
            <p className="card-text">
              Prototip oluşturma ve kullanıcı arayüzü tasarımı için kullanılır. Görsel tasarımları kolayca paylaşma imkanı sunar.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img src="path/to/zeplin-image.jpg" className="card-img-top" alt="Zeplin" />
          <div className="card-body">
            <h5 className="card-title">Zeplin</h5>
            <p className="card-text">
              Tasarımcılar ve geliştiriciler arasında köprü görevi gören bir araç. Tasarımları geliştiricilere iletme konusunda kolaylık sağlar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default UIUX;




