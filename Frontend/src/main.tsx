/* eslint-disable import/default */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

injectSpeedInsights();
inject();
