import React, { useState } from 'react';
import style from './Login.module.css';

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    return (
        <div className={style.Login}>
            <form className={style.form}>
                <h1 className={style.titleLogin}>Por favor loguearse con su usuario</h1>
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
            </form>
        </div>
    );
};

export default Login;