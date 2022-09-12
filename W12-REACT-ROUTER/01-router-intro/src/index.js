import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import App from './App';
import Categories from './components/pages/Categories';
import NotFound from './components/pages/NotFound'
import Footer from './components/Footer'
import MoviePage from './components/pages/MoviePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<NotFound />}/>
            <Route path='/categories' element={<Categories />}/>
            <Route path='/' element={<App />}/>
            <Route path='/:movieid/:movietitle' element={<MoviePage />}/>
        </Routes>
        
        <Footer />
    </BrowserRouter>
);