import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contactPage'
import AddProductPage from './pages/addProductPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/addnew' element={<AddProductPage />} />
        </Routes>
    </BrowserRouter>
);