import Carousel from 'react-bootstrap/Carousel';
import { data, yazilim } from "../helper/data";
import { referans } from '../helper/referans';

function Home() {
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
      <div><h2>Ne Yapıyoruz ?</h2></div>
      <div className='container'>
  {yazilim.map((yz, index) => {
    const { image, id, title, text } = yz;
    return (
      <div key={id} className={`content content${index + 1}`} style={{ backgroundImage: `url(${image})`}}>
        <h3 className='content-h3'>{title}</h3>
        <p className='content-p'>{text}</p>
      </div>
    );
  })}
</div>






{/* REFERANSLAR */}
<div className='text-center'>
  <h2 ><a href="" className='h-refe fw-bolder  fs-1 text-secondary' > İş Ortaklarımız</a></h2>
</div>
<div className='referans'>
{referans.map((arife)=>{
  const {id, image} = arife
  return(
    <div className="referans-card" style={{ width: "5rem" }} key={id}>
  <img src={image} className="card-img-top" alt="..." />

</div>

  )
})}

</div>

    </div>
  );
}

export default Home;


