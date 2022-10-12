import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Senor from '../../assets/senor.webp';
import Moneda from '../../assets/cryptotestimonios.webp';
import '../../scss/app.scss';

function CarrouselTestimonios() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="testimonios_testimonio__contenedor">
        <div className="testimonio_foto">
        <img src={Senor} alt="señor" />
        </div>
        <div className="testimonios_testimonio__texto">
        <img src={Moneda} alt="" />
        <h5>I 💛 CRYPTO</h5>
        <p className='texto_carousel'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
        <span>Jonh Doe - Florida</span>
        </div>                        
        </div>

      </Carousel.Item>

      <Carousel.Item>
      <div className="testimonios_testimonio__contenedor">
        <div className="testimonio_foto">
        <img src={Senor} alt="señor" />
        </div>
        <div className="testimonios_testimonio__texto">
        <img src={Moneda} alt="" />
        <h5>I 💛 CRYPTO</h5>
        <p className='texto_carousel'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
        <span>Jonh Doe - Florida</span>
        </div>                        
        </div>

      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonios_testimonio__contenedor">
        <div className="testimonio_foto">
        <img src={Senor} alt="señor" />
        </div>
        <div className="testimonios_testimonio__texto">
        <img src={Moneda} alt="" />
        <h5>I 💛 CRYPTO</h5>
        <p className='texto_carousel'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
        <span>Jonh Doe - Florida</span>
        </div>                        
        </div>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselTestimonios;