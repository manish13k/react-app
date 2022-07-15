import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AlbumList from "./components/album";
import Photo from "./components/photo";

const App = () => {
    
    return (
            <div data-testid="main-app" className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<AlbumList/>}/>
                        <Route exact path="/photo" element={<Photo/>}/>
                    </Routes>
                </Router>
            </div>
    );
}

export default App;
