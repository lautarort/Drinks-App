import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';


const Card = (prod) => {
    let p = prod.prod
    console.log('prod', prod.prod.name);
    return (
        <div className={style.Card}>
            <Link className={style.link} to={`/detail/${p._id}`}>
                <div >
                    <img className={style.image} src={p.imagen} alt="img no encontrada" />
                </div>
                <div >
                    <h3 className={style.name}>{p.name}</h3>
                </div >
                <div className={style.PR}>
                    <p className={style.rating}>{p.rating}</p>
                    <p className={style.precio}>{p.precio}</p>
                </div>
            </Link>
            <div >
                <button className={style.btn}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Card;