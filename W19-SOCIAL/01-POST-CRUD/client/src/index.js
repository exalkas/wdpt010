import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts'
import ContextProvider from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route element={<UserLayout />}>
                    <Route path='/posts' element={<Posts />} />
                </Route>
            </Routes>
        
        </BrowserRouter>
    </ContextProvider>
);