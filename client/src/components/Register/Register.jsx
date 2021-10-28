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
            <form className={style.form}>
                <div className={style.username}>
                    <label className={style.tlUsername}>Username:</label>
                    <input className={style.inputUsername}
                        type="text"
                        placeholder='Your username...'
                        value={input.username}
                    />
                </div>
                <div className={style.email}>
                    <label className={style.tlEmail}>Email:</label>
                    <input className={style.inputEmail}
                        type="text"
                        placeholder='Your email...'
                        value={input.email}
                    />
                </div>
                <div className={style.password}>
                    <label className={style.tlPassword}>Password:</label>
                    <input className={style.inputPassword}
                        type="text"
                        placeholder='Your Password...'
                        value={input.password}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;