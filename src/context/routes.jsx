import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Article from "../pages/Blog"
import Playground from '../pages/Playground';
import Projetcs from '../pages/Projetcs';
import About from '../pages/About';
import OneArticle from "../pages/OneArticle"
import Editor from '../pages/CodeView';

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projetcs />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/blog" element={<Article />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog/:slug" element={<OneArticle />} />
                <Route path="/playground/:slug" element={<Editor />} />
            </Routes>
        </Router>
    );
};

export default routes;
