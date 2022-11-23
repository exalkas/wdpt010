import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts'
import Profile from './components/Profile'
import ContextProvider from './components/Context';
import ProtectedRoutes from './components/ProtectedRoutes'
import EmailConfirm from './components/EmailConfirm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/emailconfirm/:token' element={<EmailConfirm />} />
                </Route>
                <Route element={<ProtectedRoutes />}>
                    <Route element={<UserLayout />}>
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
        
        </BrowserRouter>
    </ContextProvider>
);