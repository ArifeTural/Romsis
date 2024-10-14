import Carousel from 'react-bootstrap/Carousel';
import { data, yazilim } from "../helper/data";

function Home() {
  return (
    <div>
      {/* SLAYT */}
      <div className='carousel'>
        <div className='carousel-bg'></div> {/* Arka plan katmanı */}
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

      {/* Dinamik veri çekimi */}
      <div className='container'>
  {yazilim.map((yz, index) => {
    const { image, id, title, text } = yz;
    return (
      <div key={id} className={`content content${index + 1}`} style={{ backgroundImage: `url(${image})` }}>
        <h3 className='content-h3'>{title}</h3>
        <p className='content-p'>{text}</p>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default Home;


