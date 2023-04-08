import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from 'easy-peasy';
import store from './store';
import Store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
);