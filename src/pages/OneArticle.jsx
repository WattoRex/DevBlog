import React from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import Article from '../components/pageArticles/OneArticle';
import Share from '../components/general/share';

const OneArticle = () => {
    const articleUrl = window.location.href;
    const articleTitle = 'Nouvelle Article !'; // Remplacez par le titre réel de votre article

    return (
        <div className='pageOneArticle'>
            <NavBar />
            <div className='pageOneArticleContainer'>
                <Article />
                <Share url={articleUrl} title={articleTitle} description={'Vous pouvez partager cet article en utilisant les boutons ci-dessous :'} />
            </div>

            <Footer />
        </div>
    );
};

export default OneArticle;