import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = () => {
    
    
    return (
        <div className={style.SearchBar}>
            <input className={style.input} placeholder="Buscar por nombre y marca" />
            <button className={style.btn} >Search</button>
        </div>
    );
};

export default SearchBar;