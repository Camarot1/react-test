// pages/admin/admin.page.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    // Базовая проверка прав администратора
    if (!user || user.isAdmin !== 1) {
        return (
            <div className="admin-page">
                <div className="admin-page__access-denied">
                    <h1>Доступ запрещен</h1>
                    <p>Требуются права администратора</p>
                    <button onClick={() => navigate('/login')}>Войти</button>
                </div>
            </div>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="admin-page">
            <main className="admin-page__main">
                <div className="admin-page__container">
                    <div className="admin-page__header">
                        <h1 className="admin-page__title">Админ панель</h1>
                        <div className="admin-page__user-info">
                            <p className="admin-page__user-login">Админ: <strong>{user.login}</strong></p>
                            <button 
                                className="admin-page__logout-btn"
                                onClick={handleLogout}
                            >
                                Выйти
                            </button>
                        </div>
                    </div>

                    <div className="admin-page__navigation">
                        <h2 className="admin-page__nav-title">Управление</h2>
                        <div className="admin-page__nav-buttons">
                            <button 
                                className="admin-page__nav-btn"
                                onClick={() => navigate('/admin/subs')}
                            >
                                Подписки
                            </button>
                            <button 
                                className="admin-page__nav-btn"
                                onClick={() => navigate('/admin/users')}
                            >
                                Пользователи
                            </button>
                            <button 
                                className="admin-page__nav-btn"
                                onClick={() => navigate('/admin/games')}
                            >
                                Игры
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}