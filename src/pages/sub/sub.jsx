import React from 'react'
import './sub.scss'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function SubContent() {
    return (
        <motion.div className="sub-page"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
        >

            <main className="main">
                <div className="main__container container">
                    <Link to="/catalogSub">
                        <div className="main__back">
                            <img src="./img/row__button.svg" alt="" />
                            <div className="back__title">К каталогу подписок</div>
                        </div></Link>
                    <div className="main__info">
                        <img src="./img/sub__img-big.svg" className="info__img" alt="" />
                        <div className="info__content">
                            <div className="content__title">Купить подписку <span className="content">NAME NAME</span></div>
                            <div className="content__conditions">
                                <p className="condition">Нужен впн</p>
                                <p className="condition">Без передачи аккаунта</p>
                                <p className="condition">Официальные ключи</p>
                                <p className="condition">Моментальная доставка</p>
                            </div>
                        </div>
                    </div>
                    <div className="main__content">
                        <div className="content__price">
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                            <div className="price__block">
                                <div className="block__img"><img src="./img/sub__img-small.svg" alt="" /></div>
                                <div className="block__money">
                                    <p className="money__title">NAME NAME</p>
                                    <p className="money__text">1000₽</p>
                                </div>
                            </div>
                        </div>
                        <div className="content__button">Купить</div>
                        <div className="content__instructions">
                            <p className="instruction__title">Инструкиция</p>
                            <p className="instruction__text">1. Выберите желаемый товар</p>
                            <p className="instruction__text">2. Нажмите кнопку оплатить</p>
                            <p className="instruction__text">3. Следуйте инструкциям на открывшейся странице</p>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}