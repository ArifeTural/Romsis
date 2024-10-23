import Carousel from 'react-bootstrap/Carousel';
import { data, yazilim } from "../helper/data";
import { referans } from '../helper/referans';
import { steps } from '../helper/yazilim';
import { Link } from 'react-router-dom';

function Home() {
  const phoneNumber = '905367409930'; 
  const message = 'Merhaba, yardımcı olabilir misiniz?';

  const handleClick = () => {
    console.log("WhatsApp yönlendirmesi yapılıyor...");
  };

  return (
    <div>
      {/* SLAYT */}
      <div className='carousel'>
        <div className='carousel-bg'></div>
        <Carousel className='carousel-content'>
          {data.map((item) => {
            const { image, id } = item;
            return (
              <Carousel.Item interval={5000} key={id}>
                <video autoPlay muted loop controls className='h-video'>
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      {/* NELER YAPIYORUZ */}
      <div className='container'>
        {yazilim.map((yz, index) => {
          const { image, id, title, text, link } = yz;
          return (
            <div key={id} className={`content content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
              <Link to={link}>
                <h3 className='content-h3'>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="container my-4">
        <h2 className='fs-1 fw-bolder text-center text-danger tasarim-baslikk'> Nasıl Çalışıyoruz ?</h2>
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
        <h2><a href="" className='h-refe fw-bolder fs-1 text-danger'> İş Ortaklarımız</a></h2>
      </div>
      <div className='home-referans'>
        {referans.map((arife) => {
          const { id, image } = arife;
          return (
            <div className="referans-card" style={{ width: "7rem" }} key={id}>
              <img src={image} className="card-img-top border rounded-2" alt="..." />
            </div>
          );
        })}
      </div>

      <div className="whatsapp-support">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
          onClick={handleClick} 
        >
          <i className="fab fa-whatsapp "></i> 
          <br />
          <p className='whatsapp-par'>WhatsApp ile İletişime Geçin</p>
          
        </a>
      </div>
    </div>
  );
}

export default Home;



