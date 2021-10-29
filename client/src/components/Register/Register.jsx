import React, { useState } from "react";
import style from './Register.module.css';
import {Link} from "react-router-dom";

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    return (
        <div className={style.Register}>
            <p className={style.titleRegister}><b>REGISTRARSE</b></p>
            <form className={style.form}>
                <div className={style.username}>
                    <label className={style.title}>Nombre de usuario</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su nombre de usuario...'
                        // value={input.username}
                    />
                </div>
                <div className={style.email}>
                    <label className={style.title}>Email</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su email...'
                        // value={input.email}
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
                <button className={style.btn}>REGISTRARSE</button>
                </div>
                <div className={style.link}>
                    Ya tenes cuenta?  <Link to="/login">Ingresá</Link>
                    </div>
            </form>
        </div>
    );
};

export default Register;