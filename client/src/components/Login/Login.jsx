import React, { useState } from 'react';
import style from './Login.module.css';
import {Link} from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const googleSuccess = async (res) => {
        console.log(res);
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log("Google Sing In was unsuccessful :(")
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
                <GoogleLogin 
                    clientId="747892078799-2pubruaa67kl0km9f73nffj3tq10lrn1.apps.googleusercontent.com"
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <button type="submit" className={style.btn}>INGRESÁ</button>
                </div>
                <div className={style.link}>
                    No tenes cuenta? <Link to="/register">Registrate</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;