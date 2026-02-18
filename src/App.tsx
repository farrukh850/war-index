import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/region/:regionSlug" element={<RegionPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


