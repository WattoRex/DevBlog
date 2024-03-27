import React, { useState } from 'react';

import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import ProjectsGrid from '../components/pageProjets/ProjetcsGrid';
import SearchBar from '../components/pageArticles/SearchBar';

import Bubble from "../components/pageHome/Bubble"


const Projetcs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Gestion de la bar de recherche
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='pageProjetcs'>
            <NavBar />

            <div className='pageProjetcsContainer'>

                <div className='imageBackgroundArticle'>
                    <div className='heroContentContainersArticle'>
                        <p className='heroTextArticle'>Construire le Web, un projet à la fois</p>
                        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} holderText="Rechercher un projet..." />
                    </div>
                </div>
                <ProjectsGrid searchTerm={searchTerm} />

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