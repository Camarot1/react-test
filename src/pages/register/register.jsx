import React, { useEffect } from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="register-page">
            <main className="main">
                <div className="main__container container">
                    <div className="main__form">
                        <p className="form__title">Регистрация</p>

                        <div className="form__block">
                            <p className="block__text">Логин</p>
                            <input type="text" className="block__input" />
                        </div>

                        <div className="form__block">
                            <p className="block__text">Почта</p>
                            <input type="email" className="block__input" />
                        </div>

                        <div className="form__block">
                            <p className="block__text">Пароль</p>
                            <input type="password" className="block__input" />
                        </div>

                        <div className="form__block">
                            <p className="block__text">Повторите пароль</p>
                            <input type="password" className="block__input" />
                        </div>

                        <a className="form__profile" href="./profile.html">Регистрация</a>
                    </div>
                </div>
            </main></div>
    )
}