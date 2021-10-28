import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import style from './NavBar.module.css';
import icon from '../../Iconos/icon-Cart.png';
import iconHome from '../../Iconos/icon-Home.png';

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <Link to='/'><img className={style.imgIcono} src={iconHome} alt="icono de home" /></Link>
            <div className={style.SC}>
                <SearchBar />
                <Categories />
            </div>
            <Link className={style.linkCart} to='/carrito'>
                <img className={style.icono} src={icon} alt="icono de carrito" />
            </Link>
            <Link className={style.login} to='/login'>
                <button className={style.btns}>Login</button>
            </Link>
            <Link className={style.register} to='/register'>
                <button className={style.btns}>Register</button>
            </Link>
        </div>
    );
};

export default NavBar;