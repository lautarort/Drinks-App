import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
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
                    <Link to="/combos" ><button className={style.btn}>Combos</button> </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Second slide label</h1>
                    <p className={style.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className={style.btn}>Vinos </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.ctn}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                />

                <Carousel.Caption className={style.ctntxt}>
                    <h1>Third slide label</h1>
                    <p className={style.txt}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className={style.btn}>Entra </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
};

export default CarouselCombo;