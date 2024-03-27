import React, { useState } from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import AllArticle from '../components/pageArticles/AllArticles';
import HeroBanner from '../components/pageArticles/HeroBannerArticle';
import Bubble from '../components/pagePlayground/BubblePlayground';

import SEO from "../context/seo";


const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Gestion de la bar de recherche
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className='pageBlog'>

            <SEO
                title="Manier Valentin - Mes articles"
                description="Découvrez des articles, tutoriels et astuces sur le développement web dans mon blog. Utilisez la barre de recherche pour trouver des articles spécifiques."
                keywords="blog, articles, tutoriels, développement web, astuces"
                canonicalUrl="https://www.votresite.com/blog"
            />

            <NavBar />
            <div className='pageBlogContainer' style={{ overflow: 'hidden' }}>

                <div className='heroBackground'>
                    <HeroBanner searchTerm={searchTerm} onSearch={handleSearch} />
                </div>

                <div className='articlesContainer' >
                    <AllArticle searchTerm={searchTerm} />
                </div>

                {/* Animation */}
                <div className='bubbleContainer Playground' >
                    <Bubble />
                </div>
                <div className='bubbleContainer2 Playground2'>
                    <Bubble />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
