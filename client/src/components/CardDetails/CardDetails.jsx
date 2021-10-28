import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../redux/actions/actions';
import { useState } from 'react';
// import Nav from '../NavBar/NavBar';
import style from './CardDetails.module.css';




function CardDetails(props) {

    const dispatch = useDispatch();
    const product  = useSelector((state) => state.product);

    
    useEffect(() => {
        dispatch(getProductsDetails(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("sin dependecias")
    })
    

  
    return (
                <div className={style.all}>
                <div className={style.h1}>
                <img className={style.img} src={product.imagen? product.imagen : `${product}` } alt="img" /> 
                {/* <h2 className={style.descripcion}> Decripción de la bebida:  </h2> */}
                <h3 className={style.oneDescripcion}>{product.descripcion}</h3> 
                </div>
                <div className={style.shortDes}>
                <h1 className={style.titulo}> {product.name} </h1>
                <h2 className={style.precio}>  {product.precio} </h2>
                <h2 className={style.categoria}>  {product.categoria} </h2>
                <h2 className={style.rating}>  {product.rating} </h2>
                
                <div className={style.cart}>
                <div className={style.contador}>
                <button  className={style.boton} onClick={() => setCount(count - 1)} > - </button>
                <h4 className={style.count}>{count}</h4>
                <button className={style.boton}  onClick={() => setCount(count + 1)} > + </button>
                {/* if({count} === 1) disable */}
                </div>
                <div>
                <button className={style.comprar}>Comprar</button>
                </div>
                <div>
                <button className={style.añadir}>Agregar al carrito</button>
                </div>
                </div>
                </div>
            
        </div>
    );

    }
    export default CardDetails;

