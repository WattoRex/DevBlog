import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Article from "../pages/Blog"
import Playground from '../pages/Playground';

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Article />} />
                <Route path="/playground" element={<Playground />} />
            </Routes>
        </Router>
    );
};

export default routes;