import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header'
import Categories from './components/pages/Categories'
import Contact from './components/pages/Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
);