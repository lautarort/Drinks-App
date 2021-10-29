import React, { useState } from "react";
import style from './Register.module.css';

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    return (
        <div className={style.Register}>
            <h1 className={style.titleRegister}>Introduzca los datos para registrarse</h1>
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
            </form>
        </div>
    );
};

export default Register;