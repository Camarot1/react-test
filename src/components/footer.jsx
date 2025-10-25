import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <div className="footer__contact">
            <p className="contact__title title">Связь с нами</p>
            <ul className="contact__list footer__list">
              <a href="https://t.me/cmrt_aao"><li className="footer__el"><img src="/img/telegram2.svg" className="el__img" alt="" /><p className="el__text">Поддержка покупателей</p></li></a>
              <a href="https://t.me/cmrt_aao"><li className="footer__el"><img src="/img/telegram2.svg" className="el__img" alt="" /><p className="el__text">Сотрудничество</p></li></a>
            </ul>
          </div>
          <div className="footer__about">
            <p className="about__title title">Покупателям</p>
            <ul className="about__list footer__list">
              <li className="footer__el"><a href="#"><p className="el__text">Часто задаваемые вопросы</p></a></li>
              <li className="footer__el"><a href="#"><p className="el__text">Публичная оферта</p></a></li>
            </ul>
          </div>
        </div>
        <div className="footer__logo">
          <a href="./index.html">
            <p className="logo__name">SWAGA</p>
          </a>
          <p className="logo__date">2025</p>
        </div>
      </div>
    </footer>
  );
}