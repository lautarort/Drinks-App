import React, {Fragment, useState} from "react";
import Cart from "./Cart";
import Items from "./Items";

const Epp = () => {
//Estado de los items
    const [allProducts, setAllProducts] = useState([ 
       {name:"Vodka", precio:"$250", id: 1},
       {name:"Gancia", precio:"$450", id: 2},
       {name:"Fernet", precio:"$350", id: 3},

    ])

//Estado del carrito
    const [cart, setCart] = useState([]);

    return ( 
        <Fragment>
           <h3>Bebida</h3>
           {allProducts.map((products) => ( 
               <Items 
                   key={products.id}
                   products={products}
                   cart={cart}
                   setCart={setCart}
                   allProducts={allProducts}
               />
           ))}
           <Cart 
                cart={cart}
                setCart={setCart}
           />
        </Fragment>
    )
}

export default Epp;
