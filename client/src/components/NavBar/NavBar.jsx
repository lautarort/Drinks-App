import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import style from './NavBar.module.css';
import iconHome from '../../Iconos/icon-Home.png';
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <Link to='/'><img className={style.imgIcono} src={iconHome} alt="icono de home" /></Link>
            <div >
                <SearchBar />
                <Categories />
            </div>

            <div className={style.ctnRegis}>
                <Link to='/carrito'>
                    <BsCart2 className={style.linkCart} />
                </Link>
                <Link className={style.login} to='/login'>
                    <button className={style.btns}>Login</button>
                </Link>
                <Link className={style.register} to='/register'>
                    <button className={style.btns}>Register</button>
                </Link>
            </div>

        </div>
    );
};

export default NavBar;