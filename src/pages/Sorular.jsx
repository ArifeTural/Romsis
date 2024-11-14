import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import "../css/kurumsal.css";

const Sorular = () => {

  const soruCevap = [
    {
      id: 1,
      question: 'Özel Yazılım Geliştirme Süreçleri Nelerdir?',
      answer: 'Özel yazılım geliştirme süreçleri, kullanıcı ihtiyaçlarına en uygun çözümleri sunmayı hedefler. Bu süreçler gereksinim analizi, tasarım, geliştirme, test, uygulama ve bakım & destek adımlarından oluşur.'
    },
    {
      id: 2,
      question: 'Web Kodlama Nasıl Yapılır? Hangi Diller Kullanılır?',
      answer: 'Web kodlama genellikle HTML, CSS ve JavaScript kullanılarak yapılır. HTML sayfanın yapısını oluşturur, CSS sayfanın tasarımını düzenler ve JavaScript sayfanın dinamik özelliklerini yönetir.'
    },
    {
      id: 3,
      question: 'Web Sitesi Geliştirme Süreçleri Nelerdir?',
      answer: 'Web sitesi geliştirme planlama, tasarım, geliştirme, test, yayınlama ve bakım aşamalarından oluşur. Her aşama, sitenin sorunsuz çalışmasını ve hedeflere uygun olmasını sağlar.'
    },
    {
      id: 4,
      question: 'Kişiselleştirilebilir ve Geliştirilebilir Yazılımlar Nelerdir?',
      answer: 'Kişiselleştirilebilir yazılımlar, kullanıcıların ihtiyaçlarına göre uyarlanabilir. Geliştirilebilir yazılımlar ise kullanıcıların yazılım üzerinde değişiklik yapabilmesine ve yeni özellikler ekleyebilmesine olanak tanır.'
    },
    {
      id: 5,
      question: 'Entegrasyon Hizmeti Nedir?',
      answer: 'Entegrasyon hizmeti, farklı yazılım sistemlerinin birlikte çalışmasını sağlar. Bu sayede işletmelerin veri akışını optimize ederek süreçlerini daha verimli hale getirir.'
    },
    {
      id: 6,
      question: 'Landing Page Nedir? Ne İşe Yarar?',
      answer: 'Landing page (açılış sayfası), ziyaretçileri belirli bir amaç doğrultusunda yönlendiren özel bir sayfadır. Genellikle ürün tanıtımları veya form doldurma gibi işlemleri teşvik etmek için kullanılır.'
    },
    {
      id: 7,
      question: 'Web Tasarım ve Web Yazılım Arasındaki Farklar Nelerdir?',
      answer: 'Web tasarım estetik ve kullanıcı deneyimi odaklıdır. Web yazılım ise arka plan işlevselliği ve teknik altyapı ile ilgilenir.'
    },
    {
      id: 8,
      question: 'Kurumsal Web Sitesi Nedir?',
      answer: 'Kurumsal web sitesi, bir işletmenin dijital dünyadaki yüzüdür. Şirketin ürün ve hizmetlerini tanıtır, iletişim bilgilerini sağlar ve marka imajını güçlendirir.'
    },
    {
      id: 9,
      question: 'İnternet Reklamcılığı Nedir?',
      answer: 'İnternet reklamcılığı, dijital platformlar aracılığıyla ürün veya hizmetlerin tanıtımını yapar. Amaç, hedef kitleye ulaşmak ve dönüşüm oranlarını artırmaktır.'
    },
    {
      id: 10,
      question: 'Yazılımların Kurulumu İçin Nasıl Bir Kurulum Gerekiyor?',
      answer: 'Romsis yazılımlarının kurulumu için sistem gereksinimlerini kontrol etmeniz, gerekli lisansların temin edilmesi, veritabanı yapılandırması ve sistem ayarlarının yapılması gerekmektedir. Uzman ekibimiz, bu süreçte size rehberlik eder.'
    },
    {
      id: 11,
      question: 'Sunduğunuz Çözüm Alanları Nelerdir?',
      answer: 'Romsis olarak bulut tabanlı yazılımlar, ERP sistemleri, depo yönetimi (WMS), satın alma yönetimi, veri yönetimi ve MRO gibi çeşitli çözüm alanları sunuyoruz. Ayrıca özel yazılım geliştirme ve danışmanlık hizmetleri de sağlıyoruz.'
    },
    {
      id: 12,
      question: 'Web Tasarım Süreci Nasıl İşler?',
      answer: 'Web tasarım süreci, ihtiyaç analizi, tasarım, geliştirme ve test aşamalarından oluşur. Müşteri beklentileri belirlenir, tasarım yapılır, site kodlanır ve test edilerek yayına alınır.'
    },
    {
      id: 13,
      question: 'Web Tasarımın Yararları Nedir?',
      answer: 'Web tasarımı, işletmenizin çevrimiçi varlığını güçlendirir, marka imajınızı geliştirir ve potansiyel müşterilere ulaşmanıza yardımcı olur. Kullanıcı dostu bir site, ziyaretçilerin sitenizde daha uzun süre kalmasını sağlar.'
    },
    {
      id: 14,
      question: 'Hazır Web Tasarım ile Özel Web Tasarım Arasında Fark Nedir?',
      answer: 'Hazır web tasarım şablonlar kullanarak hızlı ve maliyet etkin bir çözüm sunar. Özel web tasarım ise işletmenizin ihtiyaçlarına uygun, tamamen özelleştirilmiş bir tasarım sağlar.'
    },
    {
      id: 15,
      question: 'Neden Romsis Yazılım Web Tasarım Yaptırmalıyım?',
      answer: 'Romsis, deneyimli bir ekip ile kaliteli, kullanıcı dostu ve SEO optimizasyonlu web tasarımları sunmaktadır. Teknik destek ve danışmanlık hizmetlerimizle sürecin her aşamasında yanınızdayız.'
    }
  ];

  const [show, setShow] = useState(null);

  // Toggle show/hide answer
  const toggleShow = (id, event) => {
    event.preventDefault(); // Sayfa kaymasını engeller
    setShow(show === id ? null : id); // Aynı id'yi tekrar tıklarsan cevap kapanır, farklı id ise açılır
  };

  return (
    <div className='soru-ana'>
      <div className='d-flex flex-column justify-content-center'>
        <h2 className='text-center m-5 sorular-baslik'>SIKÇA SORULAN SORULAR</h2>
        {soruCevap.map(({ id, question, answer }) => (
          <Container className='soru-cont p-2' key={id}>
            <div className="kart-cont card w-100 mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                <p className="card-text kart-baslik">
                  {id} - {question}
                </p>
                {show !== id ? (
                  <button
                    className="icon-btn"
                    onClick={(event) => toggleShow(id, event)} // Prevent default behavior and toggle answer visibility
                    aria-expanded={show === id ? "true" : "false"}
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                ) : (
                  <>
                    <div className="card w-100 border-0">
                      <div className="ikinci-kart">
                        <p className="kart-yazi card-text">{answer}</p>
                        <button
                          className="icon-btn"
                          onClick={(event) => toggleShow(id, event)} // Prevent default behavior and toggle answer visibility
                          aria-expanded="true"
                        >
                          <i className="fa-solid fa-arrow-up"></i>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default Sorular;


