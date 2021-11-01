import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, unmountGet } from '../../redux/actions/actions';
import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = () => {
    const dispatch = useDispatch();
    const { products } = useSelector( state => state);

    useEffect(() => {
        dispatch(getProducts({}));
        dispatch(unmountGet());
    }, [dispatch]);

    // console.log('products', products);
    // console.log('getProducts', getProducts())
    return (
        <div className={style.Cards}>{
                products && products.map(prod => <Card key={prod.id} prod={prod} />)
            }
        </div>
    );
};

export default Cards;