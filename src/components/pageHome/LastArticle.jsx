import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LastArticle = () => {
    const [lastArticle, setLastArticle] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        async function fetchLastArticle() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=1`);
                setLastArticle(response.data.data[0]);
            } catch (error) {
                console.error('Error fetching last article:', error);
            }
        }

        fetchLastArticle();
    }, []);

    const formatFrenchDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    };

    if (!lastArticle) {
        return <div>Loading...</div>;
    }

    if (windowWidth > 1024) {
        return (
            <div className='last-articlePage'>
                <h2 className='last-articleTitle'>Dernier Article de Blog :</h2>
                <div className="last-article">
                    <div className='last-article-container'>
                        <p className='date'>Le {formatFrenchDate(lastArticle.attributes.publishedAt)}</p>
                        <h5>{lastArticle.attributes.Titre}</h5>
                        <p className='description'>{lastArticle.attributes.Description}</p>
                        <p className='tags'>{lastArticle.attributes.tags.data.map(tag => tag.attributes.TagName).join(', ')}</p>
                        <Link to={`/blog/${lastArticle.attributes.slug}`} className="read-more">Lire l'article</Link>
                    </div>
                    <img src={`${process.env.REACT_APP_STRAPI_API_URL}${lastArticle.attributes.ImageDePresentation.data.attributes.url}`} alt={lastArticle.attributes.ImageDePresentation.data.attributes.alternativeText} />
                </div>
            </div>
        );
    } else {
        return (
            <div className='last-articlePage'>
                <p className='last-articleTitle'>Dernier Article de Blog :</p>
                <div className="last-article">
                    <div className='last-article-container'>
                        <p className='date'>Le {formatFrenchDate(lastArticle.attributes.publishedAt)}</p>
                        <h5>{lastArticle.attributes.Titre}</h5>
                        <img src={`${process.env.REACT_APP_STRAPI_API_URL}${lastArticle.attributes.ImageDePresentation.data.attributes.url}`} alt={lastArticle.attributes.ImageDePresentation.data.attributes.alternativeText} />
                        <p className='description'>{lastArticle.attributes.Description}</p>
                        <p className='tags'>{lastArticle.attributes.tags.data.map(tag => tag.attributes.TagName).join(', ')}</p>
                        <Link to={`/blog/${lastArticle.attributes.slug}`} className="read-more">Lire l'article</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastArticle;
