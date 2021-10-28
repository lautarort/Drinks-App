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
            
                <h1 className={style.titulo}> {product.name} </h1>
                <img className={style.img} src={product.imagen? product.imagen : `${product}` } alt="img" /> 
                <h2 className={style.precio}> Precio: {product.precio} </h2>
                <h2 className={style.categoria}> Categoría de bebida: {product.categoria} </h2>
                <h2 className={style.rating}> Rating: {product.rating} </h2>
                <h2 className={style.descripcion}> Decripción de la bebida:  </h2>
                <h3 className={style.oneDescripcion}>{product.descripcion}</h3> 
            
            <div>
                <button>Comprar</button>
            </div>
            <div>
                <button>Añadir al carrito</button>
                </div>
            <div>
                <button onClick={() => setCount(count + 1)} > + </button>
                <button onClick={() => setCount(count - 1)} > - </button>
                <h4>{count}</h4>
            </div>
                
            
        </div>
    );

    }
    export default CardDetails;

