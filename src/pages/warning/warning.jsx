import React, { useEffect } from 'react'
import './warning.scss'
import { Link } from 'react-router-dom'

export default function WarningContent() {
    return (
        <div className="warning-page">
            <main className="main">
                <div className="main__container container">
                    <div className="main__warning">
                        <div className="warning__title">Внимание!</div>
                        <div className="warning__text">
                            Мы не сохраняем данные пользователей. Данная версия сайта создана только для демонстрации умений.
                            Сайт не нацелен на коммерцию. При попытке регистрации данные никуда не отправляются!
                        </div>
                        <Link to="/login">
                            <div className="warning__button">Я осведомлён</div>
                        </Link>
                    </div>
                </div>
            </main>
            </div>
    )
}