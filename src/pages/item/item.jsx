import React, { useEffect } from 'react';
import './item.scss'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

export default function ItemContent() {
    useEffect(() => {
        if (window.Swiper) {
            const swiper = new window.Swiper(".item-swiper", {
                slidesPerView: 'auto',
                freeMode: true,
                breakpoints: {
                    450: { slidesPerView: 1.5 },
                    850: { slidesPerView: 2.4, spaceBetween: 10 },
                    1100: { slidesPerView: 3, spaceBetween: 5 },
                    1300: { slidesPerView: 3 },
                    1600: { slidesPerView: 3 },
                    1900: { slidesPerView: 4 }
                },
                spaceBetween: 3,
            });
        }
    }, []);
    return (
        <motion.div className="item-page"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
        >
            <main className="main">
                <div className="main__container container">
                    <Link to="/catalog"><div className="main__back">
                        <img src="/img/row__button.svg" alt="" />
                        <div className="back__title">К каталогу игр</div>
                    </div></Link>
                    <div className="main__content">
                        <div className="content__galery">
                            <div className="galery__left">
                                <div className="galery__left-img">
                                    <img src="./img/catalog__img-big.svg" alt="" className="left-img" />
                                </div>
                                <select className="galery__left-select">
                                    <option className="select__option select__option-choose" value="0" selected>
                                        Выберите регион товара
                                    </option>
                                    <option className="select__option" value="">
                                        Россия
                                    </option>
                                    <option className="select__option" value="">
                                        Армения
                                    </option>
                                    <option className="select__option" value="">
                                        Азербайджан
                                    </option>
                                    <option className="select__option" value="">
                                        Беларусь
                                    </option>
                                    <option className="select__option" value="">
                                        Украина
                                    </option>
                                </select>
                                <p className="galery__left-rewiews">Крайне положительные (93.67%)</p>
                            </div>
                            <div className="galery__right">
                                <p className="galery__right-title">GAME NAME</p>
                                <ul className="galery__right-tags">
                                    <li className="tag">Шутер</li>
                                    <li className="tag">Мультиплеер</li>
                                    <li className="tag">Песочница</li>
                                </ul>
                                <div className="swiper mySwiper galery__right-slider item-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img className="slider-img one" src="./img/catalog__img-small.svg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="slider-img two" src="./img/catalog__img-small.svg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="slider-img three" src="./img/catalog__img-small.svg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="slider-img four" src="./img/catalog__img-small.svg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="slider-img five" src="./img/catalog__img-small.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="galery__right-choose">
                                    <p className="choose__title">Издание</p>
                                    <select className="choose__select">
                                        <option value="0">-</option>
                                        <option value="1">Standard Edition</option>
                                    </select>
                                    <div className="choose__payment">
                                        <p className="payment__money">
                                            Цена: <span className="money">1000₽</span>
                                        </p>
                                        <button className="payment__button">Купить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__text">
                            <div className="content__text-first">
                                <div className="first__title">Системные требования</div>
                                <div className="first__sys">
                                    <p className="sys__min width">
                                        Минимальные: 64-разрядные процессор и операционная система ОС *: Win 7/8/8.1/10 64bit Процессор: Intel
                                        Core i3-6300t or equivalent [4 or more hardware threads] Оперативная память: 8 GB ОЗУ Видеокарта: NVIDIA
                                        Geforce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX: версии 11 Место на диске: 45 GB
                                    </p>
                                    <p className="sys__rec width">
                                        Рекомендованные: 64-разрядные процессор и операционная система ОС *: Win 7/8/8.1/10 64bit Процессор: Intel
                                        Core i5-6600 or equivalent Оперативная память: 16 GB ОЗУ Видеокарта: NVIDIA Geforce GTX 1060 6GB or AMD
                                        Radeon RX 480 8GB DirectX: версии 11 Место на диске: 45 GB
                                    </p>
                                </div>
                            </div>
                            <div className="content__text-second">
                                <p className="second__title">Описание</p>
                                <p className="second__text">
                                    Максимальное издание Titanfall™ 2 — лучший способ ознакомиться с одним из самых удивительных шутеров 2016
                                    года. В этот комплект входит не только весь контент Эксклюзивного цифрового издания, но и набор «Ключ на
                                    старт». Он немедленно разблокирует все классы Титанов и пилотов, а также предоставляет вам средства, токены
                                    «Двойной опыт» и в придачу особую боевую раскраску для карабина R-201. С таким снаряжением вы сразу освоитесь
                                    на Фронтире. Максимальное издание включает основную игру Titanfall™ 2, контент Эксклюзивного издания (Титаны
                                    Прайм «Скорч» и «Ион», рисунки на корпус из Эксклюзивного
                                </p>
                            </div>
                            <div className="content__text-third">
                                <p className="third__title">Подробнее о покупке</p>
                                <p className="third__text">
                                    Вы приобретаете игру в Steam, которую получите ПОДАРКОМ на Ваш аккаунт. Это происходит автоматически 24\7 без
                                    праздников и выходных. Процесс получения гифта очень простой и занимает пару минут: После оплаты к вам в
                                    друзья Steam добавится бот. Пожалуйста, примите его в друзья, чтобы получить игру. После добавления, вам будет
                                    отправлен подарок в виде игры - нужно принять его. Игра у вас на аккаунте - можно играть.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    )
}