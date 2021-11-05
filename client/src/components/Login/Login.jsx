import React, { useState } from 'react';
import style from './Login.module.css';
import {Link} from "react-router-dom";
import {logGoogle} from "../../redux/actions/actions.js"
import {useDispatch} from "react-redux"

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();

   const handleClick = (e)  => {
       
        e.preventDefault()
        console.log("boton hijo de culiadora")
        dispatch(logGoogle());
    }

    return (
        <div className={style.Login}>
            <form className={style.form}>
                <p className={style.titleLogin}><b>INGRESAR </b> </p>
                <div className={style.username}>
                    <label className={style.title}>Usuario</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su usuario o email...'
                        // value={input.username}
                    />
                </div>
                <div className={style.password}>
                    <label className={style.title}>Contraseña</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su contraseña...'
                        // value={input.password}
                    />
                </div>
                <div>
                <button className={style.btn}>INGRESÁ</button>
                </div>
                <div>
                <button onClick={handleClick} className={style.btn}> Ingresa Google</button>
                </div>
                <div className={style.link}>
                    No tenes cuenta? <Link to="/register">Registrate</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;