// import React, { useState } from 'react';
import React from 'react';


import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import ProjectsGrid from '../components/pageProjets/ProjetcsGrid';
// import SearchBar from '../components/pageArticles/SearchBar';

import Bubble from "../components/pageHome/Bubble"

import SEO from "../context/seo";


const Projetcs = () => {
    // const [searchTerm, setSearchTerm] = useState('');

    // // Gestion de la bar de recherche
    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    return (
        <div className='pageProjetcs'>

            <SEO
                title="Manier Valentin - Mes Portfolios"
                description="Explorez mes réalisations et projets en tant que développeur web. Utilisez la barre de recherche pour trouver des projets spécifiques."
                keywords="projets, réalisations, développeur web, recherche de projets, React, JavaScript, CSS, HTML, SEO, composant, Manier, Valentin"
                canonicalUrl="https://www.votresite.com/projets"
            />

            <NavBar />

            <div className='pageProjetcsContainer'>

                <div className='imageBackgroundArticle'>
                    <div className='heroContentContainersArticle'>
                        <p className='heroTextArticle'>Construire le Web, un projet à la fois</p>
                        {/* <SearchBar searchTerm={searchTerm} onSearch={handleSearch} holderText="Rechercher un projet..." /> */}
                    </div>
                </div>
                <ProjectsGrid />
                {/* <ProjectsGrid searchTerm={searchTerm} /> */}

                {/* Animation */}
                <div className='bubbleContainer'>
                    <Bubble />
                </div>
                <div className='bubbleContainer2'>
                    <Bubble />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projetcs;