import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const AlbumList = lazy(() => import('./components/album'));
const Photo = lazy(() => import('./components/photo'));

const App = () => { 
    return (
        <div data-testid="main-app" className="app">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route exact path="/" element={<AlbumList/>}/>
                        <Route exact path="/photo" element={<Photo/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
