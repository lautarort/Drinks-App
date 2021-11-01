import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import style from './CarouselCombo.module.css';
import { Link } from 'react-router-dom'

const CarouselCombo = () => {
    return (

        <Carousel className={style.ctnSup}>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className={style.ctntxt} >
                    <h1>Sabias que?</h1>
                    <p className={style.txt}>Tenemos muchos combos para que disfrutes justo a amigos</p>
                    <Link to="/combos" ><button className={style.btn}>Entrar</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Vinos tintos, blancos, rosados…?</h1>
                    <p className={style.txt}>Seleccione entre una gran variedad de vinos, de mucha calidad y algunos vinos que solo se elaboran en solo una parte del planeta</p>
                    <button className={style.btn}>Entrar</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Amante del Whisky? </h1>
                    <p className={style.txt}>Nunca lo has probado y te quieres dar un capricho? No te preocupes… aquí podrás encontrar ese que tanto añoras.  </p>
                    <Link to="/whisky"><button className={style.btn}>Entrar</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
};

export default CarouselCombo;