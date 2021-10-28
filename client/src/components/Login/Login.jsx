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
                <div className={style.username}>
                    <label className={style.tlUsrName}>Username:</label>
                    <input className={style.inputName}
                        type="text"
                        placeholder='Your username o email...'
                        value={input.username}
                    />
                </div>
                <div className={style.password}>
                    <label className={style.tlPassword}>Password:</label>
                    <input className={style.inputPassword}
                        type="text"
                        placeholder='Your password...'
                        value={input.password}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;