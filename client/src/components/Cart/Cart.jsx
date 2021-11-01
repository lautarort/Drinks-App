import React from "react";
import NavBar from "../NavBar/NavBar";
import style from './Cart.module.css';
import Items from "./Items";

const Cart = ({cart, setCart}) => {


    return (
        <div className={style.Cart}>
            <NavBar />
            <h3>Carrito</h3>

            {cart.length === 0 ? (<p>0</p>) : (cart.map(
                (products => <Items 
                    key={products.id} 
                    products={products} 
                    cart={cart}
                    setCart={setCart}
                    />)  
            ))}
            

        </div>
    );
};

export default Cart;