import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllArticles = ({ searchTerm }) => {
    const [filteredArticles, setFilteredArticles] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(true); // État pour indiquer si le chargement est en cours

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchArticles();
        }, 1000); // Délai de ( x ) millisecondes avant de déclencher la recherche

        return () => clearTimeout(delaySearch); // Nettoyer le délai à chaque changement de searchTerm
        // eslint-disable-next-line
    }, [searchTerm]);

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
        fetchArticles();
        // eslint-disable-next-line
    }, []); // Appel à fetchArticles lors du premier rendu

    const fetchArticles = async () => {
        try {
            let apiUrl = `${process.env.REACT_APP_STRAPI_API_URL}/api/articles?populate=*`;

            if (searchTerm) {
                apiUrl += `&filters[Titre][$containsi]=${searchTerm}`;
            }

            const response = await axios.get(apiUrl);
            setFilteredArticles(response.data.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false); // Indiquer que le chargement est terminé
        }
    };

    const formatFrenchDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    };

    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    // };


    return (
        <div className='last-articlePage'>

            <h3>Derniers articles</h3>

            {loading && <p>Chargement en cours...</p>} {/* Indicateur de chargement */}

            {filteredArticles.length === 0 && !loading && ( // Afficher seulement si pas de chargement et aucun article trouvé
                <p className="no-results-message blog">Aucun article ne correspond à votre recherche.</p>
            )}

            {filteredArticles.map((article) => (
                <div className="last-article" key={article.id}>
                    <div className='last-article-container'>
                        <p className='date'>Le {formatFrenchDate(article.attributes.publishedAt)}</p>
                        <h5>{article.attributes.Titre}</h5>
                        {windowWidth < 1024 && (
                            <img src={`${process.env.REACT_APP_STRAPI_API_URL}${article.attributes.ImageDePresentation.data.attributes.url}`} alt={article.title} />
                        )}
                        <p className='description'>{article.attributes.Description}</p>
                        <p className='tags'>{article.attributes.tags.data.map(tag => tag.attributes.TagName).join(', ')}</p>
                        <Link to={`/blog/${article.attributes.slug}`} className="read-more">Lire l'article</Link>
                    </div>
                    {windowWidth > 1024 && (
                        <img src={`${process.env.REACT_APP_STRAPI_API_URL}${article.attributes.ImageDePresentation.data.attributes.url}`} alt={article.title} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllArticles;
