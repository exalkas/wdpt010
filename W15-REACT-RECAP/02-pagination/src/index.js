import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadMore from './Loadmore'
import ClassicPage from './ClassicPage'
import ErrorBoundary from './components/ErrorBoundary';
import ContextProvider from './Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ErrorBoundary>
    <ContextProvider>
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/loadmore' element={<LoadMore />} />
                    <Route path='/classic' element={<ClassicPage />} />

                    <Route path='*' element={<Handle404 />} />
                </Routes>
            </Suspense>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </BrowserRouter>
    </ContextProvider>
    // </ErrorBoundary>
);

function Handle404() {
    return <div>The page doesn't exist</div>
}