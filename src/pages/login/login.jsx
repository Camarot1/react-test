import React, { useEffect } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-page">
            <main className="main">
                <div className="main__container container">
                    <div className="main__form">
                        <p className="form__title">Вход</p>
                        <input type="text" placeholder="login" className="form__login form__input" />
                        <input type="text" placeholder="password" className="form__password form__input" />
                        <Link to="/profile">
                            <button className="form__button">Вход</button>
                        </Link>
                        <Link to="/register" className="form__registration">Регистрация</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}