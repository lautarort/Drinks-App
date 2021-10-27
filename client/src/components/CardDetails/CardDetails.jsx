import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../redux/actions/actions';
// import Nav from '../NavBar/NavBar';
// import style from './CardDetails.module.css';


function CardDetails(props) {

    const dispatch = useDispatch();
    const product  = useSelector((state) => state.product);

    
    useEffect(() => {
        dispatch(getProductsDetails(props.match.params.id));
    }, [dispatch, props.match.params.id]);

  
    return (
        <div>
            <h1>1000</h1>
                <h1> {product.name} </h1>
                <img src={product.imagen? product.imagen : `${product}` } alt="img" /> 
                <h2> {product.precio} </h2>
                <h2> {product.descripcion} </h2>
            
        </div>
    );

    }
    export default CardDetails;

