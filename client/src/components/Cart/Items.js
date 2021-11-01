import React from "react";

const Items = ({allProducts, cart, setCart, products}) => {
    //Guardo los propiedades del estado de los ítems
    const {name, precio, id} = products;

    //Función para añadir al carrito
    const addBebida = (id) => {
        const item = allProducts.filter((product) => product.id === id)
        alert('Tu producto fue añadido al carrito 😎')
        setCart([...cart, ...item])
    }

    //Función para eliminar del carrito
    const delBebida = (id) => {
        const item = cart.filter((product) => product.id !== id)
        alert('Tu producto fue eliminado del carrito 👍')
        setCart(item);
    }

    //Función para confimar en el carrito



    return (
        <div>
            <ul>
                <li> {name} </li>
                <li> {precio} </li>
                {allProducts ? (
                        <button type="button" onClick={() => addBebida(id)}>
                            Agregar al carrito
                        </button>
                    ) : ( 
                    <div>
                        <button type="button" >
                            Confirmar
                        </button>
                        <button type="button" onClick={() => delBebida(id)} >
                        Eliminar
                        </button>
                    </div>
                    )}

                
            </ul>
        </div>

    )
   
}

export default Items;
