import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Article from "../pages/Blog"
import OneArticle from "../pages/OneArticle"
import Playground from '../pages/Playground';
import Projetcs from '../pages/Projetcs';
import About from '../pages/About';
import Editor from '../pages/CodeView';

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projetcs />} />
                <Route path="/playground/:slug" element={<Editor />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/blog" element={<Article />} />
                <Route path="/blog/:slug" element={<OneArticle />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default routes;