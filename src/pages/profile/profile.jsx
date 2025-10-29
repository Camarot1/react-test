import React, {useEffect, useState} from 'react'
import './profile.scss'
import { Link } from 'react-router-dom'

export default function Profile() {
    const [login, setLogin] = useState('')

    useEffect(() => {
        // Получаем данные пользователя из localStorage
        const userData = localStorage.getItem('user')
        if (userData) {
            try {
                const user = JSON.parse(userData)
                setLogin(user.login || 'Пользователь')
            } catch (error) {
                console.error('Ошибка при парсинге user данных:', error)
                setLogin('Пользователь')
            }
        } else {
            setLogin('Пользователь')
        }
    }, [])

    return (
        <div className="profile-page">
            <main className="main">
                <div className="main__container container">
                    <div className="main__text">
                        <p className="text__info">Профиль</p>
                        <p className="text__name">{login}</p>
                    </div>

                    <div className="main__order">
                        <div className="order__buttons">
                            <button className="order__button relevant">Активные</button>
                            <button className="order__button finished">Выполнено</button>
                        </div>

                        <div className="order__list">
                            <div className="list__item">
                                <p className="item__title">Название услуги</p>
                                <p className="item__money">1000 руб.</p>
                            </div>

                            <div className="list__item">
                                <p className="item__title">Название услуги</p>
                                <p className="item__money">1000 руб.</p>
                            </div>

                            <div className="list__item">
                                <p className="item__title">Название услуги</p>
                                <p className="item__money">1000 руб.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}