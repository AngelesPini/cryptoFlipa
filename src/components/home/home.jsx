import React from "react";
import Logo from '../../assets/logo.webp';
import Person1 from '../../assets/carduno.webp';
import Person2 from '../../assets/cardtres.webp';
import Person3 from '../../assets/carddos.webp';
import Coins from '../../assets/bitcoin.webp';
import Nosotros from '../../assets/nosotros.webp';
import Ofrecemos from '../../assets/ofrecemos.webp';
import Soluciones from '../../assets/soluciones.webp';

import Contactate from '../../assets/contactate.webp';

import '../../scss/app.scss';
import Fb from '../../assets/facebook.svg';
import Ig from '../../assets/instagram.svg';
import Mail from '../../assets/email.svg';
import Carrusel from '../carrusel/carrusel';

const Home = () => {
    return(
        <>
        <div className="body_home__general">  
        <div className="body_home__general-hero">
        <div className="body_home__general-nav">
        <div className="nav_logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="nav_sections">
            <a href="#">NOSOTROS</a>
            <a href="#">CONTACTO</a>
        </div>
        </div>  

            <div className="body_home__general-titulo">
                <div className="titulo_textos">
                <h1>
                    CRYPTO IS MY LIFE, CRYPTO OR DIE
                </h1>
                <div className="titulo_texos_segundo">
                <h2>
                    Lorem Ipsum is simply dummy the printing and type
 
                </h2>          
                <div className="titulo_IMG">
                <img src={Coins} alt="monedas" />  
                </div>            
                </div>
                  
                </div>
                <div className="titulo_IMG__desktop">
                <img src={Coins} alt="monedas" /> 
                </div>

                
            </div>            
        </div>

            <div className="body_home__general-main">
                <div className="main_cards">
                    <div className="cards_title">
                    <h3>Beneficios</h3>                        
                    </div>
                <div className="cards_cards__contenedor">


                <div className="main_card">


                        <img src={Person1} alt="person" />

                        <div className="main_card__body-textos">
                            <h4>
                            SIMPLY LETSGO
                            </h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                    
                </div>
                <div className="main_card">


                        <img src={Person2} alt="person" />

                        <div className="main_card__body-textos">
                            <h4>
                            SIMPLY LETSGO
                            </h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                </div>

                <div className="main_card">


                        <img src={Person3} alt="person" />

                        <div className="main_card__body-textos">
                            <h4>
                            SIMPLY LETSGO
                            </h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                </div>
                </div>     
                </div>
                <div className="main-AboutUs">
                    <div className="aboutUs_nosotros">
                    <div className="main_AboutUs__texto">
                    <h5>Nosotros</h5>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>

                    </div>
                    <div className="main_AboutUs__IMG">
                            <img src={Nosotros} alt="nosotros" />
                        </div>
                    </div>


                    <div className="aboutUs_ofrecemos">

                    <div className="main_AboutUs__texto">
                    <h5>Ofrecemos</h5>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>

                    </div>
                    <div className="main_AboutUs__IMG">
                            <img src={Ofrecemos} alt="ofrecemos" />
                        </div>
                    </div>



                    <div className="aboutUs_soluciones">

                    <div className="main_AboutUs__texto">
                    <h5>Soluciones</h5>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>

                    </div>
                    <div className="main_AboutUs__IMG">
                            <img src={Soluciones} alt="soluciones" />
                        </div>
                    </div>
                </div>


                    <div className="main-testimonios">
                    <div className="main_testimonios__hero">
                    <h5>Testimonios</h5>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>

                    </div>



                    <div className="testimonios_carrusel"><Carrusel/></div>



                    </div>


                <div className="main_contacto__contenedor">

                <div className="main_contacto__texto">
                <img src={Contactate} alt="contactate" />
                <div className="contacto_texto">
                    <h5>Contactate</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>                    
                </div>

                </div>                 
                <div className="main_contacto__button">
                <button className="main_texto__contacto-boton">Escribinos</button>
                </div>   
                </div>

            </div>
            <div className="body_home__general-footer">
                <div className="footer_logo__marca">
                    <img src={Logo} alt="logo" />
                    <p>CRYPMART</p>
                </div>
                <div className="footer_icons">
                    <a href="#"><img src={Fb} alt="facebook" /></a>
                    <a href="https://www.instagram.com/flipa.ar/"  target="blank"><img src={Ig} alt="instagram" /></a>
                    <a href="#"><img src={Mail} alt="email" className="email_img"/></a>
                </div>
                <div className="footer_texto">
                    <p>Somos <a href="https://flipa.ar/" target="blank"> FLIPA </a>  - Todos los Derechos Reservados</p>
                </div>
            
            
            
            </div>
        </div>
        </>
    )
}

export default Home;