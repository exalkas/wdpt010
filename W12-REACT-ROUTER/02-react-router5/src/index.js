import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header'
import Categories from './components/pages/Categories'
import Contact from './components/pages/Contact'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        
        <Switch>
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/' component={App } />
        </Switch>
    </BrowserRouter>
);