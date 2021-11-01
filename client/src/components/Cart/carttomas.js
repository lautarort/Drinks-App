//cart

import Alcohol from "../../alcohol.png";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCart, deleteCartItem } from '../../redux/actions/actions';




const Carrito = () => {
    const dispatch = useDispatch();
    const carrito = useSelector( state => state.cart);

    function onClose(id) {
        return dispatch(deleteCartItem(id));
    }

    useEffect(() => {
        dispatch(getCart()));

    }, [dispatch]);

    

    
    return (
        {carrito.map(p => {
        	 <div>
             <div>
                 <button onClick={onClose(p.id)}>X</button>
             </div>
            <Link  to={`/detail/${p._id}`} />
                <div >
                    <img onError={addDefaultSrc}  src={ p.imagen } alt="img no encontrada" />
                </div>
                <div >
                    <h3 >{p.name}</h3>
                </div>
                <div>
                    <p>{p.rating}</p>
                    <p>{p.precio}</p>
                </div>
            
        </div>
        })}
    );
};

export default Carrito;


//actions

export const addCart = (payload) => {
    return {
        type: ADD_CART,
        payload
    }
}

export const getCart = () => {
    return {
        type: GET_CART
    }
  };


export const deleteCartItem  = (id) =>{
    return {
        type: DELETE_CART_ITEM,
        payload: id
    }
} 

//reducer

case ADD_CART:
    return {
        ...state,
        cart: state.cart.concat(action.payload)
    }

case GET_CART :
    return {
        ...state,
        cart: state.cart
    }

case DELETE_CART_ITEM: 
    return {
        ...state,
        cart: state.cart.filter(x => x.id !== action.payload)
    }    