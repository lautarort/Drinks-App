import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails, unmountGet, addCart } from '../../redux/actions/actions';
import { useState } from 'react';
import style from './CardDetails.module.css';
import Rating from '../Rating/Rating';
import Review from '../Review/Review'


function CardDetails(props) {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const { id } = props.match.params;

    useEffect(() => {
        dispatch(getProductsDetails(id));
        return () => {
            dispatch(unmountGet());
        };
    }, [dispatch, id]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("sin dependecias")
    })

    // const handleAddToCart = (product) => {
    //     dispatch(addCart(product))
    // }

    return (
        <div className={style.ctnSuperior}>
            <div className={style.ctnDetalles}>
                <div>
                    <img className={style.img} src={product.imagen ? product.imagen : `${product}`} alt="img" />
                </div>


                <div className={style.ctnCompra}>
                    <h1 className={style.titulo}> {product.name} </h1>

                    <div className={style.Ctnprecio}>
                        <h2 className={style.precio}> {product.precio} </h2>
                        <h2 className={style.p}>  {product.categoria?.charAt(0).toUpperCase() + product.categoria?.slice(1)} </h2>
                        <h2 className={style.p}><Rating rating={product.rating} numReviews={5} /></h2>
                    </div>
                    <div className={style.ctnDescripcion}>
                        <h1 className={style.tituloDescripcion}> Decripción de la bebida  </h1>
                        <h3 className={style.texDescripcion}>{product.descripcion}</h3>

                    </div>
                    <div className={style.contador}>
                        <p className={style.textCantidad}>Cantidad</p>
                        <div className={style.ctnBtn} >
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
            <div className={style.review}>
                <Review id={id} />
            </div>

        </div>
    );
}

export default CardDetails;