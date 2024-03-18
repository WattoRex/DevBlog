import React from 'react';
import SearchBar from './SearchBar';

const HeroBanner = ({ searchTerm, onSearch }) => {
    return (
        <div className='imageBackgroundArticle'>
            <div className='heroContentContainersArticle'>
                <p className='heroTextArticle'>Construire le Web, un pixel à la fois</p>
                <SearchBar searchTerm={searchTerm} onSearch={onSearch} holderText="Rechercher un article..." />
            </div>
        </div>
    );
};

export default HeroBanner;
