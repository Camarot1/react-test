import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './notFound.scss';

export default function NotFound() {
    return (
        <motion.div 
            className="not-found-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <h2 className="not-found-subtitle">Страница не найдена</h2>
                    <p className="not-found-text">
                        К сожалению, запрашиваемая страница не существует или была перемещена.
                    </p>
                    <div className="not-found-actions">
                        <Link to="/" className="not-found-button primary">
                            Вернуться на главную
                        </Link>
                        <Link to="/catalog" className="not-found-button secondary">
                            Перейти в каталог
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}