import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../redux/actions/actions';
import { useState } from 'react';
import style from './CardDetails.module.css';




function CardDetails(props) {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);


    useEffect(() => {
        dispatch(getProductsDetails(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("sin dependecias")
    })

    return (
        <div className={style.ctnSuperior}>
            <div className={style.ctnDescripcion}>
                <h1 className={style.tituloDescripcion}> Decripción de la bebida  </h1>
                <h3 className={style.texDescripcion}>{product.descripcion}</h3>

            </div>
            <img className={style.img} src={product.imagen ? product.imagen : `${product}`} alt="img" />
            <div className={style.ctnCompra}>
                <h1 className={style.titulo}> {product.name} </h1>

                <div className={style.Ctnprecio}>
                    <h2 className={style.precio}> Precio: {product.precio} </h2>
                    <h2 className={style.p}> Categoría de bebida: {product.categoria?.charAt(0).toUpperCase() + product.categoria?.slice(1)} </h2>
                    <h2 className={style.p}> Rating: {product.rating} </h2>
                    <div className={style.contador}>
                        <p className={style.textCantidad}>Cantidad</p>
                        <button className={style.boton} onClick={() => setCount(count - 1)} > - </button>
                        <h4 className={style.count}>{count}</h4>
                        <button className={style.boton} onClick={() => setCount(count + 1)} > + </button>
                        {/* if({count} === 1) disable */}
                    </div>
                </div>

                <div>
                    <button className={style.comprar}>Comprar</button>
                </div>
                <div>
                    <button className={style.añadir}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;