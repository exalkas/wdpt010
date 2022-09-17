import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header'
import Categories from './components/pages/Categories'
import Contact from './components/pages/Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import MainLayout from './components/layout/MainLayout';
import LoginLayout from './components/layout/LoginLayout';
import CategoriesLayout from './components/layout/CategoriesLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>

            <Route element={<LoginLayout />}>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/register'/>
            </Route>
            
            <Route element={<MainLayout />}>
                <Route path='main' element={<App />} />
                
                <Route path='/contact' element={<Contact />} />
            </Route>

            <Route element = {<CategoriesLayout />}>
                <Route path='/categories' element={<Categories />} />
            </Route>
            
        </Routes>
    </BrowserRouter>
);