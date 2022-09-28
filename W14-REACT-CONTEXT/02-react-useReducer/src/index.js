import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import EshopContextProvider from './components/Context';
import AddProductPage from './pages/addProductPage'
import EditProductPage from './pages/editProductPage'
import CartPage from './pages/cartPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EshopContextProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/addnew' element={<AddProductPage />} />
                <Route path='/edit' element={<EditProductPage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    </EshopContextProvider>
);

function brouserRouter() {
    
    function header() {}

    function app() {

        const state = ''

        

        function cardConteiner(){}
        
    }
}