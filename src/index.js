import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/errorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ErrorBoundary><App /></ErrorBoundary>
);
