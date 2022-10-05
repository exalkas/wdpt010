import React, { useContext, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import EshopContextProvider from './components/Context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ErrorBoundary from './components/ErrorBoundary';

const AddProductPage = React.lazy(() => import('./pages/addProductPage'))
const EditProductPage = React.lazy( () => import('./pages/editProductPage'))
const CartPage = React.lazy(() => import('./pages/cartPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <EshopContextProvider>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/addnew' element={<AddProductPage />} />
                        <Route path='/edit' element={<EditProductPage />} />
                        <Route path='/cart' element={<CartPage />} />
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
        </EshopContextProvider>
    </ErrorBoundary>
);

function brouserRouter() {
    
    function header() {}

    function app() {

        const state = ''

        

        function cardConteiner(){}
        
    }
}

function Handle404() {
    return <div>The page doesn't exist</div>
}