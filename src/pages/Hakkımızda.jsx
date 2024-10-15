import React from 'react'
import Card from 'react-bootstrap/Card';
import {ekip, tarih } from '../helper/data';
import foto from "../assets/board1.jpg"
import fare from '../assets/mouse.png';
import user from "../assets/user.jpg"


const Hakkımızda = () => {
  return (
    <div>
      <div className='bizkimiz m-5 '>
      <div style={{ width: '100%', height: "45vh" }}  >
     <img src={foto} alt="" className='w-100 h-100'  />
   </div>
    <div className='m-5 text-start'>
    <h2 className='fs-1 font-monospace'>Biz Kimiz?</h2>
    <h3 className='fs-3 font-monospace'>Global ölçekli üretim sağlayan bir yazılım şirketiyiz.
</h3>
<p>Şirketimiz 26 Ağustos 2001 yılında, yazılım sektöründe danışmanlık hizmeti vermek üzeri mevcut kurucu ortaklarımız tarafından kurulmuş olup, bir çok uluslar arası ve lokal projede danışmanlık ve uygulama görevlerini gerçekleştirmiştir. 2001 yılında yazılım danışmanlık Şirketi olarak kuruldu 2003 yılında microsoft nav çözüm ortaklığı 2004 yılında sap,logo çözüm ortaklığı 2010 yılında kendi markasıyla yazılımlar üretip lisansladı ve satmaya başladı. 2011 yılında tam bağımsız yazılım firması olarak kendi markasıyla yurt dışına açıldı. 2012 yılında ilk yazılım ihracatını gerçekleştirdi. Romsis Yazılım artık bir dünya markası. 2016 yılında AR-GE birimi hem insan kaynakları olarak hem de teknoloji olarak büyüdü. 2017 Amerika pazarına açılmak için faaliyetler yapıldı. 2018 Amerika’da satış ve pazarlama ofisi kurmak ve şirketleşmek için faaliyetlerde bulunuldu.Vizyonumuzu kurulduğumuz yıl olan 2001 yılında koyarak bu vizyon doğrultusunda azimle ilerlemeye devam ediyoruz. 
</p>

    </div>
      
      </div>


      <div className='tarihce m-5'>
      <div className='m-5 text-start'>
        <h2 className='fs-1 font-monospace'>Tarihçemiz</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto omnis.</h4>
      </div>

      <div className='d-flex flex-wrap gap-3 justify-content-center '>
      {tarih.map((tural)=>{
        const {id, text, title} = tural
        return(
          <Card style={{ width: '12rem' }} className='border-0'>
      <Card.Body key={id}>
        <Card.Title className='fs-3 fw-bold'>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>

        )
      })}


      </div>

      </div>

      <div className='destek m-5 p-5'>
      <h2 className='fs-1 font-monospace'>Romsis Destek Hizmeti</h2>
      <p>
      Romsis kullanıcılarına yönelik destek ve eğitim hizmetleri, Romsis Akademi ve Yetkili Romsis İş Ortakları tarafından sağlanmaktadır. Kullanıcıların bilgi altyapılarında meydana gelen sorun ve ihtiyaçlara anında çözüm geliştirmek amacıyla sunulan bu hizmetler, Proje Danışmanlığı, Kullanıcı Eğitimleri, Uzak Bağlantı, Yerinde Destek, Tele-Destek, Veri Bakımı ile Network ve Veritabanı Danışmanlığı olmak üzere geniş bir yelpazede uygulanmaktadır.
      </p>

      </div>

    
      
        <div className='arge m-5 d-flex flex-wrap justify-content-center align-items-center'>
          <div className='w-75'>
          <h2 className='text-center fs-1 font-monospace'>AR-GE</h2>
            <p>Şirketimiz kazancının %65 ini AR-GE bünyesine yatırarak hem ürünlerini yeni teknolojilerle geliştirip farklılaştırmakta hem de sahadaki müşteri ihtiyaçlarına göre yeni ürünler geliştirerek inovasyonel firma olma karakterini sergilemektedir. Bu kapsamda Hindistan, Romanya, İrlanda, Rusya, Azerbaycan, Amerika ve Estonya da temaslarda bulunarak en güncel teknolojileri oluşturulan partner gruplarıyla karşılıklı paylaşım çerçevesinde alıp ürünlerimizde uygulamaktayız. Araştırma geliştirme birimimizin bu kapsamda rolünün büyük olduğu inovasyon da katkının büyük ölçüde bu birimimize ait olduğunu belirtmek isteriz. Ürünlerimizin ara yüz tasarımlarında üniversitelerin sanat bilimlerindeki bazı hocalardan ve kurumsal kimlik uzmanlarından destek alarak kolektif bir birliktelik sağlayarak ürünlerimizi kullanıcı ara yüzlerini tasarlamaktayız. Ürünlerimizin arka plan geliştirilmesinde en güncel yazılım teknolojileri kullanarak hisli ve sağlıklı bir veri akısı sağlamaktayız.</p>
          </div>
          <img src={fare} alt="" />
        </div>

        <div className='yatırımcı m-5 p-5'>
        <h2 className='fs-1 font-monospace'>Yatırımcı İlişkileri</h2>
        <p>Şirketimiz 2012 yılından itibaren dünya yazılım alanında kendini ispatlamış çeşitli ülkelerin bazı yazılım firmalarıyla partnerlik faaliyeti yapmaktadır. Gerek yurt içi gerekse de yurt dışında bayi ve çözüm ortaklarıyla gerçekleştirdiği çalışmalarla müşteri memnuniyetini en üst seviyede tutmaktadır. 2017 yılına gelindiğinde bir çok yabancı yatırımcının ilgisini çeken şirketimiz kendi ekosistemine ve iç yapış biçimine uygun bir yatırımcı bulamadığı için %100 yerli yazılım şirketi ünvanlını korumaktadır.</p>

        </div>



      <div className='ekip'>
        <h2 className='text-center fs-1 font-monospace'>Ekibimiz</h2>
        <div className='d-flex justify-content-center'>
        <div className="card mb-3 border-0" style={{ maxWidth: 900 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={user} className="img-fluid rounded-pill" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Kadir Kartal</h3>
        <h5 className="card-title">Kurucu, Genel Müdür</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, incidunt.
        </p>
  
      </div>
    </div>
  </div>
</div>

          
        </div>
      </div>

      <div className='d-flex flex-wrap gap-4 justify-content-center'>
      {ekip.map((tura)=>{
        const {id,title1, title2,image} = tura
        return(
          <Card style={{ width: '13rem' }} key={id} className='border-0'>
      <img src={image} alt="" className='rounded-pill' />
      <Card.Body>
        <Card.Title>{title1}</Card.Title>
        <Card.Title>{title2}</Card.Title>
       
   
      </Card.Body>
    </Card>
    

        )
      })}
   

      </div>







    </div>
  )
}

export default Hakkımızda