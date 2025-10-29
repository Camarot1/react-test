import React, { useEffect, useState } from 'react'
import './catalog.scss'
import { Link } from 'react-router-dom'

export default function CatalogContent() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Ошибка загрузки:", err))
  }, [])
  
  return (
    <div className="catalog-page">
      <main className="main">
        <div className="main__container container">
          <div className="top">
            <p className="top__title">Лидеры продаж</p>
            <div className="top__block position__block">
              {cards.map((card) => (
                <Link to={`/item/${card.id}`} key={card.id}>
                  <div className="row__item">
                    <img src="./img/catalog__img-big.svg" alt={card.title} />
                    <p className="item__title">{card.title}</p>
                    <div className="item__price">
                      <p className="price-now">{card.priceNew}₽</p>
                      {/* priceOld оставлен в структуре но скрыт */}
                      {/* <p className="price-old">{card.priceOld}</p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}