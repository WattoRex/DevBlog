import React from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import Article from '../components/pageArticles/OneArticle';


const OneArticle = () => {
    return (
        <div className='pageOneArticle'>
            <NavBar />
            <div className='pageOneArticleContainer'>
                <Article />
            </div>
            <Footer />
        </div>
    );
};

export default OneArticle;