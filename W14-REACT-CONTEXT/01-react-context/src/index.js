import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contactPage'
import AddProductPage from './pages/addProductPage'
import ContextProvider from './components/Context'
import Header from './components/header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/addnew' element={<AddProductPage />} />
            </Routes>
        </BrowserRouter>
    </ContextProvider>
);

function brouserRouter() {
    
    function header() {}

    function app() {

        const state = ''

        

        function cardConteiner(){}
        
    }
}