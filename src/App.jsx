import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './pages/home/main';
import CatalogContent from './pages/catalog/catalog.jsx'
import CatalogSubContent from './pages/catalogSub/catalogSub.jsx'
import ItemContent from './pages/item/item.jsx'
import SubContent from './pages/sub/sub.jsx'
import DonateContent from './pages/donate/donate.jsx'
import RewiewsContent from './pages/rewiews/rewiews.jsx'
import WarningContent from './pages/warning/warning.jsx'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import Profile from './pages/profile/profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/catalog" element={<CatalogContent />} />
            <Route path="/catalogSub" element={<CatalogSubContent />} />
            <Route path="/item" element={<ItemContent />} />
            <Route path="/sub" element={<SubContent />}></Route>
            <Route path="/donate" element={<DonateContent />}></Route>
            <Route path="/rewiews" element={<RewiewsContent />}></Route>
            <Route path="/warning" element={<WarningContent />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;