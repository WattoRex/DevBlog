import React, { useState } from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import Article from '../components/pageArticles/OneArticle';
import Share from '../components/general/share';

import SEO from "../context/seo";


const OneArticle = () => {
    const [SEOData, setSEOData] = useState({});

    const articleUrl = window.location.href;
    const articleTitle = 'Nouvelle Article !'; // Remplacez par le titre réel de votre article

    return (
        <div className='pageOneArticle'>

            <SEO
                title={SEOData.title}
                description={SEOData.description}
                keywords={SEOData.keywords}
                canonicalUrl={articleUrl}
                author="Manier Valentin"
            />

            <NavBar />
            <div className='pageOneArticleContainer'>
                <Article SEOData={setSEOData} />
                <Share url={articleUrl} title={articleTitle} description={'Vous pouvez partager cet article en utilisant les boutons ci-dessous :'} />
            </div>

            <Footer />
        </div>
    );
};

export default OneArticle;